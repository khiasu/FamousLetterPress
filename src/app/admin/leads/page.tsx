"use client";

import { useState, useEffect } from "react";

interface LeadItem {
  id: string;
  ref: string;
  type: "Early Bride" | "General Project" | "Channel Partner";
  name: string;
  email: string;
  phone: string;
  eventOrService: string;
  status: "NEW" | "CONTACTED" | "IN_DISCUSSION" | "PROPOSAL_SENT" | "ARCHIVED";
  notes?: string;
  date: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [filterType, setFilterType] = useState<string>("ALL");
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/leads")
      .then((res) => res.json())
      .then((data) => { if (Array.isArray(data)) setLeads(data); })
      .catch((err) => console.error("Error loading leads:", err))
      .finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id: string, newStatus: LeadItem["status"]) => {
    setSavingId(id);
    const updated = leads.map((item) => (item.id === id ? { ...item, status: newStatus } : item));
    setLeads(updated);
    try {
      await fetch("/api/admin/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
    } catch (err) { console.error(err); }
    finally { setSavingId(null); }
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Remove this lead?")) return;
    const updated = leads.filter((l) => l.id !== id);
    setLeads(updated);
    try {
      await fetch("/api/admin/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
    } catch (err) { console.error(err); }
  };

  const filteredLeads = filterType === "ALL" ? leads : leads.filter((l) => l.type === filterType);

  const statusColors: Record<string, string> = {
    NEW: "bg-amber-50 text-amber-700",
    CONTACTED: "bg-blue-50 text-blue-700",
    IN_DISCUSSION: "bg-violet-50 text-violet-700",
    PROPOSAL_SENT: "bg-emerald-50 text-emerald-700",
    ARCHIVED: "bg-neutral-100 text-neutral-500",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-medium text-neutral-900">Leads & Consultations</h1>
        <p className="text-sm text-neutral-500 mt-1">Inquiries from website forms.</p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {["ALL", "Early Bride", "General Project", "Channel Partner"].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-3 py-1.5 text-xs transition-colors ${
              filterType === type
                ? "bg-neutral-900 text-white"
                : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300"
            }`}
          >
            {type === "ALL" ? "All" : type}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="py-12 text-sm text-neutral-400 text-center">Loading...</p>
      ) : (
        <div className="space-y-3">
          {filteredLeads.map((lead) => (
            <div key={lead.id} className="bg-white border border-neutral-200 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-neutral-900">{lead.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 font-medium ${statusColors[lead.status] || "bg-neutral-100 text-neutral-600"}`}>
                      {lead.status.replace(/_/g, " ")}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">{lead.ref} · {lead.type} · {lead.date}</p>
                </div>
                <button
                  onClick={() => deleteLead(lead.id)}
                  className="text-xs text-neutral-300 hover:text-red-500 transition-colors shrink-0"
                  title="Delete"
                >
                  ×
                </button>
              </div>

              <p className="text-sm text-neutral-600 mt-2">{lead.eventOrService}</p>
              {lead.notes && (
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{lead.notes}</p>
              )}

              <div className="flex items-center gap-3 mt-3 flex-wrap">
                <p className="text-xs text-neutral-400">{lead.email} · {lead.phone}</p>
                <div className="flex items-center gap-2 ml-auto">
                  <select
                    value={lead.status}
                    disabled={savingId === lead.id}
                    onChange={(e) => updateStatus(lead.id, e.target.value as LeadItem["status"])}
                    className="text-xs bg-neutral-50 border border-neutral-200 px-2 py-1 text-neutral-700 disabled:opacity-50"
                  >
                    <option value="NEW">New</option>
                    <option value="CONTACTED">Contacted</option>
                    <option value="IN_DISCUSSION">In Discussion</option>
                    <option value="PROPOSAL_SENT">Proposal Sent</option>
                    <option value="ARCHIVED">Archived</option>
                  </select>
                  <a
                    href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-neutral-900 text-white text-xs hover:bg-neutral-800 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
          {filteredLeads.length === 0 && (
            <p className="py-12 text-sm text-neutral-400 text-center">No inquiries found.</p>
          )}
        </div>
      )}
    </div>
  );
}

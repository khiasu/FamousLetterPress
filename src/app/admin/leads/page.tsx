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

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/admin/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch (err) {
      console.error("Failed to load leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
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
    } catch (err) {
      console.error("Failed to save lead status:", err);
    } finally {
      setSavingId(null);
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to remove this lead record?")) return;
    const updated = leads.filter((l) => l.id !== id);
    setLeads(updated);

    try {
      await fetch("/api/admin/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
    } catch (err) {
      console.error("Failed to delete lead:", err);
    }
  };

  const filteredLeads =
    filterType === "ALL" ? leads : leads.filter((l) => l.type === filterType);

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-2xl font-serif text-stone-900 font-semibold">Leads & Consultations</h1>
          <p className="text-xs text-stone-500 mt-1">
            Submitted inquiries from Early Bride, General Project, and Trade Partner forms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2">
          {["ALL", "Early Bride", "General Project", "Channel Partner"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 text-xs rounded-sm transition-colors ${
                filterType === type
                  ? "bg-stone-900 text-white font-medium"
                  : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="p-8 text-center text-xs text-stone-500 font-mono">Loading leads...</div>
      ) : (
        <div className="bg-white rounded-sm border border-stone-200 shadow-2xs overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase tracking-wider font-mono text-[10px]">
              <tr>
                <th className="p-4">Reference</th>
                <th className="p-4">Client & Contact</th>
                <th className="p-4">Type & Details</th>
                <th className="p-4">Notes</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-stone-50/70">
                  <td className="p-4 align-top font-mono text-stone-500">
                    <div className="font-semibold text-stone-900">{lead.ref}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">{lead.date}</div>
                  </td>

                  <td className="p-4 align-top">
                    <div className="font-semibold text-stone-900 text-sm">{lead.name}</div>
                    <div className="text-stone-500 mt-0.5">{lead.email}</div>
                    <div className="text-stone-500">{lead.phone}</div>
                  </td>

                  <td className="p-4 align-top max-w-xs">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-stone-100 text-stone-700 font-medium">
                      {lead.type}
                    </span>
                    <div className="text-stone-700 mt-1 font-medium">{lead.eventOrService}</div>
                  </td>

                  <td className="p-4 align-top max-w-xs text-stone-600 text-xs">
                    {lead.notes}
                  </td>

                  <td className="p-4 align-top">
                    <select
                      value={lead.status}
                      disabled={savingId === lead.id}
                      onChange={(e) => updateStatus(lead.id, e.target.value as LeadItem["status"])}
                      className="text-xs bg-stone-50 border border-stone-300 rounded-sm px-2 py-1 font-mono font-medium disabled:opacity-50"
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="IN_DISCUSSION">IN_DISCUSSION</option>
                      <option value="PROPOSAL_SENT">PROPOSAL_SENT</option>
                      <option value="ARCHIVED">ARCHIVED</option>
                    </select>
                  </td>

                  <td className="p-4 align-top flex items-center gap-2">
                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(
                        lead.name
                      )},%20this%20is%20Famous%20Letterpress...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-2.5 py-1 bg-stone-800 hover:bg-stone-900 text-white rounded-xs text-[11px] font-medium"
                    >
                      WhatsApp &rarr;
                    </a>
                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="px-2 py-1 text-[11px] text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xs"
                      title="Delete inquiry"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-xs text-stone-400">
                    No inquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

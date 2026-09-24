"use client";

import { useState } from "react";

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

const initialLeads: LeadItem[] = [
  {
    id: "1",
    ref: "EB-2026-8492",
    type: "Early Bride",
    name: "Arenla & Rongsen",
    email: "arenla@example.com",
    phone: "+91 98620 12345",
    eventOrService: "Wedding: Nov 2026 (Kohima) · 250 Guests",
    status: "NEW",
    notes: "Requires main suite (letterpress + champagne foil) and deckled edge menu cards.",
    date: "2026-09-24 16:15",
  },
  {
    id: "2",
    ref: "PRJ-2026-1039",
    type: "General Project",
    name: "Kevi Architecture Studio",
    email: "kevi@studio.in",
    phone: "+91 94360 54321",
    eventOrService: "Business Cards · 200 qty · 600gsm cotton with edge gilding",
    status: "CONTACTED",
    notes: "Vector files submitted via email; awaiting paper stock preference.",
    date: "2026-09-23 11:30",
  },
  {
    id: "3",
    ref: "EB-2026-5521",
    type: "Early Bride",
    name: "Imli & Narola",
    email: "narola.wedding@example.com",
    phone: "+91 98765 11223",
    eventOrService: "Wedding: Dec 2026 (Dimapur) · 400 Guests",
    status: "IN_DISCUSSION",
    notes: "Sample kit ordered and delivered. Discussing custom monogram blind deboss.",
    date: "2026-09-22 14:00",
  },
  {
    id: "4",
    ref: "PRJ-2026-0988",
    type: "Channel Partner",
    name: "Vogue Events Curators",
    email: "planner@vogueevents.in",
    phone: "+91 98111 22334",
    eventOrService: "Trade Collaboration: Luxury Wedding Planning",
    status: "PROPOSAL_SENT",
    notes: "Requested Trade Swatch Box for destination weddings in Northeast.",
    date: "2026-09-20 09:45",
  },
];

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadItem[]>(initialLeads);
  const [filterType, setFilterType] = useState<string>("ALL");

  const updateStatus = (id: string, newStatus: LeadItem["status"]) => {
    setLeads((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
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

      {/* Leads Table */}
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
                    onChange={(e) => updateStatus(lead.id, e.target.value as LeadItem["status"])}
                    className="text-xs bg-stone-50 border border-stone-300 rounded-sm px-2 py-1 font-mono font-medium"
                  >
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="IN_DISCUSSION">IN_DISCUSSION</option>
                    <option value="PROPOSAL_SENT">PROPOSAL_SENT</option>
                    <option value="ARCHIVED">ARCHIVED</option>
                  </select>
                </td>

                <td className="p-4 align-top">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import Link from "next/link";
import { servicesData } from "@/lib/data/services";
import { sampleKitsData } from "@/lib/data/sample-kits";
import { portfolioData } from "@/lib/data/portfolio";

export default function AdminDashboardPage() {
  const serviceCount = Object.keys(servicesData).length;
  const sampleKitCount = Object.keys(sampleKitsData).length;
  const portfolioCount = portfolioData.length;

  const mockRecentLeads = [
    {
      ref: "EB-2026-8492",
      type: "Early Bride",
      name: "Arenla & Rongsen",
      date: "Nov 2026",
      status: "NEW",
      time: "Today, 4:15 PM",
    },
    {
      ref: "PRJ-2026-1039",
      type: "Business Cards",
      name: "Kevi Architecture Studio",
      date: "Standard",
      status: "CONTACTED",
      time: "Yesterday",
    },
    {
      ref: "EB-2026-5521",
      type: "Early Bride",
      name: "Imli & Narola",
      date: "Dec 2026",
      status: "IN DISCUSSION",
      time: "2 days ago",
    },
  ];

  const mockRecentOrders = [
    {
      orderNo: "FLP-2026-1044",
      kit: "Wedding Sample Kit",
      customer: "Temsu Jamir",
      city: "Dimapur",
      amount: "₹1,500",
      status: "DISPATCHED",
    },
    {
      orderNo: "FLP-2026-1043",
      kit: "Business Card Sample Kit",
      customer: "Pooja Mehta",
      city: "Mumbai",
      amount: "₹1,000",
      status: "PAID",
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-2xl font-serif text-stone-900 font-semibold">Studio Dashboard</h1>
          <p className="text-xs text-stone-500 mt-1">
            Famous Letterpress content, sample kit orders, and client inquiries.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 transition-colors"
          >
            Review New Leads
          </Link>
          <Link
            href="/admin/orders"
            className="px-4 py-2 bg-white border border-stone-300 text-stone-700 text-xs font-medium rounded-sm hover:bg-stone-50 transition-colors"
          >
            Manage Orders
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-sm border border-stone-200 shadow-2xs">
          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
            Active Leads
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900 mt-1">3</div>
          <div className="text-[11px] text-amber-700 font-medium mt-1">2 require review</div>
        </div>

        <div className="bg-white p-5 rounded-sm border border-stone-200 shadow-2xs">
          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
            Recent Kit Orders
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900 mt-1">2</div>
          <div className="text-[11px] text-emerald-700 font-medium mt-1">1 awaiting dispatch</div>
        </div>

        <div className="bg-white p-5 rounded-sm border border-stone-200 shadow-2xs">
          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
            Active Services
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900 mt-1">{serviceCount}</div>
          <div className="text-[11px] text-stone-400 mt-1">All published live</div>
        </div>

        <div className="bg-white p-5 rounded-sm border border-stone-200 shadow-2xs">
          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
            Portfolio Items
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900 mt-1">{portfolioCount}</div>
          <div className="text-[11px] text-stone-400 mt-1">Selected best work</div>
        </div>
      </div>

      {/* Leads & Orders Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Inquiries Card */}
        <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-2xs">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-900 font-mono">
              Recent Consultations & Leads
            </h2>
            <Link href="/admin/leads" className="text-xs text-stone-500 hover:text-stone-900">
              View All &rarr;
            </Link>
          </div>

          <div className="divide-y divide-stone-100">
            {mockRecentLeads.map((lead) => (
              <div key={lead.ref} className="py-3 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-xs text-stone-900">{lead.name}</span>
                    <span className="text-[10px] bg-stone-100 px-2 py-0.5 rounded-xs text-stone-600 font-mono">
                      {lead.type}
                    </span>
                  </div>
                  <div className="text-[11px] text-stone-400 mt-0.5">
                    Ref: {lead.ref} · {lead.time}
                  </div>
                </div>
                <div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-xs font-semibold ${
                      lead.status === "NEW"
                        ? "bg-amber-100 text-amber-800"
                        : lead.status === "CONTACTED"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {lead.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Sample Kit Orders Card */}
        <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-2xs">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-900 font-mono">
              Sample Kit Orders (Razorpay)
            </h2>
            <Link href="/admin/orders" className="text-xs text-stone-500 hover:text-stone-900">
              View All &rarr;
            </Link>
          </div>

          <div className="divide-y divide-stone-100">
            {mockRecentOrders.map((ord) => (
              <div key={ord.orderNo} className="py-3 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-xs text-stone-900">{ord.customer}</span>
                    <span className="text-[11px] text-stone-500 font-mono">({ord.city})</span>
                  </div>
                  <div className="text-[11px] text-stone-400 mt-0.5">
                    {ord.orderNo} · {ord.kit}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-stone-900 font-mono">{ord.amount}</div>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-xs font-semibold ${
                      ord.status === "PAID"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    {ord.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Management Fast Links */}
      <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-2xs">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-900 font-mono mb-4">
          Quick Content Operations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/admin/sample-kits"
            className="p-4 border border-stone-200 rounded-sm hover:border-stone-400 transition-colors"
          >
            <div className="font-serif text-base text-stone-900">Sample Kits</div>
            <div className="text-xs text-stone-500 mt-1">
              Adjust prices (₹1,500 / ₹1,000), box inclusions, and shipping copy.
            </div>
          </Link>
          <Link
            href="/admin/portfolio"
            className="p-4 border border-stone-200 rounded-sm hover:border-stone-400 transition-colors"
          >
            <div className="font-serif text-base text-stone-900">Portfolio & Commissions</div>
            <div className="text-xs text-stone-500 mt-1">
              Manage selected best work across Weddings, Business, and Personalised.
            </div>
          </Link>
          <Link
            href="/admin/settings"
            className="p-4 border border-stone-200 rounded-sm hover:border-stone-400 transition-colors"
          >
            <div className="font-serif text-base text-stone-900">Studio Coordinates</div>
            <div className="text-xs text-stone-500 mt-1">
              Update phone numbers, WhatsApp, business hours, and meta tags.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { readCMSStore } from "@/lib/cms/store";

export default function AdminDashboardPage() {
  const store = readCMSStore();
  const serviceCount = Object.keys(store.services).length;
  const portfolioCount = store.portfolio.length;
  const articleCount = store.articles.length;
  const faqCount = store.faqs.length;

  const recentLeads = store.leads.slice(0, 4);
  const recentOrders = store.orders.slice(0, 4);

  const newLeadsCount = store.leads.filter((l) => l.status === "NEW").length;
  const pendingOrders = store.orders.filter((o) => o.fulfillmentStatus === "AWAITING_PACKING").length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-xl font-medium text-neutral-900">Dashboard</h1>
        <p className="text-sm text-neutral-500 mt-1">
          Overview of content, inquiries, and orders.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Leads", value: store.leads.length, sub: newLeadsCount > 0 ? `${newLeadsCount} new` : "All reviewed", href: "/admin/leads" },
          { label: "Orders", value: store.orders.length, sub: pendingOrders > 0 ? `${pendingOrders} pending` : "All fulfilled", href: "/admin/orders" },
          { label: "Services", value: serviceCount, sub: "Published", href: "/admin/services" },
          { label: "Portfolio", value: portfolioCount, sub: `${articleCount} articles`, href: "/admin/portfolio" },
        ].map((m) => (
          <Link
            key={m.label}
            href={m.href}
            className="bg-white border border-neutral-200 p-4 hover:border-neutral-300 transition-colors block"
          >
            <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              {m.label}
            </p>
            <p className="text-2xl font-medium text-neutral-900 mt-1">{m.value}</p>
            <p className="text-[11px] text-neutral-400 mt-1">{m.sub}</p>
          </Link>
        ))}
      </div>

      {/* Recent leads and orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads */}
        <div className="bg-white border border-neutral-200">
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100">
            <h2 className="text-sm font-medium text-neutral-900">Recent Leads</h2>
            <Link href="/admin/leads" className="text-xs text-neutral-400 hover:text-neutral-700">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-neutral-100">
            {recentLeads.map((lead) => (
              <div key={lead.id || lead.ref} className="px-4 py-3 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm text-neutral-900 truncate">{lead.name}</p>
                  <p className="text-xs text-neutral-400 mt-0.5 truncate">{lead.ref} · {lead.type}</p>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 font-medium whitespace-nowrap ${
                    lead.status === "NEW"
                      ? "bg-amber-50 text-amber-700"
                      : lead.status === "CONTACTED"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {lead.status}
                </span>
              </div>
            ))}
            {recentLeads.length === 0 && (
              <p className="px-4 py-6 text-sm text-neutral-400 text-center">No leads yet.</p>
            )}
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white border border-neutral-200">
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100">
            <h2 className="text-sm font-medium text-neutral-900">Recent Orders</h2>
            <Link href="/admin/orders" className="text-xs text-neutral-400 hover:text-neutral-700">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-neutral-100">
            {recentOrders.map((ord) => (
              <div key={ord.id || ord.orderNumber} className="px-4 py-3 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm text-neutral-900 truncate">{ord.customerName}</p>
                  <p className="text-xs text-neutral-400 mt-0.5 truncate">{ord.orderNumber} · {ord.kitName}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-medium text-neutral-900">₹{ord.amount}</p>
                  <span
                    className={`text-[10px] px-2 py-0.5 font-medium ${
                      ord.fulfillmentStatus === "DELIVERED"
                        ? "bg-emerald-50 text-emerald-700"
                        : ord.fulfillmentStatus === "DISPATCHED"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {ord.fulfillmentStatus?.replace(/_/g, " ")}
                  </span>
                </div>
              </div>
            ))}
            {recentOrders.length === 0 && (
              <p className="px-4 py-6 text-sm text-neutral-400 text-center">No orders yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          { label: "Sample Kits", desc: "Pricing, inclusions, images", href: "/admin/sample-kits" },
          { label: "Portfolio", desc: "Manage selected work", href: "/admin/portfolio" },
          { label: "Journal", desc: `${articleCount} articles`, href: "/admin/journal" },
          { label: "FAQs", desc: `${faqCount} questions`, href: "/admin/faqs" },
          { label: "Services", desc: "Edit service details", href: "/admin/services" },
          { label: "Settings", desc: "Studio info, logo, banner", href: "/admin/settings" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-white border border-neutral-200 p-4 hover:border-neutral-300 transition-colors block"
          >
            <p className="text-sm font-medium text-neutral-900">{item.label}</p>
            <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

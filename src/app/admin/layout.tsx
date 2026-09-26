import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Admin Portal | Famous Letterpress",
  description: "Internal management portal for Famous Letterpress content, leads, and orders.",
  robots: {
    index: false,
    follow: false,
  },
};

const adminNav = [
  { label: "Dashboard", href: "/admin", icon: "📊" },
  { label: "Leads & Enquiries", href: "/admin/leads", icon: "📬" },
  { label: "Sample Kit Orders", href: "/admin/orders", icon: "📦" },
  { label: "Sample Kits", href: "/admin/sample-kits", icon: "🏷️" },
  { label: "Services", href: "/admin/services", icon: "✨" },
  { label: "Portfolio Items", href: "/admin/portfolio", icon: "🖼️" },
  { label: "FAQs", href: "/admin/faqs", icon: "❓" },
  { label: "Journal Articles", href: "/admin/journal", icon: "📰" },
  { label: "Site Settings", href: "/admin/settings", icon: "⚙️" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-stone-900 text-stone-100 flex flex-col shrink-0 border-r border-stone-800">
        <div className="p-6 border-b border-stone-800">
          <Link href="/admin" className="block">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-mono block">
              Internal Portal
            </span>
            <span className="font-serif text-lg tracking-wide text-white font-medium">
              Famous Letterpress
            </span>
          </Link>
          <div className="mt-2 text-[11px] text-stone-400">
            Signed in as: <strong className="text-stone-200">Mr Khiasu</strong>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1 flex-1">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3.5 py-2.5 text-xs rounded-sm text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-stone-800">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2 text-xs text-stone-400 hover:text-stone-200 hover:bg-stone-800 rounded-sm"
          >
            <span>View Public Website</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

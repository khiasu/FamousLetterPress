"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AdminAuthGate, useAdminAuth } from "@/components/admin/AdminAuth";

const adminNav = [
  { label: "Dashboard", href: "/admin" },
  { label: "Leads", href: "/admin/leads" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Services", href: "/admin/services" },
  { label: "Sample Kits", href: "/admin/sample-kits" },
  { label: "Portfolio", href: "/admin/portfolio" },
  { label: "Journal", href: "/admin/journal" },
  { label: "FAQs", href: "/admin/faqs" },
  { label: "Settings", href: "/admin/settings" },
];

function AdminShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { handleLogout } = useAdminAuth();

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 h-14 bg-white border-b border-neutral-200 flex items-center justify-between px-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-8 h-8 flex flex-col items-center justify-center gap-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-neutral-900 transition-transform ${sidebarOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-px bg-neutral-900 transition-opacity ${sidebarOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-neutral-900 transition-transform ${sidebarOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
        <span className="text-sm font-medium text-neutral-900">Famous Letterpress</span>
        <Link href="/" target="_blank" className="text-xs text-neutral-400 hover:text-neutral-700">
          View Site
        </Link>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-60 bg-white border-r border-neutral-200 flex flex-col transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:z-10`}
      >
        {/* Sidebar header */}
        <div className="p-5 border-b border-neutral-100">
          <Link href="/admin" onClick={() => setSidebarOpen(false)}>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block">
              Admin
            </span>
            <span className="text-sm font-medium text-neutral-900 block mt-0.5">
              Famous Letterpress
            </span>
          </Link>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-3 px-3 overflow-y-auto">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`block px-3 py-2 text-[13px] rounded transition-colors mb-0.5 ${
                isActive(item.href)
                  ? "bg-neutral-900 text-white font-medium"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="p-3 border-t border-neutral-100 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="block px-3 py-2 text-[13px] text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded transition-colors"
          >
            View Public Site →
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 text-[13px] text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-60 pt-14 lg:pt-0 min-h-screen">
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthGate>
      <AdminShell>{children}</AdminShell>
    </AdminAuthGate>
  );
}

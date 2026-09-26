"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

interface SiteShellProps {
  children: React.ReactNode;
  logoUrl?: string;
  announcementActive?: boolean;
  announcementBarText?: string;
}

export function SiteShell({
  children,
  logoUrl,
  announcementActive,
  announcementBarText,
}: SiteShellProps) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <>
      <ScrollProgressBar />
      <JsonLd />
      <Header
        logoUrl={logoUrl}
        announcementActive={announcementActive}
        announcementBarText={announcementBarText}
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

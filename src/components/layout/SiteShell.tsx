"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

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
  return (
    <>
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

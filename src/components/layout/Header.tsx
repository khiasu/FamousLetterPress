"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ── Menu Architecture with exact prototype categories & numbers ── */
const menuGroups = [
  {
    num: "01",
    title: "What we make",
    links: [
      { label: "Wedding Invites & Suites", href: "/weddings" },
      { label: "Cards + Letterheads", href: "/business-cards" },
      { label: "Personalised Stationery", href: "/personalised-stationery" },
      { label: "Wax Seals & Embellishments", href: "/work" },
    ],
  },
  {
    num: "02",
    title: "How we make it",
    links: [
      { label: "Cotton & Handmade Paper", href: "/materials" },
      { label: "Letterpress Craft & Bite", href: "/process" },
      { label: "Hot Foil & Emboss", href: "/process" },
      { label: "Our Story & Atelier", href: "/about" },
    ],
  },
  {
    num: "03",
    title: "Who we make it for",
    links: [
      { label: "Couples & Brides", href: "/weddings" },
      { label: "Channel Partners & Designers", href: "/channel-partners" },
      { label: "Brands & B2B", href: "/business-cards" },
    ],
  },
  {
    num: "04",
    title: "Sample Kits & Packages",
    links: [
      { label: "Wedding Sample Box (₹1,500)", href: "/weddings/wedding-sample-kit" },
      { label: "Business Card Kit (₹1,000)", href: "/business-cards/business-card-sample-kit" },
      { label: "Design Templates & Curated Suites", href: "/packages" },
    ],
  },
];

export interface HeaderProps {
  logoUrl?: string;
  announcementActive?: boolean;
  announcementBarText?: string;
}

export function Header({
  announcementActive = false,
  announcementBarText,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled((window.scrollY || 0) > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      {/* Optional Announcement */}
      {announcementActive && announcementBarText && (
        <div className="bg-[#0e0e0e] text-[#faf5ea] text-[10px] font-sans tracking-[0.25em] uppercase py-2 px-4 text-center z-[60] relative">
          {announcementBarText}
        </div>
      )}

      {/* ── Fixed Prototype Header ── */}
      <header
        id="hd"
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 sm:px-14 py-5 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[rgba(14,14,14,0.1)] shadow-xs"
            : "bg-white"
        }`}
      >
        {/* Prototype Logo with Monogram Seal & Bodoni Wordmark */}
        <Link href="/" className="lg select-none" onClick={closeMenu}>
          <i className="mk">F</i>
          <span>
            <b>FAMOUS</b>
            <em>Letterpress</em>
          </span>
        </Link>

        {/* Right Nav Action: Menu button with twin dot indicator & Book Consult */}
        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/start-a-project"
            className="hidden sm:inline-flex items-center gap-3 text-[10.5px] uppercase tracking-[0.25em] text-[#0e0e0e] hover:opacity-60 transition-opacity"
          >
            Book a consult
          </Link>

          <button
            className="mb cursor-pointer select-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <b></b>
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* ── Prototype Menu Drawer with Circular Clip-Path ── */}
      <div
        className={`menu ${isMenuOpen ? "o" : ""}`}
        aria-hidden={!isMenuOpen}
        style={{
          zIndex: 60,
        }}
      >
        <div className="mt max-w-[1100px] mx-auto w-full flex justify-between items-center">
          <Link href="/" className="lg" onClick={closeMenu}>
            <i className="mk">F</i>
            <span>
              <b>FAMOUS</b>
              <em>Letterpress</em>
            </span>
          </Link>
          <button
            className="mb text-[12px] cursor-pointer"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            Close &times;
          </button>
        </div>

        <div className="max-w-[1100px] mx-auto w-full pt-8 pb-12">
          {menuGroups.map((group, idx) => (
            <div
              key={group.num}
              className="mg"
              style={{ "--i": idx } as React.CSSProperties}
            >
              <h3>
                <span>{group.num}</span>
                {group.title}
              </h3>
              <div>
                {group.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Socials & Direct WhatsApp Links */}
          <div className="mf pt-8 border-t border-[var(--hair)] mt-6">
            <a
              className="ln"
              href="https://wa.me/+918416099340"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="ln"
              href="https://www.instagram.com/famousletterpressindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <Link className="ln" href="/contact" onClick={closeMenu}>
              Contact Studio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


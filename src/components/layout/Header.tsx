"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { SearchModal } from "@/components/ui/SearchModal";

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
  logoUrl = "/assets/logo.png",
  announcementActive = false,
  announcementBarText,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled((window.scrollY || 0) > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Global search shortcut (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Optional Announcement */}
      {announcementActive && announcementBarText && (
        <div className="bg-[#0e0e0e] text-[#faf5ea] text-[10px] font-sans tracking-[0.25em] uppercase py-2 px-4 text-center z-[60] relative">
          {announcementBarText}
        </div>
      )}

      {/* ── Fixed Atelier Header ── */}
      <header
        id="hd"
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 sm:px-12 py-3.5 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[rgba(14,14,14,0.12)] shadow-xs"
            : "bg-white border-b border-[rgba(14,14,14,0.08)]"
        }`}
      >
        {/* Authentic Famous Letterpress Logo & Wordmark from famousletterpress.com */}
        <Link
          href="/"
          className="flex items-center gap-3 select-none group"
          onClick={closeMenu}
          aria-label="Famous Letterpress — Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl || "/assets/logo.png"}
            alt="Famous Letterpress Seal Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-full border border-[rgba(14,14,14,0.14)] p-0.5 group-hover:scale-105 transition-transform bg-[#faf8f4]"
          />
          <div className="flex flex-col justify-center leading-none">
            <span
              className="font-serif text-lg sm:text-xl md:text-2xl font-semibold tracking-[-0.01em] text-[#0e0e0e]"
              style={{
                fontFamily: "var(--font-cormorant-garamond), 'Cormorant Garamond', 'Bodoni Moda', serif",
              }}
            >
              Famous Letterpress
            </span>
            <span className="text-[8.5px] uppercase tracking-[0.26em] text-[var(--mute)] mt-1 font-sans">
              Letterpress &middot; Foil &middot; India
            </span>
          </div>
        </Link>

        {/* Right Nav Actions: Instant Search, Book a Consult & Menu Toggle */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Fast Responsive Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs text-[#444] hover:text-black transition-all rounded-full border border-[rgba(14,14,14,0.16)] hover:border-black bg-[#faf8f4] cursor-pointer shadow-2xs"
            aria-label="Search Famous Letterpress"
          >
            <svg
              className="w-3.5 h-3.5 text-[#555]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="hidden sm:inline font-sans text-[11px] tracking-wide uppercase text-[#333]">
              Search
            </span>
            <kbd className="hidden md:inline-block text-[9px] font-mono px-1.5 py-0.5 bg-white border border-[#DDD] text-[#666] rounded-xs select-none">
              ⌘K
            </kbd>
          </button>

          {/* Book a consult link */}
          <Link
            href="/start-a-project"
            className="hidden sm:inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-[#0e0e0e] hover:opacity-60 transition-opacity font-medium"
          >
            Book a consult
          </Link>

          {/* Prototype Menu Toggle with Twin Dots */}
          <button
            className="mb cursor-pointer select-none py-1 px-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <b></b>
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase font-medium">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </header>

      {/* ── Working Menu Drawer with Circular Reveal & Full Fallback ── */}
      <div
        className={`menu ${isMenuOpen ? "o" : ""}`}
        aria-hidden={!isMenuOpen}
        style={{
          zIndex: 60,
        }}
      >
        <div className="mt max-w-[1100px] mx-auto w-full flex justify-between items-center pb-4 border-b border-[var(--hair)]">
          {/* Logo in open drawer */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoUrl || "/assets/logo.png"}
              alt="Famous Letterpress Seal"
              className="w-10 h-10 object-contain rounded-full border border-[rgba(14,14,14,0.14)] p-0.5 bg-[#faf8f4]"
            />
            <div className="flex flex-col leading-none">
              <span
                className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.01em] text-[#0e0e0e]"
                style={{
                  fontFamily: "var(--font-cormorant-garamond), 'Cormorant Garamond', 'Bodoni Moda', serif",
                }}
              >
                Famous Letterpress
              </span>
              <span className="text-[8.5px] uppercase tracking-[0.26em] text-[var(--mute)] mt-1 font-sans">
                Atelier &middot; Nagaland
              </span>
            </div>
          </Link>

          <button
            className="mb text-[12px] cursor-pointer py-2 px-3 border border-[rgba(14,14,14,0.18)] hover:border-black rounded-full"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            Close &times;
          </button>
        </div>

        {/* Drawer Search Quick Trigger */}
        <div className="max-w-[1100px] mx-auto w-full pt-6">
          <button
            onClick={() => {
              closeMenu();
              setIsSearchOpen(true);
            }}
            className="w-full flex items-center justify-between px-5 py-3.5 rounded-lg border border-[rgba(14,14,14,0.15)] bg-white hover:border-black text-[#555] hover:text-black transition-all cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-[#777]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-sm font-sans">
                Search invitations, paper stocks, sample kits...
              </span>
            </div>
            <kbd className="text-[10px] font-mono px-2 py-0.5 bg-[#f5f2eb] border border-[#DDD] rounded text-[#666]">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Numbered Category Grid */}
        <div className="max-w-[1100px] mx-auto w-full pt-6 pb-12">
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
            <Link className="ln" href="/faq" onClick={closeMenu}>
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}



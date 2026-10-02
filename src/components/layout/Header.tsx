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

          {/* Redesigned Menu Button with Sleek Morphing Architectural Lines & State Animation */}
          <button
            className="group relative flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 rounded-full border border-[rgba(14,14,14,0.18)] hover:border-black bg-white hover:bg-[#faf8f4] active:scale-[0.98] transition-all cursor-pointer select-none shadow-2xs"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {/* Morphing 2-Bar Architectural Icon */}
            <div className="w-4 h-3 relative flex flex-col justify-between items-center pointer-events-none">
              <span
                className={`h-[1.5px] bg-black rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen
                    ? "w-4 rotate-45 translate-y-[5.25px]"
                    : "w-4 group-hover:w-4"
                }`}
              />
              <span
                className={`h-[1.5px] bg-black rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen
                    ? "w-4 -rotate-45 -translate-y-[5.25px]"
                    : "w-2.5 group-hover:w-4 self-start"
                }`}
              />
            </div>

            <span className="text-[11px] font-sans font-medium tracking-[0.22em] uppercase text-black">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </header>

      {/* ── Standalone 100svh Zero-Scroll Menu Screen ── */}
      <div
        className={`menu-standalone ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="h-full flex flex-col justify-between px-5 sm:px-12 py-4 sm:py-7 max-w-[1240px] mx-auto w-full">
          {/* Top Row: Logo & Close Trigger */}
          <div className="flex justify-between items-center pb-4 border-b border-[rgba(14,14,14,0.1)]">
            <Link
              href="/"
              className="flex items-center gap-3 select-none"
              onClick={closeMenu}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl || "/assets/logo.png"}
                alt="Famous Letterpress Seal"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full border border-[rgba(14,14,14,0.14)] p-0.5 bg-[#faf8f4]"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="font-serif text-lg sm:text-xl font-semibold tracking-[-0.01em] text-[#0e0e0e]"
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
              onClick={closeMenu}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(14,14,14,0.18)] hover:border-black bg-white hover:bg-[#faf8f4] text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-black transition-all cursor-pointer shadow-2xs"
              aria-label="Close menu"
            >
              <span>Close</span>
              <span className="text-sm leading-none">&times;</span>
            </button>
          </div>

          {/* Desktop 4-Column Layout (Fits 100% in viewport without scrolling) */}
          <div className="hidden lg:grid grid-cols-4 gap-8 my-auto py-4">
            {menuGroups.map((group, idx) => (
              <div
                key={group.num}
                className="menu-stagger flex flex-col justify-start border-l border-[rgba(14,14,14,0.1)] pl-6"
                style={{ "--stagger-i": idx } as React.CSSProperties}
              >
                <div className="flex items-baseline gap-2.5 mb-5">
                  <span className="text-[11px] font-mono tracking-widest text-[var(--mute)]">
                    {group.num}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-black tracking-tight">
                    {group.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="group inline-flex items-center gap-2 text-[14.5px] text-[#3b372e] hover:text-black transition-all"
                      >
                        <span className="w-1.5 h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile / Tablet Compact Layout (Fits 100% in viewport without scrolling) */}
          <div className="lg:hidden flex flex-col justify-center my-auto py-2 space-y-4">
            {menuGroups.map((group, idx) => (
              <div
                key={group.num}
                className="menu-stagger border-b border-[rgba(14,14,14,0.08)] pb-3"
                style={{ "--stagger-i": idx } as React.CSSProperties}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[9.5px] font-mono tracking-widest text-[var(--mute)]">
                    {group.num}
                  </span>
                  <h4 className="font-serif text-lg font-medium text-black">
                    {group.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1 pl-4">
                  {group.links.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      onClick={closeMenu}
                      className="text-[13px] text-[#4a463c] hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Quick Search Button */}
            <button
              onClick={() => {
                closeMenu();
                setIsSearchOpen(true);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-[rgba(14,14,14,0.15)] bg-white text-xs text-[#555] hover:text-black transition-all cursor-pointer"
            >
              <span className="font-sans">Search invitations, papers, kits...</span>
              <kbd className="text-[9px] font-mono px-1.5 py-0.5 bg-[#f5f2eb] rounded border border-[#ddd]">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Bottom Coordinates Bar (No scroll required) */}
          <div className="pt-4 border-t border-[rgba(14,14,14,0.1)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--mute)]">
            <div className="flex items-center gap-5 sm:gap-6 font-mono text-[10.5px] uppercase tracking-widest">
              <a
                href="https://wa.me/+918416099340"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/famousletterpressindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                Instagram
              </a>
              <Link
                href="/faq"
                onClick={closeMenu}
                className="hover:text-black transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>

            <p className="text-[10.5px] font-mono tracking-wider">
              &copy; 2026 Famous Letterpress &middot; Nagaland, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
}




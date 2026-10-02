"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { SearchModal } from "@/components/ui/SearchModal";
import { SOCIAL_PROFILES } from "@/components/ui/SocialIcons";

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
      { label: "Our Story & Studio", href: "/about" },
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
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY || 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      setIsScrolled(currentScrollY > 20);

      // Keep header visible when menu is open or at top of page
      if (isMenuOpen || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down -> slide out to top
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> slide in from top
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

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

      {/* ── Fixed Studio Header with Scroll Slide In/Out ── */}
      <header
        id="hd"
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 sm:px-14 md:px-16 py-3 transition-all duration-300 ease-out will-change-transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[rgba(14,14,14,0.12)] shadow-xs"
            : "bg-white border-b border-[rgba(14,14,14,0.08)]"
        }`}
      >
        {/* Authentic Famous Letterpress Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3.5 sm:gap-4 select-none group pl-1 sm:pl-2"
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
              Handcrafted in Nagaland
            </span>
          </div>
        </Link>

        {/* Right Nav Actions: Simple Rounded Search Icon with Text, Book a Consult & Icon-Only Toggle */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Simple Rounded Search Pill with "Search" Text Inside */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 text-xs text-[#222] hover:text-black transition-all rounded-full border border-[rgba(14,14,14,0.2)] hover:border-black bg-white cursor-pointer group shadow-2xs"
            aria-label="Search Famous Letterpress"
          >
            <svg
              className="w-3.5 h-3.5 text-black group-hover:scale-105 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="font-sans text-[11px] tracking-[0.14em] uppercase text-black font-medium">
              Search
            </span>
          </button>

          {/* Book a consult link */}
          <Link
            href="/start-a-project"
            className="hidden sm:inline-flex items-center text-[10.5px] uppercase tracking-[0.22em] text-[#0e0e0e] hover:opacity-60 transition-opacity font-medium"
          >
            Book a consult
          </Link>

          {/* Icon-Only Clean Toggle Button (Stays in exact position, animated X mark) */}
          <button
            className="w-10 h-10 rounded-full border border-[rgba(14,14,14,0.18)] hover:border-black bg-white active:scale-95 transition-all flex items-center justify-center cursor-pointer select-none group shadow-2xs z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {/* Morphing 2-Bar Animated X Architectural Lines with hover response */}
            <div className="w-4 h-3.5 relative flex flex-col justify-between items-center pointer-events-none">
              <span
                className={`h-[1.5px] bg-black transition-all duration-300 origin-center ${
                  isMenuOpen
                    ? "w-4 rotate-45 translate-y-[6px] group-hover:scale-110"
                    : "w-4 group-hover:scale-105"
                }`}
              />
              <span
                className={`h-[1.5px] bg-black transition-all duration-300 origin-center ${
                  isMenuOpen
                    ? "w-4 -rotate-45 -translate-y-[6px] group-hover:scale-110"
                    : "w-2.5 self-start group-hover:w-4"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ── Standalone 100svh Zero-Scroll Menu Screen ── */}
      <div
        className={`menu-standalone ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="h-full flex flex-col justify-between px-6 sm:px-14 md:px-16 py-3.5 max-w-[1400px] mx-auto w-full">
          {/* Top Row: Logo & Close Trigger in exact same navbar alignment */}
          <div className="flex justify-between items-center pb-3 border-b border-[rgba(14,14,14,0.1)]">
            <Link
              href="/"
              className="flex items-center gap-3.5 sm:gap-4 select-none group pl-1 sm:pl-2"
              onClick={closeMenu}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl || "/assets/logo.png"}
                alt="Famous Letterpress Seal"
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-full border border-[rgba(14,14,14,0.14)] p-0.5 bg-white"
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
                  Handcrafted in Nagaland
                </span>
              </div>
            </Link>

            {/* Same position close button matching toggle geometry */}
            <button
              onClick={closeMenu}
              className="w-10 h-10 rounded-full border border-[rgba(14,14,14,0.18)] hover:border-black bg-white hover:bg-black text-black hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-2xs group active:scale-95"
              aria-label="Close navigation menu"
            >
              <div className="w-4 h-4 relative flex items-center justify-center pointer-events-none">
                <span className="absolute h-[1.5px] w-4 bg-current rotate-45 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute h-[1.5px] w-4 bg-current -rotate-45 transition-transform duration-300 group-hover:scale-110" />
              </div>
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
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Black & White Social Icons matching UI */}
              <div className="flex items-center gap-3.5 text-black">
                {SOCIAL_PROFILES.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="text-black hover:opacity-65 transition-opacity flex items-center justify-center cursor-pointer"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              <div className="h-3 w-[1px] bg-[rgba(14,14,14,0.15)] hidden sm:block" />

              <div className="flex items-center gap-4 sm:gap-5 font-mono text-[10.5px] uppercase tracking-widest">
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




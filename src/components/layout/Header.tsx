"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { SearchModal } from "@/components/ui/SearchModal";
import { SOCIAL_PROFILES } from "@/components/ui/SocialIcons";

/* ── Menu Architecture: Dropdown based categories ── */
const menuGroups = [
  {
    id: "what-we-make",
    num: "01",
    title: "What we make",
    links: [
      { label: "Wedding Invites", href: "/our-work/wedding-invites" },
      { label: "Business Cards", href: "/our-work/business-cards" },
      { label: "Seal Stickers", href: "/our-work/seal-stickers" },
      { label: "Envelopes", href: "/our-work/envelopes" },
      { label: "Certificates", href: "/our-work/certificates" },
      { label: "Design & Illustration", href: "/our-work/design-illustration" },
      { label: "Custom Works", href: "/our-work/custom-works" },
    ],
  },
  {
    id: "how-we-make-it",
    num: "02",
    title: "How we make it",
    links: [
      { label: "Our Process, Materials & Craft", href: "/craft" },
      { label: "Our Story & Studio", href: "/about" },
    ],
  },
  {
    id: "who-we-make-it-for",
    num: "03",
    title: "Who we make it for",
    links: [
      { label: "Couples & Brides", href: "/our-work/wedding-invites" },
      { label: "Channel Partners & Designers", href: "/channel-partners" },
      { label: "Brands & B2B", href: "/our-work/business-cards" },
    ],
  },
  {
    id: "sample-kits",
    num: "04",
    title: "Sample Kits",
    links: [
      { label: "Wedding Sample Kit", href: "/weddings/wedding-sample-kit" },
      { label: "Business Card Sample Kit", href: "/business-cards/business-card-sample-kit" },
    ],
  },
  {
    id: "help-info",
    num: "05",
    title: "Help & Queries",
    links: [
      { label: "Contact Studio on WhatsApp", href: "https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about...", external: true },
      { label: "FAQs", href: "/faq" },
      { label: "T&Cs", href: "/terms-conditions" },
      { label: "Start a Project / Inquire", href: "/start-a-project" },
      { label: "Early Bride Consultation", href: "/our-work/wedding-invites#early-bride" },
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
  // Default open first section in the dropdown menu
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "what-we-make": true,
  });

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    let lastScrollY = window.scrollY || 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      setIsScrolled(currentScrollY > 20);

      // Keep header visible when menu is open or at top of page
      if (isMenuOpen || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Global search shortcut (⌘K / Ctrl+K) and Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

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

      {/* ── Fixed Studio Header ── */}
      <header
        id="hd"
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 md:px-12 lg:px-16 py-3 transition-all duration-300 ease-out will-change-transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[rgba(14,14,14,0.12)] shadow-xs"
            : "bg-white border-b border-[rgba(14,14,14,0.08)]"
        }`}
      >
        {/* Authentic Famous Letterpress Logo & Wordmark (No white border, no subtitle) */}
        <Link
          href="/"
          className="flex items-center gap-3 sm:gap-3.5 select-none group pl-1 sm:pl-2"
          onClick={closeMenu}
          aria-label="Famous Letterpress — Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl || "/assets/logo.png"}
            alt="Famous Letterpress Seal Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-full group-hover:scale-105 transition-transform"
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
          </div>
        </Link>

        {/* Right Nav Actions: Clean Search Icon + 3-Strip Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Minimal Icon-Only Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-black hover:opacity-60 transition-opacity cursor-pointer flex items-center justify-center rounded-full"
            aria-label="Search Famous Letterpress"
          >
            <svg
              className="w-4.5 h-4.5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.9}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* 3-Strip Right-Aligned Staggered Hamburger Toggle Button (No circle border) */}
          <button
            className="p-2 hover:opacity-60 active:scale-95 transition-all flex items-center justify-center cursor-pointer select-none group z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {/* 3-Strip Inverted Right-Aligned Staggered Hamburger Toggle */}
            <div className="w-5 h-4 relative flex flex-col justify-between items-end pointer-events-none">
              <span
                className={`h-[2px] bg-black rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
                }`}
              />
              <span
                className={`h-[2px] bg-black rounded-full transition-all duration-200 ${
                  isMenuOpen ? "w-0 opacity-0 scale-x-0" : "w-3.5 opacity-100 group-hover:w-4"
                }`}
              />
              <span
                className={`h-[2px] bg-black rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-2 group-hover:w-2.5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ── Dropdown Menu (Simple White BG with Dropdown Based Options) ── */}
      {isMenuOpen && (
        <>
          {/* Subtle click-outside backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/15 backdrop-blur-[2px] transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Clean White Dropdown Menu Panel */}
          <div
            className="fixed top-[62px] right-4 sm:right-10 md:right-16 z-50 w-[calc(100vw-32px)] sm:w-[390px] max-h-[calc(100vh-80px)] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.06)] border border-[rgba(14,14,14,0.1)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
            role="dialog"
            aria-label="Navigation Menu"
          >
            {/* Dropdown Options List */}
            <div className="overflow-y-auto divide-y divide-[rgba(14,14,14,0.06)] py-2 px-3">
              {menuGroups.map((group) => {
                const isExpanded = !!expandedSections[group.id];
                return (
                  <div key={group.id} className="py-1">
                    {/* Dropdown Trigger Header */}
                    <button
                      onClick={() => toggleSection(group.id)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-left rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer group select-none"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-mono tracking-widest text-[#777]">
                          {group.num}
                        </span>
                        <span className="text-[15.5px] font-medium font-serif text-[#1a1a1a] group-hover:text-black">
                          {group.title}
                        </span>
                      </div>

                      {/* Dropdown Arrow Indicator */}
                      <svg
                        className={`w-3.5 h-3.5 text-[#666] group-hover:text-black transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Collapsible Dropdown Content */}
                    {isExpanded && (
                      <div className="pl-8 pr-3 pt-0.5 pb-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
                        {group.links.map((link) => {
                          const isExt = link.external || link.href.startsWith("http");
                          const linkContent = (
                            <>
                              <span className="group-hover:translate-x-0.5 transition-transform">
                                {link.label}
                              </span>
                              <span className="text-[11px] text-[#aaa] group-hover:text-black transition-colors opacity-0 group-hover:opacity-100">
                                &rarr;
                              </span>
                            </>
                          );
                          const className = "flex items-center justify-between py-1.5 px-2 rounded-lg text-[13px] text-[#444] hover:text-black hover:bg-[#FAF8F5] transition-all group";

                          return isExt ? (
                            <a
                              key={link.href + link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeMenu}
                              className={className}
                            >
                              {linkContent}
                            </a>
                          ) : (
                            <Link
                              key={link.href + link.label}
                              href={link.href}
                              onClick={closeMenu}
                              className={className}
                            >
                              {linkContent}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Menu Bottom Bar with Socials & Studio Details */}
            <div className="border-t border-[rgba(14,14,14,0.08)] bg-[#FCFAF7] px-5 py-3.5 flex items-center justify-between gap-3 text-xs text-[#777]">
              {/* Monochrome Social Icons */}
              <div className="flex items-center gap-3 text-black">
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
                      className="text-black hover:opacity-60 transition-opacity flex items-center justify-center cursor-pointer"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>

              <span className="text-[10px] font-mono tracking-wider text-[#777]">
                &copy; 2026 Famous Letterpress
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

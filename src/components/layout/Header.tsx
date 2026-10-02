"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ── Menu Architecture ── */
const menuSections = [
  {
    title: "What We Make",
    items: [
      {
        label: "Wedding Invitations & Suites",
        description: "Bespoke letterpress, foil & embossed wedding stationery on heavy cotton",
        href: "/weddings",
      },
      {
        label: "Business Cards & Stationery",
        description: "Thick cotton cards with deep impression, foil & edge gilding",
        href: "/business-cards",
      },
      {
        label: "Personalised Stationery",
        description: "Monogrammed correspondence, custom note cards & envelopes",
        href: "/personalised-stationery",
      },
      {
        label: "Curated Packages & Collections",
        description: "Readymade suites, design templates, and bespoke options",
        href: "/packages",
      },
    ],
  },
  {
    title: "How We Make It",
    items: [
      { label: "Paper & Materials", description: "Pure cotton & handmade paper stocks (300–900gsm)", href: "/materials" },
      { label: "Letterpress Process", description: "Mechanical relief, the bite & tactile impression", href: "/process" },
      { label: "Our Story & Atelier", description: "Handcrafted in Nagaland on restored Heidelberg presses", href: "/about" },
      { label: "Studio Portfolio", description: "Selected commissions archive", href: "/work" },
    ],
  },
  {
    title: "Sample Kits & Consultations",
    items: [
      { label: "The Wedding Sample Kit (₹1,500)", description: "Feel the paper weights and foil samples in your hands", href: "/weddings/wedding-sample-kit" },
      { label: "Business Card Sample Kit (₹1,000)", description: "Cotton weights, edge gilding & deboss swatches", href: "/business-cards/business-card-sample-kit" },
      { label: "Early Bride Consultation", description: "Plan your stationery timeline and bespoke suite", href: "/weddings/early-bride" },
      { label: "For Designers & Planners", description: "Trade collaboration & channel partner program", href: "/channel-partners" },
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
      {/* Announcement Bar */}
      {announcementActive && announcementBarText && (
        <div className="bg-black text-white text-[10px] font-sans tracking-[0.25em] uppercase py-2 px-4 text-center z-[60] relative">
          {announcementBarText}
        </div>
      )}

      {/* ── Snøhetta-Inspired Minimalist Header ── */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          announcementActive && announcementBarText ? "top-[32px]" : "top-0"
        } ${
          isScrolled && !isMenuOpen
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]"
            : "bg-white border-b border-[#E5E5E5]"
        }`}
      >
        <div className="container-wide">
          <nav
            className="flex items-center justify-between h-16 md:h-20 relative"
            aria-label="Primary navigation"
          >
            {/* Left: Famous Letterpress Seal Logo & Wordmark */}
            <Link
              href="/"
              className="relative z-[60] flex items-center gap-2.5 sm:gap-3 group"
              aria-label="Famous Letterpress — Home"
              onClick={closeMenu}
            >
              {/* Authentic Famous Letterpress Seal */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl || "/assets/logo.png"}
                alt="Famous Letterpress Seal"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-full border border-[#E5E5E5] p-0.5 group-hover:scale-105 transition-transform"
              />
              <span className="font-serif text-lg sm:text-xl tracking-tight text-black">
                <span className="font-light">Famous</span>{" "}
                <span className="font-semibold">Letterpress</span>
              </span>
            </Link>

            {/* Center: Snøhetta-Style Text Menu Button (Desktop & Mobile) */}
            <div className="absolute left-1/2 -translate-x-1/2 z-[60]">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-xs sm:text-sm font-sans tracking-[0.16em] uppercase text-black font-medium hover:opacity-60 transition-opacity py-2 px-3 cursor-pointer select-none"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? "Close" : "Menu"}
              </button>
            </div>

            {/* Right: Book a Consult Action */}
            <div className="relative z-[60] flex items-center gap-4">
              <Link
                href="/start-a-project"
                className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium bg-black text-white px-4 sm:px-6 py-2 sm:py-2.5 hover:bg-neutral-800 transition-colors"
                onClick={closeMenu}
              >
                Book a Consult
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Snøhetta-Style Pristine Pure White Menu Drawer ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white text-black"
          >
            <div className="h-full overflow-y-auto pt-24 md:pt-32 pb-12">
              <div className="container-wide">
                {/* Menu Sections Grid */}
                <div className="grid md:grid-cols-3 gap-10 md:gap-14 mb-16">
                  {menuSections.map((section, sIndex) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.08 + sIndex * 0.06,
                        duration: 0.35,
                      }}
                    >
                      <p className="text-[10px] tracking-[0.25em] uppercase text-[#888888] mb-6 font-mono font-medium">
                        {section.title}
                      </p>
                      <div className="space-y-0">
                        {section.items.map((item) => (
                          <div key={item.href + item.label}>
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="group block py-3.5 border-b border-[#E5E5E5] hover:border-black transition-colors"
                            >
                              <span className="block font-serif text-xl sm:text-2xl text-black font-light group-hover:opacity-60 transition-opacity">
                                {item.label}
                              </span>
                              <span className="block text-xs text-[#666666] mt-1 font-light leading-relaxed">
                                {item.description}
                              </span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Row — Direct Contact & Coordinates */}
                <div className="border-t border-[#E5E5E5] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/start-a-project"
                      onClick={closeMenu}
                      className="px-7 py-3 text-[11px] tracking-[0.16em] uppercase font-medium bg-black text-white hover:bg-neutral-800 transition-colors"
                    >
                      Start a Project
                    </Link>
                    <Link
                      href="/weddings/wedding-sample-kit"
                      onClick={closeMenu}
                      className="px-7 py-3 text-[11px] tracking-[0.16em] uppercase font-medium border border-black text-black hover:bg-black hover:text-white transition-colors"
                    >
                      Order Sample Kit
                    </Link>
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href="https://www.instagram.com/famousletterpressindia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono tracking-widest uppercase text-[#666666] hover:text-black transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://wa.me/919366012345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono tracking-widest uppercase text-[#666666] hover:text-black transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="mailto:hello@famousletterpress.com"
                      className="text-xs font-mono tracking-widest uppercase text-[#666666] hover:text-black transition-colors"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

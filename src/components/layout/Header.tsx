"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ── Menu Architecture (matches founder's web-2 & web-3 spec) ── */
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
        label: "Business Cards & Letterheads",
        description: "Thick cotton cards with deep impression, foil & edge gilding",
        href: "/business-cards",
      },
      {
        label: "Personalised Stationery",
        description: "Monogrammed correspondence, custom note cards & envelopes",
        href: "/personalised-stationery",
      },
    ],
  },
  {
    title: "How We Make It",
    items: [
      { label: "Material", description: "Pure cotton & handmade paper stocks", href: "/materials" },
      { label: "Process", description: "Letterpress mechanics, the bite & the kiss", href: "/process" },
      { label: "Craftsmanship", description: "Handcrafted in our Nagaland atelier", href: "/about" },
      { label: "Our Story", description: "Since 2008 — Akanito's founding journey", href: "/about" },
    ],
  },
  {
    title: "Who We Make For",
    items: [
      { label: "Couples", description: "Wedding stationery consultations", href: "/weddings" },
      { label: "Channel Partners", description: "For designers, planners & agencies", href: "/channel-partners" },
      { label: "B2B & Corporate", description: "Luxury packaging, boxes & branding", href: "/business-cards" },
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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

      {/* Header */}
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
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Primary navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="relative z-[60] flex items-center gap-3"
              aria-label="Famous Letterpress — Home"
              onClick={closeMenu}
            >
              <span
                className={`font-serif text-xl tracking-tight transition-colors duration-300 ${
                  isMenuOpen ? "text-white" : "text-black"
                }`}
              >
                <span className="font-light">Famous</span>{" "}
                <span className="font-semibold">Letterpress</span>
              </span>
            </Link>

            {/* Direct Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/weddings"
                className="text-[11px] tracking-[0.2em] uppercase text-[#555555] hover:text-black transition-colors"
              >
                Weddings
              </Link>
              <Link
                href="/business-cards"
                className="text-[11px] tracking-[0.2em] uppercase text-[#555555] hover:text-black transition-colors"
              >
                Business Cards
              </Link>
              <Link
                href="/packages"
                className="text-[11px] tracking-[0.2em] uppercase text-[#555555] hover:text-black transition-colors"
              >
                Packages
              </Link>
              <Link
                href="/about"
                className="text-[11px] tracking-[0.2em] uppercase text-[#555555] hover:text-black transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/weddings/wedding-sample-kit"
                className="text-[11px] tracking-[0.2em] uppercase text-[#555555] hover:text-black transition-colors"
              >
                Sample Kits
              </Link>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="/start-a-project"
                className="text-[11px] tracking-[0.2em] uppercase font-medium bg-black text-white px-6 py-2.5 hover:bg-neutral-800 transition-colors"
              >
                Book a Consult
              </Link>

              {/* Menu Toggle Pill */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`relative z-[60] flex items-center gap-2 px-4 py-2 text-[11px] tracking-[0.2em] uppercase font-medium border transition-colors ${
                  isMenuOpen
                    ? "border-white/40 text-white"
                    : "border-[#E5E5E5] hover:border-black text-black"
                }`}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <span>{isMenuOpen ? "Close" : "Menu"}</span>
                <div className="w-3.5 h-2.5 flex flex-col justify-between">
                  <span
                    className={`block h-px transition-all duration-300 origin-center ${
                      isMenuOpen ? "bg-white rotate-45 translate-y-[4.5px]" : "bg-black"
                    }`}
                  />
                  <span
                    className={`block h-px transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "bg-black"
                    }`}
                  />
                  <span
                    className={`block h-px transition-all duration-300 origin-center ${
                      isMenuOpen ? "bg-white -rotate-45 -translate-y-[4.5px]" : "bg-black"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-[60] sm:hidden p-2 text-black"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="w-5 h-3.5 flex flex-col justify-between">
                <span
                  className={`block h-px transition-all duration-300 origin-center ${
                    isMenuOpen ? "bg-white rotate-45 translate-y-[6px]" : "bg-black"
                  }`}
                />
                <span
                  className={`block h-px transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "bg-black"
                  }`}
                />
                <span
                  className={`block h-px transition-all duration-300 origin-center ${
                    isMenuOpen ? "bg-white -rotate-45 -translate-y-[6px]" : "bg-black"
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* ── Fullscreen Editorial Menu Drawer ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black text-white"
          >
            <div className="h-full overflow-y-auto pt-24 md:pt-28 pb-12">
              <div className="container-wide">
                {/* Menu Sections Grid */}
                <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-16">
                  {menuSections.map((section, sIndex) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 + sIndex * 0.08,
                        duration: 0.4,
                      }}
                    >
                      <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-6 font-mono font-medium">
                        {section.title}
                      </p>
                      <div className="space-y-0">
                        {section.items.map((item) => (
                          <div key={item.href + item.label}>
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="group block py-4 border-b border-white/10 hover:border-white/30 transition-colors"
                            >
                              <span className="block font-serif text-xl text-white/90 group-hover:text-white transition-colors">
                                {item.label}
                              </span>
                              <span className="block text-xs text-white/40 mt-1 font-light leading-relaxed">
                                {item.description}
                              </span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Row — CTAs & Contact */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/start-a-project"
                      onClick={closeMenu}
                      className="inline-flex px-7 py-3 text-[11px] tracking-[0.2em] uppercase font-medium bg-white text-black hover:bg-neutral-200 transition-colors"
                    >
                      Book a Consult
                    </Link>
                    <Link
                      href="/weddings/wedding-sample-kit"
                      onClick={closeMenu}
                      className="inline-flex px-7 py-3 text-[11px] tracking-[0.2em] uppercase font-medium border border-white/30 text-white hover:border-white transition-colors"
                    >
                      Order Sample Kit →
                    </Link>
                  </div>

                  <div className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-white/40">
                    <a
                      href="https://www.instagram.com/famousletterpressindia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://wa.me/919366012345"
                      className="hover:text-white transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="mailto:hello@famousletterpress.com"
                      className="hover:text-white transition-colors"
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

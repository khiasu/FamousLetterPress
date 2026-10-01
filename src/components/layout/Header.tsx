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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
        <div className="bg-ink-deep text-paper-creme text-[10px] font-sans tracking-[0.2em] uppercase py-2 px-4 text-center z-[60] relative">
          {announcementBarText}
        </div>
      )}

      {/* Header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)] ${
          announcementActive && announcementBarText ? "top-[32px]" : "top-0"
        } ${
          isScrolled && !isMenuOpen
            ? "bg-paper-creme/95 backdrop-blur-md border-b border-border-hairline/50"
            : "bg-transparent"
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
              className="relative z-[60] group flex items-center gap-2"
              aria-label="Famous Letterpress — Home"
              onClick={closeMenu}
            >
              <span
                className={`font-serif text-lg md:text-xl tracking-[0.02em] transition-colors duration-300 ${
                  isMenuOpen ? "text-paper-creme" : "text-ink-deep"
                }`}
              >
                <span className="font-light">Famous</span>{" "}
                <span className="font-semibold">Letterpress</span>
              </span>
            </Link>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/weddings/wedding-sample-kit"
                className="text-[11px] tracking-[0.14em] uppercase text-ink-muted hover:text-ink-deep transition-colors duration-300"
              >
                Sample Kits
              </Link>
              <Link
                href="/start-a-project"
                className="text-[11px] tracking-[0.14em] uppercase bg-ink-deep text-paper-creme px-5 py-2.5 hover:bg-[#222] transition-colors duration-300"
              >
                Book a Consult
              </Link>
              {/* Menu Pill */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex items-center gap-2 px-4 py-2 text-[11px] tracking-[0.14em] uppercase border transition-all duration-300 ${
                  isMenuOpen
                    ? "border-paper-creme/30 text-paper-creme"
                    : "border-border-hairline hover:border-ink-deep/30 text-ink-deep"
                }`}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <span>{isMenuOpen ? "Close" : "Menu"}</span>
                <div className="w-4 h-3 flex flex-col justify-between">
                  <span
                    className={`block h-px transition-all duration-300 origin-center ${
                      isMenuOpen
                        ? "bg-paper-creme rotate-45 translate-y-[5px]"
                        : "bg-ink-deep"
                    }`}
                  />
                  <span
                    className={`block h-px transition-all duration-300 ${
                      isMenuOpen ? "opacity-0 scale-x-0" : "bg-ink-deep"
                    }`}
                  />
                  <span
                    className={`block h-px transition-all duration-300 origin-center ${
                      isMenuOpen
                        ? "bg-paper-creme -rotate-45 -translate-y-[5px]"
                        : "bg-ink-deep"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-[60] md:hidden p-2 -mr-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <span
                  className={`block h-px transition-all duration-300 origin-center ${
                    isMenuOpen
                      ? "bg-paper-creme rotate-45 translate-y-[7px]"
                      : "bg-ink-deep"
                  }`}
                />
                <span
                  className={`block h-px transition-all duration-300 ${
                    isMenuOpen
                      ? "opacity-0 scale-x-0 bg-paper-creme"
                      : "bg-ink-deep"
                  }`}
                />
                <span
                  className={`block h-px transition-all duration-300 origin-center ${
                    isMenuOpen
                      ? "bg-paper-creme -rotate-45 -translate-y-[7px]"
                      : "bg-ink-deep"
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* ── Fullscreen Luxury Menu Overlay ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ink-deep"
          >
            <div className="h-full overflow-y-auto pt-20 md:pt-24 pb-12">
              <div className="container-wide">
                {/* Menu Sections Grid */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
                  {menuSections.map((section, sIndex) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + sIndex * 0.08,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <p className="text-[10px] tracking-[0.2em] uppercase text-paper-creme/30 mb-6 font-sans font-medium">
                        {section.title}
                      </p>
                      <div className="space-y-0">
                        {section.items.map((item, iIndex) => (
                          <motion.div
                            key={item.href + item.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.25 + sIndex * 0.08 + iIndex * 0.05,
                              duration: 0.4,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="group block py-4 border-b border-paper-creme/8 hover:border-paper-creme/20 transition-colors duration-300"
                            >
                              <span className="block font-serif text-lg md:text-xl text-paper-creme/90 group-hover:text-paper-creme transition-colors duration-300">
                                {item.label}
                              </span>
                              <span className="block text-[12px] text-paper-creme/30 mt-1 font-sans">
                                {item.description}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Row — CTAs & Contact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="border-t border-paper-creme/10 pt-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    {/* Quick CTAs */}
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="/start-a-project"
                        onClick={closeMenu}
                        className="inline-flex px-6 py-3 text-[11px] tracking-[0.14em] uppercase border border-paper-creme/30 text-paper-creme hover:bg-paper-creme hover:text-ink-deep transition-all duration-300"
                      >
                        Book a Consult
                      </Link>
                      <Link
                        href="/weddings/wedding-sample-kit"
                        onClick={closeMenu}
                        className="inline-flex px-6 py-3 text-[11px] tracking-[0.14em] uppercase text-paper-creme/50 hover:text-paper-creme transition-colors duration-300"
                      >
                        Order Sample Kit →
                      </Link>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-6">
                      <a
                        href="https://www.instagram.com/famousletterpressindia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] tracking-[0.14em] uppercase text-paper-creme/30 hover:text-paper-creme transition-colors duration-300"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://wa.me/919366012345"
                        className="text-[11px] tracking-[0.14em] uppercase text-paper-creme/30 hover:text-paper-creme transition-colors duration-300"
                      >
                        WhatsApp
                      </a>
                      <a
                        href="mailto:hello@famousletterpress.com"
                        className="text-[11px] tracking-[0.14em] uppercase text-paper-creme/30 hover:text-paper-creme transition-colors duration-300"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

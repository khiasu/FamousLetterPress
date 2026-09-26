"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  {
    label: "Weddings",
    href: "/weddings",
    children: [
      { label: "Wedding Stationery", href: "/weddings/wedding-stationery" },
      { label: "Wedding Sample Kit", href: "/weddings/wedding-sample-kit" },
      { label: "Early Bride", href: "/weddings/early-bride" },
    ],
  },
  { label: "Business Cards", href: "/business-cards" },
  { label: "Personalised Stationery", href: "/personalised-stationery" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export interface HeaderProps {
  logoUrl?: string;
  announcementActive?: boolean;
  announcementBarText?: string;
}

export function Header({
  logoUrl = "https://famousletterpress.com/wp-content/uploads/2022/06/FMS-new-logo-1-100x100.png",
  announcementActive = false,
  announcementBarText,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {announcementActive && announcementBarText && (
        <div className="bg-stone-900 text-stone-100 text-[11px] font-mono tracking-widest uppercase py-2 px-4 text-center z-50 relative">
          {announcementBarText}
        </div>
      )}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)] ${
          announcementActive && announcementBarText ? "top-[32px]" : "top-0"
        } ${
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_var(--color-sand)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <nav
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "h-16 lg:h-18" : "h-20 lg:h-24"
            }`}
            aria-label="Primary navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 group flex items-center gap-3"
              aria-label="Famous Letterpress — Home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl || "https://famousletterpress.com/wp-content/uploads/2022/06/FMS-new-logo-1-100x100.png"}
                alt="Famous Letterpress Seal"
                className="w-8 h-8 lg:w-9 lg:h-9 object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform"
              />
              <span className="font-serif text-xl lg:text-2xl tracking-wide text-ink">
                <span className="font-light">Famous</span>{" "}
                <span className="font-semibold">Letterpress</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.href)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="relative text-sm tracking-wide text-charcoal hover:text-ink transition-colors duration-300 py-2 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-sage group-hover:w-full transition-all duration-500 ease-[var(--ease-out-expo)]" />
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-warm-white border border-sand rounded-sm shadow-lg py-2 min-w-[220px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-2.5 text-sm text-charcoal hover:text-ink hover:bg-cream transition-colors duration-200"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* CTA */}
              <Link
                href="/start-a-project"
                className="ml-2 px-5 py-2.5 text-sm tracking-wide bg-ink hover:bg-charcoal transition-colors duration-300 rounded-sm"
                style={{ color: 'var(--color-ivory)' }}
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-10 lg:hidden p-2 -mr-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-px bg-ink transition-all duration-300 origin-center ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-[9px]"
                      : ""
                  }`}
                />
                <span
                  className={`block h-px bg-ink transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-ink transition-all duration-300 origin-center ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-[9px]"
                      : ""
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-ivory shadow-2xl flex flex-col"
              aria-label="Mobile navigation"
            >
              <div className="h-20" /> {/* Spacer for header */}

              <div className="flex-1 overflow-y-auto px-8 py-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.05,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-serif text-ink border-b border-sand/50"
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <div className="pl-4 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-taupe hover:text-ink transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + navigation.length * 0.05,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-8"
                >
                  <Link
                    href="/start-a-project"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3.5 bg-ink text-sm tracking-wide hover:bg-charcoal transition-colors duration-300 rounded-sm"
                    style={{ color: 'var(--color-ivory)' }}
                  >
                    Start a Project
                  </Link>
                </motion.div>

                {/* Contact info */}
                <div className="mt-10 pt-6 border-t border-sand/50">
                  <p className="eyebrow text-taupe mb-3">Get in touch</p>
                  <a
                    href="https://wa.me/919366012345"
                    className="block text-sm text-charcoal py-1.5 hover:text-ink transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:hello@famousletterpress.com"
                    className="block text-sm text-charcoal py-1.5 hover:text-ink transition-colors"
                  >
                    hello@famousletterpress.com
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

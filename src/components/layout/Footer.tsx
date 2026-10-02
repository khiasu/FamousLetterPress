"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { SOCIAL_PROFILES } from "@/components/ui/SocialIcons";

const QUICK_LINKS = [
  { label: "Wedding Invitations", href: "/weddings" },
  { label: "Executive Business Cards", href: "/business-cards" },
  { label: "Our Process & Craft", href: "/process" },
  { label: "Order Sample Kit", href: "/weddings/wedding-sample-kit" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Contact & Consult", href: "/contact" },
  {
    label: "Terms & Conditions",
    href: "https://famousletterpress.com/terms-conditions/",
    external: true,
  },
  {
    label: "Privacy Policy",
    href: "https://famousletterpress.com/privacy-policy/",
    external: true,
  },
];

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const footer = footerRef.current;
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When footer starts coming into the viewport
      if (rect.top <= windowHeight - 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative bg-[#FAF7F2] border-t-2 border-[#E5E0D5] text-[#0e0e0e] transition-all duration-700 ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-40 translate-y-8"
      }`}
      role="contentinfo"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 md:px-14 pt-10 sm:pt-14 pb-12 sm:pb-16">
        {/* Top: Brand Header with Logo + Social Handles */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[rgba(14,14,14,0.09)]">
          {/* Brand Identity with Circular Seal Logo and clean spacing */}
          <div className="pl-1 sm:pl-2">
            <Link href="/" className="inline-flex items-center gap-3.5 sm:gap-4 group select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo.png"
                alt="Famous Letterpress Seal"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full border border-[rgba(14,14,14,0.16)] p-0.5 bg-white transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="font-serif text-2xl sm:text-[25px] font-semibold tracking-[-0.015em] text-[#0e0e0e]"
                  style={{
                    fontFamily:
                      "var(--font-cormorant-garamond), 'Cormorant Garamond', 'Bodoni Moda', serif",
                  }}
                >
                  Famous Letterpress
                </span>
                <span className="text-[9px] uppercase tracking-[0.26em] text-[#7b7566] font-sans mt-1.5 font-medium">
                  Handcrafted in Nagaland
                </span>
              </div>
            </Link>
          </div>

          {/* Social Icons — Clean Monochrome Geometry */}
          <div className="flex items-center gap-2.5 pl-1 sm:pl-0 sm:pr-2">
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
                  className="w-8.5 h-8.5 rounded-full border border-[rgba(14,14,14,0.18)] hover:border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs group"
                >
                  <Icon className="w-3.5 h-3.5 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Middle: Streamlined Quick Links Grid (Core Critical Pages) */}
        <div className="pt-8 pl-1 sm:pl-2">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[9.5px] font-mono tracking-widest text-[#888]">
              01
            </span>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-mono font-medium text-black">
              Quick Links
            </h4>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-6 pb-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                {"external" in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13.5px] text-[#444] hover:text-black transition-colors block leading-snug"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-[#444] hover:text-black transition-colors block leading-snug"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

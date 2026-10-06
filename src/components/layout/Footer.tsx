"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { SOCIAL_PROFILES, LocationIcon } from "@/components/ui/SocialIcons";

const QUICK_LINKS = [
  { label: "Our Work", href: "/our-work" },
  { label: "Wedding Invites", href: "/our-work/wedding-invites" },
  { label: "Business Cards", href: "/our-work/business-cards" },
  { label: "Our Process & Craft", href: "/process" },
  { label: "Order Sample Kit", href: "/weddings/wedding-sample-kit" },
  { label: "FAQs", href: "/faq" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
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
      className={`relative bg-[#ECECEC] text-[#0e0e0e] transition-all duration-700 ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-40 translate-y-8"
      }`}
      role="contentinfo"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 md:px-14 py-10 sm:py-14">
        {/* Top: Brand + Social — single row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-8">
          <Link href="/" className="inline-flex items-center gap-3.5 sm:gap-4 group select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo.png"
              alt="Famous Letterpress Seal"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
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
              <span className="text-[10px] font-mono tracking-[0.24em] text-[#8A857D] uppercase mt-1">
                Handcrafted in Nagaland
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-black">
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
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-6 mb-8">
          {QUICK_LINKS.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("http") ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#555] hover:text-black transition-colors block leading-snug"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-[13px] text-[#555] hover:text-black transition-colors block leading-snug"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Bottom: Left-aligned Location Pin + Address redirecting to Google Maps */}
        <div className="pt-6 border-t border-[rgba(14,14,14,0.08)] flex items-center text-[12px] sm:text-[12.5px] text-[#6E6961]">
          <a
            href="https://maps.google.com/?q=Famous+Letterpress+House+42+Circular+Road+Dimapur+Nagaland+797112"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-black transition-colors group cursor-pointer"
          >
            <LocationIcon className="w-4 h-4 text-black shrink-0 transition-transform group-hover:scale-110" />
            <address className="not-italic font-sans text-[12px] sm:text-[12.5px]">
              House 42, Circular Road, Dimapur, Nagaland &mdash; 797112
            </address>
          </a>
        </div>
      </div>
    </footer>
  );
}

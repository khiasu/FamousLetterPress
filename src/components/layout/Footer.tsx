"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { SOCIAL_PROFILES } from "@/components/ui/SocialIcons";

const QUICK_LINKS = [
  { label: "Wedding Invitations", href: "/our-work/wedding-invites" },
  { label: "Business Cards", href: "/our-work/business-cards" },
  { label: "Our Process & Craft", href: "/process" },
  { label: "Order Sample Kit", href: "/weddings/wedding-sample-kit" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Contact & Consult", href: "/contact" },
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
      className={`relative bg-[#0B0B0B] border-t border-[#222222] text-white transition-all duration-700 ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-40 translate-y-8"
      }`}
      role="contentinfo"
    >
      <div className="w pt-12 sm:pt-16 pb-12 sm:pb-16">
        {/* Top: Brand Header with Logo + Social Handles */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-[#1F1F1F]">
          {/* Brand Identity with Circular Seal Logo and clean spacing */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3.5 sm:gap-4 group select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo.png"
                alt="Famous Letterpress Seal"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full brightness-110 contrast-125 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="font-serif text-2xl sm:text-[25px] font-semibold tracking-[-0.015em] text-white"
                  style={{
                    fontFamily:
                      "var(--font-cormorant-garamond), 'Cormorant Garamond', 'Bodoni Moda', serif",
                  }}
                >
                  Famous Letterpress
                </span>
                <span className="text-[10px] font-mono tracking-[0.24em] text-[#888888] uppercase mt-1">
                  Artisanal Pressroom &middot; India
                </span>
              </div>
            </Link>
          </div>

          {/* Social Icons — Facebook, Instagram, YouTube */}
          <div className="flex items-center gap-4 text-white">
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
                  className="w-9 h-9 rounded-full bg-[#171717] hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer border border-[#262626] hover:border-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Middle: Streamlined Quick Links Grid */}
        <div className="pt-10 pb-10 border-b border-[#1F1F1F]">
          <h4 className="text-[10.5px] uppercase tracking-[0.24em] font-mono font-medium text-[#777777] mb-6">
            Explore &middot; Studio Links
          </h4>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-8">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                {"external" in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13.5px] text-[#A0A0A0] hover:text-white transition-colors block leading-snug font-light"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-[#A0A0A0] hover:text-white transition-colors block leading-snug font-light"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom: Studio Colophon & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#666666] font-light">
          <p>
            &copy; {new Date().getFullYear()} Famous Letterpress. Handcrafted on 1950s Heidelberg platens in Nagaland, India.
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-[#555555]">
            Bespoke Wedding Suites &middot; Luxury Stationery
          </p>
        </div>
      </div>
    </footer>
  );
}

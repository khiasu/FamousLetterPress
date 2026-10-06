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
      className={`relative bg-[#C8C3BC] border-t-2 border-[#B5B0A8] text-[#0e0e0e] transition-all duration-700 ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-40 translate-y-8"
      }`}
      role="contentinfo"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 md:px-14 pt-10 sm:pt-14 pb-12 sm:pb-16">
        {/* Top: Brand Header with Logo + Social Handles */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[rgba(14,14,14,0.12)]">
          {/* Brand Identity with Circular Seal Logo and clean spacing */}
          <div className="pl-1 sm:pl-2">
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
                <span className="text-[10px] font-mono tracking-[0.24em] text-[#5A5550] uppercase mt-1">
                  Artisanal Pressroom &middot; India
                </span>
              </div>
            </Link>
          </div>

          {/* Social Icons — Facebook, Instagram, Pinterest, YouTube */}
          <div className="flex items-center gap-4 pl-1 sm:pl-0 sm:pr-2 text-black">
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

        {/* Middle: Quick Links Grid */}
        <div className="pt-8 pl-1 sm:pl-2">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-mono font-medium text-[#3A3530] mb-5">
            Quick Links
          </h4>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-6 pb-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                {"external" in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13.5px] text-[#3A3530] hover:text-black transition-colors block leading-snug"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-[#3A3530] hover:text-black transition-colors block leading-snug"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Studio Address */}
        <div className="pt-8 pb-8 pl-1 sm:pl-2 border-t border-[rgba(14,14,14,0.12)] mt-6">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-mono font-medium text-[#3A3530] mb-3">
            Studio
          </h4>
          <address className="not-italic text-[13.5px] text-[#3A3530] leading-relaxed">
            House 42, Circular Road<br />
            Dimapur, Nagaland — 797112, India
          </address>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-6 border-t border-[rgba(14,14,14,0.12)] pl-1 sm:pl-2">
          <p className="text-xs text-[#5A5550] font-light">
            &copy; {new Date().getFullYear()} Famous Letterpress. Handcrafted on 1950s Heidelberg platens in Nagaland, India.
          </p>
        </div>
      </div>
    </footer>
  );
}

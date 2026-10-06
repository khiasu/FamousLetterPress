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
  { label: "Chat on WhatsApp", href: "https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about..." },
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
      className={`relative bg-[#EDE8E0] text-[#0e0e0e] transition-all duration-700 ease-out will-change-transform ${
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
                Artisanal Pressroom &middot; India
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

        {/* Bottom: Copyright + Address — single compact row */}
        <div className="pt-6 border-t border-[rgba(14,14,14,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11.5px] text-[#8A857D]">
          <p>
            &copy; {new Date().getFullYear()} Famous Letterpress. Handcrafted on 1950s Heidelberg platens in Nagaland, India.
          </p>
          <address className="not-italic">
            House 42, Circular Road, Dimapur, Nagaland &mdash; 797112
          </address>
        </div>
      </div>
    </footer>
  );
}

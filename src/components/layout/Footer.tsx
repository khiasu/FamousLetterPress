"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { SOCIAL_PROFILES } from "@/components/ui/SocialIcons";

const FOOTER_SECTIONS = [
  {
    title: "What We Make",
    links: [
      { label: "Wedding Invitations", href: "/weddings" },
      { label: "Wedding Stationery Suites", href: "/weddings/wedding-stationery" },
      { label: "Executive Business Cards", href: "/business-cards" },
      { label: "Personalised Stationery", href: "/personalised-stationery" },
      { label: "Portfolio & Archive", href: "/work" },
    ],
  },
  {
    title: "How We Make It",
    links: [
      { label: "Cotton Papers & Foils", href: "/materials" },
      { label: "Letterpress Craft & Bite", href: "/process" },
      { label: "The Wedding Sample Box", href: "/weddings/wedding-sample-kit" },
      { label: "Business Card Sample Kit", href: "/business-cards/business-card-sample-kit" },
    ],
  },
  {
    title: "Who We Make For",
    links: [
      { label: "Couples & Brides", href: "/weddings" },
      { label: "Early Bride Consult", href: "/weddings/early-bride" },
      { label: "Channel Partners & Trade", href: "/channel-partners" },
      { label: "Our Story & Studio", href: "/about" },
      { label: "Frequently Asked Questions", href: "/faq" },
    ],
  },
  {
    title: "Quick Links & Legal",
    links: [
      { label: "Start a Project", href: "/start-a-project" },
      { label: "Contact Studio", href: "/contact" },
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
    ],
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
    // Check initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative bg-[#FAF7F2] border-t-2 border-[#E5E0D5] text-[#0e0e0e] transition-all duration-700 ease-out will-change-transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-40 translate-y-8"
      }`}
      role="contentinfo"
    >
      <div className="w py-14 sm:py-20">
        {/* Top: Brand Header with Logo + Story + Social Handles */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-12 border-b border-[rgba(14,14,14,0.1)]">
          {/* Brand Identity with Circular Seal Logo */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3.5 group mb-4 select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo.png"
                alt="Famous Letterpress Seal"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full border border-[rgba(14,14,14,0.16)] p-0.5 bg-[#FAF8F5] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="font-serif text-2xl sm:text-[26px] font-semibold tracking-[-0.015em] text-[#0e0e0e]"
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

            <p className="text-[13.5px] text-[#444] font-light leading-relaxed max-w-sm mb-4">
              Artisanal letterpress &amp; hot foil printing studio based in Dimapur, Nagaland.
              Pressed slowly, one impression at a time on 600–900gsm pure cotton rag.
            </p>

            <p className="text-[11px] font-mono tracking-wider text-[#888] uppercase">
              Dimapur, Nagaland, India &middot; Est. 2008
            </p>
          </div>

          {/* Consultation CTA & Social Cluster */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6">
            <div className="text-left lg:text-right">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#888] block mb-2 font-medium">
                Connect &amp; Follow
              </span>
              <a
                href="https://wa.me/+918416099340"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
              >
                <span>Consult on WhatsApp</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Social Icons — Clean, Crisp, Matching Black & White Geometry */}
            <div className="flex items-center gap-2.5">
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
                    className="w-9 h-9 rounded-full border border-[rgba(14,14,14,0.18)] hover:border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs group"
                  >
                    <Icon className="w-4 h-4 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Middle: Structured 4-Column Editorial Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-12 border-b border-[rgba(14,14,14,0.08)]">
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[9.5px] font-mono tracking-widest text-[#888]">
                  0{idx + 1}
                </span>
                <h4 className="text-[11px] uppercase tracking-[0.2em] font-mono font-medium text-black">
                  {section.title}
                </h4>
              </div>

              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
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
            </div>
          ))}
        </div>

        {/* Bottom: Legal & Geographic Origin */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono tracking-wider text-[#888]">
          <p>
            &copy; 2026 Famous Letterpress Studio. All rights reserved.
          </p>

          <p className="text-[10.5px]">
            Northeast India &middot; Vintage Heidelberg Platen Impressions
          </p>
        </div>
      </div>
    </footer>
  );
}

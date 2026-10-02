import Link from "next/link";
import { SOCIAL_PROFILES } from "@/components/ui/SocialIcons";

const FOOTER_LINKS = [
  { label: "Weddings", href: "/weddings" },
  { label: "Business Cards", href: "/business-cards" },
  { label: "Work", href: "/work" },
  { label: "Materials", href: "/materials" },
  { label: "Process", href: "/process" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Start a Project", href: "/start-a-project" },
];

export function Footer() {
  return (
    <footer
      className="bg-white border-t border-[rgba(14,14,14,0.12)]"
      role="contentinfo"
    >
      {/* Main Footer Content */}
      <div className="w py-14 sm:py-16">
        {/* Top: Brand + Description */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-10 pb-10 border-b border-[rgba(14,14,14,0.1)]">
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-3">
              <span
                className="font-serif text-xl sm:text-2xl font-medium tracking-[-0.01em] text-[#0e0e0e]"
                style={{
                  fontFamily:
                    "var(--font-cormorant-garamond), 'Cormorant Garamond', 'Bodoni Moda', serif",
                }}
              >
                Famous Letterpress
              </span>
            </Link>
            <p className="text-[13px] text-[#3b372e] font-light leading-relaxed">
              Letterpress &amp; foil printing studio in Nagaland, India.
              Pressed one impression at a time on 600–900gsm cotton rag.
            </p>
          </div>

          {/* Social Links — Crisp Black & White Icons */}
          <div className="flex items-center gap-3">
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

        {/* Navigation Links — single horizontal row */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#4a463c] hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom: Copyright + Legal */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[rgba(14,14,14,0.08)]">
          <p className="text-[10.5px] tracking-[0.12em] text-[#7b7566] font-mono">
            &copy; 2026 Famous Letterpress Studio. All rights reserved.
          </p>
          <div className="flex gap-5 text-[10.5px] tracking-[0.12em] text-[#7b7566] font-mono">
            <a
              href="https://famousletterpress.com/terms-conditions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Terms
            </a>
            <a
              href="https://famousletterpress.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

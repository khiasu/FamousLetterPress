import Link from "next/link";

const footerNav = {
  services: {
    title: "Atelier Work",
    links: [
      { label: "Wedding Stationery", href: "/weddings/wedding-stationery" },
      { label: "Business Cards", href: "/business-cards" },
      { label: "Personalised Stationery", href: "/personalised-stationery" },
      { label: "Wax Seals & Embellishments", href: "/work" },
    ],
  },
  craft: {
    title: "The Craft",
    links: [
      { label: "Letterpress Method", href: "/process" },
      { label: "Pure Cotton Papers", href: "/materials" },
      { label: "Workshop Journal", href: "/journal" },
      { label: "About Atelier", href: "/about" },
    ],
  },
  samples: {
    title: "Sample Kits",
    links: [
      { label: "Wedding Sample Box", href: "/weddings/wedding-sample-kit" },
      { label: "Business Card Kit", href: "/business-cards/business-card-sample-kit" },
      { label: "Channel Partners", href: "/channel-partners" },
      { label: "Start a Project", href: "/start-a-project" },
    ],
  },
};

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--cr) var(--grain)",
        paddingTop: "64px",
        overflow: "hidden",
        borderTop: "1px solid var(--hair)",
      }}
      role="contentinfo"
    >
      <div className="w">
        {/* Top Atelier Info & Nav */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[rgba(14,14,14,0.14)]">
          {/* Atelier Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="lg mb-4 inline-flex">
              <i className="mk">F</i>
              <span>
                <b>FAMOUS</b>
                <em>Letterpress</em>
              </span>
            </Link>
            <p className="text-[13px] leading-relaxed text-[#3b372e] mt-4 max-w-xs font-light">
              Letterpress &amp; Foil printing studio based in Nagaland, India. Pressed one impression at a time on 600–900gsm cotton rag.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.values(footerNav).map((col) => (
              <div key={col.title}>
                <p className="k mb-4">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#4a463c] hover:text-black transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Row: Quick Nav & Socials */}
        <div className="pt-8 pb-4 flex flex-wrap items-center justify-between gap-6">
          <nav className="flex flex-wrap gap-6 text-[10.5px] uppercase tracking-[0.24em] text-[#0e0e0e]">
            <Link href="/faq" className="hover:opacity-60 transition-opacity">FAQ</Link>
            <a href="https://famousletterpress.com/terms-conditions/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">T&amp;C</a>
            <Link href="/start-a-project" className="hover:opacity-60 transition-opacity">Design Guidelines</Link>
          </nav>

          <p className="text-[12px] tracking-[0.1em] text-[var(--mute)]">
            <a href="https://www.instagram.com/famousletterpressindia/" target="_blank" rel="noopener noreferrer" className="hover:text-black">Instagram</a>
            {" "}&middot;{" "}
            <a href="https://www.facebook.com/FamousLetterpress/" target="_blank" rel="noopener noreferrer" className="hover:text-black">Facebook</a>
            {" "}&middot;{" "}
            <a href="https://www.youtube.com/channel/UCpRrZSVggl79UKEQ3650WMQ" target="_blank" rel="noopener noreferrer" className="hover:text-black">YouTube</a>
            {" "}&middot;{" "}
            <a href="https://wa.me/+918416099340" target="_blank" rel="noopener noreferrer" className="hover:text-black">WhatsApp</a>
          </p>
        </div>
      </div>

      {/* Monumental Watermark */}
      <div
        className="d select-none pointer-events-none"
        style={{
          fontSize: "27vw",
          lineHeight: 0.74,
          whiteSpace: "nowrap",
          margin: "0 0 0 -1.5vw",
          color: "rgba(14,14,14,0.92)",
          paddingTop: "0.1em",
          height: "0.62em",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        Famous
      </div>

      {/* Bottom Bar */}
      <small
        style={{
          display: "block",
          padding: "14px 22px",
          fontSize: "10px",
          letterSpacing: "0.14em",
          color: "var(--mute)",
          background: "#fff",
          borderTop: "1px solid var(--hair)",
        }}
      >
        &copy; 2026 Famous Letterpress Atelier. All rights reserved. Handcrafted in Nagaland, India.
      </small>
    </footer>
  );
}


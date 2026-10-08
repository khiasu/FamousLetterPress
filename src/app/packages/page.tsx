import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Packages & Collections | Famous Letterpress",
  description:
    "Explore Famous Letterpress wedding packages, curated readymade suites, design templates, and custom bespoke stationery commissions.",
};

const readymadeSuites = [
  {
    id: "minimalist-cotton",
    title: "The Minimalist Cotton",
    tagline: "Pure black ink bite on 600gsm archival cotton rag",
    description: "Stripped of excess. Razor-sharp typographic hierarchy pressed deep into soft fluorescent white or natural cotton board.",
    idealFor: "Modern ceremonies, intimate destination weddings, and purist typographic aesthetics.",
    specs: ["1-Color Letterpress", "600gsm Cotton", "Matching Euro-Flap Envelopes"],
    price: "From ₹22,000 / 100 sets",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/FMS_3749-2500x2500.jpg",
  },
  {
    id: "champagne-botanical",
    title: "The Champagne Botanical",
    tagline: "Matte champagne hot foil paired with earthy ink",
    description: "Soft olive or charcoal letterpress combined with luminous warm champagne foil and hand-torn deckled edges.",
    idealFor: "Garden, vineyard, and heritage estate celebrations.",
    specs: ["Letterpress + Hot Foil Stamping", "Deckled Edges", "Botanical Liner"],
    price: "From ₹35,000 / 100 sets",
    image: "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4395-2000x2500.jpg",
  },
  {
    id: "heritage-crest",
    title: "The Heritage Crest",
    tagline: "Sculpted blind deboss monogram with matching crest seal",
    description: "Your intertwined bespoke initials debossed in relief without ink, creating an understated architectural texture.",
    idealFor: "Classic ballroom, palace, and multi-day family weddings.",
    specs: ["Blind Sculpted Deboss", "Custom Wax Seals", "Illustrated Flap Liners"],
    price: "From ₹40,000 / 100 sets",
    image: "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4405-2000x2500.jpg",
  },
  {
    id: "modern-arch",
    title: "The Modern Arch",
    tagline: "Architectural custom die-cut with tactile impression",
    description: "Curved top arch shape cut with bespoke steel dies, pressed with warm taupe ink and blind debossed details.",
    idealFor: "Contemporary editorial weddings and fashion-forward couples.",
    specs: ["Custom Steel Die-Cutting", "Deep Letterpress Bite", "Curved Arch Card"],
    price: "From ₹38,000 / 100 sets",
    image: "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4408-2000x2500.jpg",
  },
  {
    id: "royal-gilded",
    title: "The Royal Gilded",
    tagline: "800gsm duplexed board with mirror gold edge gilding",
    description: "Our most substantial suite. Two heavyweight cotton boards duplexed together, finished with hand-polished mirror gold edges.",
    idealFor: "Grand celebrations requiring maximum tactile substance.",
    specs: ["800gsm Duplexed Cotton", "Mirror Edge Gilding", "Dual Hot Foil Stamping"],
    price: "From ₹48,000 / 100 sets",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/bizkit-01-1200x1200.jpg",
  },
];

const packageTiers = [
  {
    tier: "01",
    name: "Design Templates",
    summary: "Select from our studio layout library",
    desc: "Choose from 12 pre-designed typographical layouts. You provide names, dates, and wording; we customize ink tones and foil finishes. Fastest turnaround with proven proportions.",
    turnaround: "7–10 Business Days",
    cta: "Explore Templates",
    href: "/weddings/early-bride?type=template",
  },
  {
    tier: "02",
    name: "Readymade Curations",
    summary: "5 fully formulated aesthetic suites",
    desc: "Curated combinations of paper weights, envelope liners, edge treatments, and seal designs crafted by our studio. Balanced aesthetics with straightforward pricing.",
    turnaround: "10–14 Business Days",
    cta: "View Readymades Below",
    href: "#readymades",
  },
  {
    tier: "03",
    name: "Custom Bespoke Commission",
    summary: "One-of-one original commission",
    desc: "Complete ground-up collaboration with founder Akanito. We formulate bespoke monogram crests, commission hand-drawn venue sketches, and create custom steel cutting dies.",
    turnaround: "3–5 Weeks",
    cta: "Inquire Bespoke",
    href: "/weddings/early-bride?type=bespoke",
  },
];

export default function PackagesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-[#888888] font-sans">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">Packages</span>
              </div>
              <p className="eyebrow mb-2">Editorial Collections</p>
              <h1 className="text-black mt-2 mb-6 font-serif">
                Three ways to craft your{" "}
                <em className="font-light">wedding suite.</em>
              </h1>
              <p className="text-base md:text-lg text-[#555555] max-w-2xl font-light leading-relaxed mb-8">
                Whether you prefer the simplicity of our studio templates, the curated harmony of our 5 Readymades, or an entirely bespoke commission.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The 3 Tiers ── */}
      <section className="section bg-white" aria-label="Package Paths">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {packageTiers.map((tier, idx) => (
              <Reveal key={tier.name} delay={idx * 0.1}>
                <div className="bg-white border border-[#E5E5E5] p-8 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#888888] block mb-2">
                      Option {tier.tier}
                    </span>
                    <h2 className="text-xl font-serif text-black mb-1">{tier.name}</h2>
                    <p className="text-xs uppercase tracking-wider text-[#888888] font-sans mb-4">
                      {tier.summary}
                    </p>
                    <p className="text-xs md:text-sm text-[#555555] leading-relaxed mb-6 font-light">
                      {tier.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E5E5E5]">
                    <div className="flex justify-between items-center mb-4 text-[11px] font-sans">
                      <span className="text-[#888888]">Production:</span>
                      <span className="text-black font-medium">{tier.turnaround}</span>
                    </div>
                    <Link
                      href={tier.href}
                      className="inline-flex w-full justify-center py-3 text-[11px] tracking-[0.14em] uppercase bg-black text-white hover:bg-[#222] transition-colors"
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section: The 5 Curated Readymades ── */}
      <section id="readymades" className="section bg-white" aria-label="Curated Readymades">
        <div className="container-wide">
          <div className="max-w-xl mb-14">
            <Reveal>
              <p className="eyebrow mb-2">The Readymade Collection</p>
              <h2 className="mb-4">
                Five signature <em className="font-light">curated suites</em>
              </h2>
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
                Pre-formulated suites pairing harmonious cotton weights, envelope shapes, and finishes tested across hundreds of press hours.
              </p>
            </Reveal>
          </div>

          <div className="space-y-12">
            {readymadeSuites.map((suite, idx) => (
              <Reveal key={suite.id} delay={0.1}>
                <div className="bg-white border border-[#E5E5E5] overflow-hidden">
                  <div className="grid lg:grid-cols-12 items-center">
                    {/* Visual */}
                    <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="aspect-[4/3] bg-[#F7F7F7] relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={suite.image}
                          alt={suite.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-6 p-8 md:p-12 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                      <span className="text-[10px] font-mono tracking-widest text-[#888888] block mb-2">
                        Suite 0{idx + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif text-black mb-2">{suite.title}</h3>
                      <p className="text-xs uppercase tracking-wider text-[#555555] font-sans mb-4">
                        {suite.tagline}
                      </p>
                      <p className="text-xs md:text-sm text-[#555555] leading-relaxed mb-6 font-light">
                        {suite.description}
                      </p>

                      <div className="space-y-2 mb-6 text-xs text-[#555555]">
                        <div className="flex gap-2">
                          <strong className="text-black">Ideal for:</strong>
                          <span>{suite.idealFor}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {suite.specs.map((spec) => (
                            <span key={spec} className="px-2.5 py-1 bg-white border border-[#E5E5E5] text-[10px] tracking-wide uppercase text-black">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E5E5E5]">
                        <div className="font-serif text-lg text-black">{suite.price}</div>
                        <Link
                          href={`/weddings/early-bride?suite=${suite.id}`}
                          className="inline-flex px-6 py-2.5 text-[11px] tracking-[0.14em] uppercase bg-black text-white hover:bg-[#222] transition-colors"
                        >
                          Select This Suite
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-lg bg-white text-black border-t border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="k mb-2">Questions &amp; Quotes</p>
              <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1.05] font-serif text-black mb-4">
                Not sure which package <i>fits your wedding?</i>
              </h2>
              <p className="text-sm md:text-base text-[#555] mb-8 leading-relaxed font-light">
                Order our Wedding Sample Kit to feel the paper and foil variations in person, or chat with our founder to review guest counts and ballpark budgets.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/weddings/wedding-sample-kit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[11px] sm:text-xs uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
                >
                  Order Sample Kit (₹1,500)
                </Link>
                <Link
                  href="/our-work/wedding-invites#early-bride"
                  className="ln"
                >
                  Book a Consultation &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

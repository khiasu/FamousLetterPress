import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSServices, getCMSSampleKits, getCMSPortfolio } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Luxury Letterpress Business Cards | Famous Letterpress",
  description:
    "Handcrafted letterpress business cards on 600gsm cotton board, hot foil stamping, and foil edge gilding. Printed on vintage platen presses in Nagaland, India.",
};

const cardFinishes = [
  {
    title: "600gsm & 900gsm Pure Cotton",
    desc: "Unbendable, ultra-heavyweight cotton board that makes an immediate, unforgettable physical impression.",
    detail: "100% Tree-Free Cotton Rag",
  },
  {
    title: "Precision Hot Foil Stamping",
    desc: "Mirror gold, satin silver, copper, rose gold, or high-contrast gloss black applied under calibrated heat and pressure.",
    detail: "Imported German Stamping Foils",
  },
  {
    title: "Metallic Edge Gilding & Painting",
    desc: "Hand-applied reflective foil gilding or custom Pantone color painted edges that elevate the profile of every stack.",
    detail: "Beveled & Hand-Polished",
  },
  {
    title: "Double-Sided Duplexing",
    desc: "Two distinct stocks bonded back-to-back, allowing deep bite impressions on both sides with zero opposite-side show-through.",
    detail: "Up to 1200gsm Combined Stock",
  },
];

const technicalSpecs = [
  {
    title: "Vector Artwork Format",
    detail: "Submit files in Adobe Illustrator (.AI), PDF, or EPS with all typography converted to vector outlines.",
  },
  {
    title: "Minimum Line Weight",
    detail: "0.25pt for positive letterpress impression lines; 0.4pt for reverse knockouts and foil stamping.",
  },
  {
    title: "Typography Scale",
    detail: "Minimum 6pt for sans-serif fonts; 7pt for high-contrast serifs to avoid hairline fill-in during ink bite.",
  },
  {
    title: "Standard Dimensions",
    detail: "Standard 89 × 51 mm (3.5 × 2.0 in) or bespoke bespoke European/square custom die cuts.",
  },
];

export default function BusinessCardsPage() {
  const service = getCMSServices()["business-cards"];
  const sampleKit = getCMSSampleKits()["business-card-sample-kit"];
  const cardPortfolio = getCMSPortfolio().filter((item) => item.category === "business-cards");

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
                <span className="text-black">Business Cards</span>
              </div>
              <p className="eyebrow mb-2">Executive Identity</p>
              <h1 className="text-black mt-2 mb-6 font-serif">
                Business cards that make an{" "}
                <em className="font-light">unforgettable impression.</em>
              </h1>
              <p className="text-base md:text-lg text-[#555555] max-w-2xl font-light leading-relaxed mb-8">
                In a digital world, tangible quality is your most persuasive competitive edge. Hand-fed on vintage platen presses into 600–900gsm pure cotton board.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/start-a-project?service=business-cards"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-black text-white hover:bg-[#222] transition-colors"
                >
                  Request Card Quote
                </Link>
                <Link
                  href="/business-cards/business-card-sample-kit"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-[#E5E5E5] text-black hover:border-black/40 transition-colors"
                >
                  Order Sample Kit (₹{sampleKit.price})
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Showcase Carousel Reel ── */}
      <section className="section bg-white" aria-label="Business Cards Showcase">
        <div className="container-wide mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <Reveal>
                <p className="eyebrow mb-3">Section 01 · Studio Portfolio</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2>
                  Cards pressed for <em className="font-light">distinguished practices</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link
                href="/work"
                className="text-[11px] tracking-[0.14em] uppercase text-[#888888] hover:text-black transition-colors"
              >
                View Studio Archive →
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Carousel Reel with Real Photos */}
        <div className="carousel-scroll pl-[clamp(1.25rem,5vw,3rem)] pr-6 mb-12">
          {[
            {
              image: "/assets/business-cards/FMS_3462.jpg",
              fallback: "https://famousletterpress.com/wp-content/uploads/2026/04/bizkit-01-1200x1200.jpg",
              title: "Studio Duplexed Edge-Gilded Card",
              stock: "600gsm Cotton · Gold Edge Foil",
            },
            {
              image: "/assets/business-cards/FMS_3764.jpg",
              fallback: "https://famousletterpress.com/wp-content/uploads/2026/04/bizkit-02-1200x1200.jpg",
              title: "Minimalist Deep Charcoal Impression",
              stock: "600gsm Fluorescent White Cotton",
            },
            {
              image: "/assets/business-cards/FMS_3781.jpg",
              fallback: "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4413-2000x2500.jpg",
              title: "Monogram Blind Deboss & Matte Foil",
              stock: "700gsm Colorplan & Cotton Sandwich",
            },
            ...cardPortfolio.map((p) => ({
              image: p.featuredImage,
              fallback: p.featuredImage,
              title: p.title,
              stock: p.paperStock || "600gsm Cotton",
            })),
          ].map((card, i) => (
            <div
              key={i}
              className="w-[75vw] md:w-[40vw] lg:w-[28vw] min-w-[280px] max-w-[420px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F7F7] group mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#555555] font-sans">
                    {card.stock}
                  </span>
                  <p className="font-serif text-base text-white mt-1 leading-snug">
                    {card.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: The Tactile Standard & Finishes ── */}
      <section className="section bg-white" aria-label="Finishes">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-2">Section 02 · Craft Standards</p>
                <h2 className="mb-6 font-serif">
                  The physics of an <em className="font-light">unbendable card.</em>
                </h2>
                <div className="space-y-4 text-sm text-[#555555] leading-relaxed">
                  <p>
                    Commercial digital cards printed on 300gsm artboard bend easily, peel at the edges, and feel flimsy. We print on 100% cotton board ranging from 600 to 900 gsm — up to three times thicker than conventional corporate stationery.
                  </p>
                  <p>
                    Because cotton fibres are soft and sponge-like, our cast-iron platen presses bite deep into the stock without distorting the reverse side.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5E5E5] space-y-2">
                  <p className="eyebrow">Production Specifications</p>
                  <div className="flex justify-between py-2 border-b border-[#E5E5E5] text-xs font-sans">
                    <span className="text-[#555555]">Standard Lead Time:</span>
                    <span className="text-black font-medium">{service.leadTime}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E5E5E5] text-xs font-sans">
                    <span className="text-[#555555]">Minimum Order:</span>
                    <span className="text-black font-medium">100 cards per name / artwork</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E5E5E5] text-xs font-sans">
                    <span className="text-[#555555]">Turnaround:</span>
                    <span className="text-black font-medium">Inspected & dispatched from Nagaland</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {cardFinishes.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.08}>
                  <div className="bg-white border border-[#E5E5E5] p-6 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#888888] block mb-2">
                        0{idx + 1}
                      </span>
                      <h3 className="font-serif text-lg text-black mb-2">{item.title}</h3>
                      <p className="text-xs text-[#555555] leading-relaxed mb-4">{item.desc}</p>
                    </div>
                    <span className="text-[10px] tracking-[0.14em] uppercase text-[#888888] font-sans pt-3 border-t border-[#E5E5E5]">
                      {item.detail}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Technical Artwork Guidelines ── */}
      <section className="section bg-white" aria-label="Technical Guidelines">
        <div className="container-wide">
          <div className="max-w-xl mb-12">
            <Reveal>
              <p className="eyebrow mb-2">Pre-Press Standards</p>
              <h2 className="mb-4">
                Preparing artwork for <em className="font-light">letterpress bite</em>
              </h2>
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
                Letterpress is a relief process. Follow these specifications to ensure maximum impression depth and razor-sharp type reproduction.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, i) => (
              <Reveal key={spec.title} delay={i * 0.08}>
                <div className="bg-white border border-[#E5E5E5] p-6 space-y-2">
                  <h3 className="text-sm font-serif text-black">{spec.title}</h3>
                  <p className="text-xs text-[#555555] leading-relaxed">{spec.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Sample Kit CTA ── */}
      <section className="section-lg bg-white text-black text-center border-t border-[#E5E5E5]">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow text-[#888888] mb-3">Tactile Proof</p>
            <h2 className="text-black mb-4">
              Hold the cards in your hands <em className="font-light">before committing.</em>
            </h2>
            <p className="text-sm md:text-base text-[#555555] mb-8 max-w-lg mx-auto leading-relaxed">
              Order our Business Card Sample Kit to inspect 600gsm cotton board, mirror edge gilding, blind deboss, and foil tones in person.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/business-cards/business-card-sample-kit"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-black text-white hover:bg-neutral-800 transition-colors"
              >
                Order Card Sample Kit (₹{sampleKit.price})
              </Link>
              <Link
                href="/start-a-project?service=business-cards"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                Submit Artwork for Estimate
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

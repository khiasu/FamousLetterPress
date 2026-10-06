import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSServices, getCMSPortfolio } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Bespoke Personalised Stationery & Correspondence | Famous Letterpress",
  description:
    "Handcrafted letterpress correspondence cards, personal writing sheets, and monogrammed stationery pressed on 100% cotton in Nagaland, India.",
};

const stationeryCategories = [
  {
    title: "Correspondence Cards (Flat Notecards)",
    desc: "A6 and bespoke sized 450–600gsm cotton cards pressed with your name, cipher, or monogram. Ideal for personal notes and formal introductions.",
  },
  {
    title: "Folded Note Cards",
    desc: "Classic bifold cards crafted from 300–400gsm cotton stock with blank interiors for thoughtful handwritten messages.",
  },
  {
    title: "Writing Sheets & Letterheads",
    desc: "120gsm laid or smooth watermarked cotton writing paper designed for fountain pens, paired with bespoke envelopes.",
  },
  {
    title: "Tissue & Pattern Lined Envelopes",
    desc: "Matching Euro-flap envelopes lined by hand with archival patterns, delicate tissue, or custom monograms.",
  },
];

export default function PersonalisedStationeryPage() {
  const service = getCMSServices()["personalised-stationery"];
  const pieces = getCMSPortfolio().filter((item) => item.category === "personalised");

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
                <span className="text-black">Personalised Stationery</span>
              </div>
              <p className="eyebrow mb-2">Mindful Correspondence</p>
              <h1 className="text-black mt-2 mb-6 font-serif">
                Personal stationery pressed with{" "}
                <em className="font-light">quiet distinction.</em>
              </h1>
              <p className="text-base md:text-lg text-[#555555] max-w-2xl font-light leading-relaxed mb-8">
                {service.tagline}. {service.shortDesc}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/start-a-project?service=personalised-stationery"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-black text-white hover:bg-[#222] transition-colors"
                >
                  Commission Stationery
                </Link>
                <a
                  href="https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about%20personalised%20stationery..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-[#E5E5E5] text-black hover:border-black/40 transition-colors"
                >
                  Speak With Studio
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Overview & Categories ── */}
      <section className="section bg-white" aria-label="Suite Elements">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-2">Art of the Letter</p>
                <h2 className="mb-6 font-serif">
                  A tangible mark of distinction in an age of{" "}
                  <em className="font-light">digital noise.</em>
                </h2>
                <div className="space-y-4 text-sm text-[#555555] font-light leading-relaxed">
                  {service.fullDescription.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                  <p className="eyebrow mb-1">Production Timeline</p>
                  <div className="font-serif text-xl text-black">{service.leadTime}</div>
                  <p className="text-xs text-[#888888] mt-1">Packaged in handmade studio gift presentation boxes.</p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {stationeryCategories.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.08}>
                  <div className="bg-white border border-[#E5E5E5] p-6 h-full">
                    <span className="text-[10px] font-mono tracking-widest text-[#888888] block mb-2">
                      Item 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg text-black mb-2">{item.title}</h3>
                    <p className="text-xs text-[#555555] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Highlight ── */}
      {pieces.length > 0 && (
        <section className="section bg-white" aria-label="Selected Commissions">
          <div className="container-wide">
            <div className="text-center max-w-lg mx-auto mb-12">
              <Reveal>
                <p className="eyebrow mb-2">Selected Suite</p>
                <h2 className="mb-4 font-serif">
                  Bespoke Monogram <em className="font-light">Commission</em>
                </h2>
              </Reveal>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pieces.map((piece) => (
                <Reveal key={piece.id}>
                  <div className="bg-white border border-[#E5E5E5] overflow-hidden group h-full flex flex-col justify-between">
                    <div>
                      <div className="aspect-[4/3] bg-[#F7F7F7] relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={piece.featuredImage}
                          alt={piece.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] mb-2 block">
                          {piece.paperStock}
                        </span>
                        <h3 className="font-serif text-2xl text-black mb-3">{piece.title}</h3>
                        <p className="text-xs md:text-sm text-[#555555] leading-relaxed mb-4 font-light">
                          {piece.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="flex flex-wrap justify-center gap-1.5 pt-4 border-t border-[#E5E5E5]">
                        {piece.techniques.map((t) => (
                          <span key={t} className="text-[10px] bg-white border border-[#E5E5E5] px-2.5 py-1 text-black font-sans tracking-wide">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="section-lg bg-white text-black text-center border-t border-[#E5E5E5]">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow text-[#888888] mb-3">Commission Your Suite</p>
            <h2 className="text-black mb-4">
              Start your personal <em className="font-light">writing collection.</em>
            </h2>
            <p className="text-sm md:text-base text-[#555555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
              Share your monogram ideas or correspondence needs. Our studio will prepare paper recommendations and typographic layouts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/start-a-project?service=personalised-stationery"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-black text-white hover:bg-neutral-800 transition-colors"
              >
                Start a Stationery Enquiry
              </Link>
              <a
                href="https://wa.me/919366012345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                Contact via WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

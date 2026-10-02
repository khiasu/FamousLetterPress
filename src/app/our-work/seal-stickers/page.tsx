import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seal Stickers & Wax Seals | Famous Letterpress",
  description:
    "Handcrafted die-cut cotton paper seal stickers and hand-poured custom crest wax seals made in Dimapur, Nagaland.",
};

const SEAL_COLLECTIONS = [
  {
    title: "Die-Cut Cotton Seal Stickers",
    desc: "Pressed on 300–450gsm pure cotton paper with high-tack backing. Simply peel and seal without wax residue.",
    img: "/assets/revamp/what-we-make/FMS_4043.jpg",
  },
  {
    title: "Hand-Poured Wax Seals",
    desc: "Organic pliable wax cast with engraved custom brass matrices, pre-backed with 3M adhesive tabs.",
    img: "/assets/revamp/what-we-make/FMS_6975.jpg",
  },
  {
    title: "Gold Foil Monogram Seals",
    desc: "Metallic mirror and matte gold hot foil stamped crests with precise die-cut circular edges.",
    img: "/assets/revamp/what-we-make/FMS_8669.jpg",
  },
  {
    title: "Blind Debossed Botanical Seals",
    desc: "Deep tactile relief without ink, creating an organic artisanal impression on invitation flaps.",
    img: "/assets/revamp/what-we-make/FMS_4039.jpg",
  },
];

export default function SealStickersPage() {
  return (
    <div className="min-h-screen text-black select-none">
      {/* ── Breadcrumb & Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[rgba(14,14,14,0.08)]">
        <div className="w">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link href="/our-work" className="hover:text-black transition-colors">Our Work</Link>
              <span>/</span>
              <span className="text-black font-medium">Seal Stickers</span>
            </div>
            <p className="k mb-2">Category 03 &bull; Cotton Seal Stickers & Wax Seals</p>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Seal <i>Stickers.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              Our die-cut seals are made from thick cotton paper and are easy to use and durable. Simply remove the release paper and seal your invite. No mess, no waste of envelopes.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                Request Price
              </Link>
              <Link href="/our-work" className="ln">
                &larr; View All Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Showcase ── */}
      <section className="py-16 md:py-24" aria-label="Seal Stickers Showcase">
        <div className="w">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {SEAL_COLLECTIONS.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-5 sm:p-6 rounded-xs shadow-[0_10px_24px_-12px_rgba(0,0,0,0.06)] group"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-[#F0ECE1] rounded-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif font-medium text-2xl text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 text-center border-t border-[rgba(14,14,14,0.08)]">
        <div className="max-w-2xl mx-auto px-6">
          <p className="k mb-2">Custom Seal Production</p>
          <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
            Custom crests, monograms & <i>motifs.</i>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Send us your monogram or vector artwork, and we will engrave precision dies for your seal stickers or wax stamps.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/start-a-project" className="btn">
              Order Custom Seals
            </Link>
            <Link href="/contact" className="ln">
              Contact Studio &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

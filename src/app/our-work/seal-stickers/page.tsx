import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seal Stickers & Wax Seals | Famous Letterpress",
  description:
    "Our die-cut seals are made from thick cotton paper and are easy to use and durable. Simply remove the release paper and seal your invite. No mess, no waste of envelopes.",
};

const SEAL_GALLERY = [
  {
    title: "Gold Foil Botanical Seal Stickers",
    desc: "Precision circular die-cut seals with metallic gold foil impression and permanent high-tack backing.",
    img: "/assets/our-work/seal-stickers/Layer-26seals.jpg",
  },
  {
    title: "Black Letterpress Cotton Seals",
    desc: "Crisp deep bite monogram seals printed on 450gsm thick cotton stock.",
    img: "/assets/our-work/seal-stickers/Layer-16seals.jpg",
  },
  {
    title: "Sage Green Wax Seal Die-Cut",
    desc: "Organic contoured seals designed to evoke the tactile beauty of hand-poured wax with peel-and-stick ease.",
    img: "/assets/our-work/seal-stickers/letterpress-wedding-green-wax-seal.jpg",
  },
  {
    title: "Embossed Crest Seal Stickers",
    desc: "Sculptural debossed seal matrices creating three-dimensional tactile texture on envelope flaps.",
    img: "/assets/our-work/seal-stickers/Layer-25seals.jpg",
  },
  {
    title: "Organic Hand-Cast Wax Seals",
    desc: "Hand-poured flexible sealing wax stamped with custom brass monogram seals, complete with self-adhesive backing.",
    img: "/assets/our-work/seal-stickers/letterpress-wedding-wax-seal-diecut.jpg",
  },
  {
    title: "Custom Monogram Cotton Seals",
    desc: "Personalized couple initials and wedding date relief printed for swift, pristine invitation assembly.",
    img: "/assets/our-work/seal-stickers/Layer-19seals.jpg",
  },
  {
    title: "Terracotta Wax Seal Stickers",
    desc: "Hand-cast earthy wax seals with custom initials and self-adhesive peel release backing.",
    img: "/assets/our-work/seal-stickers/Layer-8seals.jpg",
  },
  {
    title: "Metallic Gold Crest Seals",
    desc: "Foil-stamped monogram stickers on pure cotton paper with clean kiss-cut perimeter.",
    img: "/assets/our-work/seal-stickers/Layer-13seals.jpg",
  },
  {
    title: "Bespoke Couple Monogram Seals",
    desc: "Custom illustrated monogram die-cut seals for effortless, mess-free envelope closure.",
    img: "/assets/our-work/seal-stickers/Layer-3seals.jpg",
  },
  {
    title: "Copper & Bronze Wax Seals",
    desc: "Deep metallic luster wax seals individually poured and stamped with custom brass dies.",
    img: "/assets/our-work/seal-stickers/Layer-20seals.jpg",
  },
  {
    title: "Letterpress Cotton Stickers",
    desc: "Heavy cotton paper seal stickers debossed on vintage presses with rich pigment ink.",
    img: "/assets/our-work/seal-stickers/Seal-stickers-2.jpg",
  },
  {
    title: "Classic Wedding Wax Seals",
    desc: "Traditional sealing wax stamped with ornate couple insignia for luxurious presentation.",
    img: "/assets/our-work/seal-stickers/letterpress-wedding-wax-seals.jpg",
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

      {/* ── Gallery Showcase ── */}
      <section className="py-16 md:py-24" aria-label="Seal Stickers Gallery">
        <div className="w">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[rgba(14,14,14,0.08)]">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7b7566]">
              Die-Cut Cotton Seals & Wax Seals
            </span>
            <span className="text-xs text-[#888] font-light">
              Peel &bull; Stick &bull; Mess-Free
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SEAL_GALLERY.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-4 sm:p-5 flex flex-col rounded-xs transition-all duration-300 hover:border-black/35 hover:-translate-y-1 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.06)] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-[#F0ECE1] rounded-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif font-medium text-xl text-black mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#555] font-light leading-relaxed">
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

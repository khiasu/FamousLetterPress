import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Letterpress Envelopes & Liners | Famous Letterpress",
  description:
    "Personalized, handcrafted letterpress envelopes and custom illustrated euro-flap liners printed on heavy vintage presses in Nagaland, India.",
};

const ENVELOPE_FEATURES = [
  {
    title: "Euro-Flap Pointed Geometry",
    desc: "Custom deep pointed euro flaps cut to perfection with smooth tactile contours.",
    img: "/assets/revamp/what-we-make/FMS_6427.jpg",
  },
  {
    title: "Bespoke Illustrated Liners",
    desc: "Patterned, watercolor, or architectural sketches printed on lightweight archival lining paper.",
    img: "/assets/wedding stationery/invites/FMS_2762.jpg",
  },
  {
    title: "Letterpress Return Addressing",
    desc: "Crisp debossed relief addressing on the rear flap for a prestigious mail presentation.",
    img: "/assets/revamp/what-we-make/FMS_6975.jpg",
  },
  {
    title: "Wax Seal & Calligraphy Pairing",
    desc: "Designed to support organic hand-poured wax seals and liquid calligraphy inks without bleeding.",
    img: "/assets/revamp/what-we-make/FMS_4043.jpg",
  },
];

export default function EnvelopesPage() {
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
              <span className="text-black font-medium">Envelopes</span>
            </div>
            <p className="k mb-2">Category 02 &bull; Custom Letterpress Envelopes</p>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Bespoke <i>Envelopes.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              Our vintage presses provide us the unique ability to print on thick paper stock and irregular shapes. This allows us to make stunning personalized envelopes ideal for personal and professional use.
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

      {/* ── Envelope Details & Showcase ── */}
      <section className="py-16 md:py-24" aria-label="Envelope Showcase">
        <div className="w">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {ENVELOPE_FEATURES.map((item) => (
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
          <p className="k mb-2">Made to Order</p>
          <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
            Order custom letterpress <i>envelopes.</i>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Available in A7, A6, 4-bar, and square custom dimensions with your choice of cotton weight and liner artwork.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/start-a-project" className="btn">
              Request Envelope Quote
            </Link>
            <Link href="/contact" className="ln">
              Inquire With Studio &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

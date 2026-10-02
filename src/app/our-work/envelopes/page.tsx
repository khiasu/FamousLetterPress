import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Letterpress Envelopes & Liners | Famous Letterpress",
  description:
    "Our vintage presses provide us the unique ability to print on thick paper stock and irregular shapes to make stunning personalized envelopes.",
};

const ENVELOPE_GALLERY = [
  {
    title: "Hand-Lined Wedding Suite Envelopes",
    desc: "Custom euro-flap envelopes with watercolor illustrated botanical liners.",
    img: "/assets/our-work/envelopes/printed-envelopes-1.jpg",
  },
  {
    title: "Monogram Letterpress Flap",
    desc: "Debossed crest relief on the pointed rear flap with matching RSVP envelopes.",
    img: "/assets/our-work/envelopes/printed-envelopes-3.jpg",
  },
  {
    title: "Terracotta Cotton Envelopes",
    desc: "Custom pigmented earth-toned heavy envelope stock with metallic gold foil liner.",
    img: "/assets/our-work/envelopes/printed-envelopes-4.jpg",
  },
  {
    title: "Classic White Euro-Flap Set",
    desc: "Deep pointed euro-flap envelopes printed on thick 250gsm Wild Ivory paper.",
    img: "/assets/our-work/envelopes/printed-envelopes-5.jpg",
  },
  {
    title: "Deckled Flap Luxury Envelopes",
    desc: "Organic deckle along the envelope closure paired with calligraphy guest addressing.",
    img: "/assets/our-work/envelopes/printed-envelopes-6.jpg",
  },
  {
    title: "Botanical Illustrated Liners",
    desc: "Full-bleed interior envelope lining printed with delicate botanical foliage.",
    img: "/assets/our-work/envelopes/printed-envelopes-7.jpg",
  },
  {
    title: "Executive Correspondence Envelopes",
    desc: "Letterpress business envelopes crafted for corporate stationery and executive suites.",
    img: "/assets/our-work/envelopes/printed-envelopes-8.jpg",
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

      {/* ── Gallery Showcase ── */}
      <section className="py-16 md:py-24" aria-label="Envelope Gallery">
        <div className="w">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[rgba(14,14,14,0.08)]">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7b7566]">
              Printed Envelopes & Liners
            </span>
            <span className="text-xs text-[#888] font-light">
              Euro-Flap &bull; Custom Liners &bull; Thick Stock
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ENVELOPE_GALLERY.map((item) => (
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

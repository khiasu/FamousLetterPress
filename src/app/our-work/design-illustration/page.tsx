import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design & Illustration Portfolio | Famous Letterpress",
  description:
    "In-house bespoke design, hand illustration, typography, and calligraphy crafted specifically for letterpress tactile printing in Nagaland, India.",
};

const ARTWORKS = [
  {
    title: "Alobo Naga Identity",
    category: "Brand & Logo Matrix",
    img: "/assets/wedding stationery/invites/FMS_2762.jpg",
  },
  {
    title: "Wander Nagaland",
    category: "Illustrated Heritage Series",
    img: "/assets/revamp/what-we-make/FMS_6975.jpg",
  },
  {
    title: "Velvetten Dreams",
    category: "Fine Art Print Suite",
    img: "/assets/revamp/what-we-make/FMS_6427.jpg",
  },
  {
    title: "Tribal Folklore Vectors",
    category: "Northeastern Cultural Motifs",
    img: "/assets/revamp/what-we-make/FMS_6999.jpg",
  },
  {
    title: "Bespoke Monograms & Crests",
    category: "Calligraphic Monogram Matrices",
    img: "/assets/revamp/what-we-make/FMS_4043.jpg",
  },
  {
    title: "Architectural Letterpress Line Art",
    category: "Venue & Estate Illustrations",
    img: "/assets/revamp/what-we-make/FMS_3781.jpg",
  },
];

export default function DesignIllustrationPage() {
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
              <span className="text-black font-medium">Design & Illustration</span>
            </div>
            <p className="k mb-2">Category 06 &bull; In-House Design & Artwork</p>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Design & <i>Illustration.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              Our team of experienced in house designers works with our clients to help manifest their vision. Our approach to design and illustration coupled with our collaborative approach makes for engaging works that are guaranteed to leave a lasting impression.
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

      {/* ── Artwork Grid ── */}
      <section className="py-16 md:py-24" aria-label="Design and Illustration Gallery">
        <div className="w">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[rgba(14,14,14,0.08)]">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7b7566]">
              Studio Illustrations & Vector Matrices
            </span>
            <span className="text-xs text-[#888] font-light">
              Vector &bull; Calligraphy &bull; Print Ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ARTWORKS.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-4 sm:p-5 flex flex-col rounded-xs transition-all duration-300 hover:border-black/35 hover:-translate-y-1 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.06)] group"
              >
                <div className="relative aspect-[4/3.2] overflow-hidden mb-4 bg-[#F0ECE1] rounded-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif font-medium text-xl text-black mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#7b7566] font-mono uppercase tracking-wider">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 text-center border-t border-[rgba(14,14,14,0.08)]">
        <div className="max-w-2xl mx-auto px-6">
          <p className="k mb-2">Bespoke Design Commissions</p>
          <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
            Manifest your vision with our <i>artists.</i>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Whether you need a custom family crest, venue sketch, or bespoke typography suite, we work hand-in-hand with you.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/start-a-project" className="btn">
              Commission Artwork
            </Link>
            <Link href="/contact" className="ln">
              Talk to Our Designers &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

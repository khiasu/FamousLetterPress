import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Works & Special Commissions | Famous Letterpress",
  description:
    "Bespoke coasters, notebooks, presentation boxes, blind debossed prints, and custom artisanal stationery handcrafted in Dimapur, Nagaland.",
};

const CUSTOM_PROJECTS = [
  {
    title: "Letterpress Coasters & Beer Mats",
    desc: "Printed on 1000gsm absorbent cotton pulpboard with deep relief impressions that hold drinks without warping.",
    img: "/assets/revamp/what-we-make/FMS_4039.jpg",
  },
  {
    title: "Artisanal Hardcover Notebooks",
    desc: "Hand-bound notebooks with letterpress debossed covers and smooth archival fountain-pen friendly internal pages.",
    img: "/assets/revamp/what-we-make/FMS_6500.jpg",
  },
  {
    title: "Bespoke Packaging & Rigid Boxes",
    desc: "Custom presentation boxes with magnetic closures, hot foil stamping, and velvet or cotton paper wrapped trays.",
    img: "/assets/revamp/what-we-make/FMS_8669.jpg",
  },
  {
    title: "Fine Art Prints & Poetry Broadsides",
    desc: "Limited-edition numbered relief prints on oversized heavy cotton paper with raw hand-torn deckle edges.",
    img: "/assets/wedding stationery/invites/FMS_2762.jpg",
  },
];

export default function CustomWorksPage() {
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
              <span className="text-black font-medium">Custom Works</span>
            </div>
            <p className="k mb-2">Category 07 &bull; Special Artisanal Commissions</p>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Custom <i>Works.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              Our team is always up for a challenge. Coasters, notebooks, Pamphlets, decor pieces, we’ve done it all! Have a custom job in mind? Tell us all about it! Fill out this form, and someone from our team will get back to you.
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

      {/* ── Custom Projects Showcase ── */}
      <section className="py-16 md:py-24" aria-label="Custom Works Showcase">
        <div className="w">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {CUSTOM_PROJECTS.map((item) => (
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
          <p className="k mb-2">Bespoke Production</p>
          <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
            Have a custom idea in <i>mind?</i>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            No matter how complex or unusual your concept, our pressmen and bindery masters will help engineer the physical realization.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/start-a-project" className="btn">
              Tell Us About Your Project
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

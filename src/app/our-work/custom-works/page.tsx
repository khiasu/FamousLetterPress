import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGalleryCarousel } from "@/components/ui/WorkGalleryCarousel";

export const metadata: Metadata = {
  title: "Custom Works & Special Commissions | Famous Letterpress",
  description:
    "Our team is always up for a challenge. Coasters, notebooks, Pamphlets, decor pieces, we’ve done it all! Have a custom job in mind? Tell us all about it!",
};

const CUSTOM_GALLERY = [
  {
    title: "Government of Karnataka",
    desc: "Bespoke letterpress notebooks and executive presentation suites bound with debossed covers.",
    img: "/assets/our-work/custom-works/govt-karnataka.jpg",
  },
  {
    title: "SCAD",
    desc: "Custom invitation and presentation pieces with clean black typography debossed into cotton stock.",
    img: "/assets/our-work/custom-works/scad.jpg",
  },
  {
    title: "Angry Mother",
    desc: "Custom letterpress soap packaging boxes handcrafted with tactile artisanal finishes.",
    img: "/assets/our-work/custom-works/angry-mother.jpg",
  },
  {
    title: "Beauty Barn",
    desc: "Foil stamped luxury merchandise presentation bags with bespoke brand detailing.",
    img: "/assets/our-work/custom-works/beauty-barn.jpg",
  },
  {
    title: "Mizo Brewery",
    desc: "Authentic pulpboard absorbent beer coasters with deep dimensional letterpress impression.",
    img: "/assets/our-work/custom-works/mizo-brewery.jpg",
  },
  {
    title: "Vekutholu",
    desc: "Gold hot foil stamped luxury invite boxes with matching custom presentation inserts.",
    img: "/assets/our-work/custom-works/vekutholu.jpg",
  },
  {
    title: "Gayatri Mantra",
    desc: "Gold metallic foil stamped spiritual broadsides printed on archival cotton art paper.",
    img: "/assets/our-work/custom-works/gayatri-mantra.jpg",
  },
  {
    title: "T R Zeliang",
    desc: "Bespoke festive greeting cards with multi-color letterpress printing and hand-finishing.",
    img: "/assets/our-work/custom-works/tr-zeliang.jpg",
  },
  {
    title: "Mhathung Yanthan",
    desc: "Metallic gold and blind debossed greeting cards with tactile sculptural embossing.",
    img: "/assets/our-work/custom-works/mhathung-yanthan.jpg",
  },
  {
    title: "Gifting Solutions",
    desc: "Handcrafted letterpress greeting and celebration cards with bespoke typography.",
    img: "/assets/our-work/custom-works/gifting-solutions.jpg",
  },
  {
    title: "Feather Print",
    desc: "High-detail fine art tactile letterpress print on heavy handmade deckled paper.",
    img: "/assets/our-work/custom-works/feather-print.jpg",
  },
  {
    title: "Jaaziel",
    desc: "Letterpress celebration cards and bespoke stationery with vibrant pigment density.",
    img: "/assets/our-work/custom-works/jaaziel.jpg",
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

      {/* ── Custom Works Carousel Showcase ── */}
      <section className="py-14 md:py-20 bg-white" aria-label="Custom Works Gallery">
        <Reveal>
          <WorkGalleryCarousel
            items={CUSTOM_GALLERY}
            categoryTitle="Coasters, Packaging & Bespoke Projects"
          />
        </Reveal>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 border-t border-[rgba(14,14,14,0.08)]">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="k mb-2">Bespoke Production</p>
            <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
              Have a custom idea in <i>mind?</i>
            </h2>
            <p className="text-sm sm:text-base text-[#555] mb-8 font-light leading-relaxed">
              No matter how complex or unusual your concept, our pressmen and bindery masters will help engineer the physical realization.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                Tell Us About Your Project
              </Link>
              <a
                href="https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about%20custom%20works..."
                target="_blank"
                rel="noopener noreferrer"
                className="ln"
              >
                Contact Studio &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

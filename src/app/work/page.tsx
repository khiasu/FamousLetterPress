import type { Metadata } from "next";
import Link from "next/link";
import { getCMSPortfolio } from "@/lib/cms/store";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Famous Letterpress",
  description:
    "Curated selection of bespoke letterpress wedding stationery, luxury business cards, and personalized correspondence handcrafted in Nagaland, India.",
};

export default function WorkPage() {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* ── Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="w">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-[#777] font-mono">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-black font-medium">Work</span>
            </div>
            <p className="k mb-2">Selected Archive &middot; Handcrafted in Nagaland</p>
            <h1 className="d text-[clamp(42px,9vw,84px)] leading-[0.95] mt-2 mb-6 font-serif text-black">
              Our <i>work.</i>
            </h1>
            <p className="text-base md:text-lg text-[#3b372e] max-w-2xl font-light leading-relaxed mb-8">
              Our expertise lies in working with our clients to deliver transcending experiences and timeless products, find out more about how we can help you
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/start-a-project"
                className="btn"
              >
                Start a project
              </Link>
              <Link
                href="/weddings/wedding-sample-kit"
                className="ln"
              >
                Order Sample Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filterable Portfolio Gallery ── */}
      <section className="py-16 md:py-24 bg-white" aria-label="Selected Works">
        <div className="w">
          <PortfolioGallery items={getCMSPortfolio()} />
        </div>
      </section>

      {/* ── Inquiry CTA ── */}
      <section className="py-24 md:py-32 bg-white text-center border-t border-[#E5E5E5]">
        <div className="max-w-2xl mx-auto px-6">
          <p className="k mb-2">Bespoke Production</p>
          <h2 className="d text-[clamp(36px,8vw,70px)] leading-[0.95] font-serif text-black mb-4">
            Have a unique design in <i>mind?</i>
          </h2>
          <p className="text-sm sm:text-base text-[#444] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            We collaborate with private clients, couples, agencies, and independent artists to produce unforgettable physical print.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/start-a-project"
              className="btn"
            >
              Submit Project Details
            </Link>
            <a
              href="https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about..."
              target="_blank"
              rel="noopener noreferrer"
              className="ln"
            >
              Contact Studio &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

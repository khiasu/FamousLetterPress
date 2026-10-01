import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSPortfolio } from "@/lib/cms/store";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
  title: "Selected Work & Portfolio | Famous Letterpress",
  description:
    "Curated selection of bespoke letterpress wedding stationery, luxury business cards, and personalized correspondence handcrafted in Nagaland, India.",
};

export default function WorkPage() {
  return (
    <div className="bg-paper-creme min-h-screen">
      {/* ── Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-border-hairline">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-ink-light font-sans">
                <Link href="/" className="hover:text-ink-deep transition-colors">Home</Link>
                <span>/</span>
                <span className="text-ink-deep">Work</span>
              </div>
              <p className="eyebrow mb-2">Selected Archive</p>
              <h1 className="text-ink-deep mt-2 mb-6 font-serif">
                Commissions in <em className="font-light">tactile print.</em>
              </h1>
              <p className="text-base md:text-lg text-ink-muted max-w-2xl font-light leading-relaxed mb-8">
                A curated selection of our finest letterpress, foil stamping, and embossed work. Every piece in our portfolio was pressed by hand on vintage platen presses in our Nagaland atelier.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/start-a-project"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-ink-deep text-paper-creme hover:bg-[#222] transition-colors"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/weddings/wedding-sample-kit"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-border-hairline text-ink-deep hover:border-ink-deep/40 transition-colors"
                >
                  Order Sample Kit
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Filterable Portfolio Gallery ── */}
      <section className="section bg-paper-white">
        <div className="container-wide">
          <PortfolioGallery items={getCMSPortfolio()} />
        </div>
      </section>

      {/* ── Inquiry CTA ── */}
      <section className="section-lg bg-ink-deep text-paper-creme text-center">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow !text-paper-creme/30 mb-3">Bespoke Production</p>
            <h2 className="!text-paper-creme mb-4">
              Have a unique design in mind?
            </h2>
            <p className="text-sm md:text-base text-paper-creme/50 max-w-lg mx-auto mb-8 font-light leading-relaxed">
              We collaborate with private clients, couples, agencies, and independent artists to produce unforgettable physical print.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/start-a-project"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-paper-creme text-ink-deep hover:bg-white transition-colors"
              >
                Submit Project Details
              </Link>
              <Link
                href="/contact"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-paper-creme/30 text-paper-creme hover:border-paper-creme transition-colors"
              >
                Contact Atelier
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

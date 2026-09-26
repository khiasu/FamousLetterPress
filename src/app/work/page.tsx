import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getCMSPortfolio } from "@/lib/cms/store";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
  title: "Selected Work & Portfolio | Famous Letterpress",
  description:
    "Curated selection of bespoke letterpress wedding stationery, luxury business cards, and personalized correspondence handcrafted in Nagaland, India.",
};

export default function WorkPage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-warm-stone">
                <Link href="/" className="hover:text-terracotta">Home</Link>
                <span>/</span>
                <span className="text-terracotta">Work</span>
              </div>
              <span className="eyebrow text-terracotta">Selected Archive</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">Commissions in Print</h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                A curated selection of our finest letterpress and hot foil work. Every piece in our portfolio was pressed by hand on cast-iron platen presses in our Nagaland studio.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/start-a-project" variant="primary" size="lg">
                  Start Your Project
                </Button>
                <Button href="/weddings/wedding-sample-kit" variant="outline" size="lg">
                  Order Sample Kit
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filterable Portfolio Gallery */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-wide">
          <PortfolioGallery items={getCMSPortfolio()} />
        </div>
      </section>

      {/* Inquiry Banner */}
      <section className="py-20 md:py-28 bg-cream border-t border-sand">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow text-terracotta">Bespoke Production</span>
            <h2 className="heading-xl text-charcoal mt-2 mb-4">Have a unique design in mind?</h2>
            <p className="body-md text-warm-stone max-w-lg mx-auto mb-8 font-light">
              We collaborate with private clients, couples, agencies, and independent artists to produce unforgettable physical print.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/start-a-project" variant="primary" size="lg">
                Submit Project Details
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Studio
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSSampleKits } from "@/lib/cms/store";

export function SampleKitsSection() {
  const kitsMap = getCMSSampleKits();
  const sampleKits = [
    {
      title: kitsMap["wedding-sample-kit"]?.name || "Wedding Sample Kit",
      description:
        kitsMap["wedding-sample-kit"]?.tagline ||
        "Experience the quality of our wedding stationery — 600gsm cotton, hot foil, deckled edges, and swatches in your hands.",
      href: "/weddings/wedding-sample-kit",
      label: `Order wedding kit (₹${kitsMap["wedding-sample-kit"]?.price || 1500})`,
      image:
        kitsMap["wedding-sample-kit"]?.featuredImage ||
        "https://famousletterpress.com/wp-content/uploads/2026/04/wedkit-1-pics-1200x1200.jpg",
    },
    {
      title: kitsMap["business-card-sample-kit"]?.name || "Business Card Sample Kit",
      description:
        kitsMap["business-card-sample-kit"]?.tagline ||
        "Feel the weight, texture, and print quality of our ultra-thick business cards and foil edge gilding before you commit.",
      href: "/business-cards/business-card-sample-kit",
      label: `Order business kit (₹${kitsMap["business-card-sample-kit"]?.price || 1000})`,
      image:
        kitsMap["business-card-sample-kit"]?.featuredImage ||
        "https://famousletterpress.com/wp-content/uploads/2026/04/bizkit-01-1200x1200.jpg",
    },
  ];
  return (
    <section className="section bg-cream" aria-label="Sample kits">
      <div className="container-wide">
        <div className="text-center mb-14">
          <Reveal>
            <p className="eyebrow mb-4">Sample Kits</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-4">
              See it. Touch it.{" "}
              <span className="italic font-light">Feel it.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-taupe mx-auto max-w-lg">
              Our sample kits let you experience the quality of our work before
              starting a project. Order a kit and see the difference for
              yourself.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sampleKits.map((kit, index) => (
            <Reveal key={kit.href} delay={0.2 + index * 0.1}>
              <Link
                href={kit.href}
                className="group block bg-ivory p-6 lg:p-8 rounded-sm border border-sand/50 hover:border-terracotta/40 hover:shadow-xl transition-all duration-500"
              >
                {/* Live Sample Kit Photo */}
                <div className="aspect-[16/10] bg-sand/30 rounded-sm mb-6 overflow-hidden relative shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-serif mb-3 group-hover:text-sage-dark transition-colors duration-300">
                  {kit.title}
                </h3>
                <p className="text-sm text-taupe leading-relaxed mb-5">
                  {kit.description}
                </p>
                <span className="text-xs tracking-wider uppercase text-sage group-hover:text-sage-dark transition-colors duration-300">
                  {kit.label} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

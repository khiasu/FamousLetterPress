import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const sampleKits = [
  {
    title: "Wedding Sample Kit",
    description:
      "Experience the quality of our wedding stationery — paper, printing techniques, and finishes in your hands.",
    href: "/weddings/wedding-sample-kit",
    label: "Order sample kit",
  },
  {
    title: "Business Card Sample Kit",
    description:
      "Feel the weight, texture, and print quality of our business cards before you commit to a full order.",
    href: "/business-cards/business-card-sample-kit",
    label: "Order sample kit",
  },
];

export function SampleKitsSection() {
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
                className="group block bg-ivory p-8 lg:p-10 rounded-sm border border-sand/50 hover:border-sage/30 hover:shadow-lg transition-all duration-500"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-sand/30 rounded-sm mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs text-taupe">{kit.title} image</p>
                  </div>
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

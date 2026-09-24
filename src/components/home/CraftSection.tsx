import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const techniques = [
  {
    name: "Letterpress",
    description: "Deep impressions pressed into cotton stock.",
  },
  {
    name: "Foil Stamping",
    description: "Gold, silver, and custom foil pressed with heat and pressure.",
  },
  {
    name: "Embossing",
    description: "Raised designs sculpted into paper without ink.",
  },
  {
    name: "Debossing",
    description: "Impressions pressed into the surface for tactile depth.",
  },
];

export function CraftSection() {
  return (
    <section className="section bg-ink text-ivory" aria-label="Craft and materials">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <Reveal>
              <p className="eyebrow !text-ivory/40 mb-6">Craft &amp; Materials</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="!text-ivory mb-8">
                Every impression is{" "}
                <span className="italic font-light">intentional</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-ivory/60 leading-relaxed mb-10 max-w-lg">
                We work with premium cotton papers, traditional letterpress
                machines, and fine finishing techniques. Every piece is designed,
                set up, and printed in our Nagaland studio.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {techniques.map((tech, index) => (
                <Reveal key={tech.name} delay={0.25 + index * 0.08}>
                  <div className="border-t border-ivory/10 pt-4">
                    <h4 className="text-sm font-sans font-medium !text-ivory mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-ivory/40 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <Button href="/materials" variant="outline" className="!border-ivory/20 !text-ivory hover:!bg-ivory/5">
                Explore materials →
              </Button>
            </Reveal>
          </div>

          {/* Image placeholder */}
          <Reveal delay={0.2} direction="right">
            <div className="aspect-square bg-charcoal rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-ivory/30 text-center px-8">
                  Craft / materials photography — close-up of letterpress
                  impression, foil detail, or paper texture
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

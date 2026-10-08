import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Tell us what you're making, when you need it, and your budget. We'll recommend paper weights, techniques, and quantities.",
  },
  {
    number: "02",
    title: "Design & Dies",
    description: "Work with our design team or send your own print-ready artwork. We prep files and order custom photopolymer or brass dies.",
  },
  {
    number: "03",
    title: "Digital Proof",
    description: "We send precise digital proofs with ink colors, foil swatches, and dimensions for your written sign-off.",
  },
  {
    number: "04",
    title: "Press & Pack",
    description: "Hand-fed sheet-by-sheet through our presses, edge-gilded or painted if requested, and packaged carefully for transit.",
  },
];

export function ProcessSection() {
  return (
    <section className="section bg-ivory" aria-label="Our process">
      <div className="container-wide">
        <div className="mb-16">
          <Reveal>
            <p className="eyebrow text-taupe mb-4">How We Work</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-charcoal">
              From your idea to a{" "}
              <span className="italic font-light">finished print</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={0.15 + index * 0.1}>
              <div className="relative">
                {/* Connecting line on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-sand z-0" />
                )}
                <p className="font-serif text-4xl text-sand mb-4">
                  {step.number}
                </p>
                <h4 className="text-lg font-serif text-charcoal mb-2">{step.title}</h4>
                <p className="text-sm text-taupe leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-14">
            <Button href="/craft" variant="ghost">
              See the full process &amp; craft →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Share your vision, timeline, and preferences.",
  },
  {
    number: "02",
    title: "Design",
    description: "We create a bespoke design tailored to your project.",
  },
  {
    number: "03",
    title: "Proofing",
    description: "Review, refine, and approve before we go to press.",
  },
  {
    number: "04",
    title: "Production",
    description: "Printed and finished by hand in our Nagaland studio.",
  },
];

export function ProcessSection() {
  return (
    <section className="section bg-ivory" aria-label="Our process">
      <div className="container-wide">
        <div className="text-center mb-16">
          <Reveal>
            <p className="eyebrow text-taupe mb-4">How We Work</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2>
              From idea to{" "}
              <span className="italic font-light">impression</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto">
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
                <h4 className="text-lg font-serif mb-2">{step.title}</h4>
                <p className="text-sm text-taupe leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="text-center mt-14">
            <Button href="/process" variant="ghost">
              See the full process →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

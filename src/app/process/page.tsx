import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "The Letterpress Printing Process | Famous Letterpress",
  description:
    "Discover how Famous Letterpress brings bespoke wedding stationery and executive cards to life from consultation and photopolymer plate fabrication to vintage presswork.",
};

const fullProcessSteps = [
  {
    step: "01",
    title: "Discovery & Sample Kit",
    subtitle: "Tangible exploration",
    desc: "Every great project begins with paper in your hands. We encourage ordering our Wedding or Business Card Sample Kit so you can feel 600gsm cotton board, examine foil tones, and evaluate relief depth.",
    timeline: "Days 1–3",
  },
  {
    step: "02",
    title: "Consultation & Scope",
    subtitle: "Defining your vision",
    desc: "Share your date, quantities, aesthetic direction, and budget through our Early Bride form or project planner. We discuss typography, print passes, and paper stock options.",
    timeline: "1–2 Days",
  },
  {
    step: "03",
    title: "Design & Architectural Proofing",
    subtitle: "Precision layout drafting",
    desc: "Whether you supply print-ready artwork or commission our in-house designers, we produce 1:1 scale digital proofs detailing ink Pantones, foil placements, margins, and paper sizing.",
    timeline: "3–7 Days",
  },
  {
    step: "04",
    title: "Final Sign-off & Plate Making",
    subtitle: "Translating digital to physical",
    desc: "Once you approve the digital proof in writing, high-resolution magnesium or photopolymer relief plates are exposed and chemically etched for each individual color and foil pass.",
    timeline: "2–4 Days",
  },
  {
    step: "05",
    title: "Hand-Mixed Inks & Presswork",
    subtitle: "The mechanical bite",
    desc: "Inks are hand-mixed using mineral pigments. The press operator adjusts packing, registers the plates to microscopic accuracy, and hand-feeds each sheet of cotton stock on our vintage platen press.",
    timeline: "7–14 Days",
  },
  {
    step: "06",
    title: "Artisanal Finishing & Quality Inspection",
    subtitle: "Hand-applied details",
    desc: "Cards undergo trimming, edge gilding, bevel painting, wax sealing, and envelope lining. Every single sheet is individually inspected under studio lighting; any imperfect sheet is discarded.",
    timeline: "2–4 Days",
  },
  {
    step: "07",
    title: "Archival Packaging & Insured Delivery",
    subtitle: "Safe arrival at your door",
    desc: "Suites are carefully boxed in moisture-resistant archival presentation boxes and dispatched via express courier with full tracking across India or worldwide.",
    timeline: "3–5 Days transit",
  },
];

export default function ProcessPage() {
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
                <span className="text-terracotta">Process</span>
              </div>
              <span className="eyebrow text-terracotta">Step by Step</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">
                From Raw Cotton to Cast-Iron Impression
              </h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                Letterpress printing is a deliberate, meditative craft. Here is how your stationery journeys from conceptual design in Nagaland to the finished heirlooms in your hands.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/start-a-project" variant="primary" size="lg">
                  Start Your Project
                </Button>
                <Button href="/weddings/wedding-sample-kit" variant="outline" size="lg">
                  Order Sample Kit First
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Step by Step Timeline */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            {fullProcessSteps.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.05}>
                <div className="card-warm p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-8 relative">
                  <div className="md:w-48 shrink-0">
                    <span className="font-mono text-2xl text-terracotta font-semibold block mb-1">
                      {step.step}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-mono text-warm-stone font-medium">
                      {step.timeline}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-wider text-forest font-mono font-medium block mb-1">
                      {step.subtitle}
                    </span>
                    <h2 className="heading-md text-charcoal mb-3">{step.title}</h2>
                    <p className="body-sm text-warm-stone font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Banner */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow text-terracotta">Have Timing Questions?</span>
            <h2 className="heading-xl text-charcoal mt-2 mb-4">Have an upcoming event date?</h2>
            <p className="body-md text-warm-stone max-w-lg mx-auto mb-8 font-light">
              Contact our team with your desired delivery deadline and we will advise on production feasibility immediately.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/weddings/early-bride" variant="primary" size="lg">
                Submit Event Details
              </Button>
              <Button href="/faq" variant="outline" size="lg">
                Read Production FAQs
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

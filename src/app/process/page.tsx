import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "The Letterpress Printing Process | Famous Letterpress",
  description:
    "Discover how Famous Letterpress brings bespoke wedding stationery and executive business cards to life, from consultation and plate fabrication to vintage presswork.",
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
    desc: "Share your date, quantities, aesthetic direction, and budget through our Early Bride form or project brief. We discuss typography, print passes, and paper stock options.",
    timeline: "1–2 Days",
  },
  {
    step: "03",
    title: "Design & Architectural Proofing",
    subtitle: "Precision layout drafting",
    desc: "Whether you supply print-ready artwork or commission our in-house designers, we produce 1:1 scale proofs detailing ink Pantones, foil placements, margins, and paper sizing.",
    timeline: "3–7 Days",
  },
  {
    step: "04",
    title: "Final Sign-off & Plate Making",
    subtitle: "Translating digital to physical",
    desc: "Once you approve the proof in writing, high-resolution magnesium or photopolymer relief plates are exposed and chemically etched for each individual color and foil pass.",
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
    <div className="bg-paper-creme min-h-screen">
      {/* ── Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-border-hairline">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-ink-light font-sans">
                <Link href="/" className="hover:text-ink-deep transition-colors">Home</Link>
                <span>/</span>
                <span className="text-ink-deep">Process</span>
              </div>
              <p className="eyebrow mb-2">Step by Step</p>
              <h1 className="text-ink-deep mt-2 mb-6 font-serif">
                From raw cotton to{" "}
                <em className="font-light">cast-iron impression.</em>
              </h1>
              <p className="text-base md:text-lg text-ink-muted max-w-2xl font-light leading-relaxed mb-8">
                Letterpress printing is a deliberate, meditative craft. Here is how your stationery journeys from conceptual design in Nagaland to the finished heirlooms in your hands.
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
                  Order Sample Kit First
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Step by Step Timeline ── */}
      <section className="section bg-paper-white" aria-label="Production Steps">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-8">
            {fullProcessSteps.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.06}>
                <div className="bg-paper-creme border border-border-hairline p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="font-mono text-2xl text-ink-deep font-light">
                      {item.step}
                    </span>
                    <div className="h-px w-8 bg-border-hairline hidden md:block" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h2 className="text-xl md:text-2xl font-serif text-ink-deep">
                        {item.title}
                      </h2>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-ink-light px-2.5 py-1 bg-paper-white border border-border-hairline">
                        {item.timeline}
                      </span>
                    </div>
                    <p className="text-xs uppercase tracking-wider text-ink-light font-sans mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-xs md:text-sm text-ink-muted leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-lg bg-ink-deep text-paper-creme text-center">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow !text-paper-creme/30 mb-3">Ready to Begin?</p>
            <h2 className="!text-paper-creme mb-4">
              Let&apos;s start your <em className="font-light">production run.</em>
            </h2>
            <p className="text-sm md:text-base text-paper-creme/50 mb-8 max-w-lg mx-auto leading-relaxed">
              Reach out with your wedding date, artwork, or corporate card inquiry. We reply within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/start-a-project"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-paper-creme text-ink-deep hover:bg-white transition-colors"
              >
                Start a Commission
              </Link>
              <Link
                href="/weddings/early-bride"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-paper-creme/30 text-paper-creme hover:border-paper-creme transition-colors"
              >
                Early Bride Form
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

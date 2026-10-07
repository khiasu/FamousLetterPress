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
    title: "Discovery & Sample Kit",
    subtitle: "Tangible Paper Exploration",
    desc: "Every great project begins with paper in your hands. We encourage ordering our Wedding or Business Card Sample Kit so you can feel 600gsm cotton board, examine foil tones, and evaluate relief depth under natural light.",
    timeline: "Days 1–3",
  },
  {
    title: "Consultation & Scope",
    subtitle: "Defining Vision & Specifications",
    desc: "Share your date, quantities, aesthetic direction, and budget through our Early Bride form or project brief. We discuss typography, print passes, and paper stock options to formulate your bespoke production schedule.",
    timeline: "1–2 Days",
  },
  {
    title: "Design & Architectural Proofing",
    subtitle: "Precision Layout Drafting",
    desc: "Whether you supply print-ready artwork or commission our in-house designers, we produce 1:1 scale digital proofs detailing ink Pantones, foil placements, margins, and paper sizing for strict aesthetic approval.",
    timeline: "3–7 Days",
  },
  {
    title: "Final Sign-off & Plate Making",
    subtitle: "Translating Digital to Physical",
    desc: "Once you approve the proof in writing, high-resolution magnesium or photopolymer relief plates are exposed and chemically etched for each individual color and foil pass.",
    timeline: "2–4 Days",
  },
  {
    title: "Hand-Mixed Inks & Presswork",
    subtitle: "The Mechanical Impression",
    desc: "Inks are hand-mixed using mineral pigments. The press operator adjusts packing, registers the plates to microscopic accuracy, and hand-feeds each sheet of cotton stock on our vintage platen press.",
    timeline: "7–14 Days",
  },
  {
    title: "Artisanal Finishing & Quality Inspection",
    subtitle: "Hand-Applied Embellishments",
    desc: "Cards undergo trimming, edge gilding, bevel painting, wax sealing, and envelope lining. Every single sheet is individually inspected under studio lighting; any imperfect sheet is discarded.",
    timeline: "2–4 Days",
  },
  {
    title: "Archival Packaging & Insured Delivery",
    subtitle: "Safe Arrival at Your Door",
    desc: "Suites are carefully boxed in moisture-resistant archival presentation boxes and dispatched via express courier with full tracking across India or worldwide.",
    timeline: "3–5 Days transit",
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen text-black select-none">
      {/* ── Header ── */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black font-medium">Our Process</span>
              </div>
              <p className="k mb-2">Seven Stages of Traditional Presswork</p>
              <h1 className="d text-[clamp(38px,7.5vw,72px)] leading-[0.98] mt-2 mb-6 font-serif text-black">
                From raw cotton to <i>cast-iron impression.</i>
              </h1>
              <p className="text-base sm:text-lg text-[#555] max-w-2xl font-light leading-relaxed mb-8">
                Letterpress printing is a deliberate, meditative craft. Here is how your stationery journeys from conceptual design in our Nagaland studio to the finished heirlooms in your hands.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[11px] uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
                >
                  Start a project
                </Link>
                <Link
                  href="/weddings/wedding-sample-kit"
                  className="ln"
                >
                  Order Sample Kit First &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Step by Step Timeline ── */}
      <section className="py-14 md:py-20 bg-white" aria-label="Production Steps">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {fullProcessSteps.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.05}>
                <div className="bg-white border border-[#E5E5E5] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-black/30 hover:shadow-[0_12px_28px_-16px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="k text-[10px] text-[#7b7566]">{item.subtitle}</p>
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#7b7566]">
                      {item.timeline}
                    </span>
                  </div>

                  <h2 className="font-serif font-medium text-2xl sm:text-3xl text-black tracking-tight mb-3">
                    {item.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 bg-white text-black text-center border-t border-[#E5E5E5]">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <p className="k mb-2">Ready to Begin?</p>
            <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1.05] font-serif text-black mb-4">
              Let&apos;s start your <i>production run.</i>
            </h2>
            <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
              Reach out with your wedding date, artwork, or corporate card inquiry. We reply promptly within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[11px] sm:text-xs uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
              >
                Start a Commission
              </Link>
              <Link
                href="/our-work/wedding-invites#early-bride"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-black hover:opacity-60 transition-opacity border-b border-black pb-0.5"
              >
                <span>Early Bride Consultation</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

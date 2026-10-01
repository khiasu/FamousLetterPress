import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="section-lg bg-paper-creme" aria-label="Start a project">
      <div className="container-narrow text-center">
        <Reveal>
          <hr className="divider mx-auto mb-10" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 font-serif text-ink-deep">
            Have something{" "}
            <em className="font-light">worth printing?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-sm md:text-base text-ink-muted mb-10 max-w-lg mx-auto leading-relaxed">
            Whether it&apos;s bespoke wedding stationery for an intimate ceremony,
            edge-gilded business cards for your practice, or monogrammed correspondence
            on thick cotton — send us a note. We reply within 24 hours with ideas,
            timelines, and ballpark estimates.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/start-a-project"
              className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-ink-deep text-paper-creme hover:bg-[#222] transition-colors duration-300"
            >
              Start a Project
            </Link>
            <a
              href="https://wa.me/919366012345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-border-hairline text-ink-deep hover:border-ink-deep/40 transition-colors duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="section-lg bg-white" aria-label="Start a project">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="eyebrow mb-3">Project Initiation</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 font-serif text-black text-3xl sm:text-4xl lg:text-5xl">
            Have something <em className="font-light italic font-serif">worth printing?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-sm md:text-base text-[#555555] mb-10 max-w-lg mx-auto font-light leading-relaxed">
            Whether it&apos;s bespoke wedding stationery for an intimate ceremony,
            edge-gilded business cards for your practice, or monogrammed correspondence
            on thick cotton—send us a note. We reply within 24 hours with ideas,
            timelines, and ballpark estimates.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium bg-black text-white hover:bg-neutral-800 transition-colors"
            >
              Start a Project
            </Link>
            <a
              href="https://wa.me/919366012345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";

export function PositioningSection() {
  return (
    <section className="section bg-ivory" aria-label="About Famous Letterpress">
      <div className="container-wide">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-taupe mb-6">Who We Are</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-8 font-serif text-charcoal">
              A printing studio where design{" "}
              <span className="italic font-light">meets craft</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-taupe leading-relaxed">
              Famous Letterpress is a small printing studio based in Nagaland,
              India. We design and print wedding invitations, business cards, and
              personal stationery using letterpress, hot foil stamping, embossing,
              and edge gilding — everything handled in-house on vintage and modern
              presses.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <hr className="divider mt-12" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

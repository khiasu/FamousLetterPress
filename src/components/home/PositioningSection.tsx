import { Reveal } from "@/components/ui/Reveal";

export function PositioningSection() {
  return (
    <section className="section bg-ivory" aria-label="About Famous Letterpress">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="eyebrow mb-6">Who We Are</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-8">
            A printing studio where design{" "}
            <span className="italic font-light">meets craft</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-taupe leading-relaxed mx-auto max-w-2xl">
            Famous Letterpress is a premium printing studio in Nagaland, India.
            We design and print wedding invitations, business cards, and
            personalised stationery using letterpress, foil stamping, embossing,
            and other fine print techniques — all under one roof.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <hr className="divider mx-auto mt-12" />
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function HowWeMakeSection() {
  return (
    <section className="section bg-paper-creme" aria-label="How we make it">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Craft Story */}
          <div>
            <Reveal>
              <p className="eyebrow mb-4">How We Make It</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-8">
                The art of{" "}
                <em className="font-light">impression</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-ink-muted leading-relaxed mb-6">
                Letterpress printing is a centuries-old technique where raised metal type or photopolymer plates are pressed deep into soft, thick paper using cast-iron platen presses. The result is a tactile &ldquo;bite&rdquo; you can feel with your fingertips — impossible to replicate with digital or offset printing.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-ink-muted leading-relaxed mb-6">
                We print on 100% cotton papers ranging from 300 to 900 gsm. Combined with oil-based inks, genuine hot foil stamping, blind embossing, and hand-deckled edges, the result is print that feels as substantial as the occasions it marks.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-ink-muted leading-relaxed mb-8">
                Every sheet is hand-fed one at a time through vintage Heidelberg platen presses that we refurbished in our Nagaland workshop. There are no shortcuts and no batch runs.
              </p>
            </Reveal>

            {/* Technique list */}
            <div className="border-t border-border-hairline pt-6 mb-8">
              {[
                { name: "Letterpress", note: "Deep mechanical bite into cotton" },
                { name: "Foil Stamping", note: "Metallic, matte & pigment foils" },
                { name: "Embossing", note: "Raised relief, no ink" },
                { name: "Edge Gilding", note: "Gold, silver or custom painted edges" },
              ].map((tech, i) => (
                <Reveal key={tech.name} delay={0.45 + i * 0.06}>
                  <div className="flex items-baseline justify-between py-3 border-b border-border-hairline/60">
                    <span className="text-sm text-ink-deep font-medium font-sans">
                      {tech.name}
                    </span>
                    <span className="text-[11px] text-ink-light tracking-wide">
                      {tech.note}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.7}>
              <Button href="/process" variant="outline">
                See Our Full Process →
              </Button>
            </Reveal>
          </div>

          {/* Right: Studio Photography */}
          <div className="space-y-4">
            <Reveal delay={0.2} direction="right">
              <div className="relative aspect-[3/4] overflow-hidden bg-paper-sand group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/home/how-we-make/FMS_6500.jpg"
                  alt="Craftsperson hand-feeding 600gsm cotton sheet into vintage platen press"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
            <Reveal delay={0.35} direction="right">
              <div className="relative aspect-[16/10] overflow-hidden bg-paper-sand group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/home/how-we-make/FMS_7617.jpg"
                  alt="Hand-mixed oil inks and mineral pigments in our Nagaland atelier"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 font-sans">
                    Hand-Mixed Mineral Inks · Nagaland Atelier
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

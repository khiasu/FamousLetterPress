import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function StudioSection() {
  return (
    <section className="section bg-cream" aria-label="Our studio">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <Reveal direction="left">
            <div className="aspect-[4/3] bg-sand/40 rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-taupe text-center px-8">
                  Studio / team photograph — letterpress machine, hands at work,
                  or studio interior
                </p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Handcrafted in Nagaland</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-6">
                Designers turned{" "}
                <span className="italic font-light">printers</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-taupe leading-relaxed mb-6">
                Famous Letterpress began with a love for design and a
                fascination with the craft of printing. What started as a
                creative pursuit became a full printing studio — where every
                project is designed, set up, and printed by the same team.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-taupe leading-relaxed mb-8">
                Based in Nagaland, India, we bring together traditional
                letterpress techniques with modern design sensibility to create
                stationery that people want to keep.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Button href="/about" variant="outline">
                About the studio →
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function StudioSection() {
  return (
    <section className="section bg-cream" aria-label="Our studio">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Studio photograph — live pressroom in Nagaland */}
          <Reveal direction="left">
            <div className="aspect-[4/3] bg-sand/40 rounded-sm overflow-hidden relative shadow-lg group border border-sand/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://famousletterpress.com/wp-content/uploads/2026/04/banner-01-1365x600.jpg"
                alt="Famous Letterpress studio pressroom and craft workspace in Nagaland"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 bg-ivory/90 backdrop-blur-sm px-3 py-1.5 rounded-sm text-[10px] font-mono uppercase tracking-widest text-charcoal border border-sand/60">
                Nagaland Pressroom · Vintage Platen Press
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <p className="eyebrow text-taupe mb-6">Handcrafted in Nagaland</p>
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

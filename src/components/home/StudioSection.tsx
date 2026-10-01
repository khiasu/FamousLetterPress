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
              <p className="eyebrow text-taupe mb-6">Made in Nagaland, Shipped Across India</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-6 font-serif text-charcoal">
                We design it, we print it,{" "}
                <span className="italic font-light">we ship it</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-taupe leading-relaxed mb-6">
                Famous Letterpress started because we were designers who got tired of digital print looking flat. We hunted down vintage platen presses, taught ourselves cast-iron mechanics, and set up a proper letterpress shop in Nagaland.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-taupe leading-relaxed mb-8">
                Today, we handle the full cycle — from typography and custom die creation to inking, pressing, edge finishing, and packaging. We work with couples, designers, and brands in Mumbai, Bangalore, Delhi, Kolkata, and beyond.
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

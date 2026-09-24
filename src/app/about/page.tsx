import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us | Designers Turned Printers | Famous Letterpress",
  description:
    "Famous Letterpress is a boutique letterpress printing and stationery studio based in Nagaland, India. Designers turned printers handcrafting mindful paper heirlooms.",
};

const studioValues = [
  {
    title: "Designers Turned Printers",
    desc: "Because our background is in graphic design and typography, we don't just execute print files—we understand kerning, line-height, visual hierarchy, and how ink settles into cotton fibers.",
  },
  {
    title: "Handcrafted in Nagaland",
    desc: "Nestled in the lush hills of Northeast India, our pressroom operates with deliberate slowness and dedication to time-honored artisanal methods.",
  },
  {
    title: "Pure Tactile Integrity",
    desc: "We print exclusively on heavyweight 100% cotton papers, archival vegetable and mineral inks, and certified European boards that never compromise on longevity.",
  },
  {
    title: "Direct Studio Communication",
    desc: "When you reach out to Famous Letterpress, you speak directly with craftspeople who will personally mix your ink, align the plates, and feed the press.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-warm-stone">
                <Link href="/" className="hover:text-terracotta">Home</Link>
                <span>/</span>
                <span className="text-terracotta">About</span>
              </div>
              <span className="eyebrow text-terracotta">Our Origin & Ethos</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">
                Designers turned printers, rooted in Nagaland.
              </h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                Famous Letterpress was born from an unyielding love for typography and physical paper. In an increasingly disposable digital landscape, we believe the printed word should carry substance, texture, and lasting emotional weight.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Studio Narrative */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <span className="eyebrow text-forest">The Studio Journey</span>
                <h2 className="heading-lg text-charcoal mt-2 mb-6">
                  Where mechanical history meets modern editorial design.
                </h2>
                <div className="space-y-4 body-md text-warm-stone font-light leading-relaxed">
                  <p>
                    Famous Letterpress operates from Nagaland, India. What began as a passionate design studio evolved naturally into a dedicated printing atelier when we realized that commercial digital printing could never reproduce the sensory relief of cast-iron presswork.
                  </p>
                  <p>
                    Letterpress printing is not an automated push-button process. Each sheet of paper is individual, requiring precise adjustments of ink viscosity, packing pressure, and register pins.
                  </p>
                  <p>
                    Under the creative direction of founder <strong>Mr Khiasu</strong>, our studio has grown into a trusted craft partner for discerning couples, creative agencies, and luxury brands across India and abroad.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <Reveal delay={0.1}>
                <div className="card-warm p-8 bg-cream border-sand">
                  <span className="eyebrow text-terracotta">Our Physical Pressroom</span>
                  <h3 className="font-serif text-2xl text-charcoal mt-2 mb-4">
                    The Machinery of Mindful Craft
                  </h3>
                  <p className="body-sm text-warm-stone leading-relaxed mb-6 font-light">
                    Our studio houses vintage platen presses and cylinder proof presses. These machines, crafted with immense mechanical precision, apply thousands of pounds of pressure per square inch to deboss our designs permanently into pure cotton stock.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-sand text-xs font-mono text-charcoal">
                    <div>
                      <div className="text-warm-stone uppercase text-[10px]">Location</div>
                      <div className="font-medium mt-0.5">Nagaland, India</div>
                    </div>
                    <div>
                      <div className="text-warm-stone uppercase text-[10px]">Core Philosophy</div>
                      <div className="font-medium mt-0.5">Designers Turned Printers</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="eyebrow text-terracotta">What We Stand For</span>
              <h2 className="heading-xl text-charcoal mt-2">The four pillars of our work</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioValues.map((val, idx) => (
              <Reveal key={val.title} delay={idx * 0.1}>
                <div className="card-warm p-8 h-full">
                  <span className="text-xs font-mono uppercase tracking-widest text-forest font-semibold block mb-2">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal mb-3">{val.title}</h3>
                  <p className="text-sm text-warm-stone leading-relaxed font-light">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow text-terracotta">Work With Us</span>
            <h2 className="heading-xl text-charcoal mt-2 mb-4">Let's craft something memorable</h2>
            <p className="body-md text-warm-stone max-w-lg mx-auto mb-8 font-light">
              We welcome commissions for wedding invitation suites, executive business cards, and bespoke paper projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/start-a-project" variant="primary" size="lg">
                Start a Conversation
              </Button>
              <Button href="/weddings/wedding-sample-kit" variant="outline" size="lg">
                Order Sample Kit
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

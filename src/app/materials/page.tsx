import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Materials & Techniques | Cotton Paper, Letterpress & Foil | Famous Letterpress",
  description:
    "Explore the physical materials and printcraft of Famous Letterpress: 100% pure cotton paper, vintage platen letterpress relief, hot foil stamping, and edge gilding.",
};

const materialCategories = [
  {
    title: "100% Pure Cotton Rag Paper",
    subtitle: "Tree-Free & Naturally Archival",
    desc: "Unlike standard wood-pulp paper that yellows and degrades over time, our cotton stocks are crafted from recycled textile linters. Soft to the touch yet incredibly resilient, cotton paper absorbs heavy mechanical impression without tearing.",
    weights: "Available in 300gsm, 450gsm, 600gsm, and custom triplexed 900gsm board.",
    accent: "text-forest",
  },
  {
    title: "Handmade Deckled Edge Paper",
    subtitle: "Artisanal Feathered Borders",
    desc: "Formed sheet-by-sheet on traditional wire moulds. The water slurry naturally recedes at the edges, creating romantic, organic, feathered deckle margins that give wedding invitations an ancient, tactile majesty.",
    weights: "Handcrafted 400–500gsm natural ivory and soft blush tones.",
    accent: "text-terracotta",
  },
  {
    title: "European Colorplan Boards",
    subtitle: "Saturated Colored Uncoated Paper",
    desc: "Milled by GF Smith in the United Kingdom, Colorplan is the benchmark for dyed-through premium paper. Available in deep forest, rich navy, warm terracotta, charcoal, and muted sage—providing impeccable contrast when duplexed with cotton.",
    weights: "350gsm to 700gsm duplexed boards.",
    accent: "text-charcoal",
  },
];

const techniqueCategories = [
  {
    title: "Deep Letterpress Relief",
    desc: "Using vintage cast-iron presses, we press custom relief dies into heavyweight cotton. The result is a sculptural indentation you can run your fingers across.",
  },
  {
    title: "Hot Foil Stamping",
    desc: "Using heated metal dies and precision pressure, metallic and matte pigment foil is fused permanently into the paper fibers for a luminous, non-fading gleam.",
  },
  {
    title: "Blind Debossing & Sculpted Embossing",
    desc: "Impression without ink. Blind deboss creates subtle play of light and shadow, letting the paper's natural texture tell the story.",
  },
  {
    title: "Foil Edge Gilding & Bevel Painting",
    desc: "The sides of trimmed card stacks are hand-sanded and wrapped in reflective gold foil or carefully hand-painted with custom mixed archival ink.",
  },
  {
    title: "Custom Wax Seals & Envelope Liners",
    desc: "Finished suites are embellished with authentic hand-poured sealing wax bearing your custom cipher, paired with envelopes lined with tailored patterns.",
  },
  {
    title: "Duplexing & Triplexing",
    desc: "Adhering two or three distinct paper sheets back-to-back using archival pH-neutral adhesive, achieving unbendable rigidity and colored sandwich cores.",
  },
];

export default function MaterialsPage() {
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
                <span className="text-terracotta">Materials</span>
              </div>
              <span className="eyebrow text-terracotta">Physical Craft</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">Substrates & Studio Techniques</h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                In letterpress, paper is not just a carrier for ink—it is half the design. Explore the cotton papers, foils, and finishing methods we use in our Nagaland atelier.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/weddings/wedding-sample-kit" variant="primary" size="lg">
                  Order Tactile Sample Kit
                </Button>
                <Button href="/start-a-project" variant="outline" size="lg">
                  Enquire for Custom Paper
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Paper Stocks */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-xl mb-16">
              <span className="eyebrow text-forest">The Foundation</span>
              <h2 className="heading-xl text-charcoal mt-2">The Papers We Print On</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materialCategories.map((mat, idx) => (
              <Reveal key={mat.title} delay={idx * 0.1}>
                <div className="card-warm p-8 h-full flex flex-col justify-between">
                  <div>
                    <span className={`text-xs font-mono uppercase tracking-widest font-semibold block mb-2 ${mat.accent}`}>
                      {mat.subtitle}
                    </span>
                    <h3 className="heading-md text-charcoal mb-4">{mat.title}</h3>
                    <p className="body-sm text-warm-stone font-light leading-relaxed mb-6">{mat.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-sand text-xs text-charcoal font-mono">
                    {mat.weights}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Techniques */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="eyebrow text-terracotta">Press Capabilities</span>
              <h2 className="heading-xl text-charcoal mt-2">Artisanal Print Techniques</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniqueCategories.map((tech, idx) => (
              <Reveal key={tech.title} delay={idx * 0.05}>
                <div className="card-warm p-6 h-full">
                  <span className="font-mono text-xs uppercase tracking-widest text-warm-stone block mb-2">
                    Technique 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal mb-3">{tech.title}</h3>
                  <p className="text-xs text-warm-stone leading-relaxed font-light">{tech.desc}</p>
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
            <span className="eyebrow text-terracotta">Feel The Materials</span>
            <h2 className="heading-xl text-charcoal mt-2 mb-4">Nothing replaces physical touch</h2>
            <p className="body-md text-warm-stone max-w-lg mx-auto mb-8 font-light">
              Order our sample kits to experience 600gsm cotton board, metallic foil stamping, and debossed textures in person.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/weddings/wedding-sample-kit" variant="primary" size="lg">
                Order Wedding Kit (₹1,500)
              </Button>
              <Button href="/business-cards/business-card-sample-kit" variant="outline" size="lg">
                Order Business Card Kit (₹1,000)
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

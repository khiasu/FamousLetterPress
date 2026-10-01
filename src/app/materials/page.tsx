import type { Metadata } from "next";
import Link from "next/link";
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
    weights: "Available in 300gsm, 450gsm, 600gsm, and custom duplexed 900gsm board.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/wedkit-3-pics-1200x1200.jpg",
  },
  {
    title: "Handmade Deckled Edge Paper",
    subtitle: "Artisanal Feathered Borders",
    desc: "Formed sheet-by-sheet on traditional wire moulds. The water slurry naturally recedes at the edges, creating romantic, organic, feathered deckle margins that give wedding invitations an ancient, tactile majesty.",
    weights: "Handcrafted 400–500gsm natural ivory and soft creme tones.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/FMS_3741-1-2500x2500.jpg",
  },
  {
    title: "European Colorplan Boards",
    subtitle: "Saturated Colored Uncoated Paper",
    desc: "Milled by GF Smith in the United Kingdom, Colorplan is the benchmark for dyed-through premium paper. Available in deep forest, rich navy, warm taupe, charcoal, and muted sand—providing impeccable contrast when duplexed with cotton.",
    weights: "350gsm to 700gsm duplexed boards.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/bizkit-02-1200x1200.jpg",
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
    <div className="bg-paper-creme min-h-screen">
      {/* ── Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-border-hairline">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-ink-light font-sans">
                <Link href="/" className="hover:text-ink-deep transition-colors">Home</Link>
                <span>/</span>
                <span className="text-ink-deep">Materials</span>
              </div>
              <p className="eyebrow mb-2">Physical Craft</p>
              <h1 className="text-ink-deep mt-2 mb-6 font-serif">
                Substrates &amp; <em className="font-light">studio techniques.</em>
              </h1>
              <p className="text-base md:text-lg text-ink-muted max-w-2xl font-light leading-relaxed mb-8">
                In letterpress, paper is not just a carrier for ink—it is half the design. Explore the cotton papers, foils, and finishing methods we use in our Nagaland atelier.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/weddings/wedding-sample-kit"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-ink-deep text-paper-creme hover:bg-[#222] transition-colors"
                >
                  Order Tactile Sample Kit
                </Link>
                <Link
                  href="/start-a-project"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-border-hairline text-ink-deep hover:border-ink-deep/40 transition-colors"
                >
                  Enquire for Custom Paper
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Paper Stocks ── */}
      <section className="section bg-paper-white" aria-label="Paper Stocks">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-16">
            <Reveal>
              <p className="eyebrow mb-2">The Substrates</p>
              <h2 className="mb-4">
                Archival papers crafted for <em className="font-light">heavy impression</em>
              </h2>
            </Reveal>
          </div>

          <div className="space-y-12">
            {materialCategories.map((item, idx) => (
              <Reveal key={item.title} delay={0.1}>
                <div className="bg-paper-creme border border-border-hairline overflow-hidden">
                  <div className="grid lg:grid-cols-12 items-center">
                    <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="aspect-[16/10] bg-paper-sand relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className={`lg:col-span-6 p-8 md:p-12 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                      <p className="eyebrow mb-2">{item.subtitle}</p>
                      <h3 className="text-2xl font-serif text-ink-deep mb-4">{item.title}</h3>
                      <p className="text-xs md:text-sm text-ink-muted leading-relaxed font-light mb-6">
                        {item.desc}
                      </p>
                      <div className="pt-4 border-t border-border-hairline text-xs font-sans text-ink-muted">
                        <strong className="text-ink-deep">Weights: </strong>
                        {item.weights}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Studio Techniques ── */}
      <section className="section bg-paper-creme" aria-label="Finishing Techniques">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-16">
            <Reveal>
              <p className="eyebrow mb-2">Finishing Arts</p>
              <h2 className="mb-4">
                Six tactile <em className="font-light">dimensions</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniqueCategories.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.06}>
                <div className="bg-paper-white border border-border-hairline p-8 h-full">
                  <span className="text-[10px] font-mono tracking-widest text-ink-light block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl text-ink-deep mb-3">{item.title}</h3>
                  <p className="text-xs md:text-sm text-ink-muted leading-relaxed font-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample Kit CTA ── */}
      <section className="section-lg bg-ink-deep text-paper-creme text-center">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow !text-paper-creme/30 mb-3">Experience It In Person</p>
            <h2 className="!text-paper-creme mb-4">
              Order our physical <em className="font-light">paper swatch kit.</em>
            </h2>
            <p className="text-sm md:text-base text-paper-creme/50 mb-8 max-w-lg mx-auto leading-relaxed">
              Touch 300 to 900 gsm cotton boards, examine foil tones under daylight, and evaluate impression depth with our curated sample kit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/weddings/wedding-sample-kit"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-paper-creme text-ink-deep hover:bg-white transition-colors"
              >
                Order Wedding Kit (₹1,500)
              </Link>
              <Link
                href="/business-cards/business-card-sample-kit"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-paper-creme/30 text-paper-creme hover:border-paper-creme transition-colors"
              >
                Order Business Kit (₹1,000)
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

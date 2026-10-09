import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Process, Materials & Craft | Letterpress Printing | Famous Letterpress",
  description:
    "Explore our complete printmaking journey, archival cotton substrates, hot foil stamping, and traditional cast-iron letterpress techniques in Nagaland, India.",
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

export default function CraftPage() {
  return (
    <div className="bg-white min-h-screen text-black select-none">
      {/* ── Header ── */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black font-medium">Process, Materials &amp; Craft</span>
              </div>
              <h1 className="d text-[clamp(38px,7.5vw,72px)] leading-[0.98] mt-2 mb-6 font-serif text-black">
                From raw cotton to <i>cast-iron impression.</i>
              </h1>
              <p className="text-base sm:text-lg text-[#555] max-w-2xl font-light leading-relaxed mb-8">
                Letterpress printing is a deliberate, meditative craft. Discover how we marry 100% pure cotton paper, mineral inks, and vintage platen machinery to create heirloom stationery with unmistakable relief.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/start-a-project"
                  className="btn"
                >
                  REQUEST A PRICE
                </Link>
                <Link
                  href="/weddings/wedding-sample-kit"
                  className="ln"
                >
                  ORDER SAMPLE KIT
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 1: Paper Stocks & Substrates ── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E5E5]" aria-label="Paper Stocks">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
                Archival papers crafted for <i>heavy impression.</i>
              </h2>
              <p className="text-sm sm:text-base text-[#555] font-light leading-relaxed">
                In letterpress, paper is not just a carrier for ink—it is half the design. Explore our signature pure cotton, deckled edge, and European dyed-through boards.
              </p>
            </Reveal>
          </div>

          <div className="space-y-12">
            {materialCategories.map((item, idx) => (
              <Reveal key={item.title} delay={0.1}>
                <div className="bg-white border border-[#E5E5E5] overflow-hidden transition-all duration-300 hover:border-black/30 hover:shadow-[0_12px_28px_-16px_rgba(0,0,0,0.08)]">
                  <div className="grid lg:grid-cols-12 items-center">
                    <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="aspect-[16/10] bg-[#F7F7F7] relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className={`lg:col-span-6 p-8 md:p-12 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                      <h3 className="text-2xl sm:text-3xl font-serif text-black mb-3">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-light mb-6">
                        {item.desc}
                      </p>
                      <div className="pt-4 border-t border-[#E5E5E5] text-xs font-sans text-[#555]">
                        <strong className="text-black font-medium">Weights: </strong>
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

      {/* ── Section 2: Finishing Arts & Dimensional Techniques ── */}
      <section className="py-16 md:py-24 bg-white" aria-label="Finishing Arts">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
                Six tactile <i>dimensions.</i>
              </h2>
              <p className="text-sm sm:text-base text-[#555] font-light leading-relaxed">
                Techniques refined over decades to impart distinction, depth, and permanent elegance to your stationery.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {techniqueCategories.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.06}>
                <div className="bg-white border border-[#E5E5E5] p-8 h-full flex flex-col justify-between transition-all duration-300 hover:border-black/30 hover:shadow-[0_12px_28px_-16px_rgba(0,0,0,0.08)]">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#888888] block mb-3">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-black mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] text-black border-t border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="k mb-2">Experience It In Person</p>
              <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1.05] font-serif text-black mb-4">
                Feel the impression in <i>your hands.</i>
              </h2>
              <p className="text-sm md:text-base text-[#555] mb-8 leading-relaxed font-light">
                Touch 300 to 900 gsm cotton boards, examine foil tones under natural daylight, and evaluate relief depth with our curated sample kit.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/weddings/wedding-sample-kit"
                  className="btn"
                >
                  ORDER SAMPLE KIT
                </Link>
                <Link
                  href="/our-work/wedding-invites#early-bride"
                  className="ln"
                >
                  BOOK A CONSULTATION
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

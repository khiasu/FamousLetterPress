import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Story | Designers Turned Printers | Famous Letterpress",
  description:
    "Famous Letterpress is a boutique letterpress studio founded by Akanito in Nagaland, India. Designers turned printers handcrafting bespoke wedding stationery and luxury business cards.",
};

const studioValues = [
  {
    title: "Designers Turned Printers",
    desc: "Because our background is in graphic design and typography, we don't just execute print files—we understand kerning, line-height, optical balance, and how ink settles into 600gsm cotton fibers.",
  },
  {
    title: "Handcrafted in Nagaland",
    desc: "From our workshop in Dimapur, Nagaland, our studio operates with deliberate slowness and reverence for time-honored artisanal mechanics.",
  },
  {
    title: "Pure Cotton Integrity",
    desc: "We print exclusively on heavyweight 100% cotton papers (300 to 900 gsm), vegetable-based oil inks, and genuine European stamping foils.",
  },
  {
    title: "Direct Studio Relationship",
    desc: "When you reach out to Famous Letterpress, you speak directly with craftspeople who personally mix your inks, calibrate the pressure, and hand-feed every single sheet.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-[#888888] font-sans">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">Our Story</span>
              </div>
              <p className="eyebrow mb-2">Heritage &amp; Craft</p>
              <h1 className="text-black mt-2 mb-6 font-serif">
                Designers turned printers,{" "}
                <em className="font-light">rooted in Nagaland.</em>
              </h1>
              <p className="text-base md:text-lg text-[#555555] max-w-2xl font-light leading-relaxed mb-8">
                Famous Letterpress was born from an unyielding devotion to typography and tactile paper. In an increasingly disposable digital landscape, we believe the printed word should carry substance, texture, and permanent emotional weight.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Studio Narrative ── */}
      <section className="section bg-white" aria-label="Studio Journey">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <p className="eyebrow mb-2">The Journey Since 2008</p>
                <h2 className="mb-6 font-serif">
                  Where mechanical history meets{" "}
                  <em className="font-light">modern editorial design.</em>
                </h2>
                <div className="space-y-4 text-sm md:text-base text-[#555555] font-light leading-relaxed">
                  <p>
                    Famous Letterpress operates from Nagaland, in Northeast India. What began as a graphic design practice founded by <strong>Akanito</strong> in 2008 evolved into a dedicated letterpress printing studio when we realized that commercial digital printing could never reproduce the sensory relief of cast-iron presswork.
                  </p>
                  <p>
                    Letterpress printing is not an automated push-button process. Each sheet of 600gsm cotton rag is hand-fed one at a time. Each run requires meticulous manual tuning of ink tack, packing hardness, register pins, and platen pressure to achieve the signature &ldquo;bite&rdquo;.
                  </p>
                  <p>
                    We tracked down and salvaged vintage Heidelberg platen presses, restoring them bolt by bolt in our Nagaland workshop. Today, our studio is trusted by couples, luxury brands, and creative agencies throughout India and across the world.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <Reveal delay={0.1}>
                <div className="overflow-hidden bg-[#F7F7F7] border border-[#E5E5E5]">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://famousletterpress.com/wp-content/uploads/2026/04/banner-01-1365x600.jpg"
                      alt="Famous Letterpress vintage cast iron platen printing press in Nagaland"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="bg-white border border-[#E5E5E5] p-8">
                  <p className="eyebrow mb-2">Our Physical Workshop</p>
                  <h3 className="font-serif text-2xl text-black mb-4">
                    The Machinery of Mindful Craft
                  </h3>
                  <p className="text-xs md:text-sm text-[#555555] leading-relaxed mb-6 font-light">
                    Our workshop houses vintage Heidelberg platen presses and cylinder proof presses. These machines, engineered with immense cast-iron precision, apply thousands of pounds of pressure per square inch to create an indelible deboss into soft cotton board.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E5E5] text-xs font-sans">
                    <div>
                      <span className="text-[#888888] uppercase text-[10px] tracking-wider block">Studio Location</span>
                      <span className="font-medium text-black mt-0.5 block">Dimapur, Nagaland, India</span>
                    </div>
                    <div>
                      <span className="text-[#888888] uppercase text-[10px] tracking-wider block">Founding Heritage</span>
                      <span className="font-medium text-black mt-0.5 block">Est. 2008 · Akanito</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Studio Pillars ── */}
      <section className="section bg-white" aria-label="Core Pillars">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-16">
            <Reveal>
              <p className="eyebrow mb-2">What We Stand For</p>
              <h2 className="mb-4">
                The four pillars of <em className="font-light">our craft</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {studioValues.map((val, idx) => (
              <Reveal key={val.title} delay={idx * 0.08}>
                <div className="bg-white border border-[#E5E5E5] p-8 h-full">
                  <span className="text-[10px] font-mono tracking-widest text-[#888888] block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-3">{val.title}</h3>
                  <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-light">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="section-lg bg-white text-black text-center border-t border-[#E5E5E5]">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow text-[#888888] mb-3">Work With Our Studio</p>
            <h2 className="text-black mb-4">
              Let&apos;s create something <em className="font-light">worth keeping forever.</em>
            </h2>
            <p className="text-sm md:text-base text-[#555555] mb-8 max-w-lg mx-auto leading-relaxed">
              We welcome commissions for bespoke wedding invitations, luxury business cards, and custom stationery suites.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/start-a-project"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-black text-white hover:bg-neutral-800 transition-colors"
              >
                Start a Conversation
              </Link>
              <Link
                href="/weddings/wedding-sample-kit"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                Order Sample Kit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

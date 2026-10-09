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
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black font-medium">Our Story</span>
              </div>
              <h1 className="d text-[clamp(36px,7vw,70px)] leading-[0.98] font-serif text-black mt-3 mb-6">
                Designers turned printers, <i>rooted in Nagaland.</i>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <p className="eyebrow mb-2">The Journey Since 2008</p>
                <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
                  Where mechanical history meets <i>modern editorial design.</i>
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

            <div className="lg:col-span-6">
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
            </div>
          </div>

          {/* ── Physical Studio (Left) & Borderless Map (Right) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-[#E5E5E5]">
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <p className="eyebrow mb-2">Nagaland Pressroom</p>
                <h2 className="d text-[clamp(28px,5vw,46px)] leading-[1.05] font-serif text-black mb-4">
                  Our Physical <i>Workshop.</i>
                </h2>
                <p className="text-sm md:text-base text-[#555555] font-light leading-relaxed mb-6">
                  Our workshop houses vintage Heidelberg platen presses and cylinder proof presses. Engineered with immense cast-iron precision, they apply thousands of pounds of pressure per square inch to create an indelible deboss into soft cotton board.
                </p>

                <div className="grid grid-cols-2 gap-6 py-6 border-y border-[#E5E5E5] text-xs font-sans">
                  <div>
                    <span className="text-[#888888] uppercase text-[10px] tracking-wider block">Studio Location</span>
                    <span className="font-medium text-black mt-1 block leading-snug">#415, Near Riverbelt Colony, Dimapur, Nagaland &mdash; 797112</span>
                  </div>
                  <div>
                    <span className="text-[#888888] uppercase text-[10px] tracking-wider block">Founding Heritage</span>
                    <span className="font-medium text-black mt-1 block">Est. 2008 &middot; Akanito</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Famous+Letterpress+Dimapur+Nagaland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ln inline-block"
                  >
                    OPEN IN GOOGLE MAPS
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Tactile Embossed Map Plate: seamless letterpress cotton paper impression */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="map-emboss-plate group">
                  <div className="map-emboss-well aspect-[4/3] sm:aspect-[16/10]">
                    <iframe
                      title="Famous Letterpress Workshop Google Map Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57187.9734157155!2d93.6841!3d25.9064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374601b69f688005%3A0xe54e38bf3e12c1b4!2sDimapur%2C%20Nagaland!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full grayscale-[80%] brightness-[1.03] contrast-[0.92] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:opacity-100 opacity-90 transition-all duration-700 ease-out pointer-events-auto"
                    />

                    {/* Seamless edge dissolve vignette: melts sharp tile borders into white paper */}
                    <div className="map-emboss-vignette" />
                    <div className="map-emboss-ring" />

                    {/* Editorial Pressroom Pill Badge */}
                    <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.05] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0e0e0e] animate-pulse" />
                      <span className="font-mono text-[9px] tracking-widest text-[#444444] uppercase">
                        Studio Pressroom &middot; Dimapur
                      </span>
                    </div>

                    {/* Tactile Coordinate Stamp */}
                    <div className="absolute bottom-3.5 right-3.5 z-20 pointer-events-none hidden sm:flex items-center px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-black/[0.04] text-[9px] font-mono tracking-wider text-[#777777]">
                      25.9064&deg; N, 93.6841&deg; E
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
          <div className="max-w-xl mb-16">
            <Reveal>
              <p className="k mb-2">What We Stand For</p>
              <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
                The four pillars of <i>our craft</i>
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
      <section className="section-lg bg-white text-black border-t border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="k mb-2">Work With Our Studio</p>
              <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1.05] font-serif text-black mb-4">
                Let&apos;s create something <i>worth keeping forever.</i>
              </h2>
              <p className="text-sm md:text-base text-[#555] mb-8 leading-relaxed font-light">
                We welcome commissions for bespoke wedding invitations, luxury business cards, and custom stationery suites.
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
    </div>
  );
}

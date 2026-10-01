import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const techniques = [
  { name: "Letterpress Impression", note: "Deep mechanical relief bite pressed into soft cotton rag" },
  { name: "Hot Foil Stamping", note: "Heated brass dies fusing metallic and matte foils under calibrated pressure" },
  { name: "Blind Debossing", note: "Sculpted three-dimensional relief without ink, creating pure light and shadow" },
  { name: "Foil Edge Gilding", note: "Hand-sanded card profiles wrapped in mirror-finish reflective gold or silver" },
];

export function HowWeMakeSection() {
  return (
    <section className="section bg-white border-b border-[#E5E5E5]" aria-label="How We Make It">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Craft Storytelling */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <p className="eyebrow mb-3">Artisanal Mechanics</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-black font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-6">
                The art of the <em className="font-light italic font-serif">permanent bite.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base text-[#555555] font-light leading-relaxed">
                Letterpress is a centuries-old relief printing technique where raised metal type or photopolymer plates are pressed with thousands of pounds of pressure deep into thick, soft cotton paper. The result is a tactile indentation you can feel with your fingertips—impossible to replicate with digital or offset printing.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base text-[#555555] font-light leading-relaxed">
                We print on 100% tree-free cotton stocks ranging from 300 to 900 gsm. Every sheet is hand-fed one at a time through vintage Heidelberg platen presses that we refurbished bolt by bolt in our Nagaland workshop. There are no shortcuts and no automated batch runs.
              </p>
            </Reveal>

            {/* Architectural Hairline Technique Table */}
            <div className="pt-6 border-t border-[#E5E5E5] space-y-0">
              {techniques.map((tech, i) => (
                <Reveal key={tech.name} delay={0.25 + i * 0.05}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-4 border-b border-[#E5E5E5]">
                    <span className="font-serif text-lg text-black font-normal">
                      {tech.name}
                    </span>
                    <span className="text-xs text-[#888888] font-sans tracking-wide mt-1 sm:mt-0">
                      {tech.note}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="pt-4">
                <Link
                  href="/process"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium border border-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  Explore Studio Process →
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Workshop Photography */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={0.2} direction="right">
              <div className="relative aspect-[4/3] bg-[#F7F7F7] overflow-hidden border border-[#E5E5E5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/home/how-we-make/FMS_6500.jpg"
                  alt="Craftsperson hand-feeding 600gsm cotton sheet into vintage platen press"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 text-[10px] font-mono tracking-widest uppercase text-black border border-[#E5E5E5]">
                  Hand-Fed Presswork · Nagaland Atelier
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35} direction="right">
              <div className="relative aspect-[16/10] bg-[#F7F7F7] overflow-hidden border border-[#E5E5E5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/home/how-we-make/FMS_7617.jpg"
                  alt="Hand-mixed mineral oil inks and ink knives in our Dimapur workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 text-[10px] font-mono tracking-widest uppercase text-black border border-[#E5E5E5]">
                  Custom Mineral Pigments &amp; Oil Inks
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

interface CraftPillar {
  step: string;
  tag: string;
  title: string;
  desc: string;
  img: string;
  href: string;
}

const TECHNIQUES: CraftPillar[] = [
  {
    step: "01",
    tag: "Formulation",
    title: "Pure Pigment Inks",
    desc: "Custom oil-based pigments mixed by hand on glass slabs to achieve exact bespoke Pantone hues and rich opaque tones.",
    img: "/assets/revamp/how-we-make/FMS_7617.jpg", // Pure pigment ink mixing spatula & cans
    href: "/materials",
  },
  {
    step: "02",
    tag: "Sculptural Bite",
    title: "The Mechanical Bite",
    desc: "Precision magnesium and brass dies biting deep into 600–900gsm pure cotton rag to create tactile relief you can feel.",
    img: "/assets/revamp/how-we-make/FMS_6999.jpg", // Metal relief dies / deep impression
    href: "/process",
  },
  {
    step: "03",
    tag: "Restored Machinery",
    title: "Hand-Fed Presswork",
    desc: "Each sheet is hand-aligned and pressed one impression at a time on 1950s Heidelberg 'Windmill' platen presses.",
    img: "/assets/revamp/how-we-make/FMS_7401.jpg", // Vintage Heidelberg platen presswork
    href: "/process",
  },
  {
    step: "04",
    tag: "Hand Craft",
    title: "Archival Finishing",
    desc: "Hand-torn organic deckled edges, 24k mirror gold edge gilding, and hand-poured custom wax seals.",
    img: "/assets/revamp/how-we-make/FMS_6500.jpg", // Finished stationery, deckle edges & gilded sets
    href: "/materials",
  },
];

export function HowWeMakeSection() {
  return (
    <section
      id="how"
      className="hw py-20 md:py-28 border-b border-[rgba(14,14,14,0.08)] bg-transparent select-none"
      aria-label="How We Make: The Craft of Impression"
    >
      <div className="w">
        {/* Section Header with balanced typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono tracking-widest text-[#7b7566] uppercase">
                02 / THE CRAFT
              </span>
              <span className="h-px w-6 bg-[#7b7566]/30" />
              <span className="text-[10px] font-mono tracking-widest text-[#7b7566] uppercase">
                PROCESS & DISCIPLINE
              </span>
            </div>

            {/* Thoughtful, concise 1-line title */}
            <h2 className="text-[clamp(32px,5.5vw,54px)] font-serif text-black leading-[1.02] tracking-[-0.02em] font-normal">
              Ink, <i>steel</i> & cotton.
            </h2>

            <p className="text-xs sm:text-sm text-[#555] font-light max-w-lg leading-relaxed mt-3">
              Every commission is crafted slowly and pressed one impression at a time on restored 1950s vintage Heidelberg platen presses in our Dimapur studio.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end text-right">
            <span className="text-[10.5px] font-mono uppercase tracking-[0.24em] text-[#7b7566]">
              Dimapur Studio &bull; Nagaland
            </span>
            <span className="text-xs text-[#888] font-light mt-1">
              4 Disciplines of Letterpress
            </span>
          </div>
        </div>

        {/* 4 Craft Pillar Cards — Styled with carousel-inspired luxury tactile cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {TECHNIQUES.map((tech) => (
            <Link
              key={tech.title}
              href={tech.href}
              className="group bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-4 sm:p-5 flex flex-col rounded-xs transition-all duration-400 ease-out hover:border-black/35 hover:-translate-y-1 shadow-[0_12px_28px_-16px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.16),0_4px_8px_rgba(0,0,0,0.04)] cursor-pointer"
            >
              {/* Card Meta / Step Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#7b7566] mb-3.5">
                <span>{tech.step}</span>
                <span className="text-[9px] tracking-[0.2em] px-2 py-0.5 bg-[rgba(14,14,14,0.04)] rounded-full border border-[rgba(14,14,14,0.06)]">
                  {tech.tag}
                </span>
              </div>

              {/* Framed Image Container */}
              <div className="relative aspect-[4/3.1] overflow-hidden mb-4 bg-[#F0ECE1] rounded-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.img}
                  alt={tech.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Card Heading */}
              <h3 className="font-serif font-medium text-[21px] sm:text-[23px] text-black tracking-[-0.015em] leading-[1.1] mb-2 group-hover:text-black transition-colors">
                {tech.title}
              </h3>

              {/* Card Description */}
              <p className="text-[12.5px] leading-[1.55] text-[#555] font-light mb-4 flex-1">
                {tech.desc}
              </p>

              {/* Card Bottom CTA Link */}
              <div className="pt-3 border-t border-[rgba(14,14,14,0.08)] flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#7b7566] group-hover:text-black transition-colors">
                <span>Explore craft</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


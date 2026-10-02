"use client";

import { useEffect, useRef } from "react";

const TECHNIQUES = [
  {
    step: "01",
    title: "Pure Pigment Inks",
    desc: "Oil-based custom pigments mixed by hand to match bespoke Pantone shades and natural earth tones.",
    img: "/assets/revamp/how-we-make/FMS_6500.jpg",
  },
  {
    step: "02",
    title: "The Mechanical Bite",
    desc: "Calibrated metal relief plates biting deep into thick cotton rag, creating indelible sculptural depth.",
    img: "/assets/revamp/how-we-make/FMS_6999.jpg",
  },
  {
    step: "03",
    title: "Hand-Fed Presswork",
    desc: "Every single card is hand-fed into 1950s Heidelberg platens restored bolt-by-bolt in Dimapur.",
    img: "/assets/revamp/how-we-make/FMS_7401.jpg",
  },
  {
    step: "04",
    title: "Archival Finishing",
    desc: "Hand-torn deckled edges, mirror foil edge gilding, and organic wax seals cast from brass matrices.",
    img: "/assets/revamp/how-we-make/FMS_7617.jpg",
  },
];

export function HowWeMakeSection() {
  const litRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = litRef.current;
    if (!el) return;

    const words = el.textContent?.trim().split(/\s+/) || [];
    el.innerHTML = words.map((w) => `<span>${w}</span>`).join(" ");
    const spans = el.querySelectorAll("span");

    const updateLit = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - rect.top) / (vh * 0.55)));
      const count = Math.round(progress * spans.length);
      spans.forEach((span, i) => {
        span.classList.toggle("on", i < count);
      });
    };

    window.addEventListener("scroll", updateLit, { passive: true });
    updateLit();

    return () => window.removeEventListener("scroll", updateLit);
  }, []);

  return (
    <section id="how" className="hw bg-[#faf5ea] py-24 md:py-32 border-b border-[#E5E5E5]" aria-label="How We Make It">
      <div className="w">
        <div className="flex justify-between items-center mb-6">
          <p className="k">How we make</p>
          <p className="k">(02)</p>
        </div>

        {/* Illuminated Text Scroll Effect */}
        <p
          ref={litRef}
          className="d text-[clamp(32px,8vw,72px)] leading-[1.05] my-8 font-serif text-black"
        >
          Paper, ink, machines, hands &mdash; and plenty of attention to detail.
        </p>

        <p className="text-sm sm:text-base text-[#3b372e] max-w-xl font-light leading-relaxed mb-12">
          From the first digital proof to the physical press run, every piece is made slowly and pressed one impression at a time on restored vintage Heidelberg platen presses in our Nagaland atelier.
        </p>

        {/* 4 Craft Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNIQUES.map((tech) => (
            <div
              key={tech.step}
              className="bg-white border border-black/10 p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_24px_-12px_rgba(60,45,20,0.25)] group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-3.5 bg-[#f1e8d4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.img}
                  alt={tech.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="font-mono text-[9px] tracking-widest text-[#7b7566] uppercase block mb-1">
                {tech.step}
              </span>
              <h4 className="font-serif font-medium text-xl text-black tracking-tight mb-1.5">
                {tech.title}
              </h4>
              <p className="text-xs text-[#555] font-light leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

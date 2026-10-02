"use client";

const TECHNIQUES = [
  {
    title: "Pure Pigment Inks",
    desc: "Custom oil-based pigments mixed by hand to match bespoke Pantone shades and natural earth tones.",
    img: "/assets/revamp/how-we-make/FMS_7617.jpg",
  },
  {
    title: "The Mechanical Bite",
    desc: "Calibrated metal relief plates biting deep into thick cotton rag, creating indelible sculptural depth.",
    img: "/assets/revamp/how-we-make/FMS_6999.jpg",
  },
  {
    title: "Hand-Fed Presswork",
    desc: "Every single card is hand-fed into 1950s Heidelberg platens restored bolt-by-bolt in Dimapur.",
    img: "/assets/revamp/how-we-make/FMS_7401.jpg",
  },
  {
    title: "Archival Finishing",
    desc: "Hand-torn deckled edges, mirror foil edge gilding, and organic wax seals cast from brass matrices.",
    img: "/assets/revamp/how-we-make/FMS_6500.jpg",
  },
];

export function HowWeMakeSection() {
  return (
    <section
      id="how"
      className="hw py-20 md:py-28 border-b border-[rgba(14,14,14,0.08)] bg-transparent select-none"
      aria-label="How We Make"
    >
      <div className="w">
        <div className="mb-4">
          <p className="k">How we make</p>
        </div>

        <h2 className="text-[clamp(32px,5.5vw,54px)] font-serif text-black leading-[1.02] tracking-[-0.02em] font-normal mb-4">
          Ink, <i>steel</i> & cotton.
        </h2>

        <p className="text-sm sm:text-base text-[#444] max-w-xl font-light leading-relaxed mb-12">
          From the first digital proof to the physical press run, every piece is made slowly and pressed one impression at a time on restored vintage Heidelberg platen presses in our Nagaland studio.
        </p>

        {/* 4 Craft Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {TECHNIQUES.map((tech) => (
            <div
              key={tech.title}
              className="bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-4 sm:p-5 flex flex-col rounded-xs transition-all duration-400 ease-out hover:border-black/30 hover:-translate-y-1 shadow-[0_12px_28px_-16px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.14),0_4px_8px_rgba(0,0,0,0.03)] group"
            >
              <div className="relative aspect-[4/3.1] overflow-hidden mb-4 bg-[#F0ECE1] rounded-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.img}
                  alt={tech.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="font-serif font-medium text-[21px] sm:text-[23px] text-black tracking-[-0.015em] leading-[1.1] mb-2">
                {tech.title}
              </h3>

              <p className="text-[12.5px] leading-[1.55] text-[#555] font-light">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import { useRef, useState, useEffect } from "react";

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
  const crRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const m = TECHNIQUES.length;

  useEffect(() => {
    const cr = crRef.current;
    if (!cr) return;

    const cards = Array.from(cr.children) as HTMLElement[];
    if (cards.length === 0) return;

    const spring = { x: 0, v: 0 };
    let target = 0;
    let isDragging = false;
    let startX = 0;
    let initialX = 0;
    let movedDistance = 0;
    let lastClientX = 0;
    let latestPointerX = 0;
    let lastTime = 0;
    let releaseVelocity = 0;

    let isRunning = false;
    let animId: number;
    let lastAnimTime = performance.now();
    let lastActiveIdx = -1;

    // Precise physical gap formula: cardW * ((1 + scale) / 2) + desiredGap
    // With adjacent scale 0.88, ((1 + 0.88) / 2) = 0.94
    // Leaves exactly a noticeable 12px gap on mobile and 22px gap on desktop
    const getSpacing = () => {
      const cardW = cards[0]?.offsetWidth || 320;
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
      return cardW * 0.94 + (isMobile ? 12 : 22);
    };

    // Static z-index setup to eliminate compositor reflows
    cards.forEach((card) => {
      card.style.zIndex = "10";
    });

    const updateCards = () => {
      const sp = getSpacing();
      const currentIdx = ((Math.round(spring.x) % m) + m) % m;
      if (currentIdx !== lastActiveIdx) {
        lastActiveIdx = currentIdx;
        setActiveIndex(currentIdx);
      }

      cards.forEach((card, i) => {
        let diff = i - spring.x;
        diff -= m * Math.round(diff / m);
        const absDiff = Math.abs(diff);

        // Smooth continuous cosine easing with zero threshold popping
        const progress = Math.max(0, 1 - Math.min(1.2, absDiff));
        const smoothProgress = Math.cos((1 - progress) * Math.PI) * 0.5 + 0.5;

        const scale = 0.88 + 0.12 * smoothProgress;
        const opacity = 0.45 + 0.55 * smoothProgress;

        card.style.transform = `translate3d(${diff * sp}px,0,0) scale(${scale})`;
        card.style.opacity = `${opacity}`;
      });
    };

    const tick = (now: number) => {
      const dt = Math.min((now - lastAnimTime) / 1000, 0.032);
      lastAnimTime = now;

      if (isDragging) {
        const sp = getSpacing();
        spring.x = initialX - (latestPointerX - startX) / sp;
        spring.v = 0;
        updateCards();
        animId = requestAnimationFrame(tick);
      } else {
        // High-precision implicit critically-damped spring (seamless at 60Hz, 120Hz, 144Hz)
        const omega = 15;
        const f = 1.0 + 2.0 * dt * omega;
        const ooth = 1.0 / (f + dt * dt * omega * omega);
        const delta = spring.x - target;
        const v = spring.v;
        spring.x = target + (f * delta + dt * v) * ooth;
        spring.v = (v - dt * omega * omega * delta) * ooth;

        updateCards();

        const isResting = Math.abs(spring.v) < 0.0003 && Math.abs(spring.x - target) < 0.0003;
        if (isResting) {
          spring.x = target;
          spring.v = 0;
          updateCards();
          isRunning = false;
        } else {
          animId = requestAnimationFrame(tick);
        }
      }
    };

    const requestTick = () => {
      if (!isRunning) {
        isRunning = true;
        lastAnimTime = performance.now();
        animId = requestAnimationFrame(tick);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = lastClientX = latestPointerX = e.clientX;
      initialX = spring.x;
      movedDistance = 0;
      releaseVelocity = 0;
      lastTime = performance.now();
      requestTick();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const now = performance.now();
      const dt = now - lastTime;
      const dx = e.clientX - lastClientX;

      if (dt > 6) {
        releaseVelocity = (dx / dt) * 1000;
        lastClientX = e.clientX;
        lastTime = now;
      }

      movedDistance = Math.max(movedDistance, Math.abs(e.clientX - startX));
      latestPointerX = e.clientX;
      requestTick();
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      const sp = getSpacing();

      if (movedDistance > 8) {
        const flickCards = releaseVelocity / (sp * 2.2);
        if (Math.abs(flickCards) > 0.3) {
          target = flickCards > 0 ? Math.floor(spring.x) : Math.ceil(spring.x);
        } else {
          target = Math.round(spring.x);
        }
      } else {
        const targetCard = (e.target as HTMLElement)?.closest(".hmc") as HTMLElement;
        if (targetCard) {
          const idx = cards.indexOf(targetCard);
          let diff = idx - spring.x;
          diff -= m * Math.round(diff / m);
          if (Math.abs(diff) > 0.4) {
            target = Math.round(spring.x + diff);
          }
        }
      }

      requestTick();
    };

    cr.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });

    const onResize = () => updateCards();
    window.addEventListener("resize", onResize, { passive: true });

    updateCards();
    requestTick();

    return () => {
      cancelAnimationFrame(animId);
      cr.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", onResize);
    };
  }, [m]);

  const activeItem = TECHNIQUES[activeIndex];

  return (
    <section
      id="how"
      className="hw py-20 md:py-28 overflow-hidden border-b border-[rgba(14,14,14,0.08)] bg-white select-none"
      aria-label="How We Make"
    >
      <div className="w mb-[52px] sm:mb-10">
        <p className="k">How we make</p>
        <h2 className="d text-[clamp(36px,9vw,64px)] mt-1.5 font-serif text-black leading-[0.95]">
          Ink, <i>steel</i> &amp; cotton.
        </h2>
        <p className="text-xs sm:text-sm text-[#444] font-light max-w-[46ch] leading-relaxed mt-2.5">
          From the first digital proof to the physical press run, every
          piece is made slowly and pressed one impression at a time on
          restored vintage Heidelberg platen presses.
        </p>
      </div>

      {/* ── 4-Image Centered Focus Carousel (Wider rectangular proportions with controlled, noticeable gap) ── */}
      <div
        ref={crRef}
        className="cr w-full relative h-[270px] sm:h-[410px] touch-pan-y select-none cursor-grab active:cursor-grabbing overflow-hidden"
        aria-label="Craft Process Showcase"
      >
        {TECHNIQUES.map((tech, index) => (
          <div
            key={index}
            className="hmc absolute left-1/2 top-0 w-[82vw] sm:w-[490px] h-full -ml-[41vw] sm:-ml-[245px] shadow-[0_20px_35px_-15px_rgba(0,0,0,0.18),0_2px_4px_rgba(0,0,0,0.06)] bg-white will-change-[transform,opacity] border border-[rgba(14,14,14,0.1)]"
          >
            <div className="absolute inset-0 overflow-hidden bg-[#F7F7F7]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.img}
                alt={tech.title}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Slide Caption — same pattern as hero */}
      <div className="text-center mt-5 min-h-[50px] px-4 transition-opacity duration-300">
        <div className="inline-block">
          <h3 className="font-serif font-medium text-xl sm:text-2xl text-black tracking-tight">
            {activeItem.title}
          </h3>
          <p className="text-xs text-[#7b7566] tracking-[0.1em] mt-1 font-sans">
            {activeItem.desc}
          </p>
        </div>
      </div>

      {/* Slide Counter */}
      <p className="k text-center mt-3.5 tracking-[0.28em]">
        {activeIndex + 1} / {m}
      </p>
    </section>
  );
}

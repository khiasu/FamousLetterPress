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

/* ── Spring physics — same engine as hero carousel ── */
class Spring {
  x: number;
  v: number;
  t: number;
  k: number;
  c: number;
  constructor(x: number, k: number, c: number) {
    this.x = x;
    this.v = 0;
    this.t = x;
    this.k = k;
    this.c = c;
  }
  step(d: number) {
    this.v += (-this.k * (this.x - this.t) - this.c * this.v) * d;
    this.x += this.v * d;
  }
}

export function HowWeMakeSection() {
  const crRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const m = TECHNIQUES.length;

  useEffect(() => {
    const cr = crRef.current;
    if (!cr) return;

    const cards = Array.from(cr.children) as HTMLElement[];
    if (cards.length === 0) return;

    const spring = new Spring(0, 80, 14);
    let target = 0;
    let isDragging = 0;
    let startX = 0;
    let lastX = 0;
    let initialTarget = 0;
    let movedDistance = 0;
    let lastDelta = 0;

    const getSpacing = () => cards[0].offsetWidth * 0.95;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = 1;
      startX = lastX = e.clientX;
      initialTarget = target;
      movedDistance = 0;
      lastDelta = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      lastDelta = e.clientX - lastX;
      lastX = e.clientX;
      movedDistance = Math.max(movedDistance, Math.abs(e.clientX - startX));
      target = initialTarget - (e.clientX - startX) / getSpacing();
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = 0;
      if (movedDistance > 6) {
        target = Math.round(target - (lastDelta / getSpacing()) * 5);
      } else {
        const targetCard = (e.target as HTMLElement)?.closest(".hmc") as HTMLElement;
        if (targetCard) {
          const idx = cards.indexOf(targetCard);
          let diff = idx - spring.x;
          diff -= m * Math.round(diff / m);
          if (Math.abs(diff) > 0.5) {
            target = Math.round(spring.x + diff);
          }
        }
      }
    };

    let isRunning = false;
    let animId: number;
    let lastActiveIdx = -1;

    const requestTick = () => {
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(tick);
      }
    };

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

        const scale = absDiff < 1 ? 1 - absDiff * 0.22 : 0.78;
        const opacity = absDiff < 1 ? 1 - absDiff * 0.3 : Math.max(0, 0.7 - (absDiff - 1) * 0.55);
        const zIndex = 100 - Math.round(absDiff * 10);

        card.style.transform = `translate3d(${diff * sp}px,0,0) scale(${scale})`;
        card.style.opacity = `${opacity}`;
        card.style.zIndex = `${zIndex}`;
      });
    };

    const tick = () => {
      spring.t = target;
      for (let k = 0; k < 2; k++) {
        spring.step(1 / 120);
      }

      updateCards();

      const isResting =
        !isDragging &&
        Math.abs(spring.v) < 0.001 &&
        Math.abs(spring.x - spring.t) < 0.001;

      if (isResting) {
        spring.x = spring.t;
        spring.v = 0;
        updateCards();
        isRunning = false;
      } else {
        animId = requestAnimationFrame(tick);
      }
    };

    // Auto-advance every 5 seconds
    const interval = setInterval(() => {
      const rect = cr.getBoundingClientRect();
      if (!isDragging && !document.hidden && rect.bottom > 0 && rect.top < window.innerHeight) {
        target = Math.round(target) + 1;
        requestTick();
      }
    }, 5000);

    const onPointerDownWithWakeup = (e: PointerEvent) => {
      onPointerDown(e);
      requestTick();
    };

    const onPointerMoveWithWakeup = (e: PointerEvent) => {
      onPointerMove(e);
      requestTick();
    };

    const onPointerUpWithWakeup = (e: PointerEvent) => {
      onPointerUp(e);
      requestTick();
    };

    cr.addEventListener("pointerdown", onPointerDownWithWakeup, { passive: true });
    window.addEventListener("pointermove", onPointerMoveWithWakeup, { passive: true });
    window.addEventListener("pointerup", onPointerUpWithWakeup, { passive: true });
    window.addEventListener("pointercancel", onPointerUpWithWakeup, { passive: true });

    updateCards();
    requestTick();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(interval);
      cr.removeEventListener("pointerdown", onPointerDownWithWakeup);
      window.removeEventListener("pointermove", onPointerMoveWithWakeup);
      window.removeEventListener("pointerup", onPointerUpWithWakeup);
      window.removeEventListener("pointercancel", onPointerUpWithWakeup);
    };
  }, [m]);

  const activeItem = TECHNIQUES[activeIndex];

  return (
    <section
      id="how"
      className="hw py-20 md:py-28 overflow-hidden border-b border-[rgba(14,14,14,0.08)] bg-white select-none"
      aria-label="How We Make"
    >
      <div className="w mb-10">
        <p className="k">How we make</p>
        <h2 className="d text-[clamp(36px,9vw,64px)] mt-1.5 font-serif text-black leading-[0.95]">
          Ink, <i>steel</i> & cotton.
        </h2>
        <p className="text-xs sm:text-sm text-[#444] font-light max-w-[46ch] leading-relaxed mt-2.5">
          From the first digital proof to the physical press run, every
          piece is made slowly and pressed one impression at a time on
          restored vintage Heidelberg platen presses.
        </p>
      </div>

      {/* ── 4-Image Centered Focus Carousel — same style as hero ── */}
      <div
        ref={crRef}
        className="cr w-full relative h-[clamp(280px,50vw,420px)] touch-pan-y select-none cursor-grab active:cursor-grabbing overflow-hidden"
        aria-label="Craft Process Showcase"
      >
        {TECHNIQUES.map((tech, index) => (
          <div
            key={index}
            className="hmc absolute left-1/2 top-0 w-[min(74vw,440px)] h-full -ml-[min(37vw,220px)] shadow-[0_20px_35px_-15px_rgba(0,0,0,0.18),0_2px_4px_rgba(0,0,0,0.06)] bg-white will-change-transform border border-[rgba(14,14,14,0.1)]"
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

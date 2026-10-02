"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface HeroItem {
  title: string;
  sub: string;
  img: string;
  href: string;
}

const HERO_ITEMS: HeroItem[] = [
  {
    title: "The Florentine Heirloom Suite",
    sub: "600gsm Wild Cotton Rag · Matte Gold Foil",
    img: "/assets/revamp/carousel/FMS_7392.jpg",
    href: "/weddings",
  },
  {
    title: "Edge-Gilded Executive Cards",
    sub: "600gsm Pure Cotton · Mirror Gold Edge Gilding",
    img: "/assets/revamp/what-we-make/FMS_3462.jpg",
    href: "/business-cards",
  },
  {
    title: "The Curated Wedding Sample Box",
    sub: "300–900gsm Swatches · Real Foil Library",
    img: "/assets/revamp/sample-kits/FMS_3749.jpg",
    href: "/weddings/wedding-sample-kit",
  },
  {
    title: "Botanical Crest & Deckled Edges",
    sub: "Handmade Deckled Cotton · Custom Wax Seal",
    img: "/assets/wedding stationery/invites/FMS_2762.jpg",
    href: "/weddings",
  },
  {
    title: "Hand-Calibrated Vintage Presswork",
    sub: "Refurbished Heidelberg Platen Presses · Nagaland",
    img: "/assets/revamp/how-we-make/FMS_6999.jpg",
    href: "/about",
  },
  {
    title: "Architectural Minimalist Identity",
    sub: "900gsm Ultra-Heavy Cotton · Deep Relief Deboss",
    img: "/assets/revamp/what-we-make/FMS_3764.jpg",
    href: "/business-cards",
  },
];

// Spring physics simulation from user's prototype
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

export function HeroSection() {
  const crRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const m = HERO_ITEMS.length;

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
        const targetCard = (e.target as HTMLElement)?.closest(".cs") as HTMLElement;
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

    // Auto-advance every 4.8 seconds
    const interval = setInterval(() => {
      const rect = cr.getBoundingClientRect();
      if (!isDragging && !document.hidden && rect.bottom > 0 && rect.top < window.innerHeight) {
        target = Math.round(target) + 1;
        requestTick();
      }
    }, 4800);

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


  const activeItem = HERO_ITEMS[activeIndex];

  return (
    <section className="hero pt-28 md:pt-36 pb-16 overflow-hidden relative" aria-label="Famous Letterpress Hero">
      <div className="w">
        <p className="k mb-6 tracking-[0.32em] text-[#7b7566]">
          Letterpress &amp; Foil &middot; Handcrafted in Nagaland
        </p>

        {/* Clean single-line headline */}
        <h1 className="d text-[clamp(48px,13vw,120px)] leading-[0.92] tracking-[-0.035em] pb-[0.06em]">
          Designers turned <i>printers.</i>
        </h1>

        {/* Brand sub-sentence */}
        <div className="grid gap-5 mt-8 max-w-[520px]">
          <p className="text-[#3b372e] text-[14.5px] sm:text-[15.5px] leading-[1.7] font-light">
            We press ink into cotton, one impression at a time — creating heirloom stationery that you can feel with your fingertips. Handcrafted on vintage platens in Nagaland.
          </p>
          <div className="flex gap-5 items-center flex-wrap mt-1">
            <Link
              href="https://wa.me/+918416099340"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Book a consult
            </Link>
            <a href="#svc" className="ln">
              Explore our work
            </a>
          </div>
        </div>
      </div>

      {/* ── 6-Image Centered Focus Carousel with Spring Physics ── */}
      <div
        ref={crRef}
        className="cr w-full relative h-[clamp(280px,50vw,420px)] mt-12 touch-pan-y select-none cursor-grab active:cursor-grabbing overflow-hidden"
        aria-label="Studio Work Showcase"
      >
        {HERO_ITEMS.map((item, index) => (
          <div
            key={index}
            className="cs absolute left-1/2 top-0 w-[min(74vw,440px)] h-full -ml-[min(37vw,220px)] shadow-[0_20px_35px_-15px_rgba(60,45,20,0.35),0_2px_4px_rgba(60,45,20,0.12)] bg-[#faf5ea] will-change-transform"
          >
            <div className="ph absolute inset-0 overflow-hidden bg-[#faf5ea]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={item.title}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Slide Caption Under Carousel */}
      <div className="text-center mt-5 min-h-[50px] px-4 transition-opacity duration-300">
        <Link href={activeItem.href} className="group inline-block">
          <h3 className="font-serif font-medium text-xl sm:text-2xl text-black tracking-tight group-hover:opacity-70 transition-opacity">
            {activeItem.title}
          </h3>
          <p className="text-xs text-[#7b7566] tracking-[0.1em] mt-1 font-sans">
            {activeItem.sub}
          </p>
        </Link>
      </div>

      {/* Slide Counter — no "Swipe" text */}
      <p className="k text-center mt-3.5 tracking-[0.28em]">
        0{activeIndex + 1} / 0{m}
      </p>
    </section>
  );
}

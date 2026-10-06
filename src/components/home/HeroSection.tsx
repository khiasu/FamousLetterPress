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
    href: "/our-work/wedding-invites",
  },
  {
    title: "Edge-Gilded Executive Cards",
    sub: "600gsm Pure Cotton · Mirror Gold Edge Gilding",
    img: "/assets/revamp/what-we-make/FMS_3462.jpg",
    href: "/our-work/business-cards",
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
    href: "/our-work/wedding-invites",
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
    href: "/our-work/business-cards",
  },
];


export function HeroSection() {
  const crRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const m = HERO_ITEMS.length;

  useEffect(() => {
    const cr = crRef.current;
    if (!cr) return;

    const cards = Array.from(cr.children) as HTMLElement[];
    if (cards.length === 0) return;

    const spring = { x: 0, v: 0 };

    // Precise physical gap formula: cardW * ((1 + scale) / 2) + desiredGap
    // With adjacent scale 0.88, ((1 + 0.88) / 2) = 0.94
    // Leaves exactly a noticeable 12px gap on mobile and 22px gap on desktop
    const getSpacing = () => {
      const cardW = cards[0]?.offsetWidth || 320;
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
      return cardW * 0.94 + (isMobile ? 12 : 22);
    };

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

    // Set static z-index once to avoid DOM compositor layer invalidations at 144Hz
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

        // GPU-only properties: transforms and opacity without zIndex reflows for native 144Hz smoothness
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
        releaseVelocity = (dx / dt) * 1000; // px per second
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
        // Evaluate flick or swipe distance
        const flickCards = releaseVelocity / (sp * 2.2);
        if (Math.abs(flickCards) > 0.3) {
          // Intentional flick
          target = flickCards > 0 ? Math.floor(spring.x) : Math.ceil(spring.x);
        } else {
          // Regular release: snap to nearest
          target = Math.round(spring.x);
        }
      } else {
        // Click on adjacent card advances directly to it
        const targetCard = (e.target as HTMLElement)?.closest(".cs") as HTMLElement;
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

    return () => {
      cancelAnimationFrame(animId);
      cr.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", onResize);
    };
  }, [m]);

  const activeItem = HERO_ITEMS[activeIndex];

  return (
    <section className="hero pt-28 md:pt-36 pb-16 overflow-hidden relative" aria-label="Famous Letterpress Hero">
      <div className="w">
        {/* Clean single-line headline */}
        <h1 className="d text-[clamp(48px,13vw,120px)] leading-[0.92] tracking-[-0.035em] pb-[0.06em]">
          Designers turned <i>printers.</i>
        </h1>

        {/* Brand studio descriptor & CTA */}
        <div className="grid gap-5 mt-7 max-w-[560px]">
          <p className="text-[#555] text-sm sm:text-base font-light tracking-wide leading-relaxed">
            Luxury Letterpress &amp; Foil Wedding Invitations in India
          </p>
          <div className="mt-1">
            <Link
              href="/our-work/wedding-invites#early-bride"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-4 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[11px] sm:text-xs uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* ── 6-Image Centered Focus Carousel (Matched HowWeMake layout and spacing) ── */}
      <div
        ref={crRef}
        className="cr w-full relative h-[270px] sm:h-[410px] mt-12 touch-pan-y select-none cursor-grab active:cursor-grabbing overflow-hidden"
        aria-label="Studio Work Showcase"
      >
        {HERO_ITEMS.map((item, index) => (
          <div
            key={index}
            className="cs absolute left-1/2 top-0 w-[82vw] sm:w-[490px] h-full -ml-[41vw] sm:-ml-[245px] shadow-[0_20px_35px_-15px_rgba(0,0,0,0.18),0_2px_4px_rgba(0,0,0,0.06)] bg-white will-change-[transform,opacity] border border-[rgba(14,14,14,0.1)]"
          >
            <div className="ph absolute inset-0 overflow-hidden bg-[#F7F7F7]">
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

      {/* Dynamic Slide Caption Under Carousel (Left-aligned flush with the card) */}
      <div className="w-full max-w-[82vw] sm:max-w-[490px] mx-auto mt-5 px-2 sm:px-0 text-left transition-opacity duration-300">
        <Link href={activeItem.href} className="group block text-left">
          <h3 className="font-serif font-medium text-xl sm:text-2xl text-black tracking-tight group-hover:opacity-70 transition-opacity">
            {activeItem.title}
          </h3>
          <p className="text-xs text-[#7b7566] tracking-[0.1em] mt-1 font-sans">
            {activeItem.sub}
          </p>
        </Link>

        {/* Slide Counter — left-aligned */}
        <p className="k text-left mt-3 tracking-[0.28em]">
          0{activeIndex + 1} / 0{m}
        </p>
      </div>
    </section>
  );
}

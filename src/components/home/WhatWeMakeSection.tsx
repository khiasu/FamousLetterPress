"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface WorkItem {
  title: string;
  desc: string;
  href: string;
  img: string;
}

const WORK_ITEMS: WorkItem[] = [
  {
    title: "Wedding Invites",
    desc: "Letterpress & hot foil stamping on 600gsm cotton suites",
    href: "/weddings",
    img: "/assets/revamp/what-we-make/FMS_6975.jpg",
  },
  {
    title: "Envelopes & Liners",
    desc: "Euro-flap, hand-folded with illustrated bespoke liners",
    href: "/weddings",
    img: "/assets/revamp/what-we-make/FMS_6427.jpg",
  },
  {
    title: "Wax Seals",
    desc: "Organic hand-poured wax stamps with engraved brass crests",
    href: "/weddings",
    img: "/assets/revamp/what-we-make/FMS_4043.jpg",
  },
  {
    title: "Business Cards",
    desc: "Substantial 600–900gsm cotton with mirror gold edge gilding",
    href: "/business-cards",
    img: "/assets/revamp/what-we-make/FMS_3781.jpg",
  },
  {
    title: "Hot Foil Stamping",
    desc: "Deep heat-fused matte & metallic foil impression",
    href: "/process",
    img: "/assets/revamp/what-we-make/FMS_8669.jpg",
  },
  {
    title: "Blind Emboss",
    desc: "Sculptural three-dimensional tactile relief without ink",
    href: "/materials",
    img: "/assets/revamp/what-we-make/FMS_4039.jpg",
  },
  {
    title: "Bespoke Commissions",
    desc: "One-of-one custom collaborations for intimate ceremonies",
    href: "/start-a-project",
    img: "/assets/wedding stationery/invites/FMS_2762.jpg",
  },
];

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

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export function WhatWeMakeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);
  const [modalItem, setModalItem] = useState<WorkItem | null>(null);

  const n = WORK_ITEMS.length;

  useEffect(() => {
    const sec = sectionRef.current;
    const stage = stageRef.current;
    if (!sec || !stage) return;

    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".sc"));
    if (cards.length === 0) return;

    // Smooth critically damped spring (glides like silk without jitter)
    const spring = new Spring(0, 48, 14);
    let targetProg = 0;
    let isPointerDown = false;
    let startX = 0;
    let startTarget = 0;
    let moved = 0;
    let lastTime = performance.now();
    let isRunning = false;
    let animId: number;
    let isScrollLocked = false;
    let lastActiveIdx = -1;

    const computeScrollProg = () => {
      const rect = sec.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;
      if (scrollableDist <= 0) return 0;
      return clamp(-rect.top / scrollableDist, 0, 1) * (n - 1);
    };

    targetProg = computeScrollProg();
    spring.x = targetProg;
    spring.t = targetProg;

    const requestTick = () => {
      if (!isRunning) {
        isRunning = true;
        lastTime = performance.now();
        animId = requestAnimationFrame(tick);
      }
    };

    const updateCardsVisual = () => {
      const cardWidth = cards[0]?.offsetWidth || 300;
      const w = cardWidth * 0.86;

      const activeIdx = clamp(Math.round(spring.x), 0, n - 1);
      if (activeIdx !== lastActiveIdx) {
        lastActiveIdx = activeIdx;
        if (counterRef.current) {
          counterRef.current.textContent = `0${activeIdx + 1} / 0${n} · Swipe / Scroll`;
        }
      }

      for (let i = 0; i < n; i++) {
        const c = cards[i];
        const d = i - spring.x;
        const a = Math.abs(d);

        // Optimized 3D transform with depth and subtle perspective rotation
        const tx = (d * w).toFixed(2);
        const tz = (-a * 220).toFixed(2);
        const ry = (-d * 36).toFixed(2);
        const sc = (1 - a * 0.05).toFixed(3);
        const op = clamp(1 - a * 0.55, 0.25, 1).toFixed(3);
        const zi = 10 - Math.min(9, Math.round(a * 2));

        c.style.transform = `translate3d(${tx}px,0,${tz}px) rotateY(${ry}deg) scale(${sc})`;
        c.style.opacity = op;
        c.style.zIndex = `${zi}`;
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05); // Clamp dt to prevent jumping
      lastTime = now;

      spring.t = targetProg;
      spring.step(dt);

      updateCardsVisual();

      // Check if spring has reached rest
      const isResting =
        !isPointerDown &&
        Math.abs(spring.v) < 0.001 &&
        Math.abs(spring.x - spring.t) < 0.001;

      if (isResting) {
        spring.x = spring.t;
        spring.v = 0;
        updateCardsVisual();
        isRunning = false;
      } else {
        animId = requestAnimationFrame(tick);
      }
    };

    // Scroll listener: only update when not dragging and not locked
    const onScroll = () => {
      if (isPointerDown || isScrollLocked) return;
      targetProg = computeScrollProg();
      requestTick();
    };

    // Passive scroll listener for maximum 120fps smoothness
    window.addEventListener("scroll", onScroll, { passive: true });

    // Pointer events for smooth touch & mouse swipe
    const onPointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      startX = e.clientX;
      startTarget = targetProg;
      moved = 0;
      requestTick();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      const cardWidth = cards[0]?.offsetWidth || 300;
      // Sensitive, responsive swipe sensitivity
      targetProg = clamp(startTarget - dx / (cardWidth * 0.75), 0, n - 1);
      requestTick();
    };

    const onPointerUp = () => {
      if (!isPointerDown) return;
      isPointerDown = false;

      if (moved > 10) {
        // Snap to nearest integer card
        targetProg = Math.round(targetProg);

        // Sync page scroll position to the current card so subsequent scroll is seamless
        const rect = sec.getBoundingClientRect();
        const scrollableDist = rect.height - window.innerHeight;
        if (scrollableDist > 0) {
          const targetScrollY =
            window.scrollY +
            rect.top +
            (targetProg / (n - 1)) * scrollableDist;

          isScrollLocked = true;
          window.scrollTo({ top: targetScrollY, behavior: "auto" });
          setTimeout(() => {
            isScrollLocked = false;
          }, 120);
        }
      }
      requestTick();
    };

    stage.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });

    // Initial render
    updateCardsVisual();
    requestTick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      stage.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [n]);

  return (
    <>
      <section
        ref={sectionRef}
        id="svc"
        className="sv relative h-[420vh] bg-white select-none"
        aria-label="What We Make: 3D Rotating Cards"
        style={{
          contain: "paint layout",
        }}
      >
        <div className="svs sticky top-0 h-screen overflow-hidden flex flex-col pt-24 md:pt-28 pb-8 bg-white">
          <div className="w svh flex justify-between items-end w-full mb-3">
            <div>
              <p className="k">What we make</p>
              <h2 className="d text-[clamp(38px,10vw,70px)] mt-1.5 font-serif">
                Our <i>work</i>
              </h2>
            </div>
            <p
              ref={counterRef}
              className="k text-[10px] tracking-[0.28em] text-[#7b7566] select-none"
            >
              01 / 0{n} &nbsp;·&nbsp; Swipe / Scroll
            </p>
          </div>

          {/* 3D Perspective Card Stage */}
          <div
            ref={stageRef}
            className="svst relative flex-1 touch-pan-y cursor-grab active:cursor-grabbing mb-5"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "50% 42%",
              transformStyle: "preserve-3d",
              contain: "layout style",
            }}
          >
            {WORK_ITEMS.map((item, index) => (
              <button
                key={index}
                onClick={() => setModalItem(item)}
                className="sc absolute left-1/2 top-[44%] w-[min(72vw,360px)] h-[calc(min(72vw,360px)*1.38)] -mt-[calc(min(72vw,360px)*0.69)] -ml-[calc(min(72vw,360px)/2)] border-0 cursor-pointer text-left p-4 flex flex-col bg-[#faf5ea] shadow-[0_24px_36px_-20px_rgba(60,45,20,0.5),0_2px_4px_rgba(60,45,20,0.12)] text-black will-change-transform group"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                aria-label={item.title}
              >
                <div className="art relative flex-1 mb-3 overflow-hidden bg-[#e8e2d5] rounded-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="font-serif font-medium text-[clamp(24px,6vw,30px)] leading-[1.05] tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-[12.5px] leading-[1.5] text-[#3b372e] my-1.5 line-clamp-2">
                  {item.desc}
                </p>
                <span className="ln self-start mt-1">Explore craft</span>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* Fullscreen Expand Card Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 z-[70] bg-[#faf5ea] overflow-y-auto p-6 md:p-12 animate-[fadeIn_0.4s_ease-out]"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-[880px] mx-auto min-h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-8 border-b border-[#E5E5E5] pb-4">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/logo.png" alt="Logo" className="w-8 h-8 rounded-full border border-black/20 p-0.5" />
                  <span className="font-serif font-medium text-lg tracking-widest uppercase">
                    Famous Letterpress
                  </span>
                </div>
                <button
                  onClick={() => setModalItem(null)}
                  className="ln text-xs uppercase tracking-widest cursor-pointer"
                >
                  Close &times;
                </button>
              </div>

              <p className="k mb-2">Our Craft &middot; Bespoke Detail</p>
              <h1 className="d text-[clamp(44px,12vw,96px)] leading-[0.95] tracking-tight mb-4 font-serif">
                {modalItem.title}
              </h1>
              <p className="text-base sm:text-lg text-[#3b372e] font-light max-w-xl leading-relaxed mb-6">
                {modalItem.desc}
              </p>

              <div className="relative aspect-[16/10] max-w-xl overflow-hidden shadow-[0_20px_35px_-15px_rgba(60,45,20,0.4)] my-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={modalItem.img}
                  alt={modalItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex items-center gap-5 pt-6 border-t border-[#E5E5E5]">
              <Link href={modalItem.href} className="btn">
                Commission {modalItem.title}
              </Link>
              <Link
                href="https://wa.me/+918416099340"
                target="_blank"
                rel="noopener noreferrer"
                className="ln"
              >
                Inquire on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

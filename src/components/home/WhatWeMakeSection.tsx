"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);
  const isDraggingRef = useRef(false);

  const n = WORK_ITEMS.length;

  const handleCardClick = (href: string) => {
    if (isDraggingRef.current) return;
    router.push(href);
  };

  useEffect(() => {
    const sec = sectionRef.current;
    const stage = stageRef.current;
    if (!sec || !stage) return;

    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".sc"));
    if (cards.length === 0) return;

    // Smooth critically damped spring — silk-smooth, no oscillation
    const spring = new Spring(0, 42, 16);
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
          counterRef.current.textContent = `0${activeIdx + 1} / 0${n}`;
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
        const zi = 20 - Math.min(18, Math.round(a * 4));

        c.style.transform = `translate3d(${tx}px,0,${tz}px) rotateY(${ry}deg) scale(${sc})`;
        c.style.opacity = op;
        c.style.zIndex = `${zi}`;
        // The active card is easily clickable, while background cards don't intercept clicks
        c.style.pointerEvents = a < 0.6 ? "auto" : "none";
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05); // Clamp dt to prevent jumping
      lastTime = now;

      spring.t = targetProg;
      // Sub-step for smoother integration
      const steps = 3;
      const subDt = dt / steps;
      for (let s = 0; s < steps; s++) {
        spring.step(subDt);
      }

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

    let scrollTimeout: NodeJS.Timeout | null = null;

    // Scroll listener: update spring and auto-snap when scrolling pauses
    const onScroll = () => {
      if (isPointerDown || isScrollLocked) return;
      const rawProg = computeScrollProg();
      targetProg = rawProg;
      requestTick();

      // Magnetic snap: when the user stops scrolling, lock to the nearest slide if scrolled past 50%
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (isPointerDown || isScrollLocked) return;
        const rect = sec.getBoundingClientRect();
        // Only snap when the section is actively in view and taking over the screen
        if (rect.top <= 10 && rect.bottom >= window.innerHeight - 10) {
          const nearestCard = Math.round(computeScrollProg());
          const scrollableDist = rect.height - window.innerHeight;
          if (scrollableDist > 0) {
            const targetScrollY =
              window.scrollY +
              rect.top +
              (nearestCard / (n - 1)) * scrollableDist;

            // Only smooth-align if difference is notable
            if (Math.abs(window.scrollY - targetScrollY) > 8) {
              isScrollLocked = true;
              targetProg = nearestCard;
              window.scrollTo({ top: targetScrollY, behavior: "smooth" });
              setTimeout(() => {
                isScrollLocked = false;
              }, 450);
            }
          }
        }
      }, 120);
    };

    // Passive scroll listener for maximum 120fps smoothness
    window.addEventListener("scroll", onScroll, { passive: true });

    // Pointer events for smooth touch & mouse swipe
    const onPointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      startX = e.clientX;
      startTarget = targetProg;
      moved = 0;
      isDraggingRef.current = false;
      requestTick();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      if (moved > 8) {
        isDraggingRef.current = true;
      }
      const cardWidth = cards[0]?.offsetWidth || 300;
      // Sensitive, responsive swipe sensitivity
      targetProg = clamp(startTarget - dx / (cardWidth * 0.75), 0, n - 1);
      requestTick();
    };

    const onPointerUp = () => {
      if (!isPointerDown) return;
      isPointerDown = false;

      if (moved > 8) {
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 150);

        // Snap to nearest card (>50% locks to next slide)
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
          window.scrollTo({ top: targetScrollY, behavior: "instant" });
          // Extended debounce for seamless handoff
          setTimeout(() => {
            isScrollLocked = false;
          }, 200);
        }
      } else {
        isDraggingRef.current = false;
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
      if (scrollTimeout) clearTimeout(scrollTimeout);
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
        className="sv relative h-[420vh] bg-white select-none z-0"
        aria-label="What We Make: 3D Rotating Cards"
        style={{
          contain: "paint layout",
          isolation: "isolate",
        }}
      >
        <div className="svs sticky top-0 h-screen overflow-hidden flex flex-col pt-24 md:pt-28 pb-8 bg-white">
          <div className="w svh flex justify-between items-end w-full mb-3">
            <div>
              <p className="k">What we make</p>
              <h2 className="d text-[clamp(36px,9vw,64px)] mt-1.5 font-serif text-black leading-[0.95]">
                Our <i>work</i>
              </h2>
              <p className="text-xs sm:text-sm text-[#444] font-light max-w-[46ch] leading-relaxed mt-2.5">
                Our expertise lies in working with our clients to deliver transcending experiences and timeless products, find out more about how we can help you
              </p>
            </div>
            <p
              ref={counterRef}
              className="k text-[10px] tracking-[0.28em] text-[#7b7566] select-none self-start sm:self-end shrink-0"
            >
              01 / 0{n}
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
              <div
                key={index}
                onClick={() => handleCardClick(item.href)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    router.push(item.href);
                  }
                }}
                className="sc absolute left-1/2 top-[44%] w-[min(72vw,360px)] h-[calc(min(72vw,360px)*1.38)] -mt-[calc(min(72vw,360px)*0.69)] -ml-[calc(min(72vw,360px)/2)] border border-[rgba(14,14,14,0.12)] cursor-pointer text-left p-4 sm:p-5 flex flex-col bg-[#FAF8F5] shadow-[0_20px_35px_-20px_rgba(0,0,0,0.16),0_2px_4px_rgba(0,0,0,0.04)] text-black will-change-transform group transition-colors duration-200 hover:border-black/30 select-none"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                aria-label={`View ${item.title}`}
              >
                <div className="art relative flex-1 mb-3.5 overflow-hidden bg-[#F0ECE1] rounded-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-103"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="font-serif font-medium text-[clamp(24px,6vw,30px)] leading-[1.05] tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-[12.5px] leading-[1.5] text-[#444] my-1.5 line-clamp-2">
                  {item.desc}
                </p>
                <span className="ln self-start mt-1 text-[11px] font-mono uppercase tracking-[0.16em]">
                  Explore {item.title} &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

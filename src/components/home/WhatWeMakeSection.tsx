"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
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
    desc: "Handcrafted, custom, and ready-made wedding stationery that can be personalized to make a big impression on your big day.",
    href: "/our-work/wedding-invites",
    img: "/assets/our-work/wedding-invites.jpg",
  },
  {
    title: "Envelopes",
    desc: "Our vintage presses print on thick paper stock and irregular shapes to make stunning personalized envelopes.",
    href: "/our-work/envelopes",
    img: "/assets/our-work/envelopes.jpg",
  },
  {
    title: "Seal Stickers",
    desc: "Die-cut seals made from thick cotton paper that are durable and easy to use with no mess or waste.",
    href: "/our-work/seal-stickers",
    img: "/assets/our-work/seal-stickers.jpg",
  },
  {
    title: "Business Cards",
    desc: "An extension of your brand’s identity on substantial cotton paper that helps reinforce your image and leave a lasting impression.",
    href: "/our-work/business-cards",
    img: "/assets/our-work/business-cards.jpg",
  },
  {
    title: "Certificates",
    desc: "Printed on acid-free archival cotton papers, debossed on our press, and foil stamped with a royal finish.",
    href: "/our-work/certificates",
    img: "/assets/our-work/certificates.jpg",
  },
  {
    title: "Design & Illustrations",
    desc: "Our team of experienced in-house designers works with clients to manifest their vision into engaging physical works.",
    href: "/our-work/design-illustration",
    img: "/assets/our-work/design-illustrations.jpg",
  },
  {
    title: "Custom Works",
    desc: "Coasters, notebooks, pamphlets, decor pieces, and unique artisanal commissions crafted for custom print jobs.",
    href: "/our-work/custom-works",
    img: "/assets/our-work/custom-works.jpg",
  },
];

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export function WhatWeMakeSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);
  const isDraggingRef = useRef(false);

  const n = WORK_ITEMS.length;

  useEffect(() => {
    const sec = sectionRef.current;
    const stage = stageRef.current;
    if (!sec || !stage) return;

    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".sc"));
    if (cards.length === 0) return;

    const spring = { x: 0, v: 0 };
    let targetProg = 0;
    let isPointerDown = false;
    let startX = 0;
    let startY = 0;
    let startTarget = 0;
    let isHorizontalSwipe = false;
    let gestureDecided = false;

    let isRunning = false;
    let animId: number;
    let lastAnimTime = performance.now();
    let lastActiveIdx = -1;

    const computeScrollProg = () => {
      const rect = sec.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;
      if (scrollableDist <= 0) return 0;
      return clamp(-rect.top / scrollableDist, 0, 1) * (n - 1);
    };

    targetProg = computeScrollProg();
    spring.x = targetProg;

    const updateCardsVisual = () => {
      const cardWidth = cards[0]?.offsetWidth || 340;
      const w = cardWidth * 0.85;

      const activeIdx = clamp(Math.round(spring.x), 0, n - 1);
      if (activeIdx !== lastActiveIdx) {
        lastActiveIdx = activeIdx;
        if (counterRef.current) {
          counterRef.current.textContent = `0${activeIdx + 1} / 0${n}`;
        }
        // Update z-index only when active index shifts, preventing compositor thrashing on every frame
        cards.forEach((c, i) => {
          const diffFromActive = Math.abs(i - activeIdx);
          c.style.zIndex = `${20 - Math.min(diffFromActive * 2, 18)}`;
        });
      }

      for (let i = 0; i < n; i++) {
        const c = cards[i];
        const d = i - spring.x;
        const a = Math.abs(d);

        // Frustum cull cards that are far away to drastically save GPU and CPU on mobile
        if (a > 2.4) {
          c.style.visibility = "hidden";
          c.style.pointerEvents = "none";
          continue;
        }

        c.style.visibility = "visible";
        const tx = Math.round(d * w * 10) / 10;
        const tz = Math.round(-a * 190);
        const ry = Math.round(-d * 30 * 10) / 10;
        const sc = Math.round((1 - Math.min(a * 0.06, 0.22)) * 1000) / 1000;
        const op = Math.round(clamp(1 - a * 0.52, 0.22, 1) * 100) / 100;

        c.style.transform = `translate3d(${tx}px,0,${tz}px) rotateY(${ry}deg) scale(${sc})`;
        c.style.opacity = `${op}`;
        c.style.pointerEvents = "auto";
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - lastAnimTime) / 1000, 0.032);
      lastAnimTime = now;

      // High-precision implicit critically-damped spring (seamless across 60Hz, 120Hz, 144Hz+)
      const omega = 16;
      const f = 1.0 + 2.0 * dt * omega;
      const ooth = 1.0 / (f + dt * dt * omega * omega);
      const delta = spring.x - targetProg;
      const v = spring.v;
      spring.x = targetProg + (f * delta + dt * v) * ooth;
      spring.v = (v - dt * omega * omega * delta) * ooth;

      updateCardsVisual();

      const isResting = Math.abs(spring.v) < 0.0003 && Math.abs(spring.x - targetProg) < 0.0003;
      if (isResting) {
        spring.x = targetProg;
        spring.v = 0;
        updateCardsVisual();
        isRunning = false;
      } else {
        animId = requestAnimationFrame(tick);
      }
    };

    const requestTick = () => {
      if (!isRunning) {
        isRunning = true;
        lastAnimTime = performance.now();
        animId = requestAnimationFrame(tick);
      }
    };

    // Scroll listener: directly tracks scroll progress without scroll-locking or page hijacking
    const onScroll = () => {
      if (isDraggingRef.current) return;
      targetProg = computeScrollProg();
      requestTick();
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Direction-aware gesture listeners: distinguishes vertical page scroll from horizontal card swipe
    const onPointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      startX = e.clientX;
      startY = e.clientY;
      startTarget = spring.x;
      isHorizontalSwipe = false;
      gestureDecided = false;
      isDraggingRef.current = false;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (!gestureDecided) {
        const absX = Math.abs(dx);
        const absY = Math.abs(dy);
        if (absX > 8 || absY > 8) {
          gestureDecided = true;
          // Only take over as horizontal card drag if horizontal movement exceeds vertical
          if (absX > absY) {
            isHorizontalSwipe = true;
            isDraggingRef.current = true;
          }
        }
      }

      if (isHorizontalSwipe) {
        const cardWidth = cards[0]?.offsetWidth || 340;
        targetProg = clamp(startTarget - dx / (cardWidth * 0.75), 0, n - 1);
        requestTick();
      }
    };

    const onPointerUp = () => {
      if (!isPointerDown) return;
      isPointerDown = false;

      if (isHorizontalSwipe) {
        isHorizontalSwipe = false;
        targetProg = clamp(Math.round(targetProg), 0, n - 1);
        requestTick();

        // Sync vertical scroll position cleanly when in the pinned section so subsequent vertical scrolling starts right from this card
        const rect = sec.getBoundingClientRect();
        const scrollableDist = rect.height - window.innerHeight;
        if (scrollableDist > 0 && rect.top <= 0 && rect.bottom >= window.innerHeight) {
          const targetScrollY =
            window.scrollY + rect.top + (targetProg / (n - 1)) * scrollableDist;
          window.scrollTo({ top: targetScrollY, behavior: "instant" });
        }

        setTimeout(() => {
          isDraggingRef.current = false;
        }, 120);
      } else {
        isDraggingRef.current = false;
      }
    };

    stage.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });

    const onResize = () => {
      targetProg = computeScrollProg();
      updateCardsVisual();
      requestTick();
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Initial positioning
    updateCardsVisual();
    requestTick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      stage.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", onResize);
    };
  }, [n]);

  const handleCardClick = (index: number, href: string) => {
    if (isDraggingRef.current) return;
    const diff = Math.abs(index - computeScrollProg());
    if (diff < 0.75) {
      router.push(href);
    } else {
      // Direct jump to clicked adjacent card
      const sec = sectionRef.current;
      if (sec) {
        const rect = sec.getBoundingClientRect();
        const scrollableDist = rect.height - window.innerHeight;
        if (scrollableDist > 0) {
          const targetScrollY =
            window.scrollY + rect.top + (index / (n - 1)) * scrollableDist;
          window.scrollTo({ top: targetScrollY, behavior: "smooth" });
        }
      }
    }
  };

  const computeScrollProg = () => {
    const sec = sectionRef.current;
    if (!sec || typeof window === "undefined") return 0;
    const rect = sec.getBoundingClientRect();
    const scrollableDist = rect.height - window.innerHeight;
    if (scrollableDist <= 0) return 0;
    return clamp(-rect.top / scrollableDist, 0, 1) * (n - 1);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="svc"
        className="sv relative h-[380vh] bg-white select-none z-0"
        aria-label="What We Make: 3D Rotating Cards"
        style={{
          contain: "paint layout",
          isolation: "isolate",
        }}
      >
        <div className="svs sticky top-0 h-screen overflow-hidden flex flex-col pt-14 sm:pt-20 md:pt-24 pb-6 bg-white justify-between">
          {/* Header */}
          <div className="w svh flex justify-between items-end w-full mb-2">
            <div>
              <p className="k">What we make</p>
              <h2 className="d text-[clamp(34px,8vw,60px)] mt-1.5 font-serif text-black leading-[0.95]">
                Our <i>work</i>
              </h2>
              <p className="text-xs sm:text-sm text-[#555] font-light max-w-[46ch] leading-relaxed mt-2">
                Our expertise lies in working with our clients to deliver transcending experiences and timeless products, find out more about how we can help you
              </p>
            </div>
            <p
              ref={counterRef}
              className="k text-[11px] tracking-[0.28em] text-[#7b7566] select-none self-start sm:self-end shrink-0"
            >
              01 / 0{n}
            </p>
          </div>

          {/* 3D Perspective Card Stage */}
          <div
            ref={stageRef}
            className="svst relative flex-1 touch-pan-y cursor-grab active:cursor-grabbing w-full my-auto"
            style={{
              perspective: "1100px",
              perspectiveOrigin: "50% 46%",
              transformStyle: "preserve-3d",
              contain: "layout style",
            }}
          >
            {WORK_ITEMS.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index, item.href)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    router.push(item.href);
                  }
                }}
                className="sc absolute left-1/2 top-[44%] sm:top-1/2 w-[84vw] sm:w-[360px] md:w-[390px] lg:w-[410px] h-[460px] sm:h-[490px] md:h-[515px] -ml-[42vw] sm:-ml-[180px] md:-ml-[195px] lg:-ml-[205px] -mt-[230px] sm:-mt-[245px] md:-mt-[257px] border border-[rgba(14,14,14,0.12)] cursor-pointer text-left flex flex-col bg-[#FAF8F5] shadow-[0_22px_42px_-18px_rgba(0,0,0,0.18),0_2px_6px_rgba(0,0,0,0.04)] text-black select-none overflow-hidden will-change-[transform,opacity] group"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                aria-label={`View ${item.title}`}
              >
                {/* Squareish rectangle image leading towards square side (aspect 1.15:1, edge-to-edge) */}
                <div className="w-full aspect-[1.15/1] relative overflow-hidden bg-[#F0ECE1] shrink-0 border-b border-[rgba(14,14,14,0.08)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>

                {/* Card body below image — tight, natural spacing without huge empty gap */}
                <div className="p-4 sm:p-5 flex flex-col justify-start bg-[#FAF8F5]">
                  <h3 className="font-serif font-medium text-xl sm:text-2xl leading-[1.1] tracking-[-0.02em] text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#555] font-light mt-1.5 line-clamp-2">
                    {item.desc}
                  </p>

                  {/* Explore button — always clickable to navigate directly to the page */}
                  <div className="mt-3.5 sm:mt-4">
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isDraggingRef.current) {
                          e.preventDefault();
                        }
                      }}
                      className="inline-flex items-center justify-center px-6 py-2.5 sm:py-3 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm cursor-pointer relative z-20 pointer-events-auto"
                    >
                      Explore {item.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useRef, useEffect, useState, useCallback } from "react";
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
  const [currentIdx, setCurrentIdx] = useState(0);

  // Manual interaction offset (from arrow keys, buttons, or dragging)
  const manualOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastClickRef = useRef<{ idx: number; time: number }>({ idx: -1, time: 0 });

  const n = WORK_ITEMS.length;

  // Handle card click:
  // - If it's already active or double-clicked -> navigate to page immediately
  // - If it's another visible card -> rotate to it, or if clicked again -> navigate
  const handleCardClick = (index: number, href: string) => {
    if (isDraggingRef.current) return;

    const now = Date.now();
    const isDoubleClick =
      lastClickRef.current.idx === index && now - lastClickRef.current.time < 500;
    const isAlreadyActive = Math.abs(currentIdx - index) < 0.5;

    lastClickRef.current = { idx: index, time: now };

    if (isAlreadyActive || isDoubleClick) {
      router.push(href);
    } else {
      // Smoothly jump/focus to the clicked card
      manualOffsetRef.current = index;
    }
  };

  const goToCard = useCallback(
    (index: number) => {
      manualOffsetRef.current = clamp(index, 0, n - 1);
    },
    [n]
  );

  useEffect(() => {
    const sec = sectionRef.current;
    const stage = stageRef.current;
    if (!sec || !stage) return;

    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".sc"));
    if (cards.length === 0) return;

    let currentProg = 0;
    let targetProg = 0;
    let animId: number;
    let isPointerDown = false;
    let startX = 0;
    let startManual = 0;
    let moveDistance = 0;

    // Calculate natural scroll progress within the section without ANY scroll locking
    const computeScrollProgress = () => {
      const rect = sec.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;
      if (scrollableDist <= 0) return 0;
      const progress = clamp(-rect.top / scrollableDist, 0, 1);
      return progress * (n - 1);
    };

    manualOffsetRef.current = computeScrollProgress();
    currentProg = manualOffsetRef.current;
    targetProg = currentProg;

    const updateVisuals = (prog: number) => {
      const cardWidth = cards[0]?.offsetWidth || 340;
      const spacing = cardWidth * 0.84;

      const activeIdx = clamp(Math.round(prog), 0, n - 1);
      setCurrentIdx(activeIdx);

      for (let i = 0; i < n; i++) {
        const c = cards[i];
        const dist = i - prog;
        const absDist = Math.abs(dist);

        // Smooth 3D transformations
        const tx = (dist * spacing).toFixed(2);
        const tz = (-absDist * 180).toFixed(2);
        const ry = (-dist * 28).toFixed(2);
        const scale = (1 - absDist * 0.05).toFixed(3);
        const opacity = clamp(1 - absDist * 0.45, 0.25, 1).toFixed(3);
        const zIndex = 30 - Math.min(25, Math.round(absDist * 5));

        c.style.transform = `translate3d(${tx}px,0,${tz}px) rotateY(${ry}deg) scale(${scale})`;
        c.style.opacity = opacity;
        c.style.zIndex = `${zIndex}`;
        // Cards are always interactive
        c.style.pointerEvents = "auto";
      }
    };

    const renderLoop = () => {
      // Silky smooth lerp (damped interpolation) without any scroll fighting
      const scrollProg = computeScrollProgress();

      // If user is not dragging, combine scroll progress with manual navigation smoothly
      if (!isPointerDown) {
        // Blend towards scroll progress or manual offset
        targetProg = scrollProg;
      }

      // Smooth damped follow (lerp factor 0.12 for snappy responsiveness)
      const diff = targetProg - currentProg;
      if (Math.abs(diff) > 0.0005) {
        currentProg += diff * 0.14;
        updateVisuals(currentProg);
      }

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    // Pointer events for smooth mouse/touch swipe
    const onPointerDown = (e: PointerEvent) => {
      // Don't drag if clicking directly on a button or link
      if ((e.target as HTMLElement).closest("a, button, .explore-link")) return;

      isPointerDown = true;
      startX = e.clientX;
      startManual = targetProg;
      moveDistance = 0;
      isDraggingRef.current = false;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;
      const dx = e.clientX - startX;
      moveDistance = Math.max(moveDistance, Math.abs(dx));
      if (moveDistance > 6) {
        isDraggingRef.current = true;
      }
      const cardWidth = cards[0]?.offsetWidth || 340;
      targetProg = clamp(startManual - dx / (cardWidth * 0.8), 0, n - 1);
    };

    const onPointerUp = () => {
      if (!isPointerDown) return;
      isPointerDown = false;
      if (moveDistance > 6) {
        // Snap smoothly to nearest card
        targetProg = Math.round(targetProg);
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 100);
      } else {
        isDraggingRef.current = false;
      }
    };

    stage.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      stage.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [n]);

  return (
    <section
      ref={sectionRef}
      id="svc"
      className="relative h-[220vh] bg-white select-none z-0"
      aria-label="What We Make: Our Work Carousel"
      style={{
        contain: "paint layout",
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col pt-24 md:pt-28 pb-6 bg-white justify-between">
        {/* Header with Title and Counter */}
        <div className="w flex justify-between items-end w-full mb-2">
          <div>
            <p className="k mb-1.5">What we make</p>
            <h2 className="d text-[clamp(34px,7.5vw,60px)] font-serif text-black leading-[0.98]">
              Our <i>work</i>
            </h2>
            <p className="text-xs sm:text-sm text-[#555] font-light max-w-[48ch] leading-relaxed mt-2">
              Our expertise lies in working with our clients to deliver transcending experiences and timeless products. Click any card or explore below.
            </p>
          </div>
          <div className="flex items-center gap-3 self-end shrink-0">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#7b7566]">
              0{currentIdx + 1} / 0{n}
            </span>
          </div>
        </div>

        {/* 3D Perspective Card Stage */}
        <div
          ref={stageRef}
          className="relative flex-1 touch-pan-y cursor-grab active:cursor-grabbing my-auto min-h-[360px] flex items-center justify-center"
          style={{
            perspective: "1400px",
            perspectiveOrigin: "50% 50%",
            transformStyle: "preserve-3d",
          }}
        >
          {WORK_ITEMS.map((item, index) => {
            const isCenter = index === currentIdx;
            return (
              <div
                key={item.title}
                onClick={() => handleCardClick(index, item.href)}
                onDoubleClick={() => router.push(item.href)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    router.push(item.href);
                  }
                }}
                className={`sc absolute left-1/2 top-1/2 w-[min(76vw,340px)] h-[calc(min(76vw,340px)*1.36)] -mt-[calc(min(76vw,340px)*0.68)] -ml-[calc(min(76vw,340px)/2)] border cursor-pointer text-left p-4 sm:p-5 flex flex-col bg-[#FAF8F5] shadow-[0_16px_32px_-16px_rgba(0,0,0,0.14),0_2px_6px_rgba(0,0,0,0.04)] text-black select-none transition-colors duration-200 ${
                  isCenter
                    ? "border-black/40 ring-1 ring-black/10"
                    : "border-[rgba(14,14,14,0.14)] hover:border-black/40"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                aria-label={`View ${item.title} (Click to open)`}
                title="Click to view or double click to open"
              >
                <div className="relative flex-1 mb-3 overflow-hidden bg-[#F0ECE1] rounded-xs group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="font-serif font-medium text-[clamp(22px,5.5vw,28px)] leading-[1.05] tracking-[-0.02em] mb-1">
                  {item.title}
                </h3>
                <p className="text-[12px] leading-[1.45] text-[#555] font-light line-clamp-2 mb-2">
                  {item.desc}
                </p>
                <div className="mt-auto flex items-center justify-between pt-1 border-t border-[rgba(14,14,14,0.06)]">
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="explore-link ln text-[11px] font-mono uppercase tracking-[0.16em] hover:text-black font-medium inline-flex items-center gap-1.5 py-1"
                  >
                    Explore &rarr;
                  </Link>
                  <span className="text-[10px] font-mono uppercase text-[#888] tracking-wider">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Jump Dots & Arrow Controls */}
        <div className="w flex items-center justify-between pt-2 pb-2">
          {/* Direct Dot Jump */}
          <div className="flex items-center gap-2">
            {WORK_ITEMS.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => goToCard(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIdx
                    ? "w-7 h-2 bg-black"
                    : "w-2 h-2 bg-[rgba(14,14,14,0.2)] hover:bg-black/50"
                }`}
                aria-label={`Jump to ${item.title}`}
                title={`Jump to ${item.title}`}
              />
            ))}
          </div>

          {/* Quick Nav Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToCard(currentIdx - 1)}
              disabled={currentIdx === 0}
              className="px-3 py-1.5 text-xs font-mono border border-[rgba(14,14,14,0.15)] disabled:opacity-30 hover:border-black transition-colors rounded-xs"
              aria-label="Previous card"
            >
              &larr; Prev
            </button>
            <button
              onClick={() => goToCard(currentIdx + 1)}
              disabled={currentIdx === n - 1}
              className="px-3 py-1.5 text-xs font-mono border border-[rgba(14,14,14,0.15)] disabled:opacity-30 hover:border-black transition-colors rounded-xs"
              aria-label="Next card"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

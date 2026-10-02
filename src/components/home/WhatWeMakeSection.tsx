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
  const [activeCard, setActiveCard] = useState(0);
  const [modalItem, setModalItem] = useState<WorkItem | null>(null);

  const n = WORK_ITEMS.length;

  useEffect(() => {
    const sec = sectionRef.current;
    const stage = stageRef.current;
    if (!sec || !stage) return;

    const cards = Array.from(stage.children) as HTMLElement[];
    if (cards.length === 0) return;

    const spring = new Spring(0, 70, 13);
    let targetProg = 0;
    let isPointerDown = false;
    let startX = 0;
    let startTarget = 0;
    let moved = 0;

    const computeScrollProg = () => {
      const rect = sec.getBoundingClientRect();
      const progress = clamp(-rect.top / (rect.height - window.innerHeight), 0, 1) * (n - 1);
      return progress;
    };

    targetProg = computeScrollProg();

    const onScroll = () => {
      if (!isPointerDown) {
        targetProg = computeScrollProg();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onPointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      startX = e.clientX;
      startTarget = targetProg;
      moved = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      const cardWidth = cards[0].offsetWidth * 0.6;
      targetProg = clamp(startTarget - dx / cardWidth, 0, n - 1);
    };

    const onPointerUp = () => {
      if (!isPointerDown) return;
      isPointerDown = false;
      if (moved > 6) {
        targetProg = Math.round(targetProg);
      }
    };

    stage.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    let animId: number;
    const tick = () => {
      spring.t = targetProg;
      for (let k = 0; k < 2; k++) {
        spring.step(1 / 120);
      }

      const activeIdx = clamp(Math.round(spring.x), 0, n - 1);
      setActiveCard(activeIdx);

      const w = cards[0].offsetWidth * 0.86;
      cards.forEach((c, i) => {
        const d = i - spring.x;
        const a = Math.abs(d);
        c.style.transform = `translate3d(${d * w}px,0,${-a * 240}px) rotateY(${-d * 40}deg) scale(${1 - a * 0.05})`;
        c.style.opacity = `${clamp(1 - a * 0.55, 0.25, 1)}`;
        c.style.zIndex = `${10 - Math.round(a * 3)}`;
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

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
        className="sv relative h-[600vh] bg-white select-none"
        aria-label="What We Make: 3D Rotating Cards"
      >
        <div className="svs sticky top-0 h-screen overflow-hidden flex flex-col pt-24 md:pt-28 pb-8 bg-white">
          <div className="w svh flex justify-between items-end w-full mb-3">
            <div>
              <p className="k">What we make</p>
              <h2 className="d text-[clamp(38px,10vw,70px)] mt-1.5 font-serif">
                Our <i>work</i>
              </h2>
            </div>
            <p className="k text-[10px] tracking-[0.28em] text-[#7b7566]">
              0{activeCard + 1} / 0{n} &nbsp;·&nbsp; Swipe / Scroll
            </p>
          </div>

          {/* 3D Perspective Card Stage */}
          <div
            ref={stageRef}
            className="svst relative flex-1 touch-pan-y cursor-grab active:cursor-grabbing mb-5"
            style={{ perspective: "1200px", perspectiveOrigin: "50% 40%" }}
          >
            {WORK_ITEMS.map((item, index) => (
              <button
                key={index}
                onClick={() => setModalItem(item)}
                className="sc absolute left-1/2 top-[44%] w-[min(72vw,360px)] h-[calc(min(72vw,360px)*1.38)] -mt-[calc(min(72vw,360px)*0.69)] -ml-[calc(min(72vw,360px)/2)] border-0 cursor-pointer text-left p-4 flex flex-col bg-[#faf5ea] shadow-[0_30px_40px_-24px_rgba(60,45,20,0.55),0_2px_4px_rgba(60,45,20,0.15)] text-black will-change-transform group"
                aria-label={item.title}
              >
                <div className="art relative flex-1 mb-3 overflow-hidden bg-[#eee]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
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

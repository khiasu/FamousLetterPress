"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export interface WeddingItem {
  title: string;
  desc: string;
  img: string;
}

interface WeddingGalleryCarouselProps {
  items: WeddingItem[];
}

export function WeddingGalleryCarousel({ items }: WeddingGalleryCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const moved = useRef(0);

  const total = items.length;

  const updateProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const ratio = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    const idx = Math.min(total - 1, Math.max(0, Math.round(ratio * (total - 1))));
    setCurrentIndex(idx);
    setProgress(ratio);
  }, [total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateProgress();
    track.addEventListener("scroll", updateProgress, { passive: true });
    return () => track.removeEventListener("scroll", updateProgress);
  }, [updateProgress]);

  const scrollByStep = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector<HTMLElement>(".wedding-slide");
    const step = slide ? slide.offsetWidth + 20 : 380;
    track.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    moved.current = 0;
    startX.current = e.pageX;
    scrollLeft.current = track.scrollLeft;
    track.style.cursor = "grabbing";
    track.style.scrollSnapType = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX.current;
    moved.current = Math.abs(walk);
    track.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const track = trackRef.current;
    if (!track) return;
    track.style.cursor = "grab";
    track.style.scrollSnapType = "x mandatory";

    const slide = track.querySelector<HTMLElement>(".wedding-slide");
    const step = slide ? slide.offsetWidth + 20 : 380;
    const target = Math.round(track.scrollLeft / step) * step;
    track.scrollTo({ left: target, behavior: "smooth" });
  };

  const p2 = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="select-none">
      {/* ── Carousel Header & Controls ── */}
      <div className="w mb-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] text-[11px] tracking-[0.2em] uppercase font-mono text-[#7b7566]">
          <div className="flex items-center gap-3">
            <span>Portfolio Gallery</span>
            <span className="hidden sm:inline text-[#bbb]">·</span>
            <span className="hidden sm:inline text-[10px] text-[#888] font-light">
              100% Cotton Paper
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-black font-medium">
              {p2(currentIndex + 1)} / {p2(total)}
            </span>
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollByStep("left")}
                disabled={currentIndex === 0}
                className="w-8 h-8 rounded-none border border-[#E5E5E5] flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                aria-label="Previous invitation"
              >
                <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByStep("right")}
                disabled={currentIndex === total - 1}
                className="w-8 h-8 rounded-none border border-[#E5E5E5] flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                aria-label="Next invitation"
              >
                <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Horizontal Scroll Track ── */}
      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-[22px] md:px-12 scrollbar-none cursor-grab active:cursor-grabbing touch-pan-x"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, idx) => (
          <article
            key={item.title}
            className="wedding-slide relative shrink-0 w-[78vw] sm:w-[380px] md:w-[440px] lg:w-[480px] aspect-[4/5] bg-[#FAF8F5] border border-[#E5E5E5] overflow-hidden snap-start group"
          >
            {/* Image with zoom effect on hover */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.img}
              alt={`${item.title} letterpress wedding invitation`}
              draggable={false}
              loading={idx < 3 ? "eager" : "lazy"}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none"
            />

            {/* Gradient Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 pt-24 pb-6 px-5 sm:px-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white pointer-events-none flex flex-col justify-end">
              <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase mb-1">
                {p2(idx + 1)} · Bespoke Suite
              </span>
              <h3 className="font-serif font-medium text-xl sm:text-2xl md:text-3xl text-white leading-tight tracking-tight mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-white/85 font-light leading-relaxed max-h-16 opacity-90 transition-all duration-300">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* ── Progress Rail Bar ── */}
      <div className="w mt-6">
        <div className="relative h-[2px] w-full bg-[#E5E5E5] overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-black transition-all duration-150 ease-out"
            style={{
              width: `${Math.max(8, (1 / total) * 100 + (1 - 1 / total) * progress * 100)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

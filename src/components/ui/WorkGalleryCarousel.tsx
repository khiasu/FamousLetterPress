"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export interface GalleryItem {
  title: string;
  desc: string;
  img: string;
}

interface WorkGalleryCarouselProps {
  items: GalleryItem[];
  categoryTitle?: string;
}

export function WorkGalleryCarousel({
  items,
  categoryTitle = "Portfolio Gallery",
}: WorkGalleryCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollStartLeft = useRef(0);
  const hasMoved = useRef(false);
  const total = items.length;

  const updateProgressAndActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const currentScroll = track.scrollLeft;

    // Find slide closest to viewport center
    const slides = track.querySelectorAll<HTMLElement>(".work-slide");
    const trackCenter = currentScroll + track.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;

    slides.forEach((slide, idx) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(trackCenter - slideCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setCurrentIndex(closestIdx);
    const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, currentScroll / maxScroll)) : 0;
    setProgress(ratio);
    setCanScrollLeft(currentScroll > 10);
    setCanScrollRight(currentScroll < maxScroll - 10);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateProgressAndActive();
    track.addEventListener("scroll", updateProgressAndActive, { passive: true });
    window.addEventListener("resize", updateProgressAndActive);
    return () => {
      track.removeEventListener("scroll", updateProgressAndActive);
      window.removeEventListener("resize", updateProgressAndActive);
    };
  }, [updateProgressAndActive]);

  const centerCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.querySelectorAll<HTMLElement>(".work-slide");
    const targetSlide = slides[index];
    if (!targetSlide) return;

    const trackWidth = track.clientWidth;
    const slideLeft = targetSlide.offsetLeft;
    const slideWidth = targetSlide.offsetWidth;
    const targetScroll = slideLeft - trackWidth / 2 + slideWidth / 2;

    track.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth",
    });
  };

  const scrollByStep = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector<HTMLElement>(".work-slide");
    const step = slide ? slide.offsetWidth + 24 : 450;
    track.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
  };

  // Robust Desktop Drag Swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;

    isMouseDown.current = true;
    hasMoved.current = false;
    startX.current = e.clientX;
    scrollStartLeft.current = track.scrollLeft;

    track.style.cursor = "grabbing";
    track.style.userSelect = "none";
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isMouseDown.current) return;
      const track = trackRef.current;
      if (!track) return;

      const deltaX = e.clientX - startX.current;
      if (Math.abs(deltaX) > 4) {
        hasMoved.current = true;
        track.style.scrollSnapType = "none";
        track.scrollLeft = scrollStartLeft.current - deltaX;
      }
    };

    const onMouseUp = () => {
      if (!isMouseDown.current) return;
      isMouseDown.current = false;
      const track = trackRef.current;
      if (!track) return;

      track.style.cursor = "grab";
      track.style.userSelect = "";
      track.style.scrollSnapType = "x mandatory";

      if (hasMoved.current) {
        updateProgressAndActive();
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [updateProgressAndActive]);

  // Touch Swipe Gesture Detection for Mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isTouchSwiping = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isTouchSwiping.current = false;
    hasMoved.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.touches[0].clientX - touchStartX.current;
    const diffY = e.touches[0].clientY - touchStartY.current;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 6) {
      isTouchSwiping.current = true;
      hasMoved.current = true;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    touchStartY.current = null;
    setTimeout(() => {
      isTouchSwiping.current = false;
      hasMoved.current = false;
    }, 100);
  };

  const handleCardClick = (idx: number) => {
    if (hasMoved.current || isTouchSwiping.current) {
      return;
    }
    centerCard(idx);
  };

  const p2 = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="group/carousel relative">
      {/* ── Carousel Header ── */}
      <div className="container-wide mb-6">
        <div className="pb-4 border-b border-[#E5E5E5] text-[11px] tracking-[0.2em] uppercase font-mono">
          <span className="text-black font-medium">{categoryTitle}</span>
        </div>
      </div>

      {/* ── Floating Subtle Navigation Buttons on PC ── */}
      <div className="hidden md:block">
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scrollByStep("left")}
            className="absolute left-4 lg:left-8 top-[46%] -translate-y-1/2 z-30 w-12 h-12 bg-white/95 text-black hover:bg-black hover:text-white border border-[#E5E5E5] shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 backdrop-blur-xs cursor-pointer active:scale-95"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {canScrollRight && (
          <button
            type="button"
            onClick={() => scrollByStep("right")}
            className="absolute right-4 lg:right-8 top-[46%] -translate-y-1/2 z-30 w-12 h-12 bg-white/95 text-black hover:bg-black hover:text-white border border-[#E5E5E5] shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 backdrop-blur-xs cursor-pointer active:scale-95"
            aria-label="Next image"
          >
            <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Horizontal Scroll Track ── */}
      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex items-start gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory px-[22px] md:px-12 py-2 scrollbar-none cursor-grab active:cursor-grabbing touch-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={item.title + idx}
            className="work-slide shrink-0 w-[78vw] sm:w-[380px] md:w-[440px] lg:w-[480px] snap-start"
          >
            <article
              onClick={() => handleCardClick(idx)}
              className="relative aspect-[4/5] bg-[#FAF8F5] border border-[#E5E5E5] hover:border-black/40 overflow-hidden transition-colors duration-300 cursor-pointer group select-none"
            >
              {/* Image with subtle hover zoom */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={`${item.title} letterpress print`}
                draggable={false}
                loading={idx < 3 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] pointer-events-none"
              />

              {/* Gradient Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 pt-24 pb-6 px-5 sm:px-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white pointer-events-none flex flex-col justify-end">
                <h3 className="font-serif font-medium text-xl sm:text-2xl md:text-3xl text-white leading-tight tracking-tight mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/85 font-light leading-relaxed max-h-16 opacity-90">
                  {item.desc}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* ── Dynamic Counter & Progress Rail Bar (Left Aligned to Container Padding) ── */}
      <div className="container-wide mt-6">
        <div className="mb-3 text-left">
          <span className="font-mono text-xs text-[#7b7566] tracking-[0.22em] uppercase font-medium">
            {p2(currentIndex + 1)} / {p2(total)}
          </span>
        </div>
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

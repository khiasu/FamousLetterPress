"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  specs: string;
  href: string;
  ctaText: string;
}

const baseSlides: HeroSlide[] = [
  {
    id: "heirloom-suite",
    image: "/assets/home/carousel/FMS_7392.jpg",
    alt: "Bespoke cotton letterpress wedding suite with gold foil detailing",
    category: "Wedding Stationery",
    title: "The Florentine Heirloom Suite",
    specs: "600gsm Wild Cotton Rag · Matte Gold Foil · Deep Platen Impression",
    href: "/weddings",
    ctaText: "Explore Wedding Suites",
  },
  {
    id: "edge-gilded-cards",
    image: "/assets/business-cards/FMS_3462.jpg",
    alt: "Luxury letterpress business cards with edge gilding and blind deboss",
    category: "Corporate Identity",
    title: "Edge-Gilded Executive Cards",
    specs: "600gsm Pure Cotton · Mirror Gold Edge Gilding · Blind Relief",
    href: "/business-cards",
    ctaText: "View Business Cards",
  },
  {
    id: "sample-kit",
    image: "/assets/wed-kit/FMS_3749.jpg",
    alt: "Letterpress wedding sample kit with cotton swatches and foil samples",
    category: "Sample Kit",
    title: "The Curated Wedding Sample Box",
    specs: "300–900gsm Swatches · Real Foil Library · Wax Seals · Bite Depths",
    href: "/weddings/wedding-sample-kit",
    ctaText: "Order Sample Box (₹1,500)",
  },
  {
    id: "botanical-crest",
    image: "/assets/wedding-stationery/invites/FMS_2762.jpg",
    alt: "Artisanal deckled edge wedding invite with botanical calligraphy",
    category: "Wedding Stationery",
    title: "Botanical Crest & Deckled Edges",
    specs: "Handmade Deckled Cotton · Custom Wax Seal · Vellum Wrapper",
    href: "/weddings",
    ctaText: "Explore Wedding Suites",
  },
  {
    id: "atelier-presswork",
    image: "/assets/home/how-we-make/FMS_6999.jpg",
    alt: "Artisan hands feeding and calibrating vintage Heidelberg platen press",
    category: "Atelier Presswork",
    title: "Hand-Calibrated Vintage Presswork",
    specs: "Refurbished Heidelberg Platen Presses · Hand-Fed · Nagaland",
    href: "/about",
    ctaText: "Our Story & Workshop",
  },
  {
    id: "monochrome-identity",
    image: "/assets/business-cards/FMS_3764.jpg",
    alt: "Heavyweight monochrome business card suite",
    category: "Corporate Identity",
    title: "Architectural Minimalist Identity",
    specs: "900gsm Ultra-Heavy Cotton · Deep Relief Deboss · Crisp Black",
    href: "/business-cards",
    ctaText: "View Business Cards",
  },
];

// 3 repeated sets to allow a continuous, seamless ribbon with edge bleeds
const repeatedSlides = [...baseSlides, ...baseSlides, ...baseSlides];
const TOTAL_BASE = baseSlides.length; // 6
const INITIAL_INDEX = TOTAL_BASE; // 6 (middle set)

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  const [trackOffset, setTrackOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

  // Compute exact pixel translation to center slide `index` in viewport
  const computeOffsetForIndex = useCallback((index: number) => {
    const container = containerRef.current;
    const slide = slideRefs.current[index];
    if (!container || !slide) return 0;

    const containerWidth = container.offsetWidth;
    const containerCenter = containerWidth / 2;
    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;

    return containerCenter - slideCenter;
  }, []);

  // Update track position whenever currentIndex or window size changes
  const updatePosition = useCallback((index: number, animate = true) => {
    setIsAnimating(animate);
    const offset = computeOffsetForIndex(index);
    setTrackOffset(offset);
  }, [computeOffsetForIndex]);

  useEffect(() => {
    // Initial centering once mounted
    const timer = setTimeout(() => {
      updatePosition(currentIndex, false);
    }, 50);

    const handleResize = () => {
      updatePosition(currentIndex, false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex, updatePosition]);

  // Navigate to slide
  const goToIndex = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
    updatePosition(newIndex, true);
  }, [updatePosition]);

  const handleNext = useCallback(() => {
    const nextIdx = currentIndex + 1;
    goToIndex(nextIdx);
  }, [currentIndex, goToIndex]);

  const handlePrev = useCallback(() => {
    const prevIdx = currentIndex - 1;
    goToIndex(prevIdx);
  }, [currentIndex, goToIndex]);

  // Seamless virtual infinite looping
  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= TOTAL_BASE * 2) {
      const normalized = currentIndex - TOTAL_BASE;
      setCurrentIndex(normalized);
      updatePosition(normalized, false);
    } else if (currentIndex < TOTAL_BASE) {
      const normalized = currentIndex + TOTAL_BASE;
      setCurrentIndex(normalized);
      updatePosition(normalized, false);
    }
  }, [currentIndex, updatePosition]);

  // Auto-play timer (paused on hover or drag)
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, isDragging, handleNext]);

  // Keyboard navigation (Left / Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch Swipe Handlers for Mobile (Snøhetta Mobile UX)
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;

    // Only drag horizontally if user isn't scrolling vertically
    if (Math.abs(diffX) > Math.abs(diffY)) {
      setDragOffset(diffX);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsPaused(false);
    const diff = dragOffset;
    setDragOffset(0);

    if (diff < -40) {
      handleNext();
    } else if (diff > 40) {
      handlePrev();
    } else {
      updatePosition(currentIndex, true);
    }
  };

  // Pointer Handlers for Desktop Mouse Drag
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") return; // Handled by touch events
    setIsDragging(true);
    setIsPaused(true);
    touchStartRef.current = { x: e.clientX, y: e.clientY, time: Date.now() };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === "touch" || !isDragging) return;
    const diff = e.clientX - touchStartRef.current.x;
    setDragOffset(diff);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.pointerType === "touch" || !isDragging) return;
    setIsDragging(false);
    setIsPaused(false);
    const diff = e.clientX - touchStartRef.current.x;
    const time = Date.now() - touchStartRef.current.time;
    setDragOffset(0);

    if (diff < -45 || (diff < -20 && time < 250)) {
      handleNext();
    } else if (diff > 45 || (diff > 20 && time < 250)) {
      handlePrev();
    } else {
      updatePosition(currentIndex, true);
    }
  };

  // Active base index (0 to 5) for counter
  const activeBaseIndex = currentIndex % TOTAL_BASE;

  return (
    <section
      className="bg-white pt-20 md:pt-28 pb-10 md:pb-16 border-b border-[#E5E5E5] overflow-hidden select-none"
      aria-label="Atelier Project Reel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Snøhetta-Style Statement Header ── */}
      <div className="container-wide mb-5 md:mb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-[#E5E5E5]">
          <div className="max-w-3xl">
            <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#777777] mb-2">
              EST. 2018 · NAGALAND, INDIA · BESPOKE LETTERPRESS ATELIER
            </p>
            <h1 className="text-black font-serif font-light text-2xl sm:text-4xl lg:text-[2.85rem] tracking-tight leading-[1.12]">
              Famous Letterpress is an artisanal atelier in Nagaland, crafting bespoke letterpress and foil stationery on 600–900gsm cotton.
            </h1>
          </div>

          {/* Minimalist Slide Counter & Arrow Controls */}
          <div className="flex items-center gap-5 pt-1">
            <span className="font-mono text-xs tracking-widest text-black font-medium">
              0{activeBaseIndex + 1} <span className="text-[#888888]">/ 0{TOTAL_BASE}</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-9 h-9 border border-[#E5E5E5] flex items-center justify-center text-black hover:border-black transition-colors cursor-pointer"
                aria-label="Previous project"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 border border-[#E5E5E5] flex items-center justify-center text-black hover:border-black transition-colors cursor-pointer"
                aria-label="Next project"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Snøhetta Continuous Ribbon Carousel (Mobile & Desktop) ── */}
      <div
        ref={containerRef}
        className="w-full relative overflow-visible cursor-grab active:cursor-grabbing touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-3 sm:gap-5 lg:gap-6 will-change-transform"
          style={{
            transform: `translateX(${trackOffset + dragOffset}px)`,
            transition: isAnimating && !isDragging ? "transform 750ms cubic-bezier(0.16, 1, 0.3, 1)" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {repeatedSlides.map((slide, index) => {
            const isCenter = index === currentIndex;
            return (
              <div
                key={`${slide.id}-${index}`}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                onClick={() => {
                  if (!isCenter && !isDragging) {
                    goToIndex(index);
                  }
                }}
                className="w-[74vw] sm:w-[50vw] lg:w-[38vw] max-w-[540px] flex-shrink-0"
              >
                {/* Image Frame — Vertically Centered, Side Cards Scaled Down */}
                <div
                  className={`relative aspect-[16/11] sm:aspect-[16/10] bg-[#F7F7F7] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isCenter
                      ? "scale-100 opacity-100 cursor-default"
                      : "scale-[0.82] origin-center opacity-60 hover:opacity-85 cursor-pointer"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    draggable={false}
                    loading={index >= TOTAL_BASE && index < TOTAL_BASE + 3 ? "eager" : "lazy"}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>

                {/* Snøhetta Caption: Only Visible Directly Under Active Center Slide */}
                <div
                  className={`transition-all duration-500 ease-out text-left ${
                    isCenter
                      ? "opacity-100 pt-3 sm:pt-3.5 pointer-events-auto"
                      : "opacity-0 h-0 overflow-hidden pointer-events-none"
                  }`}
                >
                  <Link href={slide.href} className="group block">
                    <h2 className="font-serif text-base sm:text-2xl text-black font-light leading-snug group-hover:opacity-70 transition-opacity">
                      {slide.title}
                    </h2>
                    <p className="text-[11px] sm:text-sm text-[#777777] font-light leading-relaxed mt-0.5">
                      {slide.specs}
                    </p>
                    <div className="pt-1 sm:pt-1.5">
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono tracking-[0.18em] uppercase text-black font-medium group-hover:translate-x-1 transition-transform">
                        <span>{slide.ctaText}</span>
                        <span>→</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Minimalist Story Indicator Track ── */}
      <div className="container-wide mt-5 md:mt-6">
        <div className="flex items-center justify-between gap-6 pt-3 border-t border-[#E5E5E5]">
          <div className="flex gap-2 flex-1 max-w-xs">
            {baseSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(TOTAL_BASE + i)}
                className="flex-1 h-[2px] bg-[#E5E5E5] overflow-hidden relative cursor-pointer"
                aria-label={`Jump to project 0${i + 1}`}
              >
                <span
                  className={`block h-full bg-black transition-all duration-300 ${
                    i === activeBaseIndex ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-[#888888] uppercase">
            Drag ribbon to explore commissions
          </p>
        </div>
      </div>
    </section>
  );
}

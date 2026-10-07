"use client";

import { useState, useRef, useEffect, TouchEvent } from "react";

interface SampleKitGalleryProps {
  images: string[];
  title: string;
}

export function SampleKitGallery({ images, title }: SampleKitGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isSwiping = useRef(false);

  useEffect(() => {
    // On mobile devices, ensure viewing details shows the top start section with title visible
    if (
      typeof window !== "undefined" &&
      window.innerWidth < 768 &&
      window.location.hash === "#gallery"
    ) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = touchStartX.current - e.touches[0].clientX;
    const dy = touchStartY.current - e.touches[0].clientY;

    // Check if horizontal movement dominates
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null || !isSwiping.current) {
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
    isSwiping.current = false;
  };

  return (
    <div className="-mx-[22px] sm:mx-0 overflow-hidden bg-[#F7F7F7] border-b sm:border border-[#E5E5E5] select-none">
      {/* Main Swipeable Showcase Viewport */}
      <div
        className="aspect-square sm:aspect-[16/11] relative overflow-hidden bg-[#EFEFEF] group touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Sliding Image Track */}
        <div
          className="flex w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="w-full h-full shrink-0 relative bg-[#F7F7F7]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${title} - image ${idx + 1}`}
                className="w-full h-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Plain Minimal 1/5 Box */}
        <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-white border border-[#E5E5E5] text-[11px] text-black font-mono leading-none pointer-events-none select-none">
          {currentIndex + 1}/{images.length}
        </div>

        {/* Left / Right Arrow Buttons */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 sm:opacity-75 transition-all shadow-md z-20 cursor-pointer hover:bg-white hover:scale-105 active:scale-95"
              aria-label="Previous sample image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 sm:opacity-75 transition-all shadow-md z-20 cursor-pointer hover:bg-white hover:scale-105 active:scale-95"
              aria-label="Next sample image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Swipe Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-xs">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(dotIdx);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  dotIdx === currentIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Jump to image ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Thumbnail Images Grid — Clickable to reveal in main screen */}
      {images.length > 1 && (
        <div className="p-2 sm:p-3 bg-white border-t border-[#E5E5E5]">
          <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
            {images.map((img, i) => {
              const isActive = i === currentIndex;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`aspect-square relative overflow-hidden transition-all duration-200 cursor-pointer text-left ${
                    isActive
                      ? "ring-2 ring-black ring-offset-1 opacity-100 scale-[1.02] shadow-xs"
                      : "border border-[#E5E5E5] opacity-60 hover:opacity-100 hover:border-black/50"
                  }`}
                  aria-label={`Select image ${i + 1} of ${images.length}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`${title} thumbnail ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {isActive && (
                    <span className="absolute inset-0 bg-black/5 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

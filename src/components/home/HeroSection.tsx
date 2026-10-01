"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface HeroSlide {
  image: string;
  alt: string;
  category: string;
  tag: string;
  title: string;
  specs: string;
  description: string;
  href: string;
  ctaText: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: "/assets/home/carousel/FMS_7392.jpg",
    alt: "Bespoke cotton letterpress wedding suite with gold foil detailing",
    category: "Wedding Stationery",
    tag: "01 / WEDDINGS",
    title: "The Florentine Heirloom Suite",
    specs: "600gsm Wild Cotton Rag · Matte Gold Foil · Deep Platen Impression",
    description: "Deep relief mechanical impression that catches natural light, pressed into 100% tree-free cotton with hand-mixed mineral inks.",
    href: "/weddings",
    ctaText: "Explore Wedding Suites",
  },
  {
    image: "/assets/business-cards/FMS_3462.jpg",
    alt: "Luxury letterpress business cards with edge gilding and blind deboss",
    category: "Corporate Identity",
    tag: "02 / BUSINESS CARDS",
    title: "Edge-Gilded Executive Cards",
    specs: "600gsm Pure Cotton · Mirror Gold Edge Gilding · Blind Relief",
    description: "Substantial, unbendable cards with hand-applied foil edges and sculptural deboss for founders and design directors.",
    href: "/business-cards",
    ctaText: "View Business Cards",
  },
  {
    image: "/assets/wed-kit/FMS_3749.jpg",
    alt: "Letterpress wedding sample kit with cotton swatches and foil samples",
    category: "Sample Kit",
    tag: "03 / SAMPLE KITS",
    title: "The Curated Wedding Sample Box",
    specs: "300–900gsm Swatches · Real Foil Library · Wax Seals · Bite Depths",
    description: "Hold the cotton weights, inspect bite depth, and see metallic foils in person. ₹1,500 fee is credited back on your final order.",
    href: "/weddings/wedding-sample-kit",
    ctaText: "Order Sample Box (₹1,500)",
  },
  {
    image: "/assets/wedding-stationery/invites/FMS_2762.jpg",
    alt: "Artisanal deckled edge wedding invite with botanical calligraphy",
    category: "Wedding Stationery",
    tag: "04 / WEDDINGS",
    title: "Botanical Crest & Deckled Edges",
    specs: "Handmade Deckled Cotton · Custom Wax Seal · Vellum Wrapper",
    description: "Old-world romance meets precision typography. Hand-torn deckled edges paired with artisanal botanical letterpress.",
    href: "/weddings",
    ctaText: "Explore Wedding Suites",
  },
  {
    image: "/assets/home/carousel/FMS_7358.jpg",
    alt: "Artisan mixing mineral inks and calibrating vintage platen press",
    category: "Atelier Presswork",
    tag: "05 / THE ATELIER",
    title: "Hand-Calibrated Vintage Presswork",
    specs: "Refurbished Heidelberg Platen Presses · Hand-Fed · Nagaland",
    description: "Every sheet is hand-fed one-by-one by our master printers in Dimapur, ensuring microscopic precision across ink film and depth.",
    href: "/about",
    ctaText: "Our Story & Workshop",
  },
  {
    image: "/assets/business-cards/FMS_3764.jpg",
    alt: "Heavyweight monochrome business card suite",
    category: "Corporate Identity",
    tag: "06 / BUSINESS CARDS",
    title: "Architectural Minimalist Identity",
    specs: "900gsm Ultra-Heavy Cotton · Deep Relief Deboss · Crisp Black",
    description: "Crafted for architectural practices and luxury brands requiring uncompromising tactile authority and presence.",
    href: "/business-cards",
    ctaText: "View Business Cards",
  },
];

const categoryTabs = [
  { label: "All Work", index: 0 },
  { label: "Weddings", index: 0 },
  { label: "Business Cards", index: 1 },
  { label: "Sample Kits", index: 2 },
  { label: "Atelier", index: 4 },
];

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0, isDown: false });

  const activeSlide = heroSlides[activeIndex];

  const scrollToSlide = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el || !el.children[0]) return;
    const card = el.children[0] as HTMLElement;
    const cardWidth = card.clientWidth + 20; // width + gap
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % heroSlides.length;
    scrollToSlide(nextIdx);
  }, [activeIndex, scrollToSlide]);

  const handlePrev = useCallback(() => {
    const prevIdx = activeIndex === 0 ? heroSlides.length - 1 : activeIndex - 1;
    scrollToSlide(prevIdx);
  }, [activeIndex, scrollToSlide]);

  // Sync active slide index on user scroll/swipe
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollLeft = el.scrollLeft;
        const card = el.children[0] as HTMLElement;
        if (!card) return;
        const cardWidth = card.clientWidth + 20;
        const index = Math.round(scrollLeft / cardWidth);
        const clampedIndex = Math.max(0, Math.min(index, heroSlides.length - 1));
        setActiveIndex(clampedIndex);
      }, 50);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Smooth auto-cycle story progress
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, handleNext]);

  // Mouse drag physics
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    dragState.current = {
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      isDown: true,
    };
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragState.current.isDown) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.4;
    el.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    dragState.current.isDown = false;
    setIsDragging(false);
  };

  return (
    <section
      className="bg-white pt-24 md:pt-32 pb-16 md:pb-24 border-b border-[#E5E5E5] relative"
      aria-label="Editorial Letterpress Lookbook"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Top Masthead Bar ── */}
      <div className="container-wide mb-6 md:mb-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E5E5] pb-3 mb-6">
          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#666666]">
            EST. 2018 · NAGALAND, INDIA · BESPOKE LETTERPRESS ATELIER
          </p>
          <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#888888] uppercase">
            <span>HEIDELBERG PLATEN PRESSES</span>
            <span>·</span>
            <span>600–900GSM COTTON</span>
          </div>
        </div>

        {/* ── Editorial Headline & Navigation ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-black font-serif font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-3">
              Pressed by Hand, <em className="italic font-light">Kept Forever.</em>
            </h1>
            <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
              India&apos;s artisanal atelier for heirloom wedding suites and executive paper goods, deeply pressed on 600–900gsm pure cotton rag.
            </p>
          </div>

          {/* Category Tabs & Slider Controls */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {categoryTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(tab.index)}
                  className={`px-3 py-1.5 text-[10px] font-mono tracking-[0.16em] uppercase border transition-colors cursor-pointer ${
                    heroSlides[activeIndex].category.toLowerCase().includes(tab.label.toLowerCase().slice(0, 4)) ||
                    (tab.label === "All Work")
                      ? "border-black bg-black text-white"
                      : "border-[#E5E5E5] text-[#555555] hover:border-black hover:text-black bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Slide Counter & Arrow Controls */}
            <div className="flex items-center gap-4 pt-1">
              <span className="font-mono text-xs tracking-widest text-black font-medium">
                0{activeIndex + 1} <span className="text-[#888888]">/ 0{heroSlides.length}</span>
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Large-Scale Editorial Lookbook Carousel ── */}
      <div className="relative">
        <div
          ref={scrollRef}
          className={`carousel-scroll pl-[clamp(1.25rem,5vw,3.5rem)] pr-8 select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          role="region"
          aria-label="Studio work reel"
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="w-[86vw] sm:w-[60vw] lg:w-[42vw] max-w-[620px] flex-shrink-0 group"
            >
              <div className="block bg-white border border-[#E5E5E5] transition-all duration-300 hover:border-black">
                {/* Image Frame */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-[#F7F7F7] overflow-hidden border-b border-[#E5E5E5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    draggable={false}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />

                  {/* Top Status Tags */}
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-black border border-[#E5E5E5]">
                    0{index + 1}
                  </div>
                  <div className="absolute top-3 right-3 bg-black text-white px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase">
                    {slide.category}
                  </div>
                </div>

                {/* Editorial Specification Card */}
                <div className="p-5 sm:p-6 md:p-7 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#888888] uppercase">
                      {slide.tag}
                    </span>
                    <span className="h-px bg-[#E5E5E5] flex-1" />
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl text-black font-light leading-snug group-hover:opacity-75 transition-opacity">
                    {slide.title}
                  </h2>

                  <p className="font-mono text-[10px] sm:text-[11px] tracking-wide text-black bg-[#F7F7F7] border border-[#EAEAEA] px-3 py-1.5">
                    {slide.specs}
                  </p>

                  <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed line-clamp-2">
                    {slide.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={slide.href}
                      className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.18em] uppercase text-black font-medium hover:opacity-60 transition-opacity"
                    >
                      <span>{slide.ctaText}</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Story Progress Track & Swipe Indicator ── */}
        <div className="container-wide mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E5E5E5] pt-4">
            {/* Story-style Progress Bars */}
            <div className="w-full sm:w-auto flex-1 flex gap-2 max-w-md">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className="flex-1 h-[3px] bg-[#E5E5E5] overflow-hidden relative cursor-pointer group"
                  aria-label={`Jump to slide 0${i + 1}`}
                >
                  <span
                    className={`block h-full bg-black transition-all duration-300 ${
                      i === activeIndex ? "w-full" : "w-0 group-hover:w-full group-hover:bg-[#888888]"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Swipe Instruction */}
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#666666] font-mono flex items-center gap-2">
              <span>Drag or swipe to explore suites</span>
              <span className="animate-pulse">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

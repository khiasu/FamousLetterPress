"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ── IG-Style Hero Carousel ──
   Full-width horizontal swipe reel with momentum,
   using real studio photography. */

const heroSlides = [
  {
    image: "/assets/home/carousel/FMS_7392.jpg",
    alt: "Bespoke cotton letterpress wedding suite with gold foil detailing",
    caption: "Bespoke Wedding Suite",
    detail: "600gsm cotton · matte gold foil",
  },
  {
    image: "/assets/wed-kit/FMS_3749.jpg",
    alt: "Letterpress wedding sample kit with cotton swatches and foil samples",
    caption: "Wedding Sample Kit",
    detail: "Paper swatches · foil library · bite depths",
  },
  {
    image: "/assets/home/carousel/FMS_4040.jpg",
    alt: "Hand-set vintage typography on heavy cotton",
    caption: "Vintage Platen Presswork",
    detail: "Hand-fed through vintage Heidelberg presses",
  },
  {
    image: "/assets/business-cards/FMS_3462.jpg",
    alt: "Luxury letterpress business cards with edge gilding and blind deboss",
    caption: "Luxury Business Cards",
    detail: "Edge gilding · blind deboss · duplexed cotton",
  },
  {
    image: "/assets/home/carousel/IMG_7600.jpg",
    alt: "Deep relief impression on 600gsm cotton rag",
    caption: "Deep Relief Impression",
    detail: "Handcrafted in our Nagaland atelier",
  },
  {
    image: "/assets/home/carousel/FMS_7358.jpg",
    alt: "Hand-mixed ink calibration on platen press",
    caption: "Artisan Inks & Pigments",
    detail: "Hand-mixed oil pigments for bespoke tone",
  },
];

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  /* Track which card is most centered */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.children[0]?.clientWidth || 300;
      const gap = 16;
      const idx = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(idx, heroSlides.length - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  /* Mouse drag for desktop */
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragState.current = { startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.2;
    el.scrollLeft = dragState.current.scrollLeft - walk;
  };
  const onMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  return (
    <section
      className="relative bg-paper-creme overflow-hidden"
      aria-label="Product showcase"
    >
      {/* Top padding for fixed header */}
      <div className="pt-20 md:pt-28" />

      {/* Intro text */}
      <div className="container-wide mb-8 md:mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-4"
        >
          Letterpress & Foil Studio — Nagaland, India
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-ink-deep"
        >
          Pressed by Hand,{" "}
          <em className="font-light not-italic" style={{ fontStyle: "italic" }}>
            Kept Forever
          </em>
        </motion.h1>
      </div>

      {/* IG-Style Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div
          ref={scrollRef}
          className="carousel-scroll pl-[clamp(1.25rem,5vw,3rem)] pr-6 cursor-grab select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className="w-[75vw] md:w-[38vw] lg:w-[28vw] min-w-[280px] max-w-[420px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-paper-sand group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  draggable={false}
                />
                {/* Caption bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <p className="font-serif text-sm text-white/90">{slide.caption}</p>
                  <p className="text-[10px] text-white/50 mt-0.5 font-sans tracking-wide">
                    {slide.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-6 mb-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el || !el.children[0]) return;
                const cardWidth = (el.children[0] as HTMLElement).clientWidth + 16;
                el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
              }}
              className={`h-[2px] rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-ink-deep"
                  : "w-2 bg-ink-deep/20"
              }`}
              aria-label={`View slide ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Below-carousel CTAs */}
      <div className="container-wide py-8 md:py-10">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/start-a-project"
            className="inline-flex px-7 py-3 text-[11px] tracking-[0.14em] uppercase bg-ink-deep text-paper-creme hover:bg-[#222] transition-colors duration-300"
          >
            Book a Consult
          </Link>
          <Link
            href="/weddings/wedding-sample-kit"
            className="inline-flex px-7 py-3 text-[11px] tracking-[0.14em] uppercase border border-border-hairline text-ink-deep hover:border-ink-deep/30 transition-colors duration-300"
          >
            Order Sample Kit
          </Link>
        </div>
      </div>
    </section>
  );
}

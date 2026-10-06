"use client";

import { useState, useRef, TouchEvent } from "react";
import { InstagramIcon } from "@/components/ui/SocialIcons";

interface BasePost {
  id: string;
  title: string;
  caption: string;
  instagramUrl: string;
}

interface VideoPost extends BasePost {
  type: "video";
  image: string;
  fallbackImage: string;
  videoSrc: string;
}

interface CarouselPost extends BasePost {
  type: "carousel";
  images: { src: string; fallback: string }[];
}

type InstagramPost = VideoPost | CarouselPost;

// Fresh latest 4 posts from @famousletterpressindia
// Slot 1: Reel, Slot 2: Swipeable Carousel, Slot 3: Swipeable Carousel, Slot 4: Reel
const INSTAGRAM_ITEMS: InstagramPost[] = [
  {
    id: "sbi-bundi-cards",
    type: "video",
    title: "Bundi Silica Cotton Cards",
    caption: "Letterpress business cards for Bundi Silica Exports, printed on Heritage cotton paper with a three-colour impression.",
    image: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/831641542_18631954183012675_7963117517378612610_nfull.webp",
    fallbackImage: "/assets/revamp/what-we-make/FMS_3462.jpg",
    videoSrc: "https://res.cloudinary.com/dpvjjohc0/video/upload/v1779259450/C52FD622-2E93-4C93-BE03-586F4F63FE25_n3mbgw.mp4",
    instagramUrl: "https://www.instagram.com/reel/Dd_c8z_Bj6e/",
  },
  {
    id: "sbi-goa-wedding",
    type: "carousel",
    title: "Perseus & Palpasa Wedding Suite",
    caption: "A bespoke wedding suite for Goa featuring letterpress, gold foil stamping, and custom illustrated envelope liners.",
    images: [
      {
        src: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/825324056_18630562795012675_2483239915729227612_nfull.webp",
        fallback: "/assets/revamp/carousel/FMS_7392.jpg",
      },
      {
        src: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/825324013_18630563137012675_7848829352747119854_nfull.webp",
        fallback: "/assets/revamp/carousel/FMS_7358.jpg",
      },
      {
        src: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/825324160_18630563161012675_5734393003336708737_nfull.webp",
        fallback: "/assets/revamp/carousel/FMS_4040.jpg",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/Dd0knl5mfiV/",
  },
  {
    id: "sbi-monogram-suite",
    type: "carousel",
    title: "Bespoke Monogram & Foil Suite",
    caption: "Custom architectural illustrations, deep letterpress, and gold foil stamping crafted with intention across India.",
    images: [
      {
        src: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/803369065_18624479605012675_1942226031610282700_nfull.webp",
        fallback: "/assets/revamp/how-we-make/FMS_7617.jpg",
      },
      {
        src: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/801439367_18624169576012675_3283184430096534971_nfull.webp",
        fallback: "/assets/revamp/what-we-make/FMS_3781.jpg",
      },
      {
        src: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/793028578_18622169794012675_3462288863797476305_nfull.webp",
        fallback: "/assets/revamp/carousel/IMG_7600.jpg",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DdG-ugEGT6s/",
  },
  {
    id: "sbi-bts-studio",
    type: "video",
    title: "Inside the Pressroom",
    caption: "A little look into what happens behind the scenes at Famous Letterpress. Paper, ink, machines, and hands.",
    image: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/825324682_18631320820012675_506872712113647835_nfull.webp",
    fallbackImage: "/assets/revamp/how-we-make/FMS_7401.jpg",
    videoSrc: "https://res.cloudinary.com/dpvjjohc0/video/upload/v1779259450/C52FD622-2E93-4C93-BE03-586F4F63FE25_n3mbgw.mp4",
    instagramUrl: "https://www.instagram.com/reel/Dd6sxoBhyZ8/",
  },
];

function ReelCard({ item }: { item: VideoPost }) {
  const [imgSrc, setImgSrc] = useState(item.image);

  return (
    <a
      href={item.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-[4/5] bg-[#111] border border-[#E5E5E5] overflow-hidden group select-none transition-all duration-300 hover:border-black/60 shadow-xs block cursor-pointer"
      aria-label={`Watch ${item.title} on Instagram`}
    >
      {/* Thumbnail Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={item.title}
        onError={() => setImgSrc(item.fallbackImage)}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Centered Play Button Indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 translate-x-0.5 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Bottom Title & Instagram Icon Link */}
      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 flex items-end justify-between gap-2 z-10 pointer-events-none">
        <div className="min-w-0 pr-1">
          <h3 className="font-serif text-sm sm:text-base text-white font-medium leading-snug line-clamp-1 drop-shadow-xs">
            {item.title}
          </h3>
          <p className="text-[11px] text-white/80 line-clamp-1 font-light drop-shadow-xs hidden sm:block">
            {item.caption}
          </p>
        </div>

        <div
          className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all opacity-90 group-hover:opacity-100 backdrop-blur-xs shadow-xs"
          title="Watch on Instagram"
          aria-label="Watch on Instagram"
        >
          <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
      </div>
    </a>
  );
}

function CarouselCard({ item }: { item: CarouselPost }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
    } else if (diff < -40) {
      setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative aspect-[4/5] bg-[#F7F7F7] border border-[#E5E5E5] overflow-hidden group select-none transition-all duration-300 hover:border-black/60 shadow-xs"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sliding Image Track */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {item.images.map((imgObj, idx) => (
          <div key={idx} className="w-full h-full shrink-0 relative bg-[#F4F4F4]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgObj.src}
              alt={`${item.title} - photo ${idx + 1}`}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== imgObj.fallback) {
                  target.src = imgObj.fallback;
                }
              }}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

      {/* Left/Right Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-20 cursor-pointer hover:bg-white"
        aria-label="Previous photo"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-20 cursor-pointer hover:bg-white"
        aria-label="Next photo"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Subtle Dots Indicator */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 pointer-events-none">
        {item.images.map((_, dotIdx) => (
          <span
            key={dotIdx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              dotIdx === currentIndex ? "w-3.5 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Bottom Title & Instagram Icon Link */}
      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 flex items-end justify-between gap-2 z-10 pointer-events-none">
        <div className="min-w-0 pr-1">
          <h3 className="font-serif text-sm sm:text-base text-white font-medium leading-snug line-clamp-1 drop-shadow-xs">
            {item.title}
          </h3>
          <p className="text-[11px] text-white/80 line-clamp-1 font-light drop-shadow-xs hidden sm:block">
            {item.caption}
          </p>
        </div>

        <a
          href={item.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="pointer-events-auto shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all opacity-90 hover:opacity-100 backdrop-blur-xs shadow-xs"
          title="Open post on Instagram"
          aria-label="Open post on Instagram"
        >
          <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
      </div>
    </div>
  );
}

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]"
      aria-label="From our Instagram"
    >
      <div className="w">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <p className="k mb-3">In the Studio</p>
            <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1.14] font-serif text-black tracking-tight">
              From our <span className="inline-block mt-0.5"><i>Instagram.</i></span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/famousletterpressindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity w-fit"
          >
            <InstagramIcon className="w-4 h-4 shrink-0 text-black" />
            <span>@famousletterpressindia</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* 4 Clean Boxes: 1 & 4 are Reels (open directly on Instagram), 2 & 3 are Swipeable Carousels */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {INSTAGRAM_ITEMS.map((item) =>
            item.type === "video" ? (
              <ReelCard key={item.id} item={item} />
            ) : (
              <CarouselCard key={item.id} item={item} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

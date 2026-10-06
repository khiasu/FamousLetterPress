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
    id: "sbi-bts-studio",
    type: "video",
    title: "Inside the Pressroom",
    caption: "A little look into what happens behind the scenes at Famous Letterpress. Paper, ink, machines, and hands.",
    image: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/825324682_18631320820012675_506872712113647835_nfull.webp",
    fallbackImage: "/assets/revamp/how-we-make/FMS_7401.jpg",
    videoSrc: "https://res.cloudinary.com/dpvjjohc0/video/upload/v1779259450/C52FD622-2E93-4C93-BE03-586F4F63FE25_n3mbgw.mp4",
    instagramUrl: "https://www.instagram.com/reel/Dd6sxoBhyZ8/",
  },
  {
    id: "sbi-craftboat-cards",
    type: "carousel",
    title: "Handmade Cotton Stationery",
    caption: "Collaboration with @craftboat on handmade cotton paper with rich blue letterpress impression and depth.",
    images: [
      {
        src: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/814971387_18627486922012675_7888539480991517619_nfull.webp",
        fallback: "/assets/revamp/how-we-make/FMS_7617.jpg",
      },
      {
        src: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/817742303_18629502223012675_7909086917179831263_nfull.webp",
        fallback: "/assets/revamp/what-we-make/FMS_3781.jpg",
      },
      {
        src: "https://famousletterpress.com/wp-content/uploads/sb-instagram-feed-images/825324486_18630939358012675_7074157530640345574_nfull.webp",
        fallback: "/assets/revamp/carousel/IMG_7600.jpg",
      },
    ],
    instagramUrl: "https://www.instagram.com/reel/Ddd_O4UBDKj/",
  },
];

function ReelCard({
  item,
  isPlaying,
  onTogglePlay,
}: {
  item: VideoPost;
  isPlaying: boolean;
  onTogglePlay: () => void;
}) {
  const [isMuted, setIsMuted] = useState(true);
  const [imgSrc, setImgSrc] = useState(item.image);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative aspect-[4/5] bg-[#111] border border-[#E5E5E5] overflow-hidden group select-none transition-all duration-300 hover:border-black/60 shadow-xs">
      {isPlaying ? (
        <div className="relative w-full h-full bg-black">
          <video
            ref={videoRef}
            src={item.videoSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            onClick={onTogglePlay}
          />
          {/* Reel In-Video Controls */}
          <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleMute}
              className="w-7 h-7 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
              title={isMuted ? "Unmute" : "Mute"}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={onTogglePlay}
              className="w-7 h-7 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
              title="Pause"
              aria-label="Pause"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <>
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

          {/* Play Button Trigger */}
          <button
            type="button"
            onClick={onTogglePlay}
            className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer z-10"
            aria-label={`Play Reel: ${item.title}`}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 translate-x-0.5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </>
      )}

      {/* Top Badge: Reel */}
      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 pointer-events-none z-10">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/95 backdrop-blur-xs text-black text-[8.5px] sm:text-[9px] font-mono tracking-widest uppercase font-medium shadow-xs">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
          Reel
        </span>
      </div>

      {/* Bottom Title & Link */}
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
          className="pointer-events-auto shrink-0 w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all opacity-85 hover:opacity-100 backdrop-blur-xs text-xs"
          title="Open post on Instagram"
          aria-label="Open post on Instagram"
        >
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
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

      {/* Top Badge: Multi-image / Carousel Indicator */}
      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 pointer-events-none z-10 flex items-center gap-1.5">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/95 backdrop-blur-xs text-black text-[8.5px] sm:text-[9px] font-mono tracking-widest uppercase font-medium shadow-xs">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" />
          </svg>
          {currentIndex + 1}/{item.images.length}
        </span>
      </div>

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

      {/* Carousel Dots Indicator */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 pointer-events-none">
        {item.images.map((_, dotIdx) => (
          <span
            key={dotIdx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              dotIdx === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Bottom Title & Link */}
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
          className="pointer-events-auto shrink-0 w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all opacity-85 hover:opacity-100 backdrop-blur-xs text-xs"
          title="Open post on Instagram"
          aria-label="Open post on Instagram"
        >
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}

export function InstagramSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="instagram"
      className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]"
      aria-label="From our Instagram"
    >
      <div className="w">
        {/* Header with adjusted line-height */}
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

        {/* 4 Clean Boxes: 2x2 on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {INSTAGRAM_ITEMS.map((item) =>
            item.type === "video" ? (
              <ReelCard
                key={item.id}
                item={item}
                isPlaying={playingId === item.id}
                onTogglePlay={() => togglePlay(item.id)}
              />
            ) : (
              <CarouselCard key={item.id} item={item} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

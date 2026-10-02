"use client";

import { useState } from "react";
import Link from "next/link";

interface InstagramItem {
  id: string;
  type: "reel" | "post";
  title: string;
  duration?: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
  date: string;
  instagramUrl: string;
  embedUrl?: string; // Optional direct IG embed URL
}

const INSTAGRAM_POSTS: InstagramItem[] = [
  {
    id: "reel-1",
    type: "reel",
    title: "The Mechanical Bite in Slow Motion",
    duration: "0:24",
    image: "/assets/revamp/how-we-make/FMS_7401.jpg",
    caption:
      "Nothing compares to the physical bite of a 1950s Heidelberg platen sinking deep into 600gsm tree-free cotton rag. Hand-fed one sheet at a time in our Dimapur pressroom.",
    likes: "1,840",
    comments: "74",
    date: "2 days ago",
    instagramUrl: "https://www.instagram.com/famousletterpressindia/",
  },
  {
    id: "reel-2",
    type: "reel",
    title: "Hand-Mixing Pure Mineral Inks",
    duration: "0:38",
    image: "/assets/revamp/how-we-make/FMS_6500.jpg",
    caption:
      "Cold marble slab, steel palette knife, and raw oil-based pigments. Blending by eye until that exact warm terracotta nuance is hit.",
    likes: "1,220",
    comments: "52",
    date: "5 days ago",
    instagramUrl: "https://www.instagram.com/famousletterpressindia/",
  },
  {
    id: "post-1",
    type: "post",
    title: "The Florentine Heirloom Suite",
    image: "/assets/revamp/carousel/FMS_7392.jpg",
    caption:
      "Bespoke wedding stationery suite pressed in matte metallic gold foil and blind deboss on 600gsm wild cotton. Paired with handmade euro-flap envelopes and botanical wax seals.",
    likes: "2,410",
    comments: "118",
    date: "1 week ago",
    instagramUrl: "https://www.instagram.com/famousletterpressindia/",
  },
  {
    id: "reel-3",
    type: "reel",
    title: "Loupe Inspection & Archival Foil Gilding",
    duration: "0:19",
    image: "/assets/revamp/how-we-make/FMS_7617.jpg",
    caption:
      "Final inspection under the printer's loupe before mirror-gold edge gilding. Every hairline, curve, and ink impression scrutinized for crisp tactile perfection.",
    likes: "1,530",
    comments: "63",
    date: "2 weeks ago",
    instagramUrl: "https://www.instagram.com/famousletterpressindia/",
  },
];

export function InstagramSection() {
  const [activeMedia, setActiveMedia] = useState<InstagramItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const openPlayer = (item: InstagramItem) => {
    setActiveMedia(item);
    setIsPlaying(true);
  };

  const closePlayer = () => {
    setActiveMedia(null);
  };

  return (
    <section
      id="instagram"
      className="py-24 md:py-32 bg-white border-b border-[#E5E5E5] relative"
      aria-label="From Our Instagram"
    >
      <div className="w">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <p className="k">From our Instagram &middot; @famousletterpressindia</p>
            </div>
            <h2 className="d text-[clamp(36px,9vw,76px)] leading-[0.95] mt-1 font-serif">
              Pressed daily in <i>Nagaland.</i>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/famousletterpressindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[4px] border border-[rgba(14,14,14,0.18)] hover:border-black text-[11px] font-mono uppercase tracking-[0.16em] text-black hover:bg-black hover:text-white transition-all w-fit group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Follow @famousletterpressindia
          </a>
        </div>

        {/* Top 4 Instagram Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between border border-[rgba(14,14,14,0.12)] bg-[#faf9f6] rounded-[2px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_-18px_rgba(60,45,20,0.22)]"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[4/5] bg-[#ece7dd] overflow-hidden select-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 pointer-events-none" />

                {/* Top Badge: Type & Handle */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-mono tracking-widest text-white uppercase border border-white/15">
                    {item.type === "reel" ? (
                      <>
                        <svg
                          className="w-3 h-3 text-red-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span>Reel &middot; {item.duration}</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                        </svg>
                        <span>Post</span>
                      </>
                    )}
                  </div>

                  <span className="text-[9.5px] font-mono text-white/80 tracking-wider">
                    {item.date}
                  </span>
                </div>

                {/* Play Button Trigger on Media */}
                <button
                  type="button"
                  onClick={() => openPlayer(item)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
                  aria-label={`Play ${item.title} on this page`}
                >
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-black flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:bg-white">
                    {item.type === "reel" ? (
                      <svg
                        className="w-6 h-6 translate-x-0.5 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Bottom Overlay Title & Stats */}
                <div className="absolute bottom-3 inset-x-3 pointer-events-none z-10 text-white">
                  <h3 className="font-serif text-lg font-medium leading-tight mb-1 text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-white/80">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      {item.likes}
                    </span>
                    <span>&middot;</span>
                    <span>{item.comments} comments</span>
                  </div>
                </div>
              </div>

              {/* Caption & Controls Container */}
              <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                <p className="text-xs text-[#444] font-light leading-relaxed line-clamp-3 mb-4">
                  {item.caption}
                </p>

                {/* Interactive Dual Action Options: Play in page OR Open in IG */}
                <div className="pt-3 border-t border-[rgba(14,14,14,0.08)] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => openPlayer(item)}
                    className="inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-[0.14em] text-black hover:opacity-60 transition-opacity font-medium cursor-pointer"
                  >
                    <span>{item.type === "reel" ? "▶ Play Video" : "⊕ View Photo"}</span>
                  </button>

                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10.5px] font-mono uppercase tracking-[0.14em] text-[#7b7566] hover:text-black transition-colors"
                    title="Open on Instagram"
                  >
                    <span>Open in IG</span>
                    <span className="text-[12px] leading-none">&nearr;</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Micro Banner */}
        <div className="mt-12 pt-8 border-t border-[rgba(14,14,14,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666]">
          <p className="font-light">
            Behind the scenes: ink formulations, platen calibration, and fresh wedding suites
            shared weekly.
          </p>
          <a
            href="https://www.instagram.com/famousletterpressindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="ln text-[11px] font-mono tracking-widest uppercase font-medium"
          >
            Explore all reels on Instagram &rarr;
          </a>
        </div>
      </div>

      {/* ── IN-PAGE REEL / PHOTO PLAYER MODAL ── */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={closePlayer}
        >
          <div
            className="relative w-full max-w-[420px] sm:max-w-[460px] bg-[#111] text-white rounded-lg overflow-hidden border border-white/15 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar inside Player */}
            <div className="p-3.5 bg-black/60 border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logo.png"
                  alt="Famous Letterpress Seal"
                  className="w-7 h-7 rounded-full bg-white p-0.5 object-contain"
                />
                <div>
                  <p className="text-[12px] font-medium leading-none text-white">
                    famousletterpressindia
                  </p>
                  <p className="text-[9px] text-white/60 font-mono tracking-wider mt-0.5">
                    Nagaland Atelier &middot; {activeMedia.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeMedia.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/15 hover:bg-white hover:text-black text-[10px] font-mono uppercase tracking-wider text-white transition-colors"
                >
                  Open in IG &nearr;
                </a>
                <button
                  type="button"
                  onClick={closePlayer}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close player"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Video / Photo In-Page Stage */}
            <div className="relative aspect-[9/14] sm:aspect-[9/13] bg-black overflow-hidden flex items-center justify-center">
              {/* High-res Image visual representing the real letterpress motion */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeMedia.image}
                alt={activeMedia.title}
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  isPlaying ? "scale-105" : "scale-100"
                }`}
              />

              {/* Reel Simulated In-Page Letterpress Player Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />

              {/* Animated Progress Bar when playing */}
              <div className="absolute top-0 inset-x-0 h-1 bg-white/20 z-20">
                <div
                  className={`h-full bg-white transition-all duration-300 ${
                    isPlaying ? "w-full animate-[progress_15s_linear_infinite]" : "w-1/3"
                  }`}
                />
              </div>

              {/* In-Page Media Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-7 h-7 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Sound & Status toggles */}
              <div className="absolute top-3 right-3 z-20">
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center cursor-pointer hover:bg-black/90 transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Bottom Reel Caption & Live Indicator */}
              <div className="absolute bottom-4 inset-x-4 z-20">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/80">
                    Playing on Famous Letterpress Studio Player
                  </span>
                </div>
                <h4 className="font-serif text-lg font-medium leading-snug mb-1 text-white">
                  {activeMedia.title}
                </h4>
                <p className="text-[11.5px] text-white/80 line-clamp-2 font-light leading-relaxed">
                  {activeMedia.caption}
                </p>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-3.5 bg-[#161616] border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  &hearts; {activeMedia.likes}
                </span>
                <span>&middot;</span>
                <span className="font-mono text-[11px]">{activeMedia.comments} comments</span>
              </div>

              <a
                href={activeMedia.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-white text-black text-[11px] font-mono uppercase tracking-[0.14em] font-medium hover:bg-[#e0ded6] transition-colors"
              >
                Watch on Instagram &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

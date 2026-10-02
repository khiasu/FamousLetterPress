"use client";

import { useState } from "react";

interface InstagramPost {
  id: string;
  type: "video" | "photo";
  title: string;
  caption: string;
  image: string;
  videoSrc?: string;
  instagramUrl: string;
}

const INSTAGRAM_ITEMS: InstagramPost[] = [
  {
    id: "reel-bite",
    type: "video",
    title: "The Mechanical Bite",
    caption: "1950s Heidelberg platen biting 1.5mm into 600gsm tree-free cotton rag in our Dimapur pressroom.",
    image: "/assets/revamp/how-we-make/FMS_7401.jpg",
    videoSrc: "https://res.cloudinary.com/dpvjjohc0/video/upload/v1779259450/C52FD622-2E93-4C93-BE03-586F4F63FE25_n3mbgw.mp4",
    instagramUrl: "https://www.instagram.com/famousletterpressindia/",
  },
  {
    id: "reel-inks",
    type: "video",
    title: "Hand-Mixed Mineral Inks",
    caption: "Raw oil-based pigments blended with a palette knife on marble to match bespoke wedding tones.",
    image: "/assets/revamp/how-we-make/FMS_6500.jpg",
    videoSrc: "https://res.cloudinary.com/dpvjjohc0/video/upload/v1779259450/C52FD622-2E93-4C93-BE03-586F4F63FE25_n3mbgw.mp4",
    instagramUrl: "https://www.instagram.com/famousletterpressindia/",
  },
  {
    id: "post-florentine",
    type: "photo",
    title: "The Florentine Suite",
    caption: "Matte gold foil deboss on wild cotton board with handmade euro-flap envelopes and botanical wax seals.",
    image: "/assets/revamp/carousel/FMS_7392.jpg",
    instagramUrl: "https://www.instagram.com/famousletterpressindia/",
  },
  {
    id: "reel-gilding",
    type: "video",
    title: "Archival Edge Gilding",
    caption: "Final inspection under the loupe before mirror-finish metallic foil is applied along thick beveled edges.",
    image: "/assets/revamp/how-we-make/FMS_7617.jpg",
    videoSrc: "https://res.cloudinary.com/dpvjjohc0/video/upload/v1779259450/C52FD622-2E93-4C93-BE03-586F4F63FE25_n3mbgw.mp4",
    instagramUrl: "https://www.instagram.com/famousletterpressindia/",
  },
];

export function InstagramSection() {
  const [activeVideo, setActiveVideo] = useState<InstagramPost | null>(null);

  return (
    <section
      id="instagram"
      className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]"
      aria-label="From our Instagram"
    >
      <div className="w">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="k mb-2">From our Instagram</p>
            <h2 className="d text-[clamp(32px,7vw,64px)] leading-[0.95] font-serif text-black">
              Daily presswork at the <i>atelier.</i>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/famousletterpressindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity w-fit"
          >
            <span>@famousletterpressindia</span>
            <span aria-hidden="true">&nearr;</span>
          </a>
        </div>

        {/* 4 Cards Grid — Clean, responsive, strict black & white */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_ITEMS.map((item) => (
            <article
              key={item.id}
              className="border border-[#E5E5E5] bg-white flex flex-col justify-between group transition-all duration-300 hover:border-black/40"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[4/5] bg-[#F7F7F7] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Top Badge: Video vs Photo */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 bg-white text-black text-[9px] font-mono tracking-widest uppercase font-medium">
                    {item.type === "video" ? "Reel" : "Post"}
                  </span>
                </div>

                {/* Play Trigger for Video */}
                {item.type === "video" && (
                  <button
                    type="button"
                    onClick={() => setActiveVideo(item)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
                    aria-label={`Play ${item.title}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-md transition-transform duration-200 group-hover/btn:scale-110">
                      <svg
                        className="w-5 h-5 translate-x-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}

                {/* Title on bottom of media */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-base font-medium leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Caption & Actions */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-xs text-[#555] font-light leading-relaxed mb-4">
                  {item.caption}
                </p>

                <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.14em]">
                  {item.type === "video" ? (
                    <button
                      type="button"
                      onClick={() => setActiveVideo(item)}
                      className="text-black font-medium hover:opacity-60 transition-opacity cursor-pointer"
                    >
                      ▶ Watch on website
                    </button>
                  ) : (
                    <span className="text-[#888]">Studio Photo</span>
                  )}

                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888] hover:text-black transition-colors"
                  >
                    Open in IG &nearr;
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── REAL ATELIER VIDEO PLAYER MODAL ── */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[400px] bg-black text-white rounded-sm overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-3 bg-neutral-900 border-b border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-white">
                  {activeVideo.title}
                </p>
                <p className="text-[10px] text-white/60 font-mono">
                  Famous Letterpress &middot; Nagaland
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeVideo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono uppercase tracking-wider text-white hover:underline"
                >
                  Open in IG &nearr;
                </a>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-white text-lg cursor-pointer"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Authentic Workshop Video */}
            <div className="relative aspect-[9/16] bg-black">
              {activeVideo.videoSrc ? (
                <video
                  src={activeVideo.videoSrc}
                  autoPlay
                  controls
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={activeVideo.image}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Caption in player */}
            <div className="p-3 bg-neutral-900 border-t border-white/10">
              <p className="text-xs text-white/80 font-light leading-relaxed">
                {activeVideo.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

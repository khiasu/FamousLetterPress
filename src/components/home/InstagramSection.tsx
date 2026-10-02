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
  const [activeItem, setActiveItem] = useState<InstagramPost | null>(null);

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
            <p className="k mb-2">From our Instagram</p>
            <h2 className="d text-[clamp(32px,7vw,64px)] leading-[0.95] font-serif text-black">
              Daily presswork at the <i>studio.</i>
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

        {/* 2x2 Grid on Mobile (< sm), 4 Columns on Desktop (lg) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {INSTAGRAM_ITEMS.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveItem(item);
                }
              }}
              className="border border-[#E5E5E5] bg-white flex flex-col justify-between group transition-all duration-300 hover:border-black/50 cursor-pointer overflow-hidden text-left"
              aria-label={`View ${item.title}`}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge: Reel vs Photo */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                  <span className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white text-black text-[8.5px] sm:text-[9px] font-mono tracking-widest uppercase font-medium">
                    {item.type === "video" ? "Reel" : "Post"}
                  </span>
                </div>

                {/* Play Trigger Indicator for Video */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 translate-x-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Title on bottom of media */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                  <h3 className="font-serif text-xs sm:text-base font-medium leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Caption & Subtle Bottom Hover Link */}
              <div className="p-2.5 sm:p-4 flex flex-col justify-between flex-1">
                <p className="text-[11px] sm:text-xs text-[#555] font-light leading-relaxed mb-3 line-clamp-2">
                  {item.caption}
                </p>

                {/* Subtle bottom bar: default views on website, subtle IG hover link */}
                <div className="pt-2 sm:pt-2.5 border-t border-[#EBEBEB] flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#888] tracking-wider uppercase text-[8.5px] sm:text-[9.5px]">
                    {item.type === "video" ? "Watch video" : "View photo"}
                  </span>

                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[#888] hover:text-black transition-colors opacity-70 group-hover:opacity-100 uppercase tracking-widest text-[8.5px] sm:text-[9.5px]"
                    title="View on Instagram"
                  >
                    <span>IG</span>
                    <span aria-hidden="true">&nearr;</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── IN-PAGE VIEWER MODAL (PLAYS REEL OR VIEWS PHOTO DIRECTLY ON WEBSITE) ── */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-[420px] bg-black text-white rounded-sm overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-3.5 bg-neutral-900 border-b border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-white line-clamp-1">
                  {activeItem.title}
                </p>
                <p className="text-[10px] text-white/60 font-mono">
                  Famous Letterpress &middot; Nagaland
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeItem.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono uppercase tracking-wider text-white/80 hover:text-white hover:underline"
                >
                  IG &nearr;
                </a>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-white text-lg cursor-pointer"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Media Content */}
            <div className="relative aspect-[9/16] bg-black">
              {activeItem.videoSrc && activeItem.type === "video" ? (
                <video
                  src={activeItem.videoSrc}
                  autoPlay
                  controls
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Caption in player */}
            <div className="p-3.5 bg-neutral-900 border-t border-white/10">
              <p className="text-xs text-white/80 font-light leading-relaxed">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

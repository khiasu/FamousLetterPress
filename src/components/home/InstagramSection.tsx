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
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string, isVideo: boolean) => {
    if (!isVideo) return;
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="instagram"
      className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]"
      aria-label="From our Instagram"
    >
      <div className="w">
        {/* Header with adjusted line-height to prevent letter clash between 'y' and 'i' */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <p className="k mb-3">From our Instagram</p>
            <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1.14] font-serif text-black tracking-tight">
              Daily presswork at the <span className="inline-block mt-0.5"><i>studio.</i></span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/famousletterpressindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity w-fit"
          >
            <span>@famousletterpressindia</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* 4 Clean Boxes: 2x2 on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {INSTAGRAM_ITEMS.map((item) => {
            const isPlaying = playingId === item.id;
            const isVideo = item.type === "video";

            return (
              <div
                key={item.id}
                className="relative aspect-[4/5] bg-[#F7F7F7] border border-[#E5E5E5] rounded-xs overflow-hidden group select-none transition-all duration-300 hover:border-black/50"
              >
                {/* Media Layer: Image or In-Box HTML5 Video */}
                {isPlaying && isVideo && item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    autoPlay
                    controls
                    playsInline
                    className="w-full h-full object-cover bg-black"
                    onEnded={() => setPlayingId(null)}
                  />
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay for title contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                    {/* Play Button Trigger on Box (for video) */}
                    {isVideo && (
                      <button
                        type="button"
                        onClick={() => togglePlay(item.id, true)}
                        className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer z-10"
                        aria-label={`Play ${item.title}`}
                      >
                        <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 translate-x-0.5 text-black"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    )}

                    {/* Top Badge: Type Indicator */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 pointer-events-none z-10">
                      <span className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/90 backdrop-blur-xs text-black text-[8.5px] sm:text-[9px] font-mono tracking-widest uppercase font-medium">
                        {item.type === "video" ? "Reel" : "Post"}
                      </span>
                    </div>

                    {/* Bottom Title & Subtle Instagram Direct Link */}
                    <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 flex items-end justify-between gap-2 z-10 pointer-events-none">
                      <h3 className="font-serif text-sm sm:text-base text-white font-medium leading-snug line-clamp-1 drop-shadow-xs">
                        {item.title}
                      </h3>

                      <a
                        href={item.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-auto shrink-0 w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all opacity-80 hover:opacity-100 backdrop-blur-xs text-xs"
                        title="View on Instagram"
                        aria-label="View on Instagram"
                      >
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

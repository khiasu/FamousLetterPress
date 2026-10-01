"use client";

import { useState } from "react";
import { PortfolioPiece } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

interface PortfolioGalleryProps {
  items: PortfolioPiece[];
}

export function PortfolioGallery({ items }: PortfolioGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems =
    activeFilter === "all" ? items : items.filter((item) => item.category === activeFilter);

  const filters = [
    { label: "All Commissions", value: "all" },
    { label: "Wedding Stationery", value: "weddings" },
    { label: "Business Cards", value: "business-cards" },
    { label: "Personalised Stationery", value: "personalised" },
  ];

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 text-[11px] tracking-[0.14em] uppercase transition-all duration-300 ${
                isActive
                  ? "bg-black text-white font-medium"
                  : "bg-white text-[#555555] border border-[#E5E5E5] hover:border-black/30"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Portfolio Pieces */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((piece, idx) => (
          <Reveal key={piece.id} delay={idx * 0.05}>
            <div className="bg-white border border-[#E5E5E5] overflow-hidden group h-full flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] bg-[#F7F7F7] relative overflow-hidden border-b border-[#E5E5E5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={piece.featuredImage}
                    alt={piece.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest text-black border border-[#E5E5E5]">
                    {piece.categoryLabel}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888] mb-2 block font-medium">
                    {piece.clientOrProject || "Bespoke Commission"}
                  </span>
                  <h3 className="font-serif text-xl text-black mb-2">{piece.title}</h3>
                  <p className="text-xs text-[#555555] leading-relaxed mb-4 font-light">
                    {piece.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap gap-1.5">
                  {piece.techniques.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] bg-white border border-[#E5E5E5] text-black px-2.5 py-0.5 tracking-wide font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

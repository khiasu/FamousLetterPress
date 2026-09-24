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
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-all rounded-sm ${
                isActive
                  ? "bg-charcoal text-cream font-medium shadow-xs"
                  : "bg-ivory text-warm-stone border border-sand hover:border-terracotta/40"
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
            <div className="card-warm overflow-hidden group h-full flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] bg-sand/60 relative flex flex-col items-center justify-center p-6 text-center border-b border-sand group-hover:bg-sand/80 transition-colors">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-warm-stone mb-2">
                    {piece.categoryLabel}
                  </span>
                  <div className="font-serif text-xl text-charcoal mb-1">{piece.title}</div>
                  <div className="text-xs text-charcoal/60">{piece.paperStock}</div>
                </div>

                <div className="p-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-terracotta mb-2 font-medium">
                    {piece.clientOrProject || "Bespoke Project"}
                  </div>
                  <h3 className="font-serif text-lg text-charcoal mb-2">{piece.title}</h3>
                  <p className="text-xs text-warm-stone leading-relaxed mb-4 font-light">
                    {piece.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="pt-4 border-t border-sand flex flex-wrap gap-1.5">
                  {piece.techniques.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] bg-sand/70 text-charcoal px-2 py-0.5 rounded-sm"
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

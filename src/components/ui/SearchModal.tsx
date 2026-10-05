"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";

export interface NavigationTarget {
  id: string;
  title: string;
  section: string;
  href: string;
  keywords: string[];
}

const DEFAULT_TOP_PAGES: NavigationTarget[] = [
  {
    id: "weddings",
    title: "Wedding Invitations & Suites",
    section: "What We Make",
    href: "/our-work/wedding-invites",
    keywords: ["wedding", "invite", "invitations", "marriage", "suite", "bride", "foil"],
  },
  {
    id: "business-cards",
    title: "Cards + Letterheads",
    section: "What We Make",
    href: "/our-work/business-cards",
    keywords: ["business", "visiting card", "executive", "cards", "corporate", "letterheads"],
  },
  {
    id: "sample-wedding",
    title: "Wedding Sample Kit (₹1,500)",
    section: "Sample Kits",
    href: "/weddings/wedding-sample-kit",
    keywords: ["sample", "kit", "box", "wedding sample", "swatch", "paper"],
  },
];

const ALL_SEARCH_TARGETS: NavigationTarget[] = [
  ...DEFAULT_TOP_PAGES,
  { id: "personalised-stationery", title: "Personalised Stationery", section: "What We Make", href: "/personalised-stationery", keywords: ["stationery", "notecard", "monogram", "correspondence"] },
  { id: "seal-stickers", title: "Wax Seals & Embellishments", section: "What We Make", href: "/our-work/seal-stickers", keywords: ["wax seals", "seals", "embellishments", "cotton seals", "crests"] },
  { id: "cotton-paper", title: "Cotton & Handmade Paper", section: "How We Make It", href: "/materials", keywords: ["materials", "paper", "cotton", "handmade", "swatch"] },
  { id: "letterpress-craft", title: "Letterpress Craft & Bite", section: "How We Make It", href: "/process", keywords: ["process", "craft", "bite", "heidelberg", "relief", "printing"] },
  { id: "hot-foil", title: "Hot Foil & Emboss", section: "How We Make It", href: "/process", keywords: ["foil", "emboss", "gold foil", "deboss"] },
  { id: "about-studio", title: "Our Story & Studio", section: "About", href: "/about", keywords: ["story", "studio", "about", "founders", "heritage"] },
  { id: "packages", title: "Design Templates & Curated Suites", section: "Packages", href: "/packages", keywords: ["packages", "templates", "pricing", "suites"] },
  { id: "channel-partners", title: "Channel Partners & Designers", section: "Who We Make It For", href: "/channel-partners", keywords: ["partner", "designer", "trade", "b2b", "agency"] },
  { id: "faq", title: "Frequently Asked Questions", section: "Help", href: "/faq", keywords: ["faq", "help", "questions", "timelines", "pricing"] },
  { id: "contact", title: "Contact & Consult", section: "Help", href: "/contact", keywords: ["contact", "consult", "location", "email", "phone", "whatsapp"] },
  { id: "start-a-project", title: "Start a Project", section: "Action", href: "/start-a-project", keywords: ["inquire", "order", "quote", "start"] },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input and lock scroll on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Global escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Top 3 results: either default 3 pages or top 3 matching search results
  const displayedResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) {
      return DEFAULT_TOP_PAGES.slice(0, 3);
    }
    // Filter and strictly return top 3 most relevant results
    return ALL_SEARCH_TARGETS.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const sectionMatch = item.section.toLowerCase().includes(q);
      const keywordMatch = item.keywords.some((k) => k.toLowerCase().includes(q));
      return titleMatch || sectionMatch || keywordMatch;
    }).slice(0, 3);
  }, [query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const navigateTo = (href: string) => {
    onClose();
    router.push(href);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (displayedResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < displayedResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : displayedResults.length - 1));
    } else if (e.key === "Enter" && displayedResults[selectedIndex]) {
      e.preventDefault();
      navigateTo(displayedResults[selectedIndex].href);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-5 sm:pt-7 px-4 bg-black/20 backdrop-blur-[2px] transition-all duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Search"
    >
      {/* Translucent Dynamic Island Capsule */}
      <div
        className="w-full max-w-[420px] bg-white/85 backdrop-blur-xl border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.16),0_2px_8px_rgba(0,0,0,0.06)] rounded-[24px] overflow-hidden transition-all duration-200 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Capsule Search Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-black/[0.07]">
          <svg
            className="w-4 h-4 text-black/60 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search pages or suites..."
            className="w-full bg-transparent text-[13.5px] text-[#0e0e0e] placeholder:text-[#888] font-sans outline-none tracking-tight"
            autoComplete="off"
            spellCheck={false}
          />

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="w-5 h-5 flex items-center justify-center rounded-full text-[#666] hover:text-black text-xs transition-colors cursor-pointer shrink-0"
              aria-label="Clear query"
            >
              &times;
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="text-[9.5px] font-mono uppercase tracking-wider text-[#666] hover:text-black transition-colors shrink-0 px-1.5 py-0.5 border border-black/10 rounded-full bg-white/70"
            aria-label="Close search"
          >
            esc
          </button>
        </div>

        {/* Top 3 Pages or Top 3 Results */}
        <div className="p-2">
          <div className="px-3 pt-1.5 pb-1 text-[9px] font-mono uppercase tracking-[0.2em] text-[#888]">
            {query.trim() ? "Top 3 Results" : "Top 3 Pages"}
          </div>

          <div className="space-y-1">
            {displayedResults.length > 0 ? (
              displayedResults.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => navigateTo(item.href)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-colors duration-150 ${
                      isSelected
                        ? "bg-black text-white"
                        : "hover:bg-black/5 text-[#111]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`text-[8.5px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-full shrink-0 ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-black/5 text-[#666]"
                        }`}
                      >
                        {item.section}
                      </span>
                      <span className="text-[13px] font-medium font-sans truncate tracking-tight">
                        {item.title}
                      </span>
                    </div>

                    <span
                      className={`text-xs shrink-0 transition-transform ${
                        isSelected ? "text-white translate-x-0.5" : "text-[#999]"
                      }`}
                    >
                      &rarr;
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="py-6 text-center text-xs text-[#888] font-sans">
                No matching results found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

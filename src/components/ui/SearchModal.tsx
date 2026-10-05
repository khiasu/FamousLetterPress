"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";

export interface NavigationTarget {
  id: string;
  title: string;
  category: string;
  href: string;
  keywords: string[];
}

const POPULAR_SEARCHES: NavigationTarget[] = [
  {
    id: "weddings",
    title: "Wedding Invitations & Suites",
    category: "What we make",
    href: "/our-work/wedding-invites",
    keywords: ["wedding", "invite", "invitations", "marriage", "suite", "bride", "foil"],
  },
  {
    id: "business-cards",
    title: "Cards + Letterheads",
    category: "What we make",
    href: "/our-work/business-cards",
    keywords: ["business", "visiting card", "executive", "cards", "corporate", "letterheads"],
  },
  {
    id: "sample-wedding",
    title: "Order Wedding Sample Kit (₹1,500)",
    category: "Sample kits",
    href: "/weddings/wedding-sample-kit",
    keywords: ["sample", "kit", "box", "wedding sample", "swatch", "paper"],
  },
  {
    id: "letterpress-craft",
    title: "Letterpress Craft & Process",
    category: "How we make it",
    href: "/process",
    keywords: ["process", "craft", "bite", "heidelberg", "relief", "printing", "foil", "emboss"],
  },
];

const ALL_SEARCH_TARGETS: NavigationTarget[] = [
  ...POPULAR_SEARCHES,
  { id: "personalised-stationery", title: "Personalised Stationery", category: "What we make", href: "/personalised-stationery", keywords: ["stationery", "notecard", "monogram", "correspondence"] },
  { id: "seal-stickers", title: "Wax Seals & Embellishments", category: "What we make", href: "/our-work/seal-stickers", keywords: ["wax seals", "seals", "embellishments", "cotton seals", "crests"] },
  { id: "cotton-paper", title: "Cotton & Handmade Paper", category: "How we make it", href: "/materials", keywords: ["materials", "paper", "cotton", "handmade", "swatch"] },
  { id: "about-studio", title: "Our Story & Studio", category: "About", href: "/about", keywords: ["story", "studio", "about", "founders", "heritage"] },
  { id: "packages", title: "Design Templates & Curated Suites", category: "Packages", href: "/packages", keywords: ["packages", "templates", "pricing", "suites"] },
  { id: "channel-partners", title: "Channel Partners & Designers", category: "Who we make it for", href: "/channel-partners", keywords: ["partner", "designer", "trade", "b2b", "agency"] },
  { id: "faq", title: "Frequently Asked Questions", category: "Help", href: "/faq", keywords: ["faq", "help", "questions", "timelines", "pricing"] },
  { id: "contact", title: "Contact & Studio Location", category: "Help", href: "/contact", keywords: ["contact", "consult", "location", "email", "phone", "whatsapp"] },
  { id: "start-a-project", title: "Start a Project / Inquire", category: "Action", href: "/start-a-project", keywords: ["inquire", "order", "quote", "start"] },
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

  // Results list
  const displayedResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) {
      return POPULAR_SEARCHES;
    }
    return ALL_SEARCH_TARGETS.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const categoryMatch = item.category.toLowerCase().includes(q);
      const keywordMatch = item.keywords.some((k) => k.toLowerCase().includes(q));
      return titleMatch || categoryMatch || keywordMatch;
    }).slice(0, 5);
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
      className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-14 px-4 bg-black/10 backdrop-blur-[2px] transition-all duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Search"
    >
      {/* Clean, Simple Floating Card */}
      <div
        className="w-full max-w-[440px] bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-[rgba(14,14,14,0.09)] overflow-hidden transition-all duration-200 animate-in fade-in slide-in-from-top-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Simple Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[rgba(14,14,14,0.07)]">
          <svg
            className="w-4 h-4 text-[#888] shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search invitations, cards, papers..."
            className="w-full bg-transparent text-[14px] text-[#111] placeholder:text-[#999] font-sans outline-none"
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
              className="w-5 h-5 flex items-center justify-center rounded-full text-[#888] hover:text-black text-sm transition-colors cursor-pointer shrink-0"
              aria-label="Clear search"
            >
              &times;
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="text-[10px] font-mono uppercase tracking-wider text-[#999] hover:text-black transition-colors shrink-0 px-1.5 py-0.5"
            aria-label="Close search"
          >
            esc
          </button>
        </div>

        {/* Thoughtful Section Label & Natural List */}
        <div className="py-2.5 px-2">
          <div className="px-3 pb-2 text-[10.5px] font-sans font-medium uppercase tracking-[0.14em] text-[#888]">
            {query.trim() ? "Relevant search results" : "Popular searches"}
          </div>

          <div className="space-y-0.5">
            {displayedResults.length > 0 ? (
              displayedResults.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => navigateTo(item.href)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors duration-150 group ${
                      isSelected
                        ? "bg-[#FAF7F2] text-black"
                        : "hover:bg-[#FAF7F2] text-[#222]"
                    }`}
                  >
                    <div className="flex flex-col min-w-0 pr-2">
                      <span className="text-[13.5px] font-normal text-[#111] truncate leading-tight group-hover:text-black">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-[#888] font-sans mt-0.5">
                        {item.category}
                      </span>
                    </div>

                    <span
                      className={`text-[12px] text-[#aaa] group-hover:text-black transition-all shrink-0 ${
                        isSelected ? "translate-x-0.5 text-black" : ""
                      }`}
                    >
                      &rarr;
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="py-8 text-center text-[13px] text-[#888] font-sans">
                No matching results found for &ldquo;{query}&rdquo;
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface SearchItem {
  id: string;
  title: string;
  category: "Services" | "Sample Kits" | "Craft & Paper" | "Consultation" | "Studio";
  description: string;
  href: string;
  keywords: string[];
}

const SEARCH_DATABASE: SearchItem[] = [
  {
    id: "weddings-stationery",
    title: "Wedding Invitations & Suites",
    category: "Services",
    description: "Bespoke letterpress, foil & embossed wedding invitations on heavy 600–900gsm cotton rag.",
    href: "/weddings/wedding-stationery",
    keywords: ["wedding", "invitation", "suite", "card", "foil", "letterpress", "marriage", "luxury", "cotton"],
  },
  {
    id: "weddings-overview",
    title: "Wedding Collection & Suites",
    category: "Services",
    description: "Save the dates, main invites, RSVP cards, details cards, wax seals, and custom liners.",
    href: "/weddings",
    keywords: ["save the date", "rsvp", "envelope", "liner", "wax seal", "suite", "wedding"],
  },
  {
    id: "business-cards",
    title: "Business Cards & Stationery",
    category: "Services",
    description: "Thick cotton business cards with tactile letterpress bite, hot foil stamping, and edge gilding.",
    href: "/business-cards",
    keywords: ["business", "card", "visiting card", "stationery", "edge gilding", "emboss", "professional"],
  },
  {
    id: "personalised-stationery",
    title: "Personalised Stationery",
    category: "Services",
    description: "Monogrammed note cards, custom letterheads, correspondence cards, and bespoke envelopes.",
    href: "/personalised-stationery",
    keywords: ["personalised", "stationery", "monogram", "correspondence", "letterhead", "notecard"],
  },
  {
    id: "wedding-sample-kit",
    title: "The Wedding Sample Box (₹1,500)",
    category: "Sample Kits",
    description: "Touch and feel heavy cotton papers, foil swatches, blind deboss, and wax seal finishes.",
    href: "/weddings/wedding-sample-kit",
    keywords: ["sample", "kit", "box", "wedding sample", "paper sample", "touch", "feel", "order"],
  },
  {
    id: "business-sample-kit",
    title: "Business Card Sample Kit (₹1,000)",
    category: "Sample Kits",
    description: "Curated sample pack with varied cotton weights (300–900gsm), edge painting, and foil stamps.",
    href: "/business-cards/business-card-sample-kit",
    keywords: ["business sample", "card sample", "swatch", "edge painting", "cotton kit"],
  },
  {
    id: "materials-cotton",
    title: "Pure Cotton & Handmade Papers",
    category: "Craft & Paper",
    description: "Explore 300gsm, 600gsm, and 900gsm tree-free cotton rag, handmade deckle-edge papers, and Colorplan.",
    href: "/materials",
    keywords: ["paper", "cotton", "gsm", "deckle edge", "handmade", "gmund", "colorplan", "stock"],
  },
  {
    id: "process-letterpress",
    title: "The Letterpress Craft & Process",
    category: "Craft & Paper",
    description: "How mechanical relief creates the indelible bite into pillowy cotton paper on Heidelberg presses.",
    href: "/process",
    keywords: ["process", "letterpress", "the bite", "heidelberg", "press", "ink", "relief", "craft"],
  },
  {
    id: "our-work",
    title: "Portfolio & Studio Commissions",
    category: "Studio",
    description: "Archive of custom wedding suites, foil-stamped business cards, and bespoke client works.",
    href: "/work",
    keywords: ["portfolio", "work", "archive", "commissions", "gallery", "photos", "client work"],
  },
  {
    id: "about-atelier",
    title: "Our Story & Atelier",
    category: "Studio",
    description: "Designers turned printers. Founded in Dimapur, Nagaland, celebrating heirloom craft.",
    href: "/about",
    keywords: ["about", "story", "nagaland", "dimapur", "atelier", "founder", "printers"],
  },
  {
    id: "early-bride",
    title: "Early Bride Consultation",
    category: "Consultation",
    description: "Book early for stationery timeline planning, paper curation, and complimentary proofing.",
    href: "/weddings/early-bride",
    keywords: ["early bride", "timeline", "planning", "bride", "consultation", "booking"],
  },
  {
    id: "channel-partners",
    title: "For Designers & Wedding Planners",
    category: "Consultation",
    description: "Trade collaboration program, wholesale trade discounts, and bespoke swatch decks for studios.",
    href: "/channel-partners",
    keywords: ["planner", "designer", "channel partner", "trade", "b2b", "wholesale", "collaboration"],
  },
  {
    id: "start-project",
    title: "Start a Project / Price Request",
    category: "Consultation",
    description: "Submit your inquiry for custom estimates, material guidance, and timeline advice within 24 hours.",
    href: "/start-a-project",
    keywords: ["start", "quote", "price", "estimate", "consult", "contact", "inquiry"],
  },
  {
    id: "faqs",
    title: "Frequently Asked Questions",
    category: "Studio",
    description: "Answers on turnaround times, minimum order quantities, shipping across India, and file setup.",
    href: "/faq",
    keywords: ["faq", "questions", "moq", "turnaround", "timeline", "shipping", "delivery"],
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Global keydown (Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Filtered results with instant fuzzy scoring
  const filteredResults = useMemo(() => {
    const cleanQuery = query.toLowerCase().trim();
    return SEARCH_DATABASE.filter((item) => {
      // Category filter
      if (activeCategory !== "All" && item.category !== activeCategory) {
        return false;
      }
      if (!cleanQuery) return true;

      const titleMatch = item.title.toLowerCase().includes(cleanQuery);
      const descMatch = item.description.toLowerCase().includes(cleanQuery);
      const keywordMatch = item.keywords.some((k) => k.includes(cleanQuery));

      return titleMatch || descMatch || keywordMatch;
    });
  }, [query, activeCategory]);

  // Reset selected index on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeCategory]);

  // Keyboard navigation
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredResults.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : Math.max(0, filteredResults.length - 1)
      );
    } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
      e.preventDefault();
      const targetHref = filteredResults[selectedIndex].href;
      onClose();
      router.push(targetHref);
    }
  };

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const categories = ["All", "Services", "Sample Kits", "Craft & Paper", "Consultation"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search Famous Letterpress"
    >
      <div
        className="w-full max-w-2xl bg-white shadow-2xl overflow-hidden border border-[#E5E5E5] flex flex-col max-h-[80vh] rounded-[6px]"
        style={{
          boxShadow: "0 25px 50px -12px rgba(14, 14, 14, 0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E5E5E5] bg-white">
          <svg
            className="w-5 h-5 text-[#888888] shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search wedding invitations, cotton papers, sample kits, craft..."
            className="flex-1 bg-transparent text-base sm:text-lg text-[#0e0e0e] placeholder-[#888888] outline-none font-sans"
            aria-label="Search query"
          />

          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-[#888888] hover:text-black uppercase tracking-wider px-2 py-1 cursor-pointer"
            >
              Clear
            </button>
          )}

          <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-mono px-2 py-1 bg-[#f5f5f5] border border-[#e0e0e0] text-[#555] rounded-[2px] select-none">
            ESC
          </kbd>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 px-5 py-2.5 border-b border-[#F0F0F0] overflow-x-auto scrollbar-none bg-white">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--mute)] shrink-0 mr-1 font-mono">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3 py-1 rounded-[3px] whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0e0e0e] text-white"
                  : "bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto divide-y divide-[#F5F5F5] p-2"
        >
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-[#7b7566]">
              <p className="text-base font-serif italic mb-1">
                No matching results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#888888]">
                Try searching for &ldquo;wedding&rdquo;, &ldquo;sample kit&rdquo;, &ldquo;cotton paper&rdquo;, or &ldquo;foil&rdquo;.
              </p>
            </div>
          ) : (
            filteredResults.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`block p-3.5 transition-colors group cursor-pointer ${
                    isSelected
                      ? "bg-[#f7f4ed]"
                      : "hover:bg-[#faf8f4]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] uppercase tracking-[0.2em] font-mono px-2 py-0.5 bg-white border border-[#E0DCD3] text-[#7b7566]">
                          {item.category}
                        </span>
                        <h4
                          className="font-serif text-base sm:text-lg text-[#0e0e0e] truncate group-hover:text-black font-medium"
                          style={{
                            fontFamily: "'Cormorant Garamond', 'Bodoni Moda', Georgia, serif",
                          }}
                        >
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#666666] line-clamp-1 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <span
                      className={`text-xs text-[#888888] shrink-0 mt-1 transition-transform ${
                        isSelected ? "translate-x-1 text-black font-medium" : ""
                      }`}
                    >
                      &rarr;
                    </span>
                  </div>
                </Link>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-2.5 border-t border-[#E5E5E5] bg-white flex items-center justify-between text-[11px] text-[#7b7566] font-mono">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white border border-[#DDD] text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-[#DDD] text-[10px]">↓</kbd>
              Navigate
            </span>
            <span className="inline-flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-white border border-[#DDD] text-[10px]">↵</kbd>
              Select
            </span>
          </div>

          <span>{filteredResults.length} items available</span>
        </div>
      </div>
    </div>
  );
}

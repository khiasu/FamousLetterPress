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

const SITE_NAVIGATION_TARGETS: NavigationTarget[] = [
  // Core services & pages
  { id: "weddings", title: "Wedding Invitations", section: "Services", href: "/weddings", keywords: ["wedding", "invite", "invitations", "marriage", "suite", "bride", "foil"] },
  { id: "wedding-stationery", title: "Wedding Stationery Suites", section: "Services", href: "/weddings/wedding-stationery", keywords: ["stationery", "rsvp", "save the date", "event card", "menu", "envelope"] },
  { id: "early-bride", title: "Early Bride Consultation", section: "Services", href: "/weddings/early-bride", keywords: ["early bride", "consult", "booking", "custom"] },
  { id: "business-cards", title: "Executive Business Cards", section: "Services", href: "/business-cards", keywords: ["business", "visiting card", "executive", "cards", "corporate", "edge gilding"] },
  { id: "personalised-stationery", title: "Personalised Stationery", section: "Services", href: "/personalised-stationery", keywords: ["personalised", "notecard", "letterhead", "monogram", "correspondence"] },
  { id: "sample-wedding", title: "Wedding Sample Kit (₹1,500)", section: "Sample Kits", href: "/weddings/wedding-sample-kit", keywords: ["sample", "kit", "box", "wedding sample", "swatch", "paper"] },
  { id: "sample-business", title: "Business Card Sample Kit (₹1,000)", section: "Sample Kits", href: "/business-cards/business-card-sample-kit", keywords: ["business sample", "card kit", "sample pack", "cotton sample"] },
  { id: "our-work", title: "Our Work & Portfolio", section: "Explore", href: "/work", keywords: ["work", "portfolio", "archive", "projects", "gallery", "commissions"] },
  { id: "process", title: "Letterpress Craft & Process", section: "Explore", href: "/process", keywords: ["process", "letterpress", "the bite", "heidelberg", "relief", "technique", "craft"] },
  { id: "materials", title: "Cotton Papers & Foils", section: "Explore", href: "/materials", keywords: ["materials", "paper", "cotton", "300gsm", "600gsm", "900gsm", "foil", "deboss"] },
  { id: "packages", title: "Packages & Design Suites", section: "Explore", href: "/packages", keywords: ["packages", "pricing", "bundles", "designs", "templates"] },
  { id: "channel-partners", title: "Channel Partners & Trade", section: "Studio", href: "/channel-partners", keywords: ["partner", "trade", "designer", "planner", "collaborate", "b2b"] },
  { id: "about", title: "About Studio & Story", section: "Studio", href: "/about", keywords: ["about", "story", "studio", "nagaland", "dimapur", "founders", "heritage"] },
  { id: "faq", title: "Frequently Asked Questions", section: "Help", href: "/faq", keywords: ["faq", "questions", "help", "timeline", "pricing", "delivery", "moq"] },
  { id: "contact", title: "Contact & Studio Location", section: "Help", href: "/contact", keywords: ["contact", "email", "phone", "whatsapp", "address", "visit"] },
  { id: "start-a-project", title: "Start a Project / Inquire", section: "Action", href: "/start-a-project", keywords: ["start", "order", "inquiry", "quote", "book"] },
  // Specific Page Anchor Sections
  { id: "home-faq", title: "Home FAQ Section", section: "Sections", href: "/#faq", keywords: ["faq section", "common questions", "home faq"] },
  { id: "home-work", title: "Home 3D Cards / What We Make", section: "Sections", href: "/#svc", keywords: ["3d cards", "carousel", "what we make"] },
  { id: "home-how", title: "Home How We Make Section", section: "Sections", href: "/#how-we-make", keywords: ["how we make", "craft", "press"] },
  { id: "home-who", title: "Home Who We Make For Section", section: "Sections", href: "/#who-we-make-for", keywords: ["who we make for", "clients", "couples"] },
  { id: "home-instagram", title: "Home Instagram Presswork", section: "Sections", href: "/#instagram", keywords: ["instagram", "presswork", "reels", "video"] },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Reset query and focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 40);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
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

  // Instant fast search filter
  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) {
      // Default top quick navigation destinations
      return SITE_NAVIGATION_TARGETS.slice(0, 7);
    }
    return SITE_NAVIGATION_TARGETS.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const sectionMatch = item.section.toLowerCase().includes(q);
      const keywordMatch = item.keywords.some((k) => k.includes(q));
      return titleMatch || sectionMatch || keywordMatch;
    }).slice(0, 8);
  }, [query]);

  // Reset selected index on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const navigateTo = (href: string) => {
    onClose();
    router.push(href);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, results.length - 1)));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      navigateTo(results[selectedIndex].href);
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/40 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Search"
    >
      {/* Small Minimal Capsule Container */}
      <div
        className="w-full max-w-[480px] bg-white rounded-2xl shadow-2xl border border-[rgba(14,14,14,0.12)] overflow-hidden transition-all duration-200"
        style={{
          boxShadow: "0 20px 45px -10px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.06)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimal Capsule Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#FAF8F5] border-b border-[rgba(14,14,14,0.08)]">
          <svg
            className="w-4 h-4 text-[#777] shrink-0"
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
            placeholder="Search pages or jump to section..."
            className="w-full bg-transparent text-sm text-[#111] placeholder-[#888] font-sans outline-none focus:ring-0 tracking-tight"
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
              className="w-5 h-5 flex items-center justify-center rounded-full text-[#888] hover:text-black hover:bg-black/5 text-xs transition-colors cursor-pointer shrink-0"
              aria-label="Clear search query"
            >
              &times;
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="text-[10px] font-mono uppercase tracking-widest text-[#888] hover:text-black transition-colors shrink-0 px-1 py-0.5 border border-[#E0DBD0] rounded-xs bg-white"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        {/* Fast Responsive Results List */}
        <div ref={listRef} className="max-h-[320px] overflow-y-auto divide-y divide-[rgba(14,14,14,0.04)] p-1.5">
          {results.length > 0 ? (
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => navigateTo(item.href)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? "bg-black text-white" : "hover:bg-[#F5F2EB] text-[#111]"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-xs shrink-0 ${
                        isSelected ? "bg-white/20 text-white" : "bg-[#EAE5D9] text-[#666]"
                      }`}
                    >
                      {item.section}
                    </span>
                    <span className="text-[13.5px] font-medium font-sans truncate tracking-[-0.01em]">
                      {item.title}
                    </span>
                  </div>

                  <span
                    className={`text-xs transition-transform shrink-0 ${
                      isSelected ? "text-white translate-x-0.5" : "text-[#999]"
                    }`}
                  >
                    &rarr;
                  </span>
                </div>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs text-[#888] font-light">
              No matching pages or sections found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

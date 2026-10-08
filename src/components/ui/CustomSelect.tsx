"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export interface CustomSelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  name?: string;
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | CustomSelectOption)[];
  placeholder?: string;
  className?: string;
  bgMode?: "white" | "warm";
  required?: boolean;
}

export function CustomSelect({
  name,
  id,
  value,
  onChange,
  options,
  placeholder = "Please select...",
  className = "",
  bgMode = "white",
  required = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Normalize options
  const normalizedOptions: CustomSelectOption[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, []);

  // Close on outside click or touch
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen, closeDropdown]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
        const currentIndex = normalizedOptions.findIndex((opt) => opt.value === value);
        setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
      }
      return;
    }

    if (e.key === "Escape" || e.key === "Tab") {
      closeDropdown();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev < normalizedOptions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : normalizedOptions.length - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < normalizedOptions.length) {
        onChange(normalizedOptions[focusedIndex].value);
        closeDropdown();
      }
    }
  };

  // Scroll focused option into view
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll<HTMLLIElement>("li");
      if (items[focusedIndex]) {
        items[focusedIndex].scrollIntoView({ block: "nearest" });
      }
    }
  }, [focusedIndex, isOpen]);

  const bgClass = bgMode === "warm" ? "bg-[#FAF8F5]" : "bg-white";

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      onKeyDown={handleKeyDown}
    >
      {/* Hidden input for standard form submission */}
      {name && (
        <input
          type="hidden"
          name={name}
          id={id}
          value={value}
          required={required}
        />
      )}

      {/* Trigger Button */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full ${bgClass} border text-left flex items-center justify-between px-3.5 py-3 sm:py-2.5 transition-colors duration-200 cursor-pointer select-none ${
          isOpen
            ? "border-black shadow-xs"
            : "border-[#E5E5E5] hover:border-black/40 focus:border-black"
        }`}
      >
        <span
          className={`text-xs sm:text-sm font-sans tracking-wide truncate ${
            selectedOption ? "text-black font-normal" : "text-[#888888] font-light"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        {/* Minimal luxury chevron */}
        <span
          className={`ml-2 shrink-0 text-[#555] transition-transform duration-300 ${
            isOpen ? "rotate-180 text-black" : ""
          }`}
        >
          <svg
            className="w-3.5 h-3.5 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Custom Floating Menu */}
      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white border border-black shadow-[0_16px_36px_-6px_rgba(0,0,0,0.18)] max-h-64 sm:max-h-72 overflow-y-auto rounded-none py-1.5 animate-in fade-in slide-in-from-top-1 duration-150"
          style={{ scrollbarWidth: "thin" }}
        >
          {normalizedOptions.map((opt, idx) => {
            const isSelected = opt.value === value;
            const isFocused = idx === focusedIndex;

            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt.value);
                  closeDropdown();
                }}
                onMouseEnter={() => setFocusedIndex(idx)}
                className={`px-4 py-3 sm:py-2.5 text-xs sm:text-[13px] font-sans flex items-center justify-between cursor-pointer transition-colors select-none ${
                  isSelected
                    ? "bg-[#111] text-white font-medium"
                    : isFocused
                    ? "bg-[#FAF8F5] text-black"
                    : "text-[#333] hover:bg-[#FAF8F5] hover:text-black"
                }`}
              >
                <span className="tracking-wide">{opt.label}</span>
                {isSelected && (
                  <span className="text-[11px] font-mono tracking-widest uppercase opacity-85 ml-2">
                    ✓
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

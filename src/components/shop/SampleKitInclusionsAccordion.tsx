"use client";

import { useState } from "react";

interface SampleKitInclusionsAccordionProps {
  items: string[];
  title?: string;
  defaultOpen?: boolean;
}

export function SampleKitInclusionsAccordion({
  items,
  title = "What's Inside the Box",
  defaultOpen = false,
}: SampleKitInclusionsAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!items || items.length === 0) return null;

  return (
    <div className="pt-6 border-t border-[#E5E5E5]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-left py-2 text-black cursor-pointer group select-none transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg sm:text-xl font-serif text-black group-hover:text-black/70 transition-colors">
          {title}
        </h3>

        {/* Circular + to × toggle matching site style */}
        <span
          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 select-none ${
            isOpen
              ? "rotate-45 bg-black text-white border-black"
              : "rotate-0 bg-transparent text-black border-[#D5D5D5] group-hover:border-black"
          }`}
          aria-hidden="true"
        >
          <svg className="w-3 h-3 stroke-current" viewBox="0 0 14 14" fill="none">
            <path d="M7 1.75V12.25M1.75 7H12.25" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[900px] opacity-100 mt-4 pt-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#444444] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

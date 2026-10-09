"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const TOP_FAQS: FAQItem[] = [
  {
    id: "hfaq-1",
    category: "Letterpress Basics",
    question: "What are letterpress wedding invitations?",
    answer:
      "Letterpress wedding invitations are printed using a traditional process that creates a tactile impression in the paper. The result is an invitation that can be both seen and felt — making it a popular choice for couples who want stationery that feels personal, thoughtful, and memorable.",
  },
  {
    id: "hfaq-2",
    category: "Letterpress Basics",
    question: "Why choose letterpress over regular wedding invitations?",
    answer:
      "Letterpress offers a tactile quality that standard printing cannot replicate. The impression in the paper, combined with carefully selected materials and thoughtful design, creates an experience that feels more intentional and lasting than ordinary printed invitations.",
  },
  {
    id: "hfaq-3",
    category: "Letterpress Basics",
    question: "Is letterpress suitable for Indian weddings?",
    answer:
      "Yes. Letterpress works beautifully for Indian weddings, whether traditional, contemporary, or a blend of both. Multi-event invitation suites, cultural motifs, monograms, and detailed guest information can all be incorporated into the design.",
  },
  {
    id: "hfaq-4",
    category: "Paper & Finishes",
    question: "What paper is used for premium letterpress invitations?",
    answer:
      "Cotton paper is one of the most popular choices because it creates a beautiful letterpress impression. We also work with carefully selected handmade papers and other premium stocks depending on the design and project requirements.",
  },
  {
    id: "hfaq-5",
    category: "Pricing & Timeline",
    question: "How much do letterpress wedding invitations cost?",
    answer:
      "Projects at Famous Letterpress typically start from around ₹40 per card, with a minimum project value of ₹25,000. The final investment depends on quantity, paper selection, inserts, printing techniques, packaging, and finishing requirements.",
  },
  {
    id: "hfaq-6",
    category: "Samples & Delivery",
    question: "Can we see samples before placing a full order?",
    answer:
      "Yes. Sample packs are available for purchase and can help couples understand the paper, printing techniques, and overall quality before committing to a full project.",
  },
];

export function HomeFAQSection() {
  const [openId, setOpenId] = useState<string | null>("hfaq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-white border-b border-[#E5E5E5]"
      aria-label="Frequently Asked Questions"
    >
      <div className="w">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <p className="k mb-3">Common Questions</p>
          <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1] font-serif text-black tracking-tight">
            Frequently asked <i>questions.</i>
          </h2>
        </div>

        {/* Full-width Accordion */}
        <div className="w-full border-t border-[#E5E5E5]">
          {TOP_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-[#E5E5E5] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left gap-6 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-sans text-base sm:text-lg md:text-xl font-medium text-[#111111] tracking-[-0.01em] group-hover:text-black transition-colors pr-2">
                    {faq.question}
                  </h3>

                  {/* Geometrically centered + to × indicator */}
                  <span
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 select-none ${
                      isOpen
                        ? "rotate-45 bg-black text-white border-black shadow-xs"
                        : "rotate-0 bg-transparent text-black border-[#D5D5D5] group-hover:border-black"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3.5 h-3.5 stroke-current"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M7 1.75V12.25M1.75 7H12.25"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pr-4 sm:pr-12">
                    <p className="text-sm sm:text-[15px] text-[#444444] font-light leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action: View all FAQs */}
        <div className="pt-8 sm:pt-10 flex items-center justify-start">
          <Link
            href="/faq"
            className="ln"
          >
            VIEW ALL FAQS
          </Link>
        </div>
      </div>
    </section>
  );
}

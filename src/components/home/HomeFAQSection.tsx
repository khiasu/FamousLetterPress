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
    category: "Ordering & Timeline",
    question: "How far in advance should we order our wedding invitations?",
    answer:
      "We recommend starting your consultation 3 to 5 months before your wedding date. This allows ample time for proof iterations, paper sourcing, die making, letterpress production, and mailing invitations to your guests 6–8 weeks before your celebration.",
  },
  {
    id: "hfaq-2",
    category: "Craft & Printing",
    question: "What makes letterpress different from digital flat printing?",
    answer:
      "Digital printing sprays toner or pigment onto flat paper. Letterpress is an artisanal relief process where custom metal or photopolymer plates press hand-mixed inks deeply into thick, tree-free cotton rag. You get tangible sculptural bite, deep shadow, and permanent physical presence that pixels and toner cannot duplicate.",
  },
  {
    id: "hfaq-3",
    category: "Minimum Order Quantity",
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our standard minimum order is 50 invitation suites or 100 business cards. Because letterpress involves custom metal plates and extensive mechanical press calibration on our vintage Heidelberg platens, fixed setup costs apply regardless of quantity.",
  },
  {
    id: "hfaq-4",
    category: "Custom Designs",
    question: "Can you letterpress a design created by our own graphic designer or calligrapher?",
    answer:
      "Absolutely. A substantial portion of our commissions are trade collaborations with independent graphic designers, illustrators, and calligraphy artists. We review your print-ready vector artwork (.AI or .PDF) and provide pre-press guidelines for line weights, deep deboss, and foil registration.",
  },
  {
    id: "hfaq-5",
    category: "Samples",
    question: "Can we hold and feel the paper, foils, and embossing before placing an order?",
    answer:
      "Yes. Screen pixels cannot communicate the weight of 600–900gsm cotton or the tactile bite of our presses. We offer curated Wedding Sample Boxes and Business Card Sample Kits dispatched directly from our Nagaland studio, the cost of which is 100% credited toward your commissioned order.",
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="k mb-3">Common Questions</p>
            <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1] font-serif text-black tracking-tight">
              Frequently asked <i>questions.</i>
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-black hover:opacity-60 transition-opacity border-b border-black pb-0.5"
            >
              <span>View all FAQs</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Clean Accordion */}
        <div className="max-w-4xl border-t border-[#E5E5E5]">
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

                  <span
                    className={`w-8 h-8 rounded-full border border-[#D5D5D5] flex items-center justify-center text-base font-light text-black transition-all duration-300 shrink-0 select-none group-hover:border-black ${
                      isOpen ? "rotate-45 bg-black text-white border-black" : "rotate-0 bg-transparent"
                    }`}
                    aria-hidden="true"
                  >
                    +
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

        {/* Bottom Contact / Link note */}
        <div className="mt-12 pt-6 border-t border-[#EAEAEA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#666]">
          <p className="font-light">
            Have a custom timeline or bespoke commission inquiry?
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black hover:opacity-60 transition-opacity border-b border-black pb-0.5"
            >
              <span>Contact our studio</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

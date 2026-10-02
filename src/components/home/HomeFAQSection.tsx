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
      "Yes. Screen pixels cannot communicate the weight of 600–900gsm cotton or the tactile bite of our presses. We offer curated Wedding Sample Boxes and Business Card Sample Kits dispatched directly from our Nagaland atelier, the cost of which is 100% credited toward your commissioned order.",
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
      className="py-24 md:py-32 bg-[#faf9f6] border-b border-[#E5E5E5]"
      aria-label="Frequently Asked Questions"
    >
      <div className="w">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <p className="k mb-2">Common Inquiries &middot; (06)</p>
            <h2 className="d text-[clamp(36px,9vw,76px)] leading-[0.95] mt-1 font-serif">
              Frequently asked <i>questions.</i>
            </h2>
          </div>

          <div className="max-w-xs md:text-right">
            <p className="text-xs text-[#555] font-light leading-relaxed mb-4">
              Everything you need to know about timelines, minimums, paper stocks, and printing in our Dimapur studio.
            </p>
            <Link href="/faq" className="ln text-[11px] font-mono uppercase tracking-[0.16em]">
              View all FAQs &rarr;
            </Link>
          </div>
        </div>

        {/* Clean Atelier Accordion */}
        <div className="max-w-4xl border-t border-[rgba(14,14,14,0.14)]">
          {TOP_FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-[rgba(14,14,14,0.12)] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full py-6 sm:py-7 flex items-baseline justify-between text-left gap-6 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-[11px] font-mono tracking-widest text-[var(--mute)] shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-black font-medium tracking-tight group-hover:opacity-70 transition-opacity">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`text-2xl sm:text-3xl font-light text-black transition-transform duration-300 shrink-0 select-none ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-96 pb-7 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-8 sm:pl-12 pr-4 sm:pr-12">
                    <p className="text-sm sm:text-base text-[#3b372e] font-light leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact / Link note */}
        <div className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#666]">
          <p className="font-light">
            Have a custom timeline or bespoke commission inquiry?
          </p>
          <div className="flex items-center gap-6">
            <Link href="/faq" className="ln text-[11px] font-mono uppercase tracking-widest">
              Read comprehensive FAQ &rarr;
            </Link>
            <a
              href="https://wa.me/+918416099340"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-widest text-black hover:opacity-60 transition-opacity"
            >
              Ask on WhatsApp &nearr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

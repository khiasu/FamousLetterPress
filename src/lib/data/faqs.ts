export interface FAQSectionItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export const initialFaqs: FAQSectionItem[] = [
  {
    id: "faq-1",
    category: "General & The Studio",
    question: "Where is Famous Letterpress located?",
    answer: "Our printing studio and pressroom are located in Nagaland, India. We dispatch bespoke paper goods and sample kits to couples, designers, and companies all across India and internationally.",
    order: 1,
  },
  {
    id: "faq-2",
    category: "General & The Studio",
    question: "What makes letterpress different from digital printing?",
    answer: "Digital printing sprays toner or ink onto the surface of thin commercial paper. Letterpress is a mechanical, sculptural relief process where raised metal or photopolymer plates press hand-mixed ink deeply into heavyweight cotton paper, creating a tangible indentation you can feel with your fingers.",
    order: 2,
  },
  {
    id: "faq-3",
    category: "General & The Studio",
    question: "Can I visit your pressroom in person?",
    answer: "Studio visits are available by appointment only. Because our pressroom operates with active cast-iron machinery, we schedule dedicated walkthroughs for couples and collaborators in advance.",
    order: 3,
  },
  {
    id: "faq-4",
    category: "Wedding Stationery",
    question: "When should we place our wedding stationery order?",
    answer: "We advise reaching out 3 to 5 months before your wedding date. This allows ample time for collaborative design, material sourcing, proof sign-offs, letterpress production, and mailing invitations to your guests 6–8 weeks before the event.",
    order: 4,
  },
  {
    id: "faq-5",
    category: "Wedding Stationery",
    question: "Can you print designs created by our own designer or calligraphy artist?",
    answer: "Yes. Many of our commissions come from independent graphic designers and calligraphy artists. We provide pre-press vector guidelines for line weights, font curves, and foil registration.",
    order: 5,
  },
  {
    id: "faq-6",
    category: "Wedding Stationery",
    question: "What is your minimum order quantity for wedding invitations?",
    answer: "Our standard minimum order is 50 invitation suites. Because letterpress involves custom photopolymer plate making and lengthy mechanical press calibration, smaller quantities carry a similar fixed setup cost.",
    order: 6,
  },
  {
    id: "faq-7",
    category: "Business Cards",
    question: "What paper thickness do you recommend for business cards?",
    answer: "Our benchmark standard is 600gsm pure cotton board (approximately twice the thickness of standard commercial cards). We also provide 900gsm ultra-heavyweight board and duplexed colored stocks.",
    order: 7,
  },
  {
    id: "faq-8",
    category: "Business Cards",
    question: "Can letterpress print on both sides of a card?",
    answer: "Yes, by duplexing two separate printed sheets back-to-back. This guarantees crisp, deep relief impressions on both faces without any reverse-side impression distortion.",
    order: 8,
  },
  {
    id: "faq-9",
    category: "Business Cards",
    question: "What is the turnaround time for business cards?",
    answer: "Standard production is typically 2 to 3 weeks following final digital artwork sign-off.",
    order: 9,
  },
  {
    id: "faq-10",
    category: "Sample Kits & Payments",
    question: "How can I purchase a sample kit?",
    answer: "You can purchase our Wedding Sample Kit (₹1,500) or Business Card Sample Kit (₹1,000) directly on our website. Payments are processed securely via Razorpay supporting UPI, credit cards, debit cards, and net banking.",
    order: 10,
  },
  {
    id: "faq-11",
    category: "Sample Kits & Payments",
    question: "How long does sample kit delivery take?",
    answer: "Sample kits are dispatched within 24–48 hours via express courier with real-time tracking across India. Delivery typically takes 3–5 business days depending on your city.",
    order: 11,
  },
  {
    id: "faq-12",
    category: "Shipping & Delivery",
    question: "Do you ship across India and internationally?",
    answer: "Yes, all bespoke orders and sample kits are packed securely in reinforced presentation cartons and shipped via trusted express courier partners across all Indian states and Union Territories.",
    order: 12,
  },
];

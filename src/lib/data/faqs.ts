export interface FAQSectionItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export const initialFaqs: FAQSectionItem[] = [
  // ── Letterpress Basics ──
  {
    id: "faq-1",
    category: "Letterpress Basics",
    question: "What are letterpress wedding invitations?",
    answer: "Letterpress wedding invitations are printed using a traditional process that creates a tactile impression in the paper. The result is an invitation that can be both seen and felt — making it a popular choice for couples who want stationery that feels personal, thoughtful, and memorable.",
    order: 1,
  },
  {
    id: "faq-2",
    category: "Letterpress Basics",
    question: "Why choose letterpress over regular wedding invitations?",
    answer: "Letterpress offers a tactile quality that standard printing cannot replicate. The impression in the paper, combined with carefully selected materials and thoughtful design, creates an experience that feels more intentional and lasting than ordinary printed invitations.",
    order: 2,
  },
  {
    id: "faq-3",
    category: "Letterpress Basics",
    question: "Is letterpress suitable for Indian weddings?",
    answer: "Yes. Letterpress works beautifully for Indian weddings, whether traditional, contemporary, or a blend of both. Multi-event invitation suites, cultural motifs, monograms, and detailed guest information can all be incorporated into the design.",
    order: 3,
  },

  // ── Studio & Suites ──
  {
    id: "faq-4",
    category: "Studio & Suites",
    question: "What makes Famous Letterpress different?",
    answer: "Famous Letterpress is run by designers who became printers. Rather than simply producing invitations, we work closely with clients to understand their story, ideas, and priorities. Our approach combines design thinking, traditional printing techniques, and hands-on craftsmanship.",
    order: 4,
  },
  {
    id: "faq-5",
    category: "Studio & Suites",
    question: "Where is Famous Letterpress based?",
    answer: "Famous Letterpress is based in Dimapur, Nagaland, India. We work with couples, wedding planners, and designers across India and internationally.",
    order: 5,
  },
  {
    id: "faq-6",
    category: "Studio & Suites",
    question: "Can you create a complete wedding invitation suite?",
    answer: "Yes. We specialise in wedding stationery suites that go beyond a single card. A suite can include event cards, RSVP cards, envelopes, monograms, packaging, welcome notes, menus, thank-you cards, and other supporting pieces.",
    order: 6,
  },
  {
    id: "faq-7",
    category: "Studio & Suites",
    question: "What items can be included in a suite?",
    answer: "A suite may include save-the-date cards, invitation cards, RSVP cards, event cards, accommodation information, maps, travel details, menus, welcome notes, envelopes, seals, monograms, and thank-you cards. Each suite is customised to suit the wedding.",
    order: 7,
  },
  {
    id: "faq-8",
    category: "Studio & Suites",
    question: "What design style works best?",
    answer: "Letterpress works well with both traditional and contemporary styles. The best results come from a design that reflects the couple's story and personality, whether richly detailed or minimalist.",
    order: 8,
  },
  {
    id: "faq-9",
    category: "Studio & Suites",
    question: "Can you include a custom couple monogram?",
    answer: "Yes. Custom monograms can be created and applied across invitation cards, envelopes, event inserts, seals, packaging, and other stationery pieces.",
    order: 9,
  },
  {
    id: "faq-10",
    category: "Studio & Suites",
    question: "Can Indian wedding rituals and multiple events be included?",
    answer: "Yes. We regularly create invitation suites that include separate cards for mehendi, haldi, sangeet, wedding ceremonies, receptions, cocktail events, and other celebrations.",
    order: 10,
  },
  {
    id: "faq-11",
    category: "Studio & Suites",
    question: "Do you work with wedding planners?",
    answer: "Yes. We regularly collaborate with wedding planners, designers, and event professionals on custom wedding stationery projects.",
    order: 11,
  },
  {
    id: "faq-12",
    category: "Studio & Suites",
    question: "Do you design the invitations or only print them?",
    answer: "Both. Clients may provide production-ready artwork, or our design team can help develop a custom suite from concept through final production.",
    order: 12,
  },

  // ── Paper & Finishes ──
  {
    id: "faq-13",
    category: "Paper & Finishes",
    question: "What paper is used for premium letterpress invitations?",
    answer: "Cotton paper is one of the most popular choices because it creates a beautiful letterpress impression. We also work with carefully selected handmade papers and other premium stocks depending on the design and project requirements.",
    order: 13,
  },
  {
    id: "faq-14",
    category: "Paper & Finishes",
    question: "What is blind debossing?",
    answer: "Blind debossing is the process of creating an impression in paper without using ink or foil. The design is visible through texture, light, and shadow — creating a subtle and elegant effect.",
    order: 14,
  },
  {
    id: "faq-15",
    category: "Paper & Finishes",
    question: "What is the difference between letterpress and foil stamping?",
    answer: "Letterpress uses ink and pressure to create a tactile printed impression. Foil stamping uses heat and pressure to apply metallic or pigmented foil to the paper surface. The two techniques are often combined within the same project.",
    order: 15,
  },
  {
    id: "faq-16",
    category: "Paper & Finishes",
    question: "Can letterpress and foil be used together?",
    answer: "Yes. Many wedding stationery suites combine letterpress printing and foil stamping. Letterpress provides texture and depth, while foil adds visual emphasis and contrast.",
    order: 16,
  },
  {
    id: "faq-17",
    category: "Paper & Finishes",
    question: "Can edge painting be added?",
    answer: "At present, Famous Letterpress does not offer edge painting. We focus on letterpress printing, foil stamping, blind debossing, premium papers, and custom packaging.",
    order: 17,
  },

  // ── Pricing & Timeline ──
  {
    id: "faq-18",
    category: "Pricing & Timeline",
    question: "How much do letterpress wedding invitations cost?",
    answer: "Projects at Famous Letterpress typically start from around ₹40 per card, with a minimum project value of ₹25,000. The final investment depends on quantity, paper selection, inserts, printing techniques, packaging, and finishing requirements.",
    order: 18,
  },
  {
    id: "faq-19",
    category: "Pricing & Timeline",
    question: "Why are letterpress invitations more expensive than regular cards?",
    answer: "Letterpress involves custom plate making, specialised equipment, premium paper stocks, skilled presswork, and a slower hands-on production process. These factors contribute to both the cost and the distinctive quality of the finished piece.",
    order: 19,
  },
  {
    id: "faq-20",
    category: "Pricing & Timeline",
    question: "What factors affect the final price?",
    answer: "The main factors include quantity, card size, paper choice, number of inserts, colours, foil stamping, blind debossing, packaging, custom envelopes, and shipping requirements.",
    order: 20,
  },
  {
    id: "faq-21",
    category: "Pricing & Timeline",
    question: "How long does an order take?",
    answer: "Production timelines vary depending on the complexity of the project and current production schedule. Design development, proofing, printing, finishing, and shipping all contribute to the overall timeline.",
    order: 21,
  },
  {
    id: "faq-22",
    category: "Pricing & Timeline",
    question: "How early should couples start the invitation process?",
    answer: "The earlier the better. Beginning several months before the wedding allows enough time for design discussions, revisions, production, shipping, and guest distribution.",
    order: 22,
  },

  // ── Samples & Delivery ──
  {
    id: "faq-23",
    category: "Samples & Delivery",
    question: "Can we see samples before placing a full order?",
    answer: "Yes. Sample packs are available for purchase and can help couples understand the paper, printing techniques, and overall quality before committing to a full project.",
    order: 23,
  },
  {
    id: "faq-24",
    category: "Samples & Delivery",
    question: "Why is seeing a physical sample important?",
    answer: "Letterpress is a tactile printing method. While photographs can show the design, they cannot fully communicate the impression, texture, paper quality, and overall feel of the finished piece.",
    order: 24,
  },
  {
    id: "faq-25",
    category: "Samples & Delivery",
    question: "What details are needed before requesting a quotation?",
    answer: "Useful information includes wedding dates, event list, estimated quantity, preferred style, paper preferences, inspiration references, and any special requirements for printing or packaging.",
    order: 25,
  },
  {
    id: "faq-26",
    category: "Samples & Delivery",
    question: "Does Famous Letterpress ship across India?",
    answer: "Yes. We ship wedding stationery throughout India using reliable courier services selected according to the project's requirements and destination.",
    order: 26,
  },
  {
    id: "faq-27",
    category: "Samples & Delivery",
    question: "Do you work with clients outside India?",
    answer: "Yes. We work with many clients remotely and ship internationally. Consultations, approvals, and project discussions can all be handled online.",
    order: 27,
  },
  {
    id: "faq-28",
    category: "Samples & Delivery",
    question: "Can we visit the studio?",
    answer: "Yes. Studio visits are welcome by appointment. Meeting in person often helps us better understand the project and discuss ideas, materials, and design possibilities.",
    order: 28,
  },
];

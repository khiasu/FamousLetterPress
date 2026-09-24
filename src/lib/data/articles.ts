export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: "Craft & Printing" | "Wedding Stationery" | "Paper & Materials";
  publishedAt: string;
  readTime: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  sections: {
    heading?: string;
    paragraphs: string[];
    callout?: {
      title: string;
      text: string;
    };
  }[];
  relatedServiceSlug?: string;
  relatedServiceLabel?: string;
}

export const journalArticles: JournalArticle[] = [
  {
    id: "art-1",
    slug: "what-is-letterpress-printing",
    title: "What is Letterpress Printing? The Art of the Mechanical Impression",
    subtitle: "A deep dive into cast-iron platen presses, relief plate chemistry, and why digital printing cannot match physical bite.",
    excerpt:
      "Letterpress is the oldest form of printing, invented in the 15th century. Today, in our Nagaland atelier, it is practiced not for high-speed utility, but as an artisanal craft that debosses ink deeply into 100% cotton paper.",
    category: "Craft & Printing",
    publishedAt: "September 15, 2026",
    readTime: "6 min read",
    author: "Famous Letterpress Studio",
    metaTitle: "What is Letterpress Printing? Mechanics & Craft Guide | Famous Letterpress",
    metaDescription:
      "Understand what letterpress printing is, how vintage platen presses work, and why deep relief impression on cotton paper creates irreplaceable physical luxury.",
    relatedServiceSlug: "wedding-stationery",
    relatedServiceLabel: "Explore Letterpress Wedding Stationery",
    sections: [
      {
        heading: "The Mechanics of Relief Printing",
        paragraphs: [
          "Letterpress is fundamentally a relief process. Unlike modern digital inkjet or offset lithography, where microscopic droplets or water-oil emulsions transfer image data to the flat surface of paper, letterpress relies on a physical, three-dimensional plate.",
          "Custom artwork—whether modern typographic layouts or vector illustrations—is exposed onto high-resolution photopolymer or etched into magnesium. The image areas remain raised, while non-printing areas are washed or routed away.",
          "When the press cycles, rubberized inking rollers pass across the raised relief, coating only the elevated surfaces with carefully measured viscous ink. The paper is then placed against the packing tympan, and cast-iron jaws close under thousands of pounds of mechanical pressure.",
        ],
      },
      {
        heading: "The Historical Shift: From 'Kiss Impression' to 'Deep Bite'",
        paragraphs: [
          "Historically, from Gutenberg through mid-twentieth century commercial printers, the hallmark of master pressmanship was the 'kiss impression'—adjusting the press so delicately that the ink was transferred with virtually zero visible denting on the reverse of thin wood-pulp paper.",
          "With the advent of offset and digital printing in the late 20th century, everyday printing was commoditized. Letterpress was reclaimed by artists, designers, and boutique craft studios who celebrated what digital machines could never do: create profound tactile depth.",
          "Today, on archival 600gsm cotton rag boards, we intentionally calibrate our vintage Heidelberg and platen presses to achieve a deep, sculptural bite. When you run your thumb across the finished sheet, you don't merely read the words—you feel their physical architecture.",
        ],
        callout: {
          title: "The Cotton Paper Requirement",
          text: "Standard commercial wood-pulp paper tears or punctures under deep pressure. True deep letterpress requires 100% pure cotton paper (300gsm to 900gsm), whose long unpressed cellulose fibers compress pillowy without breaking.",
        },
      },
      {
        heading: "Why Handcrafted Letterpress Commands Distinction",
        paragraphs: [
          "Every sheet of letterpress is individual. Temperature, ink tackiness, humidity, and the subtle texture of cotton sheets mean no two impressions are mechanically identical. Each card bears the human touch of the printer who mixed the mineral ink by eye and hand-fed the stock.",
          "In high-stakes personal announcements—such as wedding invitation suites or executive business cards—this physical presence communicates timeless dedication that fleeting digital communications cannot replicate.",
        ],
      },
    ],
  },

  {
    slug: "letterpress-vs-digital-printing",
    id: "art-2",
    title: "Letterpress vs. Digital Printing: An Unbiased Comparison",
    subtitle: "Understanding differences in texture, paper options, color vibrancy, plate setup costs, and turnaround times.",
    excerpt:
      "When planning your wedding stationery or brand cards, deciding between letterpress and digital printing comes down to tactile goals, paper thickness, quantity, and budget. Here is how they compare.",
    category: "Craft & Printing",
    publishedAt: "September 10, 2026",
    readTime: "7 min read",
    author: "Famous Letterpress Studio",
    metaTitle: "Letterpress vs Digital Printing: Comparison & Guide | Famous Letterpress",
    metaDescription:
      "Compare letterpress and digital printing on tactile relief, cotton paper compatibility, setup costs, turnaround times, and aesthetic value.",
    relatedServiceSlug: "business-cards",
    relatedServiceLabel: "Compare Our Business Card Finishes",
    sections: [
      {
        heading: "1. Tactile Relief & Impression Depth",
        paragraphs: [
          "The most dramatic distinction between letterpress and digital printing is physical texture. Digital presses apply heat and dry toner or liquid electro-inks onto the paper surface. The finished print is flat.",
          "Letterpress uses physical force to push the image into the paper. This creates a crisp indentation (relief) that casts micro-shadows under natural lighting and delivers immediate sensory feedback upon touch.",
        ],
      },
      {
        heading: "2. Paper Stock Compatibility",
        paragraphs: [
          "Digital printing machines are limited by paper feed rollers, usually capping paper thickness at 350gsm to 400gsm. Digital toner also requires coated or smooth finishes so toner bonds evenly without flaking.",
          "Letterpress thrives on heavy, textured, uncalendered stocks: 100% cotton rag, handmade deckled edge sheets, and ultra-thick 600gsm to 900gsm museum boards that would immediately jam or damage a digital press.",
        ],
      },
      {
        heading: "3. Inks and Color Formulations",
        paragraphs: [
          "Digital presses produce colors through CMYK dot rosettes. If you view digital color under a loupe, solid areas are composed of tiny dots of cyan, magenta, yellow, and black.",
          "Letterpress utilizes true spot colors: we hand-mix dense oil- or rubber-based inks to exact Pantone formulas. This yields solid, velvety color fields, deep opaque blacks, and subtle earthy neutrals without halftone dot artifacts.",
        ],
        callout: {
          title: "The Role of Duplexing",
          text: "Can you print deep letterpress on both sides? Yes. We achieve this by duplexing two separately printed 300gsm or 350gsm sheets back-to-back, yielding an unbendable 600gsm+ finished piece with pristine relief on both faces.",
        },
      },
      {
        heading: "Summary: When to Choose Each Method",
        paragraphs: [
          "Choose Digital Printing if: You require fast 24-hour turnaround, have multi-color photographic imagery, or need very low quantities at entry-level price points.",
          "Choose Letterpress Printing if: You are crafting heirloom invitations, luxury executive cards, or brand suites where tactile weight, artisanal character, and physical prestige are paramount.",
        ],
      },
    ],
  },

  {
    slug: "how-to-choose-wedding-invitation-paper",
    id: "art-3",
    title: "How to Choose Wedding Invitation Paper: Cotton, Deckle, and Weights",
    subtitle: "A practical guide to paper gsm, cotton fibers, textured European boards, and matching envelopes.",
    excerpt:
      "Your wedding invitation paper is the canvas upon which your entire celebration is introduced. Learn the differences between 300gsm, 600gsm, and deckled edges before selecting your suite.",
    category: "Paper & Materials",
    publishedAt: "September 02, 2026",
    readTime: "8 min read",
    author: "Famous Letterpress Studio",
    metaTitle: "How to Choose Wedding Invitation Paper | Weight, Stock & Deckle Guide",
    metaDescription:
      "Expert guide on selecting wedding invitation paper. Understand 300gsm vs 600gsm cotton, handmade deckled edges, Colorplan, and envelope pairings.",
    relatedServiceSlug: "wedding-stationery",
    relatedServiceLabel: "View Wedding Stationery Services",
    sections: [
      {
        heading: "Demystifying Paper Weight: What Does GSM Mean?",
        paragraphs: [
          "Paper thickness in fine printing is measured in GSM (Grams per Square Meter). In standard office environments, copy paper is approximately 80gsm, while commercial postcards range from 250gsm to 300gsm.",
          "In luxury letterpress, 300gsm is considered our single-weight sheet—ideal for folded programs, RSVP return cards, and envelope liners. For the main invitation card, our studio standard is 600gsm cotton board (or custom 900gsm), which feels like an architectural tablet that never bends in a guest's hands.",
        ],
      },
      {
        heading: "Pure Cotton vs. Wood Pulp Stock",
        paragraphs: [
          "Wood pulp papers are made from chemically broken down trees and contain natural lignins that cause paper to yellow, become brittle, and degrade over decades.",
          "Our cotton paper is crafted from 100% pure textile cotton fibers. It is completely tree-free, naturally archival, acid-free, and neutral-sized. Cotton absorbs atmospheric moisture without curling and offers a velvety, pillowy tactile hand.",
        ],
      },
      {
        heading: "The Romance of Handmade Deckled Edge Paper",
        paragraphs: [
          "Deckle edge paper is formed one sheet at a time by an artisan submerging a wooden mould into a vat of cotton slurry. As the water drains, the fibers naturally feather along the boundaries of the deckle frame.",
          "No scissors or blades touch the edges. This organic, feathered border creates a romantic, timeless aesthetic that pairs exceptionally well with botanical suites, wax seals, and hand-lettered calligraphy.",
        ],
        callout: {
          title: "Order a Paper Swatch First",
          text: "Never finalize your invitation design without touching real paper. Our Wedding Sample Kit includes swatches of 300gsm, 600gsm, Colorplan, and deckled cotton so you can make your decision with complete confidence.",
        },
      },
    ],
  },

  {
    slug: "anatomy-of-a-wedding-invitation-suite",
    id: "art-4",
    title: "The Anatomy of a Wedding Invitation Suite: What to Include",
    subtitle: "From Save the Dates and main cards to details inserts, RSVP cards, wax seals, and mailing etiquette.",
    excerpt:
      "Confused about which cards you actually need for your wedding? Here is a breakdown of essential cards, optional embellishments, and proper mailing timelines.",
    category: "Wedding Stationery",
    publishedAt: "August 28, 2026",
    readTime: "7 min read",
    author: "Famous Letterpress Studio",
    metaTitle: "Anatomy of a Wedding Invitation Suite: Complete Checklist & Etiquette",
    metaDescription:
      "Learn what pieces belong in a luxury wedding invitation suite. Checklist for Save the Dates, invitation cards, RSVP inserts, and day-of reception paper.",
    relatedServiceSlug: "wedding-stationery",
    relatedServiceLabel: "Start an Early Bride Consultation",
    sections: [
      {
        heading: "1. The Foundation: Essential Suite Pieces",
        paragraphs: [
          "The Main Invitation Card: The formal announcement bearing the host's names, couple's names, wedding date, time, and ceremony venue. Typically sized at A5 (148 x 210mm) or 5 x 7 inches pressed on 600gsm cotton.",
          "The Outer Mailing Envelope: The protector of your suite. We craft matching Euro-flap envelopes with pointed, elegant flaps, custom calligraphy addressing, and optional printed or tissue liners.",
          "The RSVP Card & Return Envelope: Allows guests to specify attendance, dietary preferences, and celebratory song requests. If collecting RSVPs digitally via wedding website, this can be formatted as an RSVP details card with a custom QR code.",
        ],
      },
      {
        heading: "2. The Supporting Detail Inserts",
        paragraphs: [
          "Details & Accommodation Card: Essential for destination weddings or multi-day celebrations. Includes flight/train logistics, hotel room block codes, shuttle timings, and dress codes (e.g. Traditional Nagaland Attire, Black Tie, Cocktail).",
          "Itinerary / Weekend Schedule: A concise overview for celebrations spanning welcome dinners, traditional blessings, the wedding ceremony, and the post-ceremony reception feast.",
        ],
      },
      {
        heading: "3. Artisanal Embellishments & Presentation",
        paragraphs: [
          "Vellum or Silk Ribbon Wrap: Holds the individual cards neatly in a unified bundle so the guest experiences an intentional reveal when opening the envelope.",
          "Hand-Poured Wax Seals: Custom engraved brass dies pressed into authentic flexible sealing wax, securing belly bands or envelope flaps with old-world charm.",
          "Foil Edge Gilding: Applying gleaming gold, rose gold, or champagne foil to the trimmed edges of the 600gsm cards for subtle luxury when viewed from the side.",
        ],
        callout: {
          title: "Timeline Recommendation",
          text: "Mail your wedding invitations 6 to 8 weeks before the wedding (or 10 to 12 weeks for destination celebrations). Reach out to our studio 4 to 5 months in advance to begin design and plate proofing.",
        },
      },
    ],
  },
];

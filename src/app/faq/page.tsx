import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Famous Letterpress",
  description:
    "Everything you need to know about our letterpress printing, wedding suites, cotton papers, turnaround times, sample kits, and delivery across India.",
};

const faqSections = [
  {
    category: "General & The Studio",
    items: [
      {
        q: "Where is Famous Letterpress located?",
        a: "Our printing studio and pressroom are located in Nagaland, India. We dispatch bespoke paper goods and sample kits to couples, designers, and companies all across India and internationally.",
      },
      {
        q: "What makes letterpress different from digital printing?",
        a: "Digital printing sprays toner or ink onto the surface of thin commercial paper. Letterpress is a mechanical, sculptural relief process where raised metal or photopolymer plates press hand-mixed ink deeply into heavyweight cotton paper, creating a tangible indentation you can feel with your fingers.",
      },
      {
        q: "Can I visit your pressroom in person?",
        a: "Studio visits are available by appointment only. Because our pressroom operates with active cast-iron machinery, we schedule dedicated walkthroughs for couples and collaborators in advance.",
      },
    ],
  },
  {
    category: "Wedding Stationery",
    items: [
      {
        q: "When should we place our wedding stationery order?",
        a: "We advise reaching out 3 to 5 months before your wedding date. This allows ample time for collaborative design, material sourcing, proof sign-offs, letterpress production, and mailing invitations to your guests 6–8 weeks before the event.",
      },
      {
        q: "Can you print designs created by our own designer or calligraphy artist?",
        a: "Yes. Many of our commissions come from independent graphic designers and calligraphy artists. We provide pre-press vector guidelines for line weights, font curves, and foil registration.",
      },
      {
        q: "What is your minimum order quantity for wedding invitations?",
        a: "Our standard minimum order is 50 invitation suites. Because letterpress involves custom photopolymer plate making and lengthy mechanical press calibration, smaller quantities carry a similar fixed setup cost.",
      },
    ],
  },
  {
    category: "Business Cards",
    items: [
      {
        q: "What paper thickness do you recommend for business cards?",
        a: "Our benchmark standard is 600gsm pure cotton board (approximately twice the thickness of standard commercial cards). We also provide 900gsm ultra-heavyweight board and duplexed colored stocks.",
      },
      {
        q: "Can letterpress print on both sides of a card?",
        a: "Yes, by duplexing two separate printed sheets back-to-back. This guarantees crisp, deep relief impressions on both faces without any reverse-side impression distortion.",
      },
      {
        q: "What is the turnaround time for business cards?",
        a: "Standard production is typically 2 to 3 weeks following final digital artwork sign-off.",
      },
    ],
  },
  {
    category: "Sample Kits & Payments",
    items: [
      {
        q: "How can I purchase a sample kit?",
        a: "You can purchase our Wedding Sample Kit (₹1,500) or Business Card Sample Kit (₹1,000) directly on our website. Payments are processed securely via Razorpay supporting UPI, credit cards, debit cards, and net banking.",
      },
      {
        q: "How fast do sample kits ship?",
        a: "Sample kits are dispatched within 24–48 hours via express courier with real-time tracking, typically arriving within 3–5 business days anywhere in India.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-warm-stone">
                <Link href="/" className="hover:text-terracotta">Home</Link>
                <span>/</span>
                <span className="text-terracotta">FAQ</span>
              </div>
              <span className="eyebrow text-terracotta">Help & Clarity</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">Frequently Asked Questions</h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                Factual answers to help you understand our processes, materials, order timelines, and delivery terms.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categorized FAQs */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-wide max-w-4xl">
          <div className="space-y-16">
            {faqSections.map((sec, secIdx) => (
              <div key={sec.category} className="space-y-6">
                <Reveal delay={secIdx * 0.1}>
                  <div className="border-b border-sand pb-3 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-forest font-semibold block mb-1">
                      Category 0{secIdx + 1}
                    </span>
                    <h2 className="heading-md text-charcoal">{sec.category}</h2>
                  </div>
                </Reveal>

                <div className="space-y-4">
                  {sec.items.map((item, idx) => (
                    <Reveal key={item.q} delay={idx * 0.05}>
                      <div className="card-warm p-6 bg-cream">
                        <h3 className="font-serif text-lg text-charcoal mb-2">{item.q}</h3>
                        <p className="body-sm text-warm-stone font-light leading-relaxed">{item.a}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 md:py-28 bg-cream border-t border-sand">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow text-terracotta">Direct Studio Support</span>
            <h2 className="heading-xl text-charcoal mt-2 mb-4">Still have a specific question?</h2>
            <p className="body-md text-warm-stone max-w-lg mx-auto mb-8 font-light">
              Reach out directly to our studio team on WhatsApp or send us an email. We are always glad to assist.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Contact Studio
              </Button>
              <Button href="/start-a-project" variant="outline" size="lg">
                Start a Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

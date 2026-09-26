import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

import { getCMSFAQs } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Famous Letterpress",
  description:
    "Everything you need to know about our letterpress printing, wedding suites, cotton papers, turnaround times, sample kits, and delivery across India.",
};

export default function FAQPage() {
  const faqs = getCMSFAQs();
  const categories = Array.from(new Set(faqs.map((f) => f.category)));
  const faqSections = categories.map((cat) => ({
    category: cat,
    items: faqs
      .filter((f) => f.category === cat)
      .map((f) => ({ q: f.question, a: f.answer })),
  }));
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

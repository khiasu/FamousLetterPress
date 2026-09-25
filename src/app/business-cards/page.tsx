import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { servicesData } from "@/lib/data/services";
import { sampleKitsData } from "@/lib/data/sample-kits";
import { portfolioData } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Luxury Letterpress Business Cards | Famous Letterpress",
  description:
    "Handcrafted letterpress business cards on 600gsm cotton board, hot foil stamping, and foil edge gilding. Printed in Nagaland, India.",
};

const cardFinishes = [
  {
    title: "600gsm & 900gsm Pure Cotton",
    desc: "Unbendable, ultra-heavyweight cotton board that makes an immediate, unforgettable physical impression.",
  },
  {
    title: "Precision Hot Foil Stamping",
    desc: "Mirror gold, satin silver, copper, rose gold, or high-contrast gloss black applied under calibrated heat and pressure.",
  },
  {
    title: "Metallic Edge Gilding & Painting",
    desc: "Hand-applied reflective foil gilding or custom Pantone color painted edges that elevate the profile of every stack.",
  },
  {
    title: "Double-Sided Duplexing",
    desc: "Two distinct stocks bonded back-to-back, allowing deep bite impressions on both sides with zero opposite-side show-through.",
  },
];

export default function BusinessCardsPage() {
  const service = servicesData["business-cards"];
  const sampleKit = sampleKitsData["business-card-sample-kit"];
  const cardPortfolio = portfolioData.filter((item) => item.category === "business-cards");

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
                <span className="text-terracotta">Business Cards</span>
              </div>
              <span className="eyebrow text-terracotta">Executive Identity</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">{service.title}</h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                {service.tagline}. {service.shortDesc}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/start-a-project?service=business-cards" variant="primary" size="lg">
                  Request Card Quote
                </Button>
                <Button href="/business-cards/business-card-sample-kit" variant="outline" size="lg">
                  Order Sample Kit (₹{sampleKit.price})
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Tactile Standard */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow text-warm-stone">Physical Authority</span>
                <h2 className="heading-lg text-charcoal mt-2 mb-6">
                  In a digital world, tangible quality is your competitive edge.
                </h2>
                <div className="space-y-4 text-warm-stone body-md">
                  {service.fullDescription.map((p, idx) => (
                    <p key={idx} className="leading-relaxed font-light">{p}</p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-sand">
                  <div className="text-xs uppercase tracking-widest font-mono text-terracotta font-semibold mb-1">
                    Standard Production Time
                  </div>
                  <div className="font-serif text-xl text-charcoal">{service.leadTime}</div>
                  <div className="text-xs text-warm-stone mt-1">Minimum order quantity: 100 cards per name/design.</div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cardFinishes.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.1}>
                  <div className="card-warm p-6 h-full">
                    <span className="text-xs font-mono uppercase tracking-wider text-forest font-semibold mb-2 block">
                      Feature 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg text-charcoal mb-2">{item.title}</h3>
                    <p className="text-xs text-warm-stone leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Card Portfolio */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <Reveal>
              <span className="eyebrow text-terracotta">Selected Commissions</span>
              <h2 className="heading-lg text-charcoal mt-2">Cards pressed for distinguished studios</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/work" className="text-sm uppercase tracking-wider font-medium text-terracotta hover:underline mt-4 sm:mt-0">
                View all studio work &rarr;
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardPortfolio.map((piece, idx) => (
              <Reveal key={piece.id} delay={idx * 0.1}>
                <div className="card-warm overflow-hidden group">
                  <div className="aspect-[16/9] bg-sand/60 relative overflow-hidden border-b border-sand">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={piece.featuredImage}
                      alt={piece.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-ivory/95 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] uppercase font-mono tracking-widest text-charcoal shadow-sm border border-sand/60">
                      {piece.paperStock?.split("+")[0] || "600gsm Cotton"}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-charcoal mb-2">{piece.title}</h3>
                    <p className="text-xs text-warm-stone leading-relaxed mb-4">{piece.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {piece.techniques.map((t) => (
                        <span key={t} className="text-[10px] bg-sand/70 text-charcoal px-2 py-0.5 rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Production Workflow */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="eyebrow text-warm-stone">Step by Step</span>
              <h2 className="heading-xl text-charcoal mt-2">How we print your business cards</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.processSteps?.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.1}>
                <div className="card-warm p-6 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-forest font-semibold block mb-2">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg text-charcoal mb-2">{step.title}</h3>
                    <p className="text-xs text-warm-stone leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center max-w-md mx-auto mb-16">
              <span className="eyebrow text-terracotta">Card FAQs</span>
              <h2 className="heading-lg text-charcoal mt-2">Frequently Asked Questions</h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {service.faqs?.map((faq, idx) => (
              <Reveal key={faq.question} delay={idx * 0.1}>
                <div className="card-warm p-6">
                  <h3 className="font-serif text-lg text-charcoal mb-2">{faq.question}</h3>
                  <p className="text-sm text-warm-stone leading-relaxed">{faq.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow text-terracotta">Begin Your Identity</span>
            <h2 className="heading-xl text-charcoal mt-2 mb-4">Hold the cards before you commit</h2>
            <p className="body-md text-warm-stone max-w-lg mx-auto mb-8 font-light">
              Order our Business Card Sample Kit to evaluate 600gsm cotton board, edge gilding, and print finishes in person.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/business-cards/business-card-sample-kit" variant="primary" size="lg">
                Order Card Sample Kit (₹{sampleKit.price})
              </Button>
              <Button href="/start-a-project?service=business-cards" variant="outline" size="lg">
                Submit Artwork for Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

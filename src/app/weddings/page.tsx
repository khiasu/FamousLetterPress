import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { servicesData } from "@/lib/data/services";
import { sampleKitsData } from "@/lib/data/sample-kits";
import { portfolioData } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Letterpress Wedding Stationery & Invitations | Famous Letterpress",
  description:
    "Handcrafted letterpress wedding invitations, save-the-dates, and bespoke day-of paper pressed on 100% cotton paper in Nagaland, India. Explore suites, sample kits, and our Early Bride consultation.",
};

const weddingSuites = [
  {
    title: "The Main Invitation Suite",
    desc: "The centerpiece of your celebration. Pressed deep into 600gsm cotton board, accompanied by tailored RSVP cards, event detail inserts, and euro-flap envelopes.",
    tag: "Essential",
  },
  {
    title: "Save the Date Announcements",
    desc: "Your guests' first impression. Letterpress or metallic hot foil stamping on heavyweight cotton card, sent 6–9 months before the celebration.",
    tag: "Pre-Wedding",
  },
  {
    title: "Day-Of Paper & Signage",
    desc: "Menus, individual place cards, table numbers, order of service programs, and cocktail napkins sharing a seamless typographic identity.",
    tag: "Reception",
  },
  {
    title: "Finishing & Embellishments",
    desc: "Natural deckled feathered edges, custom engraved wax seals, metallic edge gilding, vellum wraps, and hand-dyed botanical silk ribbons.",
    tag: "Artisanal",
  },
];

const timelineSteps = [
  {
    time: "6 to 9 Months Before",
    title: "Order Sample Kit & Save the Dates",
    desc: "Feel the cotton paper in your hands with our Wedding Sample Kit. Finalize guest list count and dispatch Save the Dates.",
  },
  {
    time: "4 to 5 Months Before",
    title: "Consultation & Design",
    desc: "Submit our Early Bride consultation or meet with our studio team. We refine typographic proofs, select papers, and finalize foil tones.",
  },
  {
    time: "2 to 3 Months Before",
    title: "Presswork & Suite Delivery",
    desc: "We hand-mix inks and press your suite on vintage platen presses in Nagaland. Meticulously inspected, packaged, and shipped to your home.",
  },
  {
    time: "6 to 8 Weeks Before",
    title: "Mailing to Guests",
    desc: "Your invitations are in the mail, giving loved ones ample time to RSVP and anticipate your celebration.",
  },
];

export default function WeddingsHubPage() {
  const weddingService = servicesData["wedding-stationery"];
  const weddingKit = sampleKitsData["wedding-sample-kit"];
  const weddingPortfolio = portfolioData.filter((item) => item.category === "weddings");

  return (
    <div className="bg-cream">
      {/* Editorial Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow text-terracotta">For People Getting Married</span>
              <h1 className="display-lg text-charcoal mt-3 mb-6">
                Heirloom wedding stationery pressed with heart & heavy metal.
              </h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed">
                We believe wedding stationery is not merely paper with dates—it is the tangible opening chapter of your celebration.
                Handcrafted on vintage cast-iron presses in Nagaland on pure cotton stock.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Button href="/weddings/early-bride" variant="primary" size="lg">
                  Early Bride Consultation
                </Button>
                <Button href="/weddings/wedding-sample-kit" variant="outline" size="lg">
                  Order Sample Kit (₹{weddingKit.price})
                </Button>
                <Button href="/weddings/wedding-stationery" variant="ghost" size="lg">
                  Explore Full Service Details &rarr;
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 Dedicated Wedding Destinations */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow text-warm-stone">The Wedding Journey</span>
              <h2 className="heading-xl text-charcoal mt-2">Three ways to begin with us</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Sample Kit */}
            <Reveal delay={0.1} className="h-full">
              <div className="card-warm p-8 flex flex-col justify-between h-full group hover:border-terracotta/40 transition-colors">
                <div>
                  <div className="text-xs uppercase tracking-widest text-terracotta font-medium mb-3">Step One · Tangible Proof</div>
                  <h3 className="heading-md text-charcoal mb-3">The Wedding Sample Kit</h3>
                  <p className="body-sm text-warm-stone mb-6">
                    Feel the physical difference before deciding. Includes 600gsm cotton suites, metallic foil swatches, blind debossing, and deckled paper samples.
                  </p>
                  <div className="text-2xl font-serif text-charcoal mb-6">₹{weddingKit.price} <span className="text-xs text-warm-stone font-sans">incl. courier delivery</span></div>
                </div>
                <Button href="/weddings/wedding-sample-kit" variant="primary" size="md" className="w-full">
                  Order Wedding Sample Kit
                </Button>
              </div>
            </Reveal>

            {/* Card 2: Early Bride */}
            <Reveal delay={0.2} className="h-full">
              <div className="card-warm p-8 flex flex-col justify-between h-full group border-terracotta/30 bg-cream">
                <div>
                  <div className="text-xs uppercase tracking-widest text-forest font-medium mb-3">Custom Project · Direct Planning</div>
                  <h3 className="heading-md text-charcoal mb-3">Early Bride Consultation</h3>
                  <p className="body-sm text-warm-stone mb-6">
                    A dedicated questionnaire for engaged couples. Tell us your date, aesthetic dreams, guest count, and stationery requirements so we can prepare tailored recommendations.
                  </p>
                  <ul className="text-xs text-warm-stone space-y-2 mb-6">
                    <li className="flex items-center gap-2">&bull; Direct response via WhatsApp or email</li>
                    <li className="flex items-center gap-2">&bull; Paper & budget feasibility guidance</li>
                    <li className="flex items-center gap-2">&bull; Custom timeline calculation</li>
                  </ul>
                </div>
                <Button href="/weddings/early-bride" variant="primary" size="md" className="w-full">
                  Begin Early Bride Form
                </Button>
              </div>
            </Reveal>

            {/* Card 3: Wedding Stationery Service */}
            <Reveal delay={0.3} className="h-full">
              <div className="card-warm p-8 flex flex-col justify-between h-full group hover:border-terracotta/40 transition-colors">
                <div>
                  <div className="text-xs uppercase tracking-widest text-terracotta font-medium mb-3">Techniques & Materials</div>
                  <h3 className="heading-md text-charcoal mb-3">Full Stationery Collection</h3>
                  <p className="body-sm text-warm-stone mb-6">
                    Explore our complete capabilities: deep letterpress relief, matte foil stamping, deckle edges, envelope liners, and day-of reception paper.
                  </p>
                  <div className="text-xs text-warm-stone mb-6">
                    Full specs on 300–900gsm cotton stocks, ink mixing, plate prep, and bespoke design workflows.
                  </div>
                </div>
                <Button href="/weddings/wedding-stationery" variant="outline" size="md" className="w-full">
                  View Stationery Guide
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="eyebrow text-terracotta">Elements of a Suite</span>
                <h2 className="heading-lg text-charcoal mt-2 mb-4">What we craft for your celebration</h2>
                <p className="body-md text-warm-stone">
                  From the announcement that introduces your date to the individual place cards greeting your guests at dinner, every paper piece speaks the same intentional visual language.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {weddingSuites.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.1}>
                  <div className="card-warm p-6 h-full">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-terracotta/80 mb-2 block">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-xl text-charcoal mb-2">{item.title}</h3>
                    <p className="text-sm text-warm-stone leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Wedding Portfolio */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <Reveal>
              <span className="eyebrow text-warm-stone">Selected Portfolio</span>
              <h2 className="heading-lg text-charcoal mt-2">Real suites from our studio</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/work" className="text-sm uppercase tracking-wider font-medium text-terracotta hover:underline mt-4 sm:mt-0">
                View all studio work &rarr;
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPortfolio.slice(0, 3).map((piece, idx) => (
              <Reveal key={piece.id} delay={idx * 0.1}>
                <div className="card-warm overflow-hidden group">
                  <div className="aspect-[4/3] bg-sand/60 relative flex items-center justify-center p-6 text-center border-b border-sand">
                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-widest text-warm-stone font-mono">Portfolio Piece</div>
                      <div className="font-serif text-lg text-charcoal">{piece.title}</div>
                      <div className="text-xs text-charcoal/60">{piece.paperStock}</div>
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

      {/* Practical Wedding Timeline */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="eyebrow text-terracotta">Guidance & Planning</span>
              <h2 className="heading-lg text-charcoal mt-2">When should you contact us?</h2>
              <p className="body-sm text-warm-stone mt-3">
                Letterpress is an intentional, mechanical process requiring custom die engraving, hand-mixed inks, and individual sheet inspection.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            {timelineSteps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.1}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 bg-ivory rounded-sm border border-sand">
                  <div className="sm:w-48 shrink-0">
                    <span className="text-xs uppercase tracking-widest font-mono text-terracotta font-semibold">
                      {step.time}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-1">{step.title}</h3>
                    <p className="text-sm text-warm-stone leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding FAQs */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center max-w-lg mx-auto mb-16">
              <span className="eyebrow text-warm-stone">Helpful Details</span>
              <h2 className="heading-lg text-charcoal mt-2">Common Wedding Questions</h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {weddingService.faqs?.map((faq, idx) => (
              <Reveal key={faq.question} delay={idx * 0.1}>
                <div className="card-warm p-6">
                  <h3 className="font-serif text-lg text-charcoal mb-2">{faq.question}</h3>
                  <p className="text-sm text-warm-stone leading-relaxed">{faq.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 text-center card-warm p-10 bg-cream">
              <h3 className="heading-md text-charcoal mb-3">Ready to begin your wedding suite?</h3>
              <p className="body-sm text-warm-stone max-w-md mx-auto mb-6">
                Tell us about your celebration through our Early Bride form, or order a sample kit to feel our papers firsthand.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/weddings/early-bride" variant="primary" size="md">
                  Begin Early Bride Consultation
                </Button>
                <Button href="/weddings/wedding-sample-kit" variant="outline" size="md">
                  Order Wedding Sample Kit (₹{weddingKit.price})
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

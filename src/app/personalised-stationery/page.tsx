import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSServices, getCMSPortfolio } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Bespoke Personalised Stationery & Correspondence | Famous Letterpress",
  description:
    "Handcrafted letterpress correspondence cards, personal writing paper, and monogrammed stationery pressed in Nagaland, India.",
};

const stationeryCategories = [
  {
    title: "Correspondence Cards (Flat Notecards)",
    desc: "A6 and bespoke sized 450–600gsm cotton cards pressed with your name, cipher, or monogram. Ideal for personal notes and formal introductions.",
  },
  {
    title: "Folded Note Cards",
    desc: "Classic bifold cards crafted from 300–400gsm cotton stock with blank interiors for thoughtful handwritten messages.",
  },
  {
    title: "Writing Sheets & Letterheads",
    desc: "120gsm laid or smooth watermarked cotton writing paper designed for fountain pens, paired with bespoke envelopes.",
  },
  {
    title: "Tissue & Pattern Lined Envelopes",
    desc: "Matching Euro-flap envelopes lined by hand with archival patterns, delicate tissue, or custom monograms.",
  },
];

export default function PersonalisedStationeryPage() {
  const service = getCMSServices()["personalised-stationery"];
  const pieces = getCMSPortfolio().filter((item) => item.category === "personalised");

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
                <span className="text-terracotta">Personalised Stationery</span>
              </div>
              <span className="eyebrow text-terracotta">Mindful Correspondence</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">{service.title}</h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                {service.tagline}. {service.shortDesc}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/start-a-project?service=personalised-stationery" variant="primary" size="lg">
                  Commission Stationery
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Speak With Studio
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview & Elements */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow text-warm-stone">Art of the Letter</span>
                <h2 className="heading-lg text-charcoal mt-2 mb-6">
                  A tangible mark of distinction in an age of digital noise.
                </h2>
                <div className="space-y-4 text-warm-stone body-md font-light leading-relaxed">
                  {service.fullDescription.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-sand">
                  <div className="text-xs uppercase tracking-widest font-mono text-terracotta font-semibold mb-1">
                    Production Lead Time
                  </div>
                  <div className="font-serif text-xl text-charcoal">{service.leadTime}</div>
                  <div className="text-xs text-warm-stone mt-1">Packaged in studio gift presentation boxes.</div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stationeryCategories.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.1}>
                  <div className="card-warm p-6 h-full">
                    <span className="text-xs font-mono uppercase tracking-wider text-forest font-semibold mb-2 block">
                      Suite Item 0{idx + 1}
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

      {/* Materials & Finishes */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="card-warm p-8 h-full">
                <span className="eyebrow text-forest">Archival Papers</span>
                <h3 className="heading-md text-charcoal mt-2 mb-4">Cotton & Laid Writing Stocks</h3>
                <ul className="space-y-3">
                  {service.materials.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm text-warm-stone">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-warm p-8 h-full">
                <span className="eyebrow text-terracotta">Studio Finishes</span>
                <h3 className="heading-md text-charcoal mt-2 mb-4">Print & Embossing Techniques</h3>
                <ul className="space-y-3">
                  {service.techniques.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-warm-stone">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      {pieces.length > 0 && (
        <section className="py-20 md:py-28 bg-ivory border-b border-sand">
          <div className="container-wide">
            <Reveal>
              <div className="text-center max-w-lg mx-auto mb-12">
                <span className="eyebrow text-terracotta">Selected Suite</span>
                <h2 className="heading-lg text-charcoal mt-2">Bespoke Monogram Commission</h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pieces.map((piece) => (
                <Reveal key={piece.id}>
                  <div className="card-warm overflow-hidden bg-cream group h-full flex flex-col justify-between">
                    <div>
                      <div className="aspect-[4/3] bg-sand/40 relative overflow-hidden border-b border-sand">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={piece.featuredImage}
                          alt={piece.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <span className="font-mono text-xs uppercase tracking-widest text-warm-stone mb-2 block">
                          {piece.paperStock}
                        </span>
                        <h3 className="font-serif text-2xl text-charcoal mb-3">{piece.title}</h3>
                        <p className="body-sm text-warm-stone leading-relaxed mb-4 font-light">
                          {piece.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="flex flex-wrap justify-center gap-1.5 pt-4 border-t border-sand">
                        {piece.techniques.map((t) => (
                          <span key={t} className="text-[10px] bg-sand px-2.5 py-1 rounded-sm text-charcoal font-mono">
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
      )}

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center max-w-md mx-auto mb-16">
              <span className="eyebrow text-warm-stone">Stationery FAQs</span>
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow text-terracotta">Commission Your Suite</span>
            <h2 className="heading-xl text-charcoal mt-2 mb-4">Start your personal writing collection</h2>
            <p className="body-md text-warm-stone max-w-lg mx-auto mb-8 font-light">
              Share your monogram ideas or correspondence needs. Our studio will prepare paper samples and typographic layouts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/start-a-project?service=personalised-stationery" variant="primary" size="lg">
                Start a Stationery Enquiry
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Studio via WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

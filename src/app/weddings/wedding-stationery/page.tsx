import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSServices, getCMSSampleKits } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Bespoke Letterpress Wedding Stationery | Famous Letterpress",
  description:
    "Handcrafted letterpress wedding invitations, save-the-dates, and luxury paper suites pressed on 100% cotton paper in Nagaland, India.",
};

export default function WeddingStationeryPage() {
  const service = getCMSServices()["wedding-stationery"];
  const sampleKit = getCMSSampleKits()["wedding-sample-kit"];

  return (
    <div className="bg-cream">
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-warm-stone">
                <Link href="/" className="hover:text-terracotta">Home</Link>
                <span>/</span>
                <Link href="/weddings" className="hover:text-terracotta">Weddings</Link>
                <span>/</span>
                <span className="text-terracotta">Wedding Stationery</span>
              </div>
              <span className="eyebrow text-terracotta">Crafted in Nagaland</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">{service.title}</h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                {service.tagline}. {service.shortDesc}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/weddings/early-bride" variant="primary" size="lg">
                  Enquire via Early Bride
                </Button>
                <Button href="/weddings/wedding-sample-kit" variant="outline" size="lg">
                  Order Sample Kit (₹{sampleKit.price})
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Editorial Overview & Craft Ethos */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow text-warm-stone">Our Approach</span>
                <h2 className="heading-lg text-charcoal mt-2 mb-6">
                  Designers turned printers: intentionality in every bite.
                </h2>
                <div className="space-y-4 text-warm-stone body-md">
                  {service.fullDescription.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed font-light">{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-sand">
                  <div className="text-xs uppercase tracking-widest font-mono text-terracotta font-semibold mb-1">
                    Standard Lead Time
                  </div>
                  <div className="font-serif text-xl text-charcoal">{service.leadTime}</div>
                  <div className="text-xs text-warm-stone mt-1">Expedited slots available upon studio request.</div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {/* Materials Card */}
              <Reveal delay={0.1}>
                <div className="card-warm p-8">
                  <span className="eyebrow text-forest">Sensory Substrates</span>
                  <h3 className="heading-md text-charcoal mt-2 mb-4">Cotton Stocks & Physical Materials</h3>
                  <ul className="space-y-3">
                    {service.materials.map((mat) => (
                      <li key={mat} className="flex items-start gap-3 text-sm text-warm-stone">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Techniques Card */}
              <Reveal delay={0.2}>
                <div className="card-warm p-8">
                  <span className="eyebrow text-terracotta">Press Capabilities</span>
                  <h3 className="heading-md text-charcoal mt-2 mb-4">Finishes & Print Techniques</h3>
                  <ul className="space-y-3">
                    {service.techniques.map((tech) => (
                      <li key={tech} className="flex items-start gap-3 text-sm text-warm-stone">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Steps */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="eyebrow text-terracotta">Transparent Workflow</span>
              <h2 className="heading-xl text-charcoal mt-2">How your suite comes to life</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.processSteps?.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.1}>
                <div className="card-warm p-6 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-semibold block mb-2">
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

      {/* Service FAQs */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center max-w-md mx-auto mb-16">
              <span className="eyebrow text-warm-stone">Frequently Asked Questions</span>
              <h2 className="heading-lg text-charcoal mt-2">Answers on Wedding Stationery</h2>
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

      {/* Conversion Banner */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow text-terracotta">Take The First Step</span>
            <h2 className="heading-xl text-charcoal mt-2 mb-4">Experience the paper or begin your design</h2>
            <p className="body-md text-warm-stone max-w-lg mx-auto mb-8 font-light">
              Whether you want to hold our cotton paper swatches in your hands or are ready to schedule your consultation, our Nagaland studio is ready to guide you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/weddings/early-bride" variant="primary" size="lg">
                Submit Early Bride Enquiry
              </Button>
              <Button href="/weddings/wedding-sample-kit" variant="outline" size="lg">
                Order Wedding Sample Kit (₹{sampleKit.price})
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Famous Letterpress | Nagaland, India",
  description:
    "Get in touch with Famous Letterpress. Contact our studio via WhatsApp, email, or schedule a consultation for your upcoming wedding or brand stationery.",
};

const studioDetails = {
  name: "Famous Letterpress",
  location: "Nagaland, India",
  email: "hello@famousletterpress.com",
  phone: "+91 98628 00000",
  whatsapp: "+91 98628 00000",
  hours: "Monday – Saturday: 9:30 AM – 6:00 PM IST (Closed Sundays)",
  instagram: "https://www.instagram.com/famousletterpress",
  facebook: "https://www.facebook.com/famousletterpress",
};

export default function ContactPage() {
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
                <span className="text-terracotta">Contact</span>
              </div>
              <span className="eyebrow text-terracotta">Get In Touch</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">Connect With Our Studio</h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                Whether you have an upcoming wedding celebration, need executive business cards, or wish to explore a trade collaboration, we welcome your conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Cards & Studio Coordinates */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Primary Direct Contact Channels */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <div className="card-warm p-8">
                  <span className="eyebrow text-forest">Direct Messaging</span>
                  <h2 className="heading-md text-charcoal mt-2 mb-4">Fastest Response via WhatsApp</h2>
                  <p className="body-sm text-warm-stone mb-6 font-light leading-relaxed">
                    For quick pricing checks, paper availability, or to share inspiration photos directly with our press team, message us on WhatsApp.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={`https://wa.me/${studioDetails.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Famous%20Letterpress,%20I%20would%20like%20to%20enquire%20about...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Chat on WhatsApp ({studioDetails.whatsapp})
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="card-warm p-8">
                  <span className="eyebrow text-terracotta">Email Correspondence</span>
                  <h2 className="heading-md text-charcoal mt-2 mb-4">Email Artwork & Briefs</h2>
                  <p className="body-sm text-warm-stone mb-6 font-light leading-relaxed">
                    Send vector artwork files, PDF proofs, project briefs, or trade partnership inquiries to our primary email inbox.
                  </p>
                  <a
                    href={`mailto:${studioDetails.email}`}
                    className="font-serif text-xl text-charcoal hover:text-terracotta transition-colors underline decoration-sand underline-offset-4"
                  >
                    {studioDetails.email}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Studio Information Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal delay={0.2}>
                <div className="card-warm p-8 bg-cream border-sand space-y-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-warm-stone block mb-1">
                      Studio Location
                    </span>
                    <div className="font-serif text-xl text-charcoal">{studioDetails.name}</div>
                    <div className="text-sm text-warm-stone font-light">{studioDetails.location}</div>
                  </div>

                  <div className="pt-4 border-t border-sand">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-warm-stone block mb-1">
                      Operating Hours
                    </span>
                    <div className="text-sm text-charcoal font-medium">{studioDetails.hours}</div>
                    <div className="text-xs text-warm-stone font-light mt-1">
                      Responses typically within 24 business hours.
                    </div>
                  </div>

                  <div className="pt-4 border-t border-sand">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-warm-stone block mb-2">
                      Social Channels
                    </span>
                    <div className="flex gap-4">
                      <a
                        href={studioDetails.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-wider font-mono text-terracotta hover:underline"
                      >
                        Instagram &rarr;
                      </a>
                      <a
                        href={studioDetails.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-wider font-mono text-terracotta hover:underline"
                      >
                        Facebook &rarr;
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-sand">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-warm-stone block mb-2">
                      Have a Specific Event?
                    </span>
                    <Button href="/start-a-project" variant="primary" size="md" className="w-full">
                      Start a Project Form
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

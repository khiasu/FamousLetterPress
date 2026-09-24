import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Channel Partners & Creative Trade Collaboration | Famous Letterpress",
  description:
    "Partner with Famous Letterpress. We collaborate with wedding planners, creative agencies, graphic designers, and event stylists as your dedicated trade printmaker.",
};

const partnerAudiences = [
  {
    title: "Wedding Planners & Event Curators",
    desc: "Seamless, dependable stationery production for your high-profile celebrations. We manage precision timeline fulfillment, proofing, and direct packaging.",
    benefit: "Dedicated production scheduling & white-glove packaging",
  },
  {
    title: "Graphic Designers & Calligraphers",
    desc: "You create the artwork; we bring it to life on cast-iron presses. We provide vector die templates, pre-press checks, and paper advice so your vision translates perfectly.",
    benefit: "Pre-press file auditing & trade paper swatch kits",
  },
  {
    title: "Branding & Creative Agencies",
    desc: "Tactile corporate identities, executive stationery, packaging collateral, and VIP launch invitations that elevate client brand equity.",
    benefit: "Specialized duplexing, edge gilding & custom plate archives",
  },
];

const collaborationWorkflow = [
  {
    step: "01",
    title: "Trade Partner Registration",
    desc: "Submit your studio details and business portfolio to join our trade partner network.",
  },
  {
    step: "02",
    title: "Paper & Swatch Library",
    desc: "Receive our comprehensive Trade Material Archive with real printed specimens to present to your clients.",
  },
  {
    step: "03",
    title: "Artwork & Pre-Press Guidance",
    desc: "Direct access to our pre-press team for vector checks, foil trapping, and relief plate optimization.",
  },
  {
    step: "04",
    title: "Priority Presswork & Dispatch",
    desc: "Priority queuing on our vintage presses in Nagaland, with tracked white-label delivery directly to you or your client.",
  },
];

export default function ChannelPartnersPage() {
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
                <span className="text-terracotta">Channel Partners</span>
              </div>
              <span className="eyebrow text-terracotta">Trade Collaboration</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">
                Your dedicated artisanal letterpress partner.
              </h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                We work alongside wedding planners, brand designers, event directors, and creative agencies across India and internationally.
                Think of our Nagaland pressroom as your own private print atelier.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/start-a-project?type=partner" variant="primary" size="lg">
                  Apply for Trade Partnership
                </Button>
                <Button href="/weddings/wedding-sample-kit" variant="outline" size="lg">
                  Order Studio Sample Swatches
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who We Collaborate With */}
      <section className="py-20 md:py-28 bg-ivory border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="eyebrow text-warm-stone">Trade Network</span>
              <h2 className="heading-xl text-charcoal mt-2">Built for creative professionals</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerAudiences.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.1} className="h-full">
                <div className="card-warm p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="heading-md text-charcoal mb-3">{item.title}</h3>
                    <p className="body-sm text-warm-stone mb-6 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-sand">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-forest font-semibold block mb-1">
                      Key Benefit
                    </span>
                    <span className="text-xs text-charcoal font-medium">{item.benefit}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Workflow */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="eyebrow text-terracotta">How We Collaborate</span>
              <h2 className="heading-xl text-charcoal mt-2">A transparent trade workflow</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationWorkflow.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.1}>
                <div className="card-warm p-6 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-semibold block mb-2">
                      {item.step}
                    </span>
                    <h3 className="font-serif text-lg text-charcoal mb-2">{item.title}</h3>
                    <p className="text-xs text-warm-stone leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Enquiry Banner */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow text-forest">Let's Create Together</span>
            <h2 className="heading-xl text-charcoal mt-2 mb-4">Introduce your studio or agency</h2>
            <p className="body-md text-warm-stone max-w-lg mx-auto mb-8 font-light">
              Connect with Mr Khiasu and the Famous Letterpress team to discuss trade pricing, client swatch boxes, and upcoming project timelines.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/start-a-project?type=partner" variant="primary" size="lg">
                Partner Application Form
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Direct WhatsApp Discussion
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

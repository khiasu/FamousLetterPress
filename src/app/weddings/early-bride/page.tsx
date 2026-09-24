import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { EarlyBrideForm } from "@/components/forms/EarlyBrideForm";

export const metadata: Metadata = {
  title: "Early Bride Consultation | Famous Letterpress",
  description:
    "Planning your wedding invitations? Submit our Early Bride consultation form to receive tailored guidance on letterpress techniques, cotton paper stocks, and timelines.",
};

export default function EarlyBridePage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-20 border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-warm-stone">
                <Link href="/" className="hover:text-terracotta">Home</Link>
                <span>/</span>
                <Link href="/weddings" className="hover:text-terracotta">Weddings</Link>
                <span>/</span>
                <span className="text-terracotta">Early Bride</span>
              </div>
              <span className="eyebrow text-terracotta">Dedicated Consultation</span>
              <h1 className="display-lg text-charcoal mt-2 mb-4">The Early Bride Experience</h1>
              <p className="body-md text-warm-stone font-light leading-relaxed">
                Whether you have an exact visual concept or are just beginning to explore tactile letterpress, our Early Bride inquiry helps us understand your celebration and propose the best artisanal path forward.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-wide">
          <Reveal>
            <EarlyBrideForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

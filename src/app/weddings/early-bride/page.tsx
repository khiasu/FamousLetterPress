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
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-[#888888]">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <Link href="/weddings" className="hover:text-black transition-colors">Weddings</Link>
                <span>/</span>
                <span className="text-black">Early Bride</span>
              </div>
              <p className="eyebrow mb-2">Dedicated Consultation</p>
              <h1 className="text-black mb-4 font-serif">
                The Early Bride Experience
              </h1>
              <p className="text-sm md:text-base text-[#555555] font-light leading-relaxed">
                Whether you have an exact visual concept or are just beginning to explore tactile letterpress, our Early Bride inquiry helps us understand your celebration and propose the best artisanal path forward.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <Reveal>
            <EarlyBrideForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

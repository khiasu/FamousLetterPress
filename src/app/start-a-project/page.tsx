import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectForm } from "@/components/forms/ProjectForm";

export const metadata: Metadata = {
  title: "Start a Project | Commission Letterpress | Famous Letterpress",
  description:
    "Commission custom letterpress wedding stationery, bespoke business cards, or personalized paper goods with Famous Letterpress. Submit your project brief.",
};

interface StartProjectPageProps {
  searchParams: Promise<{ service?: string; type?: string }>;
}

async function FormContainer({ searchParams }: { searchParams: Promise<{ service?: string; type?: string }> }) {
  const resolvedParams = await searchParams;
  const serviceParam = resolvedParams.service;
  let defaultService = "Wedding Stationery";

  if (serviceParam === "business-cards") defaultService = "Business Cards";
  if (serviceParam === "personalised-stationery") defaultService = "Personalised Stationery";

  return <ProjectForm initialService={defaultService} initialType={resolvedParams.type} />;
}

export default function StartAProjectPage({ searchParams }: StartProjectPageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black font-medium">Start a Project</span>
              </div>
              <h1 className="d text-[clamp(36px,7.5vw,68px)] leading-[1.0] mt-2 mb-4 font-serif text-black">
                Start a <i>Commission</i>
              </h1>
              <p className="text-base sm:text-lg text-[#555] max-w-xl mx-auto font-light leading-relaxed">
                Whether you have an upcoming wedding celebration, need executive identity cards, or are planning bespoke personal stationery, our studio is ready to bring it to life.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form Area */}
      <section className="section bg-white">
        <div className="container-wide">
          <Reveal>
            <Suspense fallback={<div className="text-center py-12 text-[#888888] text-xs font-sans">Loading brief form...</div>}>
              <FormContainer searchParams={searchParams} />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

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
    <div className="bg-paper-creme min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-border-hairline">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-ink-light font-sans">
                <Link href="/" className="hover:text-ink-deep transition-colors">Home</Link>
                <span>/</span>
                <span className="text-ink-deep">Start a Project</span>
              </div>
              <p className="eyebrow mb-2">Project Initiation</p>
              <h1 className="text-ink-deep mb-4 font-serif">
                Start a Commission
              </h1>
              <p className="text-sm md:text-base text-ink-muted font-light leading-relaxed">
                Whether you have an upcoming wedding celebration, need executive identity cards, or are planning bespoke personal stationery, our atelier is ready to bring it to life.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form Area */}
      <section className="section bg-paper-white">
        <div className="container-wide">
          <Reveal>
            <Suspense fallback={<div className="text-center py-12 text-ink-light text-xs font-sans">Loading brief form...</div>}>
              <FormContainer searchParams={searchParams} />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

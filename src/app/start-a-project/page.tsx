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
    <div className="bg-cream">
      {/* Header */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-20 border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-warm-stone">
                <Link href="/" className="hover:text-terracotta">Home</Link>
                <span>/</span>
                <span className="text-terracotta">Start a Project</span>
              </div>
              <span className="eyebrow text-terracotta">Project Initiation</span>
              <h1 className="display-lg text-charcoal mt-2 mb-4">Start a Commission</h1>
              <p className="body-md text-warm-stone font-light leading-relaxed">
                Whether you have an upcoming wedding celebration, need executive identity cards, or are planning bespoke personal stationery, we are ready to bring it to life.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form Area */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-wide">
          <Reveal>
            <Suspense fallback={<div className="text-center py-12 text-warm-stone">Loading project form...</div>}>
              <FormContainer searchParams={searchParams} />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

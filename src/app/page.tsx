import { HeroSection } from "@/components/home/HeroSection";
import { PositioningSection } from "@/components/home/PositioningSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { CraftSection } from "@/components/home/CraftSection";
import { StudioSection } from "@/components/home/StudioSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SampleKitsSection } from "@/components/home/SampleKitsSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PositioningSection />
      <ServicesSection />
      <SelectedWorkSection />
      <CraftSection />
      <StudioSection />
      <ProcessSection />
      <SampleKitsSection />
      <CTASection />
    </>
  );
}

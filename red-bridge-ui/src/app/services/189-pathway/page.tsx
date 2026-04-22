import ReviewedBanner from "@/components/services/189-pathway/ReviewedBanner";
import HeroSection from "@/components/services/189-pathway/HeroSection";
import ContextBand from "@/components/services/189-pathway/ContextBand";
import PointsSection from "@/components/services/189-pathway/PointsSection";
import OccupationRealitySection from "@/components/services/189-pathway/OccupationRealitySection";
import DateOfEffectSection from "@/components/services/189-pathway/DateOfEffectSection";
import StrategySection from "@/components/services/189-pathway/StrategySection";
import ProcessSection from "@/components/services/189-pathway/ProcessSection";
import RelatedPathwaysSection from "@/components/services/189-pathway/RelatedPathwaysSection";
import CTABandSection from "@/components/services/189-pathway/CTABandSection";
import InsightIdeaLinkBar from "@/components/services/InsightIdeaLinkBar";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="pt-16">
        <HeroSection />
        <ReviewedBanner />
        <PointsSection />
        <OccupationRealitySection />
        <DateOfEffectSection />
        <StrategySection />
        <ProcessSection />
        <RelatedPathwaysSection />
        <InsightIdeaLinkBar />
        <CTABandSection />
      </main>

      <Footer />
    </>
  );
}

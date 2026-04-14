import NavBar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";


import ReviewedBanner from "@/components/services/visa-189/ReviewedBanner";
import HeroSection from "@/components/services/visa-189/HeroSection";
import ContextBand from "@/components/services/visa-189/ContextBand";
import PointsSection from "@/components/services/visa-189/PointsSection";
import OccupationRealitySection from "@/components/services/visa-189/OccupationRealitySection";
import DateOfEffectSection from "@/components/services/visa-189/DateOfEffectSection";
import StrategySection from "@/components/services/visa-189/StrategySection";
import ProcessSection from "@/components/services/visa-189/ProcessSection";
import RelatedPathwaysSection from "@/components/services/visa-189/RelatedPathwaysSection";
import CTABandSection from "@/components/services/visa-189/CTABandSection";

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="pt-16">
        <HeroSection />
        <ReviewedBanner />
        <ContextBand />
        <PointsSection />
        <OccupationRealitySection />
        <DateOfEffectSection />
        <StrategySection />
        <ProcessSection />
        <RelatedPathwaysSection />
        <CTABandSection />
      </main>

      <Footer />
    </>
  );
}
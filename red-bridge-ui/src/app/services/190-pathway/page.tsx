import HeroSection from "@/components/services/190-pathway/Herosection";
import ReviewedBanner from "@/components/services/190-pathway/ReviewedBanner";
import ComparisonSection from "@/components/services/190-pathway/ComparisonSection";
import ContextBand from "@/components/services/190-pathway/ContextBand";
import RoiExplainerSection from "@/components/services/190-pathway/RoiExplainerSection";
import RequirementsSection from "@/components/services/190-pathway/RequirementsSection";
import VictoriaPrioritiesSection from "@/components/services/190-pathway/VictoriaPrioritiesSection";
import SelectionFactorsSection from "@/components/services/190-pathway/SelectionFactorsSection";
import ProcessSection from "@/components/services/190-pathway/ProcessSection";
import CTABandSection from "@/components/services/190-pathway/CTABandSection";
import RelatedPathwaysSection from "@/components/services/190-pathway/RelatedPathwaysSection";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="pt-[70px] overflow-hidden">
        <HeroSection />
        <ReviewedBanner />
        <ComparisonSection />
        <ContextBand />
        <RoiExplainerSection />
        <RequirementsSection />
        <VictoriaPrioritiesSection />
        <SelectionFactorsSection />
        <ProcessSection />
        <CTABandSection />
        <RelatedPathwaysSection />
      </main>

      <Footer />
    </>
  );
}

import HeroSection from "@/components/services/visa-190/Herosection";
import ReviewedBanner from "@/components/services/visa-190/ReviewedBanner";
import ComparisonSection from "@/components/services/visa-190/ComparisonSection";
import ContextBand from "@/components/services/visa-190/ContextBand";
import RoiExplainerSection from "@/components/services/visa-190/RoiExplainerSection";
import RequirementsSection from "@/components/services/visa-190/RequirementsSection";
import VictoriaPrioritiesSection from "@/components/services/visa-190/VictoriaPrioritiesSection";
import SelectionFactorsSection from "@/components/services/visa-190/SelectionFactorsSection";
import ProcessSection from "@/components/services/visa-190/ProcessSection";
import FAQSection from "@/components/services/visa-190/FAQSection";
import CTABandSection from "@/components/services/visa-190/CTABandSection";
import RelatedPathwaysSection from "@/components/services/visa-190/RelatedPathwaysSection";
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
        <FAQSection />
        <CTABandSection />
        <RelatedPathwaysSection />
      </main>

      <Footer />
    </>
  );
}

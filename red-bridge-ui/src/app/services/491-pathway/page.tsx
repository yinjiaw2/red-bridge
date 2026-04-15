import CTABandSection from "@/components/services/491-pathway/CTABandSection";
import ContextBand from "@/components/services/491-pathway/ContextBand";
import DifferenceSection from "@/components/services/491-pathway/DifferenceSection";
import HeroSection from "@/components/services/491-pathway/HeroSection";
import Pathway191Section from "@/components/services/491-pathway/Pathway191Section";
import ProcessSection from "@/components/services/491-pathway/ProcessSection";
import RegionalAreasSection from "@/components/services/491-pathway/RegionalAreasSection";
import RelatedPathwaysSection from "@/components/services/491-pathway/RelatedPathwaysSection";
import RequirementsSection from "@/components/services/491-pathway/RequirementsSection";
import ReviewedBanner from "@/components/services/491-pathway/ReviewedBanner";
import TradeoffSection from "@/components/services/491-pathway/TradeoffSection";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="overflow-hidden pt-[70px]">
        <HeroSection />
        <ReviewedBanner />
        <DifferenceSection />
        <TradeoffSection />
        <ContextBand />
        <RegionalAreasSection />
        <RequirementsSection />
        <ProcessSection />
        <Pathway191Section />
        <RelatedPathwaysSection />
        <CTABandSection />
      </main>

      <Footer />
    </>
  );
}

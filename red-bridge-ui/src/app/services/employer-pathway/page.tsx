import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import CTABandSection from "@/components/services/employer-pathway/CTABandSection";
import FAQSection from "@/components/services/employer-pathway/FAQSection";
import FitSection from "@/components/services/employer-pathway/FitSection";
import HeroSection from "@/components/services/employer-pathway/HeroSection";
import IndustrySection from "@/components/services/employer-pathway/IndustrySection";
import PathwaysSection from "@/components/services/employer-pathway/PathwaysSection";
import ProcessSection from "@/components/services/employer-pathway/ProcessSection";
import PromiseSection from "@/components/services/employer-pathway/PromiseSection";
import ReviewedBanner from "@/components/services/employer-pathway/ReviewedBanner";

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="overflow-hidden pt-[70px]">
        <HeroSection />
        <ReviewedBanner />
        <FitSection />
        <PathwaysSection />
        <ProcessSection />
        <IndustrySection />
        <PromiseSection />
        <FAQSection />
        <CTABandSection />
      </main>

      <Footer />
    </>
  );
}

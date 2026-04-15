import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/services/career-launch/HeroSection";
import CareerTabsSection from "@/components/services/career-launch/CategoryTabsSection";
import TimelineSection from "@/components/services/career-launch/TimelineSection";
import CTASection from "@/components/services/career-launch/CTASection";

export default function CareerLaunchPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <HeroSection />
        <CareerTabsSection />
        <TimelineSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

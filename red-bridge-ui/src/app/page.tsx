import NavBar from "@/components/shared/NavBar";
import HeroSection from "@/components/home/HeroSection";
import UserScenarioSection from "@/components/home/UserScenarioSection";
import TrustSafetySection from "@/components/home/TrustSafetySection";
import SuccessTicker from "@/components/home/OutcomeTickerSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import EmployerNetwork from "@/components/home/EmployerNetworkSection";
import Footer from "@/components/shared/Footer";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <HeroSection />
        <UserScenarioSection />
        <TrustSafetySection />
        <SuccessTicker />
        <ComparisonSection />
        <EmployerNetwork />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

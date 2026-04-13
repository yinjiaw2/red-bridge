import NavBar from "@/components/home/NavBar";
import HeroSection from "@/components/home/HeroSection";
import UserScenarioSection from "@/components/home/UserScenarioSection";
import TrustSafetySection from "@/components/home/TrustSafetySection";
import SuccessTicker from "@/components/home/OutcomeTickerSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import StatsSection from "@/components/home/StatusSection";
import EmployerNetwork from "@/components/home/EmployerNetworkSection";

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
        <ProcessSection />
        <ProgramsSection />
        <StatsSection />
      </main>
    </>
  );
}

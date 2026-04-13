import NavBar from "@/components/home/NavBar";
import HeroSection from "@/components/home/HeroSection";
import UserScenarioSection from "@/components/home/UserScenarioSection";
import TrustSafetySection from "@/components/home/TrustSafetySection";
import SuccessTicker from "@/components/home/OutcomeTickerSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <HeroSection />
        <UserScenarioSection />
        <TrustSafetySection />
        <SuccessTicker />
      </main>
    </>
  );
}

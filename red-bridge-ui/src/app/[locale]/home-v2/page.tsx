import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import HomeHero from "@/components/v2/home/HomeHero";
import HomeTicker from "@/components/v2/home/HomeTicker";
import HomeEmployerNetwork from "@/components/v2/home/HomeEmployerNetwork";
import TrustSafetySection from "@/components/home/TrustSafetySection";
import ComparisonSection from "@/components/home/ComparisonSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomeV2() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <HomeHero />
        <HomeTicker />
        <TrustSafetySection />
        <HomeEmployerNetwork />
        <ComparisonSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

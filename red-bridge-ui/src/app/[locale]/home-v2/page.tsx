import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import HomeHero from "@/components/v2/home/HomeHero";
import HomeTicker from "@/components/v2/home/HomeTicker";
import HomeEmployerNetwork from "@/components/v2/home/HomeEmployerNetwork";
import V2TrustSection from "@/components/v2/home/V2TrustSection";
import V2WhySection from "@/components/v2/home/V2WhySection";
import V2ComparisonSection from "@/components/v2/home/V2ComparisonSection";
import PageCTA from "@/components/v2/shared/PageCTA";

export default function HomeV2() {
  return (
    <>
      <NavBar />
      <main>
        <HomeHero />
        <HomeTicker />
        <HomeEmployerNetwork />
        <V2TrustSection />
        <V2WhySection />
        <V2ComparisonSection />
        <PageCTA />
        <Footer />
      </main>
    </>
  );
}

import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import RedBridgeIntro from "@/components/about/RedBridgeIntro";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import LegalPartnerSection from "@/components/about/LegalPartnerSection";

export default function AboutUsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <RedBridgeIntro />
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <LegalPartnerSection />
      </main>
      <Footer />
    </>
  );
}

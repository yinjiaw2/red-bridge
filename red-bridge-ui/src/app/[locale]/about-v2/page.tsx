import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import AboutStory from "@/components/v2/about/AboutStory";
import AboutTeam from "@/components/v2/about/AboutTeam";
import AboutValues from "@/components/v2/about/AboutValues";
import AboutLegalPartner from "@/components/v2/about/AboutLegalPartner";
import AboutCtaSection from "@/components/about/AboutCtaSection";

export default function AboutV2() {
  return (
    <>
      <NavBar />
      <main className="pt-16 md:pt-24">
        <AboutStory />
        <AboutTeam />
        <AboutValues />
        <AboutLegalPartner />
        <AboutCtaSection />
        <Footer />
      </main>
    </>
  );
}

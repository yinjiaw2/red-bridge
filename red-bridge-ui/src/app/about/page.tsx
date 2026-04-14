import NavBar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import RedBridgeIntro from "@/components/about/RedBridgeIntro";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";

export default function AboutUsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <RedBridgeIntro />
        <StorySection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}

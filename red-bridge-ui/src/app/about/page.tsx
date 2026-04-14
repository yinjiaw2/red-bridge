import NavBar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import RedBridgeIntro from "@/components/about-us/red-bridge-intro";

export default function AboutUsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <RedBridgeIntro />
      </main>
      <Footer />
    </>
  );
}

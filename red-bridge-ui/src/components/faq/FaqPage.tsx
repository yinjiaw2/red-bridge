import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import { FaqContactSection } from "./FaqContactSection";
import { FaqHero } from "./FaqHero";
import { FaqListSection } from "./FaqListSection";

export function FaqPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-full bg-background pt-16">
        <FaqHero />
        <FaqListSection />
        <FaqContactSection />
      </main>
      <Footer />
    </>
  );
}

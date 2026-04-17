import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import { ServicesCtaSection } from "./ServicesCtaSection";
import { ServicesFinderSection } from "./ServicesFinderSection";
import { ServicesHero } from "./ServicesHero";
import { ServicesProcessSection } from "./ServicesProcessSection";

export function ServicesPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-full bg-background pt-16">
        <ServicesHero />
        <ServicesProcessSection />
        <ServicesFinderSection />
        <ServicesCtaSection />
      </main>
      <Footer />
    </>
  );
}

import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { ServicesCtaSection } from "./ServicesCtaSection";
import { ServicesFinderSection } from "./ServicesFinderSection";
import { ServicesGridSection } from "./ServicesGridSection";
import { ServicesHero } from "./ServicesHero";
import { ServicesProcessSection } from "./ServicesProcessSection";
import { ServicesStatsBand } from "./ServicesStatsBand";

export function ServicesPage() {
  return (
    <main className="min-h-full bg-[var(--bg)]">
      <div className="w-full bg-[var(--bg-card)]">
        <div className="home-inner pt-8 md:pt-10">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]">
            <Header />
          </div>
        </div>
      </div>
      <ServicesHero />
      <ServicesStatsBand />
      <ServicesProcessSection />
      <ServicesGridSection />
      <ServicesFinderSection />
      <ServicesCtaSection />
      <Footer />
    </main>
  );
}

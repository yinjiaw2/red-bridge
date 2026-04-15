import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { AboutCtaSection } from "./AboutCtaSection";
import { AboutHero } from "./AboutHero";
import { LegalPartnerSection } from "./LegalPartnerSection";
import { StorySection } from "./StorySection";
import { TeamSection } from "./TeamSection";
import { ValuesSection } from "./ValuesSection";

export function AboutPage() {
  return (
    <main className="min-h-full bg-[var(--bg)]">
      <div className="w-full bg-[var(--bg-card)]">
        <div className="home-inner pt-8 md:pt-10">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]">
            <Header />
          </div>
        </div>
      </div>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <LegalPartnerSection />
      <AboutCtaSection />
      <Footer />
    </main>
  );
}

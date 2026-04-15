import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { FaqContactSection } from "./FaqContactSection";
import { FaqHero } from "./FaqHero";
import { FaqListSection } from "./FaqListSection";

export function FaqPage() {
  return (
    <main className="min-h-full bg-[var(--bg)]">
      <div className="w-full bg-[var(--bg-card)]">
        <div className="home-inner pt-8 md:pt-10">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]">
            <Header />
          </div>
        </div>
      </div>
      <FaqHero />
      <FaqListSection />
      <FaqContactSection />
      <Footer />
    </main>
  );
}

import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { SuccessCasesCta } from "./SuccessCasesCta";
import { SuccessCasesHero } from "./SuccessCasesHero";
import { SuccessCasesSpotlight } from "./SuccessCasesSpotlight";
import { SuccessTrustSection } from "./SuccessTrustSection";
import { TestimonialGrid } from "./TestimonialGrid";
import { VideoGallery } from "./VideoGallery";

export function SuccessCasesPage() {
  return (
    <main className="min-h-full bg-[var(--bg)]">
      <div className="w-full bg-[var(--bg-card)]">
        <div className="home-inner pt-8 md:pt-10">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]">
            <Header />
          </div>
        </div>
      </div>
      <SuccessCasesHero />
      <SuccessCasesSpotlight />
      <VideoGallery />
      <TestimonialGrid />
      <SuccessTrustSection />
      <SuccessCasesCta />
      <Footer />
    </main>
  );
}

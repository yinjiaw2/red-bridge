import { ComparisonSection } from "./ComparisonSection";
import { ContactSection } from "./ContactSection";
import { EmployerNetworkSection } from "./EmployerNetworkSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { OutcomesTicker } from "./OutcomesTicker";
import { PathwaysSection } from "./PathwaysSection";
import { TrustSection } from "./TrustSection";
import { VideoSection } from "./VideoSection";

export function HomePage() {
  return (
    <main className="home-shell flex-1 pb-24 md:pb-0">
      <HeroSection />
      <OutcomesTicker />
      <PathwaysSection />
      <TrustSection />
      <ComparisonSection />
      <EmployerNetworkSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

import { FaqSection } from "./FaqSection";
import { FitSection } from "./FitSection";
import { JourneySection } from "./JourneySection";
import { NetworkSection } from "./NetworkSection";
import { OptionsSection } from "./OptionsSection";
import { PathwayCta } from "./PathwayCta";
import { PathwayHero } from "./PathwayHero";
import { ProcessSection } from "./ProcessSection";
import { PromiseSection } from "./PromiseSection";
import { ReviewedBanner } from "./ReviewedBanner";
import { PathwayShell } from "@/components/shared/pathway/PathwayShell";

export function EmployerPathwayPage() {
  return (
    <PathwayShell>
      <PathwayHero />
      <ReviewedBanner />
      <FitSection />
      <OptionsSection />
      <ProcessSection />
      <NetworkSection />
      <PromiseSection />
      <JourneySection />
      <FaqSection />
      <PathwayCta />
    </PathwayShell>
  );
}

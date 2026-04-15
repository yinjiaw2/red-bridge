import { CompetitionSection } from "./CompetitionSection";
import { ContextBand } from "./ContextBand";
import { DateOfEffectSection } from "./DateOfEffectSection";
import { FaqSection } from "./FaqSection";
import { PathwayCta } from "./PathwayCta";
import { PathwayHero } from "./PathwayHero";
import { PointsSection } from "./PointsSection";
import { ProcessSection } from "./ProcessSection";
import { RelatedSection } from "./RelatedSection";
import { ReviewedBanner } from "./ReviewedBanner";
import { StrategySection } from "./StrategySection";
import { PathwayShell } from "@/components/shared/pathway/PathwayShell";

export function Pathway189Page() {
  return (
    <PathwayShell>
      <PathwayHero />
      <ReviewedBanner />
      <ContextBand />
      <PointsSection />
      <CompetitionSection />
      <DateOfEffectSection />
      <StrategySection />
      <ProcessSection />
      <FaqSection />
      <RelatedSection />
      <PathwayCta />
    </PathwayShell>
  );
}

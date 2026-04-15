import { ComparisonSection } from "./ComparisonSection";
import { ContextBand } from "./ContextBand";
import { FaqSection } from "./FaqSection";
import { PathwayCta } from "./PathwayCta";
import { PathwayHero } from "./PathwayHero";
import { PrioritiesSection } from "./PrioritiesSection";
import { ProcessSection } from "./ProcessSection";
import { RelatedSection } from "./RelatedSection";
import { RequirementsSection } from "./RequirementsSection";
import { ReviewedBanner } from "./ReviewedBanner";
import { RoiFactorsSection } from "./RoiFactorsSection";
import { RoiStepsSection } from "./RoiStepsSection";
import { PathwayShell } from "@/components/shared/pathway/PathwayShell";

export function Pathway190Page() {
  return (
    <PathwayShell>
      <PathwayHero />
      <ReviewedBanner />
      <ComparisonSection />
      <ContextBand />
      <RoiStepsSection />
      <RequirementsSection />
      <PrioritiesSection />
      <RoiFactorsSection />
      <ProcessSection />
      <FaqSection />
      <RelatedSection />
      <PathwayCta />
    </PathwayShell>
  );
}

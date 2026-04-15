import { ContextBand } from "./ContextBand";
import { DifferenceSection } from "./DifferenceSection";
import { FaqSection } from "./FaqSection";
import { Pathway191Section } from "./Pathway191Section";
import { PathwayCta } from "./PathwayCta";
import { PathwayHero } from "./PathwayHero";
import { ProcessSection } from "./ProcessSection";
import { RegionalAreasSection } from "./RegionalAreasSection";
import { RelatedSection } from "./RelatedSection";
import { RequirementsSection } from "./RequirementsSection";
import { ReviewedBanner } from "./ReviewedBanner";
import { TradeoffSection } from "./TradeoffSection";
import { PathwayShell } from "@/components/shared/pathway/PathwayShell";

export function Pathway491Page() {
  return (
    <PathwayShell>
      <PathwayHero />
      <ReviewedBanner />
      <DifferenceSection />
      <TradeoffSection />
      <ContextBand />
      <RegionalAreasSection />
      <RequirementsSection />
      <ProcessSection />
      <Pathway191Section />
      <FaqSection />
      <RelatedSection />
      <PathwayCta />
    </PathwayShell>
  );
}

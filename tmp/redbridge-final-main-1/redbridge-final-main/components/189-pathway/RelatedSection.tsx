import { relatedPathways } from "./pathway-data";
import { RelatedPathwaysSection } from "@/components/shared/pathway/RelatedPathwaysSection";

export function RelatedSection() {
  return (
    <RelatedPathwaysSection
      eyebrow="Consider Also"
      title={
        <>
          Other Pathways Worth <span className="italic text-[var(--accent)]">Knowing</span>
        </>
      }
      description="The 189 is not the only route to PR. Depending on your profile, one of these may get you there faster."
      items={relatedPathways}
    />
  );
}

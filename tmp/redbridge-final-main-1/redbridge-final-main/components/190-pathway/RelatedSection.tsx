import { relatedPathways } from "./pathway-data";
import { RelatedPathwaysSection } from "@/components/shared/pathway/RelatedPathwaysSection";

export function RelatedSection() {
  return (
    <RelatedPathwaysSection
      eyebrow="Also Consider"
      title={
        <>
          Other Pathways Worth <span className="italic text-[var(--accent)]">Mapping</span>
        </>
      }
      items={relatedPathways}
    />
  );
}

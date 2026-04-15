import { federalRequirements, stateRequirements } from "./pathway-data";
import { RequirementsColumnsSection } from "@/components/shared/pathway/RequirementsColumnsSection";

export function RequirementsSection() {
  return (
    <RequirementsColumnsSection
      id="requirements"
      eyebrow="Eligibility"
      title={
        <>
          What You Need to <span className="italic text-[var(--accent)]">Qualify</span>
        </>
      }
      description="The 190 sits across two gatekeepers. You need to satisfy both the federal migration rules and Victoria's nomination logic."
      groups={[
        { title: "Federal Requirements — Department of Home Affairs", items: federalRequirements },
        { title: "Victorian Requirements — Live in Melbourne", items: stateRequirements },
      ]}
      footer={{
        prefix: "The federal occupation list remains the legal baseline for nomination eligibility.",
        href: "https://immi.homeaffairs.gov.au/visas/working-in-australia/check-occupation/occupation-list",
        linkLabel: "View the current skilled occupation list →",
      }}
    />
  );
}

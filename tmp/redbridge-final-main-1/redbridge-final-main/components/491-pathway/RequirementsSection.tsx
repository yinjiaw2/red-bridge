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
      description="Both federal and Victorian requirements must be satisfied. The 491 has stricter employment conditions than the 190."
      groups={[
        { title: "Federal Requirements — Department of Home Affairs", items: federalRequirements },
        {
          title: "Victorian Requirements — Critical Differences from 190",
          items: stateRequirements,
          tone: "warning",
        },
      ]}
      footer={{
        prefix: "The federal skilled occupation framework still applies to 491 eligibility.",
        href: "https://immi.homeaffairs.gov.au/visas/working-in-australia/check-occupation/occupation-list",
        linkLabel: "View the skilled occupation list →",
      }}
    />
  );
}

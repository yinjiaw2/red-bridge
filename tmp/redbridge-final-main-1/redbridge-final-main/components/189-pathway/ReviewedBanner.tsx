import { ReviewedNotice } from "@/components/shared/pathway/ReviewedNotice";

export function ReviewedBanner() {
  return (
    <ReviewedNotice
      href="https://immi.homeaffairs.gov.au"
      linkLabel="Visit the Department of Home Affairs for the latest updates →"
    >
      Information last reviewed <strong className="text-[var(--text-main)]">March 2026</strong>. Immigration policy
      changes regularly.
    </ReviewedNotice>
  );
}

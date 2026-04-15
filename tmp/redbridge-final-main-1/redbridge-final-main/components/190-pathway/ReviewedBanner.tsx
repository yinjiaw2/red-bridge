import { ReviewedNotice } from "@/components/shared/pathway/ReviewedNotice";

export function ReviewedBanner() {
  return (
    <ReviewedNotice
      href="https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/2025-26-skilled-migration-visa-nomination-program"
      linkLabel="Visit Live in Melbourne for the latest program details →"
    >
      Information last reviewed <strong className="text-[var(--text-main)]">March 2026</strong>. Victoria&apos;s
      program details, allocations, and occupation priorities can change every program year.
    </ReviewedNotice>
  );
}

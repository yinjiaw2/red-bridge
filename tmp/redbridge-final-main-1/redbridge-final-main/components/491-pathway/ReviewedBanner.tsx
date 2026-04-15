import { ReviewedNotice } from "@/components/shared/pathway/ReviewedNotice";

export function ReviewedBanner() {
  return (
    <ReviewedNotice
      href="https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/491"
      linkLabel="Official 491 requirements — Live in Melbourne →"
    >
      Information last reviewed <strong className="text-[var(--text-main)]">March 2026</strong>. Victoria&apos;s
      program details and occupation priorities change each program year.
    </ReviewedNotice>
  );
}

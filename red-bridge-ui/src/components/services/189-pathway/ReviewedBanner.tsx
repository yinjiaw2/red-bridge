"use client";

import { useTranslations } from "next-intl";
import { CalendarCheck } from "lucide-react";

export default function ReviewedBanner() {
  const t = useTranslations("visa189ReviewedBanner");

  return (
    <section className="border-y border-border bg-muted px-6 py-3">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
        <CalendarCheck size={16} className="shrink-0 text-primary" />

        <span>
          {t("textBefore")}
          <strong className="text-foreground">{t("date")}</strong>
          {t("textAfter")}
        </span>

        <a
          href="https://immi.homeaffairs.gov.au"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[12px] font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md"
        >
          {t("linkText")}
        </a>
      </div>
    </section>
  );
}

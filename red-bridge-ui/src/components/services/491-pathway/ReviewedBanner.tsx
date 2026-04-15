"use client";

import { CalendarCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ReviewedBanner() {
  const t = useTranslations("visa491.reviewedBanner");

  return (
    <section className="border-y border-primary/20 bg-primary/5 px-6 py-3">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center gap-3 text-[13px] text-muted-foreground">
        <CalendarCheck size={15} className="shrink-0 text-primary" />
        <span>
          {t("textBefore")}
          <strong className="text-foreground">{t("date")}</strong>
          {t("textAfter")}
        </span>
        <a
          href={t("linkHref")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 transition hover:text-primary"
        >
          {t("linkText")}
        </a>
      </div>
    </section>
  );
}



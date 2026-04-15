"use client";

import { CalendarCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ReviewedBanner() {
  const t = useTranslations("visa190.reviewedBanner");

  return (
    <section className="border-y border-primary/20 bg-primary/5 px-6 py-3">
      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-4 text-[12px] text-muted-foreground md:text-[11px]">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <CalendarCheck size={15} className="shrink-0 text-primary" />
          <span className="whitespace-nowrap">
            {t("textBefore")}
            <strong className="text-foreground">{t("date")}</strong>
            {t("textAfter")}
          </span>
        </div>
        <a
          href={t("linkHref")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 whitespace-nowrap rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md"
        >
          {t("linkText")}
        </a>
      </div>
    </section>
  );
}

"use client";

import { CalendarCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ReviewedBanner() {
  const t = useTranslations("employerPathway.reviewed");

  return (
    <section className="border-y border-[rgba(90,125,94,0.15)] bg-[rgba(90,125,94,0.06)] px-6 py-3">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center gap-3 text-[13px] text-[rgba(42,31,20,0.72)]">
        <CalendarCheck size={15} className="shrink-0 text-[#5a7d5e]" />
        <span>
          {t("textBefore")}
          <strong className="text-[#2a1f14]">{t("date")}</strong>
          {t("textAfter")}
        </span>
        <a
          href={t("linkHref")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5a7d5e] underline underline-offset-4 transition hover:text-[#a8501e]"
        >
          {t("linkText")}
        </a>
      </div>
    </section>
  );
}

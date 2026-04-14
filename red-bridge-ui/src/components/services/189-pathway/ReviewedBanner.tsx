"use client";

import { useTranslations } from "next-intl";
import { CalendarCheck } from "lucide-react";

export default function ReviewedBanner() {
  const t = useTranslations("visa189ReviewedBanner");

  return (
    <section className="px-6 py-3 bg-[#f3efe7] border-y border-[rgba(90,125,94,0.15)]">
      <div className="max-w-[1100px] mx-auto flex flex-wrap items-center gap-3 text-[13px] text-[rgba(42,31,20,0.72)]">
        <CalendarCheck size={15} className="text-[#5a7d5e] shrink-0" />

        <span>
          {t("textBefore")}
          <strong className="text-[#2a1f14]">{t("date")}</strong>
          {t("textAfter")}
        </span>

        <a
          href="https://immi.homeaffairs.gov.au"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5a7d5e] underline underline-offset-4 hover:text-[#a8501e] transition"
        >
          {t("linkText")}
        </a>
      </div>
    </section>
  );
}
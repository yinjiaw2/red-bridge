"use client";

import { useTranslations } from "next-intl";
import { CalendarCheck } from "lucide-react";

export default function ReviewedBanner() {
  const t = useTranslations("visa189ReviewedBanner");

  return (
    <section className="px-6 py-3 bg-gray-100 border-y border-gray-200">
      <div className="max-w-[1100px] mx-auto flex flex-wrap items-center gap-3 text-sm text-gray-600 justify-center">
        <CalendarCheck size={16} className="text-green-700 shrink-0" />

        <span className="items-center justify-center">
          {t("textBefore")}
          <strong className="text-gray-900">{t("date")}</strong>
          {t("textAfter")}
        </span>

        <a
          href="https://immi.homeaffairs.gov.au"
          target="_blank"
          rel="noopener noreferrer"
          className="text-naviblue underline underline-offset-4 hover:text-brandred transition-colors"
        >
          {t("linkText")}
        </a>
      </div>
    </section>
  );
}

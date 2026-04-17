"use client";

import { useTranslations, useLocale } from "next-intl";

export function BookingHero() {
  const t = useTranslations("contactPage.hero");
  const locale = useLocale();

  return (
    <section className="w-full border-b border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--bg-card)_0%,var(--bg)_100%)] py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-2">
        <div className="mx-auto max-w-[960px] text-center">
          <h1
            className={`mt-2 text-[clamp(2.25rem,5.6vw,3.9rem)] leading-[1.05] text-[var(--text-main)]${locale === "zh" ? " font-bold" : " font-serif"}`}
          >
            {t("title1")}{" "}
            <span className="text-primary">{t("title2")}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[650px] text-base leading-7 text-[var(--text-sub)] md:text-lg md:leading-8">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations, useLocale } from "next-intl";

export function BookingHero() {
  const t = useTranslations("contactPage.hero");
  const locale = useLocale();

  return (
    <section className="w-full border-b border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--bg-card)_0%,var(--bg)_100%)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-2">
        <div className="mx-auto max-w-[860px] text-center">
          <h1
            className={`mt-4 font-serif text-[3rem] leading-[0.95] text-[var(--text-main)] md:text-[4.2rem]${locale === "zh" ? " font-bold" : ""}`}
          >
            {t("title1")}
            <br />
            <span className="text-primary">{t("title2")}</span>
          </h1>
          <p className="mx-auto max-w-[650px] text-lg leading-8 text-[var(--text-sub)]">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}

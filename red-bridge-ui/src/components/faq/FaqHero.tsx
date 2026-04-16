"use client";

import { useTranslations, useLocale } from "next-intl";

export function FaqHero() {
  const t = useTranslations("faqPage.hero");
  const locale = useLocale();

  return (
    <section className="border-b border-border bg-[linear-gradient(180deg,var(--background)_0%,var(--card)_100%)] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[880px] text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          {t("eyebrow")}
        </p>
        <h1 className={`mt-4 font-serif text-[3rem] leading-[0.95] text-foreground md:text-[4.25rem]${locale === "zh" ? " font-bold" : ""}`}>
          {t("title1")}
          <br />
          <span className="text-primary">{t("title2")}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[700px] text-lg leading-8 text-muted-foreground">
          {t("description")}
        </p>
      </div>
    </section>
  );
}

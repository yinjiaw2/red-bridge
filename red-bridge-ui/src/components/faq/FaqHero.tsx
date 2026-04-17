"use client";

import { useTranslations, useLocale } from "next-intl";

export function FaqHero() {
  const t = useTranslations("faqPage.hero");
  const locale = useLocale();

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center border-b border-border bg-background px-6 py-28 text-center">
      <div className="w-full max-w-[820px]">
        <p className="text-lg font-bold uppercase tracking-widest text-primary">
          {t("eyebrow")}
        </p>
        <h1 className={`mt-4 font-serif text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-tight text-foreground${locale === "zh" ? " font-bold" : ""}`}>
          {t("title1")}
          <br />
          <span className="text-primary">{t("title2")}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[600px] text-lg leading-relaxed text-muted-foreground">
          {t("description")}
        </p>
      </div>
    </section>
  );
}

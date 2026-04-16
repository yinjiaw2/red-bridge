"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { LayersIcon } from "./icons";

export function ServicesHero() {
  const t = useTranslations("servicesHome.hero");
  const locale = useLocale();

  return (
    <section className="border-b border-border bg-[linear-gradient(180deg,var(--card)_0%,var(--background)_100%)] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[860px] text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.16em] text-primary">
          <LayersIcon className="h-4 w-4" />
          {t("eyebrow")}
        </div>
        <h1 className={`mt-5 font-serif text-[3rem] leading-[0.96] text-foreground md:text-[4.25rem]${locale === "zh" ? " font-bold" : ""}`}>
          {t("title1")}
          <br />
          <span className="text-primary">{t("title2")}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[620px] text-lg leading-8 text-muted-foreground">
          {t("description")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-highlight px-7 py-3.5 text-sm font-bold text-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-95"
          >
            {t("primaryCta")}
          </Link>
          <Link
            href="#find-your-path"
            className="inline-flex items-center justify-center rounded-full border border-primary/25 px-7 py-3.5 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5 hover:shadow-md"
          >
            {t("secondaryCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}


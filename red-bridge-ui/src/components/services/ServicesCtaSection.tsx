"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { PhoneIcon } from "./icons";

export function ServicesCtaSection() {
  const t = useTranslations("servicesHome.cta");

  return (
    <section className="bg-[linear-gradient(180deg,var(--background)_0%,var(--card)_100%)] px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[24px] border border-border bg-card px-6 py-10 text-center shadow-md md:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("eyebrow")}</p>
          <h2 className="mt-3 font-serif text-[2.8rem] leading-[0.96] text-foreground md:text-[3.4rem]">
            {t("title1")}
            <br />
            {t("title2")} <span className="text-primary">{t("title3")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[650px] text-lg leading-8 text-muted-foreground">{t("description")}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-highlight px-7 py-3.5 text-sm font-bold text-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-95"
            >
              {t("primaryCta")}
            </Link>
            <Link
              href="tel:0399617301"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 px-7 py-3.5 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5 hover:shadow-md"
            >
              <PhoneIcon className="h-4 w-4" />
              {t("phone")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


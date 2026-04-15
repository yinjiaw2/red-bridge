"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function DifferenceSection() {
  const t = useTranslations("visa491.difference");

  return (
    <section id="the-difference" style={{ fontFamily: font }} className="bg-background px-6 py-24 md:px-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>

          <h2 className="text-[34px] font-semibold leading-tight text-foreground md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-[#2d6a4f]">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto grid max-w-[820px] gap-7 rounded-[12px] border border-primary/25 bg-primary/5 p-8 md:grid-cols-[auto_1fr] md:items-center">
          <div className="text-[72px] font-semibold leading-none text-[#2d6a4f]">{t("number")}</div>

          <div>
            <h3 className="mb-3 text-[28px] font-semibold leading-tight text-foreground">
              {t("heading1")}
              <em className="not-italic text-primary">{t("headingHighlight")}</em>
              {t("heading2")}
            </h3>
            <p className="text-[15px] leading-8 text-muted-foreground">{t("body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

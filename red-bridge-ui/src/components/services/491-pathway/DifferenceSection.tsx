"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function DifferenceSection() {
  const t = useTranslations("visa491.difference");

  return (
    <section
      id="the-difference"
      style={{ fontFamily: font }}
      className="bg-[#f5efe4] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5a7d5e]">
            <span className="h-px w-6 bg-[#5a7d5e]" />
            {t("eyebrow")}
          </div>

          <h2 className="text-[34px] font-semibold leading-tight text-[#2a1f14] md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-[#5a7d5e]">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto grid max-w-[820px] gap-7 rounded-[12px] border border-[rgba(90,125,94,0.25)] bg-[linear-gradient(135deg,rgba(90,125,94,0.08),rgba(90,125,94,0.03))] p-8 md:grid-cols-[auto_1fr] md:items-center">
          <div className="text-[72px] font-semibold leading-none text-[#5a7d5e]">
            {t("number")}
          </div>

          <div>
            <h3 className="mb-3 text-[28px] font-semibold leading-tight text-[#2a1f14]">
              {t("heading1")}
              <em className="not-italic text-[#5a7d5e]">{t("headingHighlight")}</em>
              {t("heading2")}
            </h3>
            <p className="text-[15px] leading-8 text-[rgba(42,31,20,0.68)]">
              {t("body")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

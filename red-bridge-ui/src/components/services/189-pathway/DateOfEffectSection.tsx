"use client";

import { useTranslations } from "next-intl";
import { Clock3 } from "lucide-react";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function DateOfEffectSection() {
  const t = useTranslations("visa189DateOfEffectSection");

  return (
    <section
      id="doe"
      style={{ fontFamily: font }}
      className="bg-[#f5efe4] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8501e]">
            <span className="h-px w-6 bg-[#bf6b35]" />
            {t("eyebrow")}
          </div>

          <h2 className="text-[34px] font-semibold leading-tight text-[#2a1f14] md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-[#bf6b35]">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-4 max-w-[580px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)] md:text-[16px]">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto grid max-w-[820px] grid-cols-1 gap-8 rounded-[10px] border-[1.5px] border-[rgba(168,80,30,0.2)] bg-[#faf6f0] px-7 py-10 md:grid-cols-[auto_1fr] md:px-12 md:py-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(168,80,30,0.2)] bg-[linear-gradient(135deg,rgba(168,80,30,0.12),rgba(168,80,30,0.04))]">
            <Clock3 className="h-7 w-7 text-[#a8501e]" />
          </div>

          <div>
            <h3 className="mb-3 text-[26px] font-semibold text-[#2a1f14]">
              {t("card.title")}
            </h3>

            <p className="mb-4 text-[15px] leading-8 text-[rgba(42,31,20,0.6)]">
              <strong className="font-semibold text-[#2a1f14]">
                {t("card.p1Strong")}
              </strong>
              {t("card.p1")}
            </p>

            <p className="mb-4 text-[15px] leading-8 text-[rgba(42,31,20,0.6)]">
              {t("card.p2")}
            </p>

            <div className="mt-2 rounded-[6px] bg-[#ede5d8] px-5 py-4">
              <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.6)]">
                <strong className="font-semibold text-[#2a1f14]">
                  {t("example.strong")}
                </strong>
                {t("example.text")}
              </p>
            </div>

            <p className="mt-4 text-[15px] leading-8 text-[rgba(42,31,20,0.6)]">
              {t("card.p3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
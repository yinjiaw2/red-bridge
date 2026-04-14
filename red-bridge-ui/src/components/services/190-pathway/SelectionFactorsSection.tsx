"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Item = {
  title: string;
  desc: string;
  weight: string;
};

export default function SelectionFactorsSection() {
  const t = useTranslations("visa190.selectionFactors");
  const items = t.raw("items") as Item[];

  return (
    <section
      id="roi-factors"
      style={{ fontFamily: font }}
      className="bg-[#ede5d8] px-6 py-24 md:px-8"
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
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-4 rounded-[10px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] p-5 md:grid-cols-[56px_1fr_auto] md:items-start"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(168,80,30,0.08)] font-semibold text-[#a8501e]">
                {index + 1}
              </div>
              <div>
                <h3 className="mb-1 text-[18px] font-semibold text-[#2a1f14]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
                  {item.desc}
                </p>
              </div>
              <div className="inline-flex rounded-full bg-[rgba(90,125,94,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5a7d5e]">
                {item.weight}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

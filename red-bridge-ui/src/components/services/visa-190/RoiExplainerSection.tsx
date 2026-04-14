"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Step = {
  who: string;
  title: string;
  desc: string;
  time: string;
};

export default function RoiExplainerSection() {
  const t = useTranslations("visa190.roiExplainer");
  const steps = t.raw("steps") as Step[];

  return (
    <section
      id="how-it-works"
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
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[10px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] p-5 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#bf6b35,#8b3e18)] text-[13px] font-bold text-white">
                {index + 1}
              </div>
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#a8501e]">
                {step.who}
              </div>
              <h3 className="mb-2 text-[18px] font-semibold text-[#2a1f14]">
                {step.title}
              </h3>
              <p className="text-[14px] leading-6 text-[rgba(42,31,20,0.62)]">
                {step.desc}
              </p>
              <span className="mt-4 inline-block rounded-full bg-[#ede5d8] px-3 py-1 text-[11px] text-[rgba(42,31,20,0.55)]">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

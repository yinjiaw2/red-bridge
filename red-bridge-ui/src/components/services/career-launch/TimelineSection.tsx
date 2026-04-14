"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Step = {
  month: string;
  title: string;
  desc: string;
  chips: string[];
};

export default function TimelineSection() {
  const t = useTranslations("careerLaunch.timeline");
  const rawSteps = t.raw("steps");
  const steps = Array.isArray(rawSteps) ? (rawSteps as Step[]) : [];

  return (
    <section
      id="how-it-works"
      style={{fontFamily: font}}
      className="bg-[#2a1f14] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c97a45]">
            <span className="h-px w-6 bg-[#c97a45]" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-[#f5efe4] md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-[#c97a45]">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-7 text-[rgba(245,239,228,0.5)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative mx-auto max-w-[760px]">
          <div className="absolute bottom-10 left-[27px] top-7 hidden w-[2px] bg-[linear-gradient(to_bottom,#bf6b35,rgba(191,107,53,0.12))] md:block" />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={step.title} className="relative z-10 flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#bf6b35] bg-[#faf6f0] font-semibold text-[#bf6b35] shadow-[0_0_0_5px_rgba(191,107,53,0.12)]">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="pt-2">
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#c97a45]">
                    {step.month}
                  </div>
                  <h3 className="mb-2 text-[28px] font-semibold text-[#f5efe4]">
                    {step.title}
                  </h3>
                  <p className="max-w-[620px] text-[14px] leading-7 text-[rgba(245,239,228,0.58)]">
                    {step.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-[rgba(191,107,53,0.28)] bg-[rgba(191,107,53,0.16)] px-3 py-1 text-[11px] font-semibold tracking-[0.04em] text-[#d8a27a]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

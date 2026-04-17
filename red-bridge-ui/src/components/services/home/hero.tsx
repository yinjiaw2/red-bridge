"use client";

import { useTranslations } from "next-intl";

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
      className="bg-naviblue px-6 py-24 md:px-8 border-b border-white/10"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-lg font-bold uppercase tracking-widest text-highlight">
            <span className="h-px w-6 bg-highlight" />
            {t("eyebrow")}
          </div>
          <h2 className="text-4xl font-bold leading-tight font-serif text-white md:text-5xl font-serif">
            {t("title1")}
            <em className="not-italic text-highlight">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-lg leading-8 text-gray-300">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative mx-auto max-w-[760px]">
          <div className="absolute bottom-10 left-6 top-10 hidden w-0.5 bg-gradient-to-b from-brandred to-white/10 md:block" />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={step.title} className="relative z-10 flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brandred font-bold text-white shadow-md">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="pt-2">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-highlight">
                    {step.month}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white font-serif">
                    {step.title}
                  </h3>
                  <p className="max-w-[620px] text-base leading-relaxed text-gray-300">
                    {step.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-none border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-bold tracking-wider text-gray-300"
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

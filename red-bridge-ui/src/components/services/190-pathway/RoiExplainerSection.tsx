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
      className="bg-background px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-foreground md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[10px] border border-border bg-card p-5 text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
                {index + 1}
              </div>
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                {step.who}
              </div>
              <h3 className="mb-2 text-[18px] font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-[14px] leading-6 text-[rgba(42,31,20,0.62)]">
                {step.desc}
              </p>
              <span className="mt-4 inline-block rounded-full bg-muted px-3 py-1 text-[11px] text-muted-foreground">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



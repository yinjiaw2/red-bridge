"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Step = {
  number: string;
  title: string;
  desc: string;
  time: string;
};

export default function ProcessSection() {
  const t = useTranslations("employerPathway.process");
  const rawSteps = t.raw("steps");
  const steps = Array.isArray(rawSteps) ? (rawSteps as Step[]) : [];

  return (
    <section
      id="how-it-works"
      style={{ fontFamily: font }}
      className="bg-background px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-foreground md:text-[44px]">
            {t("title1")} <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="absolute top-6 left-[12.5%] right-[12.5%] hidden h-px bg-[linear-gradient(90deg,var(--color-primary),transparent)] xl:block" />
          {steps.map((step) => (
            <article key={step.number} className="relative text-center">
              <div className="relative z-[1] mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-[14px] font-bold text-white shadow-sm">
                {step.number}
              </div>
              <h3 className="text-[18px] font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-[14px] leading-7 text-muted-foreground">
                {step.desc}
              </p>
              <span className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                {step.time}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



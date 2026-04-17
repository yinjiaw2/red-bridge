"use client";

import { useTranslations } from "next-intl";

export function ServicesProcessSection() {
  const t = useTranslations("servicesHome.process");
  const steps = t.raw("steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="how-it-works" className="bg-card px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="text-lg font-bold uppercase tracking-[0.25em] text-primary">{t("eyebrow")}</p>
          <h2 className="mt-3 font-serif text-[2.6rem] leading-[0.98] text-foreground md:text-[3.2rem]">
            {t("title1")} <span className="text-primary">{t("title2")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("description")}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[18px] border border-border bg-background px-6 py-7 text-center shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 text-base font-semibold text-primary">
                {step.number}
              </div>
              <h3 className="mt-5 text-[1.45rem] leading-tight text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

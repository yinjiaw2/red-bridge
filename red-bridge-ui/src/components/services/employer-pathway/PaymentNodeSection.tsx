"use client";

import { useLocale, useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type PaymentStep = {
  number: string;
  label: string;
};

export default function PaymentNodeSection() {
  const locale = useLocale();
  const isChinese = locale.startsWith("zh");
  const t = useTranslations("employerPathway.paymentNode");
  const rawSteps = t.raw("steps");
  const steps = Array.isArray(rawSteps) ? (rawSteps as PaymentStep[]) : [];

  return (
    <section
      id="payment-nodes"
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
            {t("title1")}
            {!isChinese ? " " : ""}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto max-w-[900px]">
          <div className="relative space-y-0 before:absolute before:bottom-0 before:left-[23px] before:top-4 before:w-[2px] before:bg-border md:before:left-1/2 md:before:-ml-[1px]">
            {steps.map((step, index) => {
              const isHighlighted = step.number === "5" || step.number === "7";
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={[
                    "relative flex w-full items-center py-4",
                    isLeft ? "md:flex-row-reverse" : "md:flex-row",
                  ].join(" ")}
                >
                  {/* Timeline dot */}
                  <div
                    className={[
                      "absolute left-[24px] flex h-[40px] w-[40px] -translate-x-1/2 items-center justify-center rounded-full border-[4px] border-background text-[14px] font-bold transition-all duration-300 md:left-1/2",
                      isHighlighted
                        ? "z-10 scale-110 bg-primary text-white"
                        : "z-10 bg-background text-primary",
                    ].join(" ")}
                  >
                    {!isHighlighted && (
                      <div className="absolute inset-0 rounded-full bg-primary/10" />
                    )}
                    <span className="relative z-10">{step.number}</span>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={[
                      "ml-[60px] w-full md:ml-0 md:w-1/2",
                      isLeft ? "md:pr-10 lg:pr-12" : "md:pl-10 lg:pl-12",
                    ].join(" ")}
                  >
                    <article
                      className={[
                        "relative rounded-[10px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                        isLeft ? "md:text-right" : "text-left",
                        isHighlighted
                          ? "border-primary/40  shadow-md ring-1 ring-primary/20"
                          : "border-border bg-card",
                      ].join(" ")}
                    >
                      <h3
                        className={[
                          "font-semibold leading-7",
                          isHighlighted
                            ? "text-[18px] text-primary"
                            : "text-[17px] text-foreground",
                        ].join(" ")}
                      >
                        {step.label}
                      </h3>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

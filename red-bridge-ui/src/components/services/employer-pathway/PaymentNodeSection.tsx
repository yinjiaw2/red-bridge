"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type PaymentStep = {
  number: string;
  label: string;
};

export default function PaymentNodeSection() {
  const t = useTranslations("employerPathway.paymentNode");
  const rawSteps = t.raw("steps");
  const steps = Array.isArray(rawSteps) ? (rawSteps as PaymentStep[]) : [];
  const lastStepIndex = steps.length - 1;

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
            {t("title1")}{" "}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {steps.map((step, index) => {
            const isLast = index === lastStepIndex;

            return (
              <article
                key={step.number}
                className={[
                  "relative flex items-start gap-4 rounded-[10px] border p-6",
                  isLast
                    ? "md:col-span-2 xl:col-start-2 xl:col-span-4 border-primary/20 bg-primary/[0.04] shadow-[0_18px_40px_rgba(164,28,40,0.08)]"
                    : "border-border bg-card xl:col-span-2",
                ].join(" ")}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-[14px] font-bold text-white shadow-sm">
                  {step.number}
                </div>
                <div className="pt-1">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-primary/75">
                    {t("stepLabel")}
                  </p>
                  <h3
                    className={[
                      "mt-2 text-[17px] font-semibold leading-7 text-foreground",
                      isLast ? "text-[20px]" : "",
                    ].join(" ")}
                  >
                    {step.label}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

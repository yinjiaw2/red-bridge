"use client";

import { AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Step = {
  step: string;
  who: string;
  title: string;
  desc: string;
  time: string;
  type: "rb" | "ii" | "state" | "final";
  alert?: string;
};

function getDotClass(type: Step["type"]) {
  if (type === "ii") return "bg-primary";
  if (type === "state") return "bg-[linear-gradient(135deg,#4a6fa5,#2e4d7a)]";
  if (type === "final") return "bg-[linear-gradient(135deg,#2d6a4f,#1b4332)]";
  return "bg-primary";
}

function getWhoClass(type: Step["type"]) {
  if (type === "ii" || type === "final") return "text-primary";
  if (type === "state") return "text-[#4a6fa5]";
  return "text-primary";
}



export default function ProcessSection() {
  const t = useTranslations("visa190.process");
  const steps = t.raw("steps") as Step[];

  return (
    <section
      id="our-process"
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

        <div className="relative mx-auto max-w-[820px]">
          <div className="absolute bottom-10 left-[21px] top-10 hidden w-[2px] bg-[linear-gradient(to_bottom,var(--color-primary),transparent)] md:block" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.title} className="grid gap-4 md:grid-cols-[44px_1fr] md:gap-6">
                <div
                  className={`z-10 flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-bold text-white shadow-md ${getDotClass(step.type)}`}
                >
                  {step.step}
                </div>

                <div>
                  <div className={`mb-1 text-[11px] font-bold uppercase tracking-[0.14em] ${getWhoClass(step.type)}`}>
                    {step.who}
                  </div>
                  <h3 className="text-[22px] font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
                    {step.desc}
                  </p>
                  <span
                    className={`mt-3 inline-block rounded-full px-3 py-1 text-[11px] ${
                      step.type === "final"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.time}
                  </span>

                  {step.alert ? (
                    <div className="mt-4 flex gap-3 rounded-[10px] border border-primary/20 bg-primary/5 p-4">
                      <AlertTriangle size={18} className="mt-0.5 shrink-0 text-primary" />
                      <p className="text-[13px] leading-6 text-[rgba(42,31,20,0.7)]">
                        {step.alert}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



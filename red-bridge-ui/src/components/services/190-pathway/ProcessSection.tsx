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
  if (type === "ii") return "bg-[linear-gradient(135deg,#5a7d5e,#3d5c40)]";
  if (type === "state") return "bg-[linear-gradient(135deg,#4a6fa5,#2e4d7a)]";
  if (type === "final") return "bg-[linear-gradient(135deg,#2d6a4f,#1b4332)]";
  return "bg-[linear-gradient(135deg,#bf6b35,#8b3e18)]";
}

function getWhoClass(type: Step["type"]) {
  if (type === "ii" || type === "final") return "text-[#5a7d5e]";
  if (type === "state") return "text-[#4a6fa5]";
  return "text-[#a8501e]";
}

export default function ProcessSection() {
  const t = useTranslations("visa190.process");
  const steps = t.raw("steps") as Step[];

  return (
    <section
      id="our-process"
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

        <div className="relative mx-auto max-w-[820px]">
          <div className="absolute bottom-10 left-[21px] top-10 hidden w-[2px] bg-[linear-gradient(to_bottom,#bf6b35,rgba(168,80,30,0.12))] md:block" />

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
                  <h3 className="text-[22px] font-semibold text-[#2a1f14]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
                    {step.desc}
                  </p>
                  <span
                    className={`mt-3 inline-block rounded-full px-3 py-1 text-[11px] ${
                      step.type === "final"
                        ? "bg-[rgba(90,125,94,0.1)] text-[#5a7d5e]"
                        : "bg-[#ede5d8] text-[rgba(42,31,20,0.55)]"
                    }`}
                  >
                    {step.time}
                  </span>

                  {step.alert ? (
                    <div className="mt-4 flex gap-3 rounded-[10px] border border-[rgba(168,80,30,0.18)] bg-[rgba(168,80,30,0.05)] p-4">
                      <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#a8501e]" />
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

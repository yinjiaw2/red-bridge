"use client";

import { AlertTriangle, Info } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Step = {
  step: string;
  who: string;
  title: string;
  desc: string;
  time: string;
  type: "rb" | "ii" | "state" | "you" | "final";
  alert?: string;
  alertKind?: "warning" | "info";
};

function getDotClass(type: Step["type"]) {
  if (type === "ii") return "bg-[linear-gradient(135deg,#bf6b35,#8b3e18)]";
  if (type === "state") return "bg-[linear-gradient(135deg,#4a3f8f,#2e2b6b)]";
  if (type === "you") return "bg-[linear-gradient(135deg,#2d6a4f,#1b4332)]";
  if (type === "final") return "bg-[linear-gradient(135deg,#2d6a4f,#1b4332)]";
  return "bg-[linear-gradient(135deg,#5a7d5e,#3d5c40)]";
}

function getWhoClass(type: Step["type"]) {
  if (type === "ii") return "text-[#a8501e]";
  if (type === "state") return "text-[#4a3f8f]";
  if (type === "you") return "text-[rgba(42,31,20,0.45)]";
  return "text-[#5a7d5e]";
}

export default function ProcessSection() {
  const t = useTranslations("visa491.process");
  const rawSteps = t.raw("steps");
  const steps = Array.isArray(rawSteps) ? (rawSteps as Step[]) : [];

  return (
    <section
      id="process"
      style={{ fontFamily: font }}
      className="bg-[#f5efe4] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5a7d5e]">
            <span className="h-px w-6 bg-[#5a7d5e]" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-[#2a1f14] md:text-[44px]">
            {t("title1")}
            <br />
            <em className="not-italic text-[#5a7d5e]">{t("title2")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative mx-auto max-w-[820px]">
          <div className="absolute bottom-10 left-[21px] top-10 hidden w-[2px] bg-[linear-gradient(to_bottom,#5a7d5e,rgba(90,125,94,0.12))] md:block" />

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
                        ? "bg-[rgba(45,106,79,0.1)] text-[#2d6a4f]"
                        : "bg-[#ede5d8] text-[rgba(42,31,20,0.55)]"
                    }`}
                  >
                    {step.time}
                  </span>

                  {step.alert ? (
                    <div
                      className={`mt-4 flex gap-3 rounded-[10px] p-4 ${
                        step.alertKind === "info"
                          ? "border border-[rgba(90,125,94,0.18)] bg-[rgba(90,125,94,0.06)]"
                          : "border border-[rgba(168,80,30,0.18)] bg-[rgba(168,80,30,0.05)]"
                      }`}
                    >
                      {step.alertKind === "info" ? (
                        <Info size={18} className="mt-0.5 shrink-0 text-[#5a7d5e]" />
                      ) : (
                        <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#a8501e]" />
                      )}
                      <p className="text-[13px] leading-6 text-[rgba(42,31,20,0.72)]">
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

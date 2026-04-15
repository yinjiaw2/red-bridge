"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function PromiseSection() {
  const t = useTranslations("employerPathway.promise");
  const rawDoItems = t.raw("doItems");
  const rawDontItems = t.raw("dontItems");
  const doItems = Array.isArray(rawDoItems) ? (rawDoItems as string[]) : [];
  const dontItems = Array.isArray(rawDontItems) ? (rawDontItems as string[]) : [];

  return (
    <section
      id="our-promise"
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
            {t("title1")} <em className="not-italic text-[#bf6b35]">{t("titleHighlight")}</em>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <article>
            <h3 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#5a7d5e]">
              {t("doTitle")}
            </h3>
            <div className="space-y-1">
              {doItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[rgba(42,31,20,0.09)] py-4 last:border-b-0"
                >
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#5a7d5e]" />
                  <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.64)]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h3 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-[rgba(168,80,30,0.55)]">
              {t("dontTitle")}
            </h3>
            <div className="space-y-1">
              {dontItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[rgba(42,31,20,0.09)] py-4 last:border-b-0"
                >
                  <XCircle size={18} className="mt-1 shrink-0 text-[rgba(168,80,30,0.45)]" />
                  <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.64)]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function ServiceIntroSection() {
  const t = useTranslations("employerPathway.serviceIntro");
  const rawMainItems = t.raw("mainItems");
  const rawGuaranteeItems = t.raw("guaranteeItems");
  const mainItems = Array.isArray(rawMainItems) ? (rawMainItems as string[]) : [];
  const guaranteeItems = Array.isArray(rawGuaranteeItems) ? (rawGuaranteeItems as string[]) : [];

  return (
    <section
      id="service-structure"
      style={{ fontFamily: font }}
      className="bg-muted/40 px-6 py-24 md:px-8"
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

        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-[10px] border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 size={20} className="text-[#2d6a4f]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-foreground">{t("mainTitle")}</h3>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {t("mainSubtitle")}
                </p>
              </div>
            </div>
            <div className="space-y-0">
              {mainItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-border py-4 last:border-b-0"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-1 shrink-0 text-[#2d6a4f]"
                    aria-hidden="true"
                  />
                  <p className="text-[14px] leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[10px] border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck size={20} className="text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-foreground">
                  {t("guaranteeTitle")}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {t("guaranteeSubtitle")}
                </p>
              </div>
            </div>
            <p className="mb-4 text-[14px] leading-7 text-muted-foreground">
              {t("guaranteeDesc")}
            </p>
            <div className="space-y-0">
              {guaranteeItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-border py-4 last:border-b-0"
                >
                  <ShieldCheck
                    size={16}
                    className="mt-1 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-[14px] leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

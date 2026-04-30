"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function PromiseSection() {
  const locale = useLocale();
  const isChinese = locale.startsWith("zh");
  const t = useTranslations("employerPathway.promise");
  const rawDoItems = t.raw("doItems");
  const rawDontItems = t.raw("dontItems");
  const doItems = Array.isArray(rawDoItems) ? (rawDoItems as string[]) : [];
  const dontItems = Array.isArray(rawDontItems) ? (rawDontItems as string[]) : [];

  return (
    <section
      id="our-promise"
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
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <article>
            <h3 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-primary">
              {t("doTitle")}
            </h3>
            <div className="space-y-1">
              {doItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-border py-4 last:border-b-0"
                >
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#2d6a4f]" />
                  <p className="text-[14px] leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h3 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-primary/70">
              {t("dontTitle")}
            </h3>
            <div className="space-y-1">
              {dontItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-border py-4 last:border-b-0"
                >
                  <XCircle size={18} className="mt-1 shrink-0 text-primary/70" />
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


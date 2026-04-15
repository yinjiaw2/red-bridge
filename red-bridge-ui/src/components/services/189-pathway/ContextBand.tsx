"use client";

import { useTranslations } from "next-intl";
import { Info } from "lucide-react";

export default function ContextBand() {
  const t = useTranslations("visa189ContextBand");

  return (
    <section className="border-y border-border bg-background px-6 py-10">
      <div className="mx-auto max-w-[900px]">
        <div className="flex items-start gap-5 rounded-none border border-border bg-card p-8">
          <Info size={24} className="mt-1 shrink-0 text-primary" />

          <div>
            <h4 className="mb-2 text-lg font-bold text-foreground">{t("title")}</h4>

            <p className="text-base leading-relaxed text-muted-foreground">
              {t("text1")}
              <span className="font-semibold text-primary">{t("highlight")}</span>
              {t("text2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

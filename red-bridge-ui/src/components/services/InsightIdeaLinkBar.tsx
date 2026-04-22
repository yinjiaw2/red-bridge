"use client";

import { ExternalLink, Scale } from "lucide-react";
import { useTranslations } from "next-intl";

export default function InsightIdeaLinkBar() {
  const t = useTranslations("insightIdeaLinkBar");

  return (
    <section className="border-y border-primary/20 bg-primary/5 px-6 py-4">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-3 text-center text-[13px] text-muted-foreground">
        <Scale size={16} className="shrink-0 text-primary" aria-hidden="true" />
        <span>
          <strong className="font-semibold text-foreground">{t("label")}</strong>{" "}
          {t("body")}
        </span>
        <a
          href={t("linkHref")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[12px] font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md"
        >
          {t("linkText")}
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

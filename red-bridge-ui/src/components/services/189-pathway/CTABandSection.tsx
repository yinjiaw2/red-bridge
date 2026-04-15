"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, FileCheck2, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  const t = useTranslations("visa189CtaSection");

  const trustItems = [
    { icon: <ShieldCheck className="h-4 w-4" />, text: t("trust.0") },
    { icon: <FileCheck2 className="h-4 w-4" />, text: t("trust.1") },
    { icon: <CalendarDays className="h-4 w-4" />, text: t("trust.2") },
  ];

  return (
    <section id="cta" className="relative overflow-hidden bg-secondary px-6 py-24 text-center md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-[920px]">
        <h2 className="font-serif text-[34px] font-bold leading-tight text-white md:text-[52px]">
          {t("title1")}
          <em className="not-italic text-accent">{t("titleHighlight")}</em>
        </h2>

        <p className="mx-auto mt-4 max-w-[560px] text-base leading-8 text-white/80 md:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
          {trustItems.map((item, index) => (
            <span key={index} className="inline-flex items-center gap-2 text-sm text-white/80">
              <span className="text-accent">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>

        <div className="mt-9">
          <Button
            asChild
            className="h-14 rounded-none bg-card px-10 text-[15px] font-bold uppercase tracking-widest text-secondary shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-95"
          >
            <a href="/contact?src=189_cta">{t("button")}</a>
          </Button>
        </div>

        <p className="mt-4 text-sm text-white/60">{t("footnote")}</p>
      </div>
    </section>
  );
}


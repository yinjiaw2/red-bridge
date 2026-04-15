"use client";

import { useTranslations } from "next-intl";
import { CheckCircle, Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const t = useTranslations("visa189HeroSection");

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center border-b border-border bg-background px-6 py-28 text-center">
      <div className="w-full max-w-[820px]">
        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
          {t("eyebrow")}
        </div>

        <h1 className="mb-6 font-serif text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-tight text-foreground">
          {t("title1")} <br />
          <span className="text-primary">{t("title2")}</span>
        </h1>

        <p className="mx-auto mb-8 max-w-[600px] text-lg leading-relaxed text-muted-foreground">
          {t("description")}
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          {[t("trust1"), t("trust2"), t("trust3"), t("trust4")].map((item) => (
            <span key={item} className="flex items-center gap-1">
              <CheckCircle size={14} className="text-primary" />
              {item}
            </span>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <Button className="h-14 rounded-none bg-primary px-10 text-[15px] font-bold uppercase tracking-widest text-primary-foreground shadow-md transition-colors hover:opacity-90">
            <Calculator size={20} className="mr-2" />
            <span>{t("primary")}</span>
          </Button>

          <Button
            variant="outline"
            className="h-14 rounded-none border-primary px-10 text-[15px] font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary/5 hover:text-primary"
          >
            <span>{t("secondary")}</span>
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-2 overflow-hidden rounded-none border border-border bg-card shadow-md md:grid-cols-4">
          {[
            { num: "65+", label: t("stat1") },
            { num: "85+", label: t("stat2") },
            { num: "4x", label: t("stat3") },
            { num: "300+", label: t("stat4") },
          ].map((item, i) => (
            <div
              key={i}
              className="border-b border-r border-border p-5 text-center last:border-r-0 md:border-b-0"
            >
              <div className="mb-1 text-3xl font-bold text-primary">{item.num}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const t = useTranslations("careerLaunch.hero");
  const rawPills = t.raw("pills");
  const rawStats = t.raw("stats");
  const pills = Array.isArray(rawPills) ? (rawPills as string[]) : [];
  const stats = Array.isArray(rawStats)
    ? (rawStats as Array<{ value: string; label: string }>)
    : [];

  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center justify-center border-b border-border bg-background px-6 py-28 text-center"
    >
      <div className="w-full max-w-[820px]">
        <div className="mb-4 text-lg font-bold uppercase tracking-widest text-primary">
          {t("eyebrow")}
        </div>

        <h1 className="mb-6 font-serif text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-tight text-foreground">
          {t("title1")}
          <br />
          <span className="text-primary">{t("title2")}</span>
        </h1>

        <p className="mx-auto mb-8 max-w-[600px] text-lg leading-relaxed text-muted-foreground">
          {t("subtitle")}
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          {pills.map((pill) => (
            <span
              key={pill}
              className="flex items-center gap-1"
            >
              <CheckCircle size={14} className="text-[#2d6a4f]" />
              {pill}
            </span>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="h-14 rounded-full bg-primary px-10 text-[15px] font-bold uppercase tracking-widest text-primary-foreground shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-95"
          >
            <Link href="/contact?src=career_launch_hero_cta">
              {t("primaryCta")}
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              document
                .getElementById("overview")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="h-14 rounded-full border-primary px-10 text-[15px] font-bold uppercase tracking-widest text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/5 hover:text-primary hover:shadow-md"
          >
            <span>{t("secondaryCta")}</span>
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>

        <div className="grid overflow-hidden rounded-none border border-border bg-card shadow-md md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-b border-r border-border p-5 text-center last:border-r-0 md:border-b-0"
            >
              <div className="mb-1 text-3xl font-bold text-primary">
                {item.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

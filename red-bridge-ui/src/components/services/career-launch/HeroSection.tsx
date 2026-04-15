"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
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
      className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-white border-b border-gray-200 px-6 py-24 text-center"
    >
      <div className="relative z-10 mx-auto max-w-[860px]">
        <div className="mb-5 inline-flex items-center rounded-none border border-brandred bg-brandred/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-brandred">
          {t("eyebrow")}
        </div>

        <h1 className="mb-6 text-6xl font-bold leading-tight font-serif text-naviblue font-serif">
          {t("title1")}
          <br />
          <span className="text-brandred">{t("title2")}</span>
        </h1>

        <p className="mx-auto mb-6 max-w-[620px] text-lg leading-relaxed text-gray-600">
          {t("subtitle")}
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {pills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 rounded-none border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
            >
              <CheckCircle2 size={16} className="text-green-600" />
              {pill}
            </span>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
        <Button
          asChild
          className="h-14 rounded-none bg-brandred px-10 text-[15px] font-bold uppercase tracking-widest text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-95"
        >
          <Link href="/booking?src=career_launch_hero_cta">
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
          className="h-14 rounded-none border-brandred px-10 text-[15px] font-bold uppercase tracking-widest text-brandred transition-all duration-200 hover:-translate-y-0.5 hover:border-brandred/50 hover:bg-brandred/5 hover:text-brandred hover:shadow-md"
        >
          {t("secondaryCta")}
        </Button>
        </div>

        <div className="grid overflow-hidden rounded-none border border-gray-200 bg-gray-50 shadow-sm md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-b border-gray-200 p-6 text-center last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0"
            >
              <div className="mb-1 text-3xl font-bold text-brandred">
                {item.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

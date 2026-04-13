"use client";
import Link from "next/link";
import {
  Monitor,
  TrendingUp,
  Megaphone,
  HardHat,
  HeartPulse,
  ShieldCheck,
  Lock,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface EmployerCategory {
  title: string;
  count: number;
  iconKey: string;
}

const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  trendingUp: TrendingUp,
  megaphone: Megaphone,
  hardHat: HardHat,
  heartPulse: HeartPulse,
};

export const EmployerNetwork = () => {
  const t = useTranslations("employerNetwork");
  const categories = t.raw("categories") as EmployerCategory[];

  return (
    <section id="employer-network" className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[0.75rem] font-bold tracking-[0.2em] text-[#a28e7e] uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#a28e7e]/40"></span>
            {t("eyebrow")}
            <span className="w-8 h-px bg-[#a28e7e]/40"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d241e] mb-6">
            {t("headingMain")}
            <span className="text-[#7c5a43] italic ml-2">{t("headingHighlight")}</span>
          </h2>
          <p className="text-[#928276] text-lg max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Verified status */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e1e9d6] px-5 py-2 text-xs font-bold text-[#5c7247] mb-8">
            <ShieldCheck className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            <span>{t("verifiedBadge")}</span>
          </div>
          <p className="text-[#928276] text-[1rem] leading-relaxed font-medium">
            {t("detailDescription")}
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.iconKey] ?? Monitor;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-8 bg-[#fbf9f4] border border-[#e8dfd4] rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#7c5a43]/5 hover:-translate-y-1"
              >
                <div className="text-[#7c5a43] mb-6 p-4 bg-[#ebdccf]/30 rounded-xl">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h4 className="text-[#2d241e] font-bold text-sm md:text-base mb-2">
                  {cat.title}
                </h4>
                <div className="text-3xl font-serif font-bold text-[#7c5a43] mb-1">
                  {cat.count}
                </div>
                <p className="text-[#a28e7e] text-xs font-medium uppercase tracking-wider">
                  {t("verifiedLabel")}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white px-8 py-4 rounded-2xl border border-[#e8dfd4] shadow-sm text-sm text-[#928276]">
          <Lock className="h-4 w-4 text-[#5c7247]" strokeWidth={1.5} aria-hidden="true" />
          <span>{t("disclaimer")}</span>
          <Link
            href="/booking"
            className="text-[#b45309] font-bold flex items-center gap-1 hover:underline underline-offset-4 decoration-2"
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmployerNetwork;

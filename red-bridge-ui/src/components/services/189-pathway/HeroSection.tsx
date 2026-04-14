"use client";

import { useTranslations } from "next-intl";
import { CheckCircle, Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const t = useTranslations("visa189HeroSection");

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-white px-6 py-28 text-center border-b border-gray-200">
      <div className="max-w-[820px] w-full">
        {/* eyebrow */}
        <div className="text-sm font-bold tracking-widest uppercase text-brandred mb-4">
          {t("eyebrow")}
        </div>

        {/* title */}
        <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-serif leading-tight font-bold text-naviblue mb-6">
          {t("title1")} <br />
          <span className="text-brandred">{t("title2")}</span>
        </h1>

        {/* subtitle */}
        <p className="text-lg text-gray-600 leading-relaxed max-w-[600px] mx-auto mb-8">
          {t("description")}
        </p>

        {/* trust */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-10">
          <span className="flex items-center gap-1">
            <CheckCircle size={14} className="text-[#5a7d5e]" />
            {t("trust1")}
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={14} className="text-[#5a7d5e]" />
            {t("trust2")}
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={14} className="text-[#5a7d5e]" />
            {t("trust3")}
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={14} className="text-[#5a7d5e]" />
            {t("trust4")}
          </span>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {/* primary */}
          <Button className="h-14 rounded-none bg-brandred px-10 text-[15px] font-bold uppercase tracking-widest text-white hover:bg-red-800 transition-colors shadow-md">
            <Calculator size={20} className="mr-2" />
            <span>{t("primary")}</span>
          </Button>

          {/* secondary */}
          <Button
            variant="outline"
            className="h-14 rounded-none border-brandred px-10 text-[15px] font-bold uppercase tracking-widest text-brandred hover:bg-brandred/5 hover:text-brandred transition-colors"
          >
            <span>{t("secondary")}</span>
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 rounded-none overflow-hidden bg-gray-50 shadow-md">
          {[
            { num: "65+", label: t("stat1") },
            { num: "85+", label: t("stat2") },
            { num: "4×", label: t("stat3") },
            { num: "300+", label: t("stat4") },
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 border-r border-b border-gray-200 md:border-b-0 last:border-r-0 text-center"
            >
              <div className="text-3xl font-bold text-brandred mb-1">
                {item.num}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

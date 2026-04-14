"use client";

import { useTranslations } from "next-intl";
import { CheckCircle, Calculator } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("visa189HeroSection");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-[#e8d9c4] via-[#f5efe4] to-[#ede5d8]">

      <div className="max-w-[820px] w-full">

        {/* eyebrow */}
        <div className="text-[11px] tracking-[0.2em] uppercase text-[#a8501e] mb-3 font-medium">
          {t("eyebrow")}
        </div>

        {/* title */}
        <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.05] font-semibold text-[#2a1f14] mb-5">
          {t("title1")} <br />
          <span className="text-[#bf6b35]">{t("title2")}</span>
        </h1>

        {/* subtitle */}
        <p className="text-[16px] text-[rgba(42,31,20,0.65)] leading-[1.8] max-w-[600px] mx-auto mb-6">
          {t("description")}
        </p>

        {/* trust */}
        <div className="flex flex-wrap justify-center gap-4 text-[12px] text-[rgba(42,31,20,0.55)] mb-8">
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
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#bf6b35] to-[#8b3e18] text-white px-8 py-4 rounded-full font-semibold text-[15px] shadow-lg hover:translate-y-[-2px] transition">
            <Calculator size={18} />
            {t("primary")}
          </button>

          {/* secondary */}
          <button className="px-6 py-4 border border-[rgba(42,31,20,0.15)] rounded-full text-[14px] text-[rgba(42,31,20,0.7)] hover:border-[#a8501e] hover:text-[#a8501e] transition">
            {t("secondary")}
          </button>
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[rgba(42,31,20,0.1)] rounded-md overflow-hidden bg-[#faf6f0] shadow-xl">

          {[
            { num: "65+", label: t("stat1") },
            { num: "85+", label: t("stat2") },
            { num: "4×", label: t("stat3") },
            { num: "300+", label: t("stat4") },
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 border-r border-b md:border-b-0 last:border-r-0 text-center"
            >
              <div className="text-[22px] font-semibold bg-gradient-to-r from-[#bf6b35] to-[#8b3e18] bg-clip-text text-transparent mb-1">
                {item.num}
              </div>
              <div className="text-[11px] text-[rgba(42,31,20,0.5)] leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
"use client";

import { useTranslations } from "next-intl";

interface Stat {
  value: string;
  label: string;
}

export default function SuccessCasesHero() {
  const t = useTranslations("successCasesHero");
  const stats = t.raw("stats") as Stat[];

  return (
    <section className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow — lines on both sides */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="flex-1 max-w-16 h-px bg-[#c9a98a]" />
          <span className="text-[0.68rem] font-bold tracking-[0.2em] text-[#9a7a5e] uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-[#c9a98a]" />
        </div>

        {/* Heading */}
        <h1
          className="text-center font-bold text-[#1a1209] leading-tight mb-7"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="block text-4xl md:text-5xl lg:text-[3.5rem]">
            {t("headingLine1")}
          </span>
          <span className="block text-4xl md:text-5xl lg:text-[3.5rem]">
            {t("headingLine2")}{" "}
            <span className="text-[#A20000]">{t("headingHighlight")}</span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-center text-[#6b5a4e] text-[14px] md:text-[15px] leading-relaxed max-w-2xl mx-auto mb-12">
          {t("description")}
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-xl border border-[#ede7df] px-6 py-4"
            >
              <span
                className="text-2xl font-bold text-[#1a1209]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {stat.value}
              </span>
              <span className="text-[12px] text-[#6b5a4e] leading-snug max-w-32">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="bg-gray-50 py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow — lines on both sides */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="flex-1 max-w-16 h-px bg-brandred" />
          <span className="text-sm font-bold tracking-widest text-brandred uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-brandred" />
        </div>

        {/* Heading */}
        <h1 className="text-center font-extrabold text-naviblue leading-tight font-serif mb-7">
          <span className="block text-4xl font-extrabold md:text-5xl lg:text-[3.5rem]">
            {t("headingLine1")}
          </span>
          <span className="block text-4xl font-extrabold md:text-5xl lg:text-[3.5rem]">
            {t("headingLine2")}{" "}
            <span className="font-extrabold text-brandred">{t("headingHighlight")}</span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          {t("description")}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-4 bg-white rounded-none border border-gray-200 shadow-sm px-4 lg:px-6 py-5"
            >
              <span className="text-3xl font-bold text-brandred">
                {stat.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 leading-snug max-w-32">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

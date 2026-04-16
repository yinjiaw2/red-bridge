"use client";

import { useTranslations } from "next-intl";
import { Award, Building2, BadgeCheck, TrendingUp } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  award: <Award className="h-5 w-5" aria-hidden="true" />,
  building2: <Building2 className="h-5 w-5" aria-hidden="true" />,
  badgeCheck: <BadgeCheck className="h-5 w-5" aria-hidden="true" />,
  trendingUp: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
};

interface Card {
  iconKey: string;
  title: string;
  description: string;
}

export default function SuccessCasesWhy() {
  const t = useTranslations("successCasesWhy");
  const cards = t.raw("cards") as Card[];

  return (
    <section className="bg-white py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl font-bold text-naviblue leading-tight font-serif mb-6"
        >
          {t("headingMain")}{" "}
          <span className="text-brandred">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14">
          {t("description")}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-none border-t-4 border-t-naviblue shadow-md border border-gray-100 p-8 flex flex-col gap-5 transition-shadow hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-brandred/10 flex items-center justify-center text-brandred shrink-0">
                {ICON_MAP[card.iconKey]}
              </div>
              <h3 className="font-sans text-xl font-black leading-snug tracking-tight text-naviblue">
                {card.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { Award, Building2, BadgeCheck, TrendingUp } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  award:      <Award className="h-5 w-5" aria-hidden="true" />,
  building2:  <Building2 className="h-5 w-5" aria-hidden="true" />,
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
    <section className="bg-white py-20 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl font-bold text-[#1a1209] leading-tight mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("headingMain")}{" "}
          <span className="text-[#A20000]">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-center text-[#6b5a4e] text-[14px] md:text-[15px] leading-relaxed max-w-2xl mx-auto mb-14">
          {t("description")}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-brandbackground rounded-2xl border border-[#ede7df] p-6 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f5ece1] flex items-center justify-center text-[#b3592a] shrink-0">
                {ICON_MAP[card.iconKey]}
              </div>
              <h3 className="text-[#1a1209] font-bold text-[15px] leading-snug">
                {card.title}
              </h3>
              <p className="text-[#6b5a4e] text-[13px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

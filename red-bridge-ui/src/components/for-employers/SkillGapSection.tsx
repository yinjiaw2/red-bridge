"use client";

import { useTranslations } from "next-intl";
import { Search, Clock, FileText, UserSearch } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  search: <Search className="h-5 w-5" aria-hidden="true" />,
  clock: <Clock className="h-5 w-5" aria-hidden="true" />,
  fileText: <FileText className="h-5 w-5" aria-hidden="true" />,
  userSearch: <UserSearch className="h-5 w-5" aria-hidden="true" />,
};

interface Card {
  iconKey: string;
  title: string;
  description: string;
}

export default function SkillsgGapSection() {
  const t = useTranslations("employerWhy");
  const cards = t.raw("cards") as Card[];

  return (
    <section className="bg-white py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="flex-1 max-w-16 h-px bg-brandred" />
          <span className="text-lg font-bold tracking-widest text-brandred uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-brandred" />
        </div>

        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl font-bold text-naviblue leading-tight font-serif mb-5"
        >
          {t("headingMain")}{" "}
          <span className="text-brandred">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-14">
          {t("description")}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-none p-8 shadow-lg border-t-4 border-t-naviblue flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-brandred shrink-0">
                {ICON_MAP[card.iconKey]}
              </div>
              <h3 className="text-naviblue font-bold text-lg font-serif leading-snug">
                {card.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="flex-1 max-w-16 h-px bg-[#c9a98a]" />
          <span className="text-[0.68rem] font-bold tracking-[0.2em] text-[#9a7a5e] uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-[#c9a98a]" />
        </div>

        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl font-bold text-[#1a1209] leading-tight mb-5"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("headingMain")}{" "}
          <span className="text-[#A20000]">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-center text-[#6b5a4e] text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-14">
          {t("description")}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#ede7df] flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f5ece1] flex items-center justify-center text-[#b3592a] shrink-0">
                {ICON_MAP[card.iconKey]}
              </div>
              <h3 className="text-[#1a1209] font-semibold text-[15px] leading-snug">
                {card.title}
              </h3>
              <p className="text-[#6b5a4e] text-[13px] leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer tagline */}
        <div className="flex flex-col items-center gap-2 pt-8 border-t border-[#e2d9d0]">
          <p
            className="text-[#1a1209] text-lg md:text-xl font-semibold text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("footerLine1")}
          </p>
          <p className="text-[#6b5a4e] text-base text-center">
            {t("footerLine2")}
          </p>
        </div>
      </div>
    </section>
  );
}

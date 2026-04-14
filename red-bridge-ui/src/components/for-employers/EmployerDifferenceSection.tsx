"use client";

import { useTranslations } from "next-intl";
import {
  UserCheck,
  Scale,
  TrendingUp,
  DollarSign,
  Building2,
  Users,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  userCheck:   <UserCheck className="h-5 w-5" aria-hidden="true" />,
  scale:       <Scale className="h-5 w-5" aria-hidden="true" />,
  trendingUp:  <TrendingUp className="h-5 w-5" aria-hidden="true" />,
  dollarSign:  <DollarSign className="h-5 w-5" aria-hidden="true" />,
  building2:   <Building2 className="h-5 w-5" aria-hidden="true" />,
  users:       <Users className="h-5 w-5" aria-hidden="true" />,
};

interface DiffCard {
  iconKey: string;
  title: string;
  description: string;
}

export default function EmployerDifferenceSection() {
  const t = useTranslations("employerDifference");
  const cards = t.raw("cards") as DiffCard[];

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
          className="text-center text-4xl md:text-5xl font-bold text-[#1a1209] leading-tight mb-14"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("headingMain")}{" "}
          <span className="text-[#A20000]">{t("headingHighlight")}</span>
        </h2>

        {/* 3×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#ede7df] p-7 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#f5ece1] flex items-center justify-center text-[#b3592a] shrink-0">
                {ICON_MAP[card.iconKey]}
              </div>

              {/* Title */}
              <h3 className="text-[#1a1209] font-semibold text-[15px] leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#6b5a4e] text-[13px] leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

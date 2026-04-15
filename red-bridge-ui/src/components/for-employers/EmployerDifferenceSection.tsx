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
  userCheck: <UserCheck className="h-5 w-5" aria-hidden="true" />,
  scale: <Scale className="h-5 w-5" aria-hidden="true" />,
  trendingUp: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
  dollarSign: <DollarSign className="h-5 w-5" aria-hidden="true" />,
  building2: <Building2 className="h-5 w-5" aria-hidden="true" />,
  users: <Users className="h-5 w-5" aria-hidden="true" />,
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
    <section className="bg-gray-50 py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="flex-1 max-w-16 h-px bg-gray-300" />
          <span className="text-[0.75rem] font-bold tracking-widest text-brandred uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-gray-300" />
        </div>

        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl font-bold text-naviblue leading-tight font-serif mb-14"
        >
          {t("headingMain")}{" "}
          <span className="text-brandred">{t("headingHighlight")}</span>
        </h2>

        {/* 3×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-none border-t-4 border-t-naviblue shadow-md p-8 flex flex-col gap-5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-none bg-gray-100 flex items-center justify-center text-brandred shrink-0">
                {ICON_MAP[card.iconKey]}
              </div>

              {/* Title */}
              <h3 className="text-naviblue font-bold text-lg font-serif leading-snug">
                {card.title}
              </h3>

              {/* Description */}
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

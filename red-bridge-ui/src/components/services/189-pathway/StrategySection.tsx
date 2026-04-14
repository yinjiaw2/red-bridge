"use client";

import { useTranslations } from "next-intl";
import {
  Briefcase,
  Calculator,
  ClipboardCheck,
  Languages,
  MapPin,
  Users,
} from "lucide-react";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type StrategyCard = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge: string;
};

export default function StrategySection() {
  const t = useTranslations("visa189StrategySection");

  const cards: StrategyCard[] = [
    {
      icon: <Calculator className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.0.title"),
      desc: t("cards.0.desc"),
      badge: t("cards.0.badge"),
    },
    {
      icon: <Languages className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.1.title"),
      desc: t("cards.1.desc"),
      badge: t("cards.1.badge"),
    },
    {
      icon: <ClipboardCheck className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.2.title"),
      desc: t("cards.2.desc"),
      badge: t("cards.2.badge"),
    },
    {
      icon: <Briefcase className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.3.title"),
      desc: t("cards.3.desc"),
      badge: t("cards.3.badge"),
    },
    {
      icon: <Users className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.4.title"),
      desc: t("cards.4.desc"),
      badge: t("cards.4.badge"),
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.5.title"),
      desc: t("cards.5.desc"),
      badge: t("cards.5.badge"),
    },
  ];

  return (
    <section
      id="strategy"
      style={{ fontFamily: font }}
      className="bg-[#ede5d8] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8501e]">
            <span className="h-px w-6 bg-[#bf6b35]" />
            {t("eyebrow")}
          </div>

          <h2 className="text-[34px] font-semibold leading-tight text-[#2a1f14] md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-[#bf6b35]">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)] md:text-[16px]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[8px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(42,31,20,0.1)]"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 bg-[linear-gradient(135deg,#bf6b35_0%,#8b3e18_100%)] transition-transform duration-300 group-hover:scale-x-100" />

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[rgba(168,80,30,0.07)]">
                {card.icon}
              </div>

              <h4 className="mb-2 text-[18px] font-semibold text-[#2a1f14]">
                {card.title}
              </h4>

              <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.6)]">
                {card.desc}
              </p>

              <span className="mt-4 inline-block rounded-full bg-[rgba(168,80,30,0.07)] px-3 py-1 text-[12px] font-bold text-[#bf6b35]">
                {card.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
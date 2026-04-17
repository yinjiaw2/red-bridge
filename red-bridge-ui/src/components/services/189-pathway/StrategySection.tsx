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

type StrategyCard = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge: string;
};

export default function StrategySection() {
  const t = useTranslations("visa189StrategySection");

  const cards: StrategyCard[] = [
    { icon: <Calculator className="h-5 w-5 text-primary" />, title: t("cards.0.title"), desc: t("cards.0.desc"), badge: t("cards.0.badge") },
    { icon: <Languages className="h-5 w-5 text-primary" />, title: t("cards.1.title"), desc: t("cards.1.desc"), badge: t("cards.1.badge") },
    { icon: <ClipboardCheck className="h-5 w-5 text-primary" />, title: t("cards.2.title"), desc: t("cards.2.desc"), badge: t("cards.2.badge") },
    { icon: <Briefcase className="h-5 w-5 text-primary" />, title: t("cards.3.title"), desc: t("cards.3.desc"), badge: t("cards.3.badge") },
    { icon: <Users className="h-5 w-5 text-primary" />, title: t("cards.4.title"), desc: t("cards.4.desc"), badge: t("cards.4.badge") },
    { icon: <MapPin className="h-5 w-5 text-primary" />, title: t("cards.5.title"), desc: t("cards.5.desc"), badge: t("cards.5.badge") },
  ];

  return (
    <section id="strategy" className="border-b border-border bg-muted px-6 py-24 md:px-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-lg font-bold uppercase tracking-widest text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {t("title1")}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-lg leading-8 text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-none border border-border border-t-4 border-t-secondary bg-card p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                {card.icon}
              </div>

              <h4 className="mb-2 font-serif text-xl font-bold text-foreground">{card.title}</h4>
              <p className="text-base leading-relaxed text-muted-foreground">{card.desc}</p>

              <span className="mt-5 inline-block rounded-none border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                {card.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

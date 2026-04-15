"use client";

import { CheckCircle2, CircleDot, MinusCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Card = {
  badge: string;
  title: string;
  items: string[];
};

export default function ComparisonSection() {
  const t = useTranslations("visa190.comparison");
  const cards = t.raw("cards") as Card[];

  return (
    <section
      id="how-190-differs"
      style={{ fontFamily: font }}
      className="bg-background px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>

          <h2 className="text-[34px] font-semibold leading-tight text-foreground md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={`overflow-hidden rounded-[12px] border ${
                index === 1
                  ? "border-primary/25 bg-card shadow-sm"
                  : "border-border bg-card"
              }`}
            >
              <div
                className={`border-b border-border p-6 ${
                  index === 1
                    ? "bg-primary"
                    : ""
                }`}
              >
                <div
                  className={`mb-2 text-[11px] font-bold uppercase tracking-[0.14em] ${
                    index === 1 ? "text-white/70" : "text-[rgba(42,31,20,0.45)]"
                  }`}
                >
                  {card.badge}
                </div>
                <h3 className={`text-[22px] font-semibold ${index === 1 ? "text-white" : "text-foreground"}`}>
                  {card.title}
                </h3>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {card.items.map((item, i) => (
  <div
    key={item}
    className="flex gap-3 border-b border-border pb-4 last:border-b-0 last:pb-0"
  >
    {/* 左边卡片 */}
    {index === 0 ? (
      i < 2 ? (
        <MinusCircle size={16} className="mt-1 shrink-0 text-[rgba(42,31,20,0.45)]" />
      ) : (
        <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#2d6a4f]" />
      )
    ) : (
      /* 右边卡片 */
      i === 2 || i === 4 ? (
        <CircleDot size={16} className="mt-1 shrink-0 text-primary" />
      ) : (
        <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#2d6a4f]" />
      )
    )}

    <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
      {item}
    </p>
  </div>
))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-[13px] text-[rgba(42,31,20,0.5)]">
          {t("note")}
        </p>
      </div>
    </section>
  );
}



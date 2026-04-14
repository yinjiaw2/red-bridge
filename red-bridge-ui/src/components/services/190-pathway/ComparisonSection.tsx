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
      className="bg-[#f5efe4] px-6 py-24 md:px-8"
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

          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={`overflow-hidden rounded-[12px] border ${
                index === 1
                  ? "border-[rgba(168,80,30,0.25)] bg-[#faf6f0] shadow-[0_6px_28px_rgba(168,80,30,0.08)]"
                  : "border-[rgba(42,31,20,0.09)] bg-[#faf6f0]"
              }`}
            >
              <div
                className={`border-b border-[rgba(42,31,20,0.09)] p-6 ${
                  index === 1
                    ? "bg-[linear-gradient(135deg,#bf6b35,#8b3e18)]"
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
                <h3 className={`text-[22px] font-semibold ${index === 1 ? "text-white" : "text-[#2a1f14]"}`}>
                  {card.title}
                </h3>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {card.items.map((item) => (
                    <div key={item} className="flex gap-3 border-b border-[rgba(42,31,20,0.09)] pb-4 last:border-b-0 last:pb-0">
                      {index === 0 ? (
                        item.startsWith("No") || item.startsWith("无") ? (
                          <MinusCircle size={16} className="mt-1 shrink-0 text-[rgba(42,31,20,0.45)]" />
                        ) : (
                          <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#5a7d5e]" />
                        )
                      ) : item.startsWith("Must") || item.startsWith("获签后必须") || item.startsWith("Two-step") || item.startsWith("两步流程") ? (
                        <CircleDot size={16} className="mt-1 shrink-0 text-[#a8501e]" />
                      ) : (
                        <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#a8501e]" />
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

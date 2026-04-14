"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Card = {
  label: string;
  title: string;
  desc: string;
};

export default function VictoriaPrioritiesSection() {
  const t = useTranslations("visa190.priorities");
  const cards = t.raw("cards") as Card[];

  return (
    <section
      id="victoria-priorities"
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
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[10px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] p-6"
            >
              <div className="mb-3 inline-flex rounded-full bg-[rgba(168,80,30,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a8501e]">
                {card.label}
              </div>
              <h3 className="mb-3 text-[20px] font-semibold text-[#2a1f14]">
                {card.title}
              </h3>
              <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
                {card.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-[13px] text-[rgba(42,31,20,0.5)]">
          {t("sourceText")}{" "}
          <a
            href={t("sourceLink1Href")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a7d5e] underline underline-offset-4"
          >
            {t("sourceLink1Text")}
          </a>{" "}
          ·{" "}
          <a
            href={t("sourceLink2Href")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a7d5e] underline underline-offset-4"
          >
            {t("sourceLink2Text")}
          </a>
        </p>
      </div>
    </section>
  );
}

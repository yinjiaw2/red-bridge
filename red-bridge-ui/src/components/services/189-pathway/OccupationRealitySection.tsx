"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Tier = {
  label: string;
  title: string;
  desc: string;
  score: string;
  scoreLabel: string;
  variant: "hard" | "mid" | "easy";
};

export default function OccupationRealitySection() {
  const t = useTranslations("visa189OccupationRealitySection");

  const tiers: Tier[] = [
    {
      label: t("tiers.0.label"),
      title: t("tiers.0.title"),
      desc: t("tiers.0.desc"),
      score: t("tiers.0.score"),
      scoreLabel: t("tiers.0.scoreLabel"),
      variant: "hard",
    },
    {
      label: t("tiers.1.label"),
      title: t("tiers.1.title"),
      desc: t("tiers.1.desc"),
      score: t("tiers.1.score"),
      scoreLabel: t("tiers.1.scoreLabel"),
      variant: "hard",
    },
    {
      label: t("tiers.2.label"),
      title: t("tiers.2.title"),
      desc: t("tiers.2.desc"),
      score: t("tiers.2.score"),
      scoreLabel: t("tiers.2.scoreLabel"),
      variant: "mid",
    },
    {
      label: t("tiers.3.label"),
      title: t("tiers.3.title"),
      desc: t("tiers.3.desc"),
      score: t("tiers.3.score"),
      scoreLabel: t("tiers.3.scoreLabel"),
      variant: "easy",
    },
  ];

  const labelClass = (variant: Tier["variant"]) => {
    if (variant === "hard") {
      return "bg-[rgba(168,80,30,0.08)] text-[#a8501e]";
    }
    if (variant === "mid") {
      return "bg-[rgba(90,125,94,0.08)] text-[#5a7d5e]";
    }
    return "bg-[rgba(74,111,165,0.08)] text-[#4a6fa5]";
  };

  const cardClass = (variant: Tier["variant"]) => {
    if (variant === "hard") {
      return "border-l-[3px] border-l-[#a8501e]";
    }
    if (variant === "mid") {
      return "border-l-[3px] border-l-[#5a7d5e]";
    }
    return "border-l-[3px] border-l-[#4a6fa5]";
  };

  return (
    <section
      id="competition"
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

          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)] md:text-[16px]">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto flex max-w-[860px] flex-col gap-4">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 gap-3 rounded-[8px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] px-6 py-6 transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(42,31,20,0.1)] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-5 md:px-7 ${cardClass(
                tier.variant
              )}`}
            >
              <div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${labelClass(
                    tier.variant
                  )}`}
                >
                  {tier.label}
                </span>
              </div>

              <div>
                <h4 className="mb-1 text-[16px] font-semibold text-[#2a1f14] md:text-[17px]">
                  {tier.title}
                </h4>
                <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.6)]">
                  {tier.desc}
                </p>
              </div>

              <div className="text-left md:text-right">
                <div className="text-[28px] font-semibold leading-none text-[#2a1f14] md:text-[30px]">
                  {tier.score}
                </div>
                <div className="mt-1 text-[11px] text-[rgba(42,31,20,0.36)]">
                  {tier.scoreLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-[13px] text-[rgba(42,31,20,0.36)]">
          {t("disclaimer")}{" "}
          <a
            href="/"
            className="text-[#a8501e] underline underline-offset-4"
          >
            {t("disclaimerLink")}
          </a>
        </p>
      </div>
    </section>
  );
}
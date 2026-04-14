"use client";

import { useTranslations } from "next-intl";

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
      return "bg-red-100 text-brandred";
    }
    if (variant === "mid") {
      return "bg-yellow-100 text-yellow-700";
    }
    return "bg-green-100 text-green-700";
  };

  const cardClass = (variant: Tier["variant"]) => {
    if (variant === "hard") {
      return "border-l-4 border-l-brandred";
    }
    if (variant === "mid") {
      return "border-l-4 border-l-yellow-500";
    }
    return "border-l-4 border-l-green-600";
  };

  return (
    <section
      id="competition"
      className="bg-white px-6 py-24 md:px-8 border-b border-gray-200"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brandred">
            <span className="h-px w-6 bg-brandred" />
            {t("eyebrow")}
          </div>

          <h2 className="text-4xl font-bold leading-tight text-naviblue md:text-5xl font-serif">
            {t("title1")}
            <em className="not-italic text-brandred">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-lg leading-8 text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto flex max-w-[860px] flex-col gap-5">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 gap-4 rounded-none border border-gray-200 bg-white px-7 py-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6 md:px-8 ${cardClass(
                tier.variant,
              )}`}
            >
              <div>
                <span
                  className={`inline-block rounded-none px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${labelClass(
                    tier.variant,
                  )}`}
                >
                  {tier.label}
                </span>
              </div>

              <div>
                <h4 className="mb-1 text-lg font-bold text-naviblue md:text-xl font-serif">
                  {tier.title}
                </h4>
                <p className="text-base leading-relaxed text-gray-600">
                  {tier.desc}
                </p>
              </div>

              <div className="text-left md:text-right">
                <div className="text-4xl font-bold leading-none text-naviblue md:text-4xl">
                  {tier.score}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  {tier.scoreLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          {t("disclaimer")}{" "}
          <a
            href="/"
            className="text-naviblue underline underline-offset-4 hover:text-brandred"
          >
            {t("disclaimerLink")}
          </a>
        </p>
      </div>
    </section>
  );
}

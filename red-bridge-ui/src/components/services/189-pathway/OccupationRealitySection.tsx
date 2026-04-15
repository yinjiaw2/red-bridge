"use client";

import Link from "next/link";
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
    { label: t("tiers.0.label"), title: t("tiers.0.title"), desc: t("tiers.0.desc"), score: t("tiers.0.score"), scoreLabel: t("tiers.0.scoreLabel"), variant: "hard" },
    { label: t("tiers.1.label"), title: t("tiers.1.title"), desc: t("tiers.1.desc"), score: t("tiers.1.score"), scoreLabel: t("tiers.1.scoreLabel"), variant: "hard" },
    { label: t("tiers.2.label"), title: t("tiers.2.title"), desc: t("tiers.2.desc"), score: t("tiers.2.score"), scoreLabel: t("tiers.2.scoreLabel"), variant: "mid" },
    { label: t("tiers.3.label"), title: t("tiers.3.title"), desc: t("tiers.3.desc"), score: t("tiers.3.score"), scoreLabel: t("tiers.3.scoreLabel"), variant: "easy" },
  ];

  const labelClass = (variant: Tier["variant"]) => {
    if (variant === "hard") return "bg-primary/10 text-primary";
    if (variant === "mid") return "bg-secondary/10 text-secondary";
    return "bg-accent/30 text-accent-foreground";
  };

  const cardClass = (variant: Tier["variant"]) => {
    if (variant === "hard") return "border-l-4 border-l-primary";
    if (variant === "mid") return "border-l-4 border-l-secondary";
    return "border-l-4 border-l-accent";
  };

  return (
    <section id="competition" className="border-b border-border bg-background px-6 py-24 md:px-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {t("title1")}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-lg leading-8 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto flex max-w-[860px] flex-col gap-5">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 gap-4 rounded-none border border-border bg-card px-7 py-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6 md:px-8 ${cardClass(
                tier.variant,
              )}`}
            >
              <div>
                <span className={`inline-block rounded-none px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${labelClass(tier.variant)}`}>
                  {tier.label}
                </span>
              </div>

              <div>
                <h4 className="mb-1 font-serif text-lg font-bold text-foreground md:text-xl">{tier.title}</h4>
                <p className="text-base leading-relaxed text-muted-foreground">{tier.desc}</p>
              </div>

              <div className="flex flex-col items-start text-left md:items-end md:pr-4 md:text-right">
                <div className="text-[2rem] font-bold leading-none text-foreground md:text-[2.25rem]">
                  {tier.score}
                </div>
                <div className="mt-1 w-full text-xs uppercase tracking-wider text-muted-foreground">
                  {tier.scoreLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {t("disclaimer")}{" "}
          <Link
            href="/"
            className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[12px] font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md"
          >
            {t("disclaimerLink")}
          </Link>
        </p>
      </div>
    </section>
  );
}

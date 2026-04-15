"use client";

import Link from "next/link";
import { BriefcaseBusiness, ChartNoAxesColumn, LaptopMinimal } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Card = {
  title: string;
  desc: string;
  tags: string[];
};

const icons = [LaptopMinimal, ChartNoAxesColumn, BriefcaseBusiness];

export default function IndustrySection() {
  const t = useTranslations("employerPathway.industries");
  const rawCards = t.raw("cards");
  const cards = Array.isArray(rawCards) ? (rawCards as Card[]) : [];

  return (
    <section id="our-network" style={{ fontFamily: font }} className="bg-muted px-6 py-24 md:px-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-foreground md:text-[44px]">
            {t("title1")} <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = icons[index] ?? BriefcaseBusiness;

            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[10px] border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="text-[22px] font-semibold text-foreground">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-7 text-muted-foreground">{card.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-3 py-1.5 text-[12px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[14px] leading-7 text-muted-foreground">
          {t("note")}{" "}
          <Link
            href={t("noteLinkHref")}
            className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[12px] font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md"
          >
            {t("noteLinkText")}
          </Link>
        </p>
      </div>
    </section>
  );
}


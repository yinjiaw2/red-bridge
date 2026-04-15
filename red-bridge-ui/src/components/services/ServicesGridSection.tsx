"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRightIcon, BriefcaseIcon, CheckIcon, MapPinIcon, RocketIcon, SproutIcon, StarIcon } from "./icons";

const serviceIcons = {
  rocket: RocketIcon,
  star: StarIcon,
  "map-pin": MapPinIcon,
  sprout: SproutIcon,
  briefcase: BriefcaseIcon,
} as const;

export function ServicesGridSection() {
  const t = useTranslations("servicesHome.grid");
  const serviceCards = t.raw("cards") as Array<{
    id: string;
    title: string;
    eyebrow: string;
    description: string;
    href: string;
    cta: string;
    featured?: boolean;
    icon: keyof typeof serviceIcons;
    pills: string[];
  }>;

  return (
    <section id="services" className="bg-background px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("eyebrow")}</p>
          <h2 className="mt-3 font-serif text-[2.6rem] leading-[0.98] text-foreground md:text-[3.2rem]">
            {t("title1")} <span className="text-primary">{t("title2")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("description")}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card) => {
            const Icon = serviceIcons[card.icon];
            const isFeatured = "featured" in card && card.featured;

            return (
              <article
                key={card.id}
                id={card.id}
                className={[
                  "flex h-full flex-col rounded-[20px] border bg-card shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl",
                  isFeatured ? "border-primary/25" : "border-border",
                ].join(" ")}
              >
                <div
                  className={[
                    "rounded-t-[20px] px-6 pb-4 pt-6",
                    isFeatured ? "bg-[linear-gradient(180deg,rgba(230,25,25,0.05)_0%,transparent_100%)]" : "",
                  ].join(" ")}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-primary/8 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">{card.eyebrow}</p>
                  <h3 className="mt-2 text-[1.8rem] leading-[1.02] text-foreground">{card.title}</h3>
                </div>

                <p className="px-6 text-sm leading-7 text-muted-foreground">{card.description}</p>

                <div className="mt-5 flex flex-wrap gap-2 px-6">
                  {card.pills.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-primary/5 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      <CheckIcon className="h-3.5 w-3.5 text-[#2d6a4f]" />
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto px-6 pb-6 pt-5">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-all duration-200 hover:translate-x-1"
                  >
                    {card.cta}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

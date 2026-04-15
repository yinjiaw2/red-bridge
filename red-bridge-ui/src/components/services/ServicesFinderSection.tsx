"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  MapPinIcon,
  QuestionIcon,
  SproutIcon,
  StarIcon,
} from "./icons";

const finderIcons = {
  graduation: GraduationCapIcon,
  star: StarIcon,
  "map-pin": MapPinIcon,
  sprout: SproutIcon,
  briefcase: BriefcaseIcon,
  question: QuestionIcon,
} as const;

export function ServicesFinderSection() {
  const t = useTranslations("servicesHome.finder");
  const finderCards = t.raw("cards") as Array<{
    title: string;
    description: string;
    href: string;
    cta: string;
    icon: keyof typeof finderIcons;
  }>;

  return (
    <section id="find-your-path" className="bg-card px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("eyebrow")}</p>
          <h2 className="mt-3 font-serif text-[2.6rem] leading-[0.98] text-foreground md:text-[3.2rem]">
            {t("title1")} <span className="text-primary">{t("title2")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("description")}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {finderCards.map((card) => {
            const Icon = finderIcons[card.icon];

            return (
              <article
                key={card.title}
                className="rounded-[18px] border border-border bg-background px-5 py-5 shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[1.28rem] leading-tight text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{card.description}</p>
                    <Link
                      href={card.href}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all duration-200 hover:translate-x-1"
                    >
                      {card.cta}
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

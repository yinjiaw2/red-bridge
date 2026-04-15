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
    <section
      id="our-network"
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
            {t("title1")} <em className="not-italic text-[#bf6b35]">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = icons[index] ?? BriefcaseBusiness;

            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[10px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] p-7 transition hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(42,31,20,0.1)]"
              >
                <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-[linear-gradient(135deg,#bf6b35,#8b3e18)] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[rgba(168,80,30,0.07)] text-[#a8501e]">
                  <Icon size={22} />
                </div>
                <h3 className="text-[22px] font-semibold text-[#2a1f14]">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-7 text-[rgba(42,31,20,0.62)]">
                  {card.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[#f1e8dc] px-3 py-1.5 text-[12px] font-medium text-[rgba(42,31,20,0.62)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[14px] leading-7 text-[rgba(42,31,20,0.5)]">
          {t("note")}{" "}
          <Link
            href={t("noteLinkHref")}
            className="font-semibold text-[#a8501e] underline underline-offset-4"
          >
            {t("noteLinkText")}
          </Link>
        </p>
      </div>
    </section>
  );
}

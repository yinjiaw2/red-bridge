"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { BackgroundHero } from "@/components/shared/BackgroundHero";

type Stat = {
  value: string;
  label: string;
};

export default function HeroSection() {
  const t = useTranslations("visa491.hero");
  const rawTrust = t.raw("trust");
  const rawStats = t.raw("stats");
  const trust = Array.isArray(rawTrust) ? (rawTrust as string[]) : [];
  const stats = Array.isArray(rawStats) ? (rawStats as Stat[]) : [];

  return (
    <BackgroundHero
      id="top"
      eyebrow={t("eyebrow")}
      eyebrowIcon={<MapPin className="h-4 w-4" aria-hidden="true" />}
      title={
        <>
          {t("title1")}
          <br />
          <span className="text-[#b3131b]">{t("title2")}</span>
        </>
      }
      description={t("subtitle")}
      imageSrc="/home-assets/melbourne-city.jpg"
      imageAlt={t("eyebrow")}
      imagePositionClassName="object-[74%_center]"
      contentClassName="max-w-[720px]"
      trustItems={trust}
      stats={stats}
      actions={
        <>
          <Link
            href="/contact?src=491_hero_cta"
            className="flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#efb64f] px-5 text-[14px] font-semibold text-[#2a1f19] sm:h-[52px] sm:w-auto sm:px-6 sm:text-[15px]"
          >
            <MapPin size={16} />
            {t("ctaPrimary")}
          </Link>
          <button
            onClick={() =>
              document
                .getElementById("the-tradeoff")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex h-[48px] w-full items-center justify-center rounded-full border border-[#d9868f] px-5 text-[14px] font-semibold text-[#b63c46] sm:h-[52px] sm:w-auto sm:px-6 sm:text-[15px]"
          >
            <span>{t("ctaSecondary")}</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </>
      }
    />
  );
}

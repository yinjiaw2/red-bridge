"use client";

import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { BackgroundHero } from "@/components/shared/BackgroundHero";

type Stat = { value: string; label: string };

export default function HeroSection() {
  const locale = useLocale();
  const isChinese = locale.startsWith("zh");
  const t = useTranslations("employerPathway.hero");
  const rawTrust = t.raw("trust");
  const rawStats = t.raw("stats");
  const trust = Array.isArray(rawTrust) ? (rawTrust as string[]) : [];
  const stats = Array.isArray(rawStats) ? (rawStats as Stat[]) : [];

  return (
    <BackgroundHero
      id="top"
      eyebrow={t("eyebrow")}
      eyebrowIcon={<CalendarCheck className="h-4 w-4" aria-hidden="true" />}
      title={
        <>
          {t("title1")}
          {!isChinese ? " " : ""}
          <span className="text-[#b3131b]">{t("title2")}</span>
          <br />
          {t("title3")}
        </>
      }
      description={t("subtitle")}
      imageSrc="/images/home/office-meeting.jpg"
      imageAlt={t("eyebrow")}
      imagePositionClassName="object-[72%_center]"
      trustItems={trust}
      stats={stats}
      actions={
        <>
          <Link
            href={`/contact?ctasrc=employer_hero_cta&locale=${locale}`}
            className="flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#efb64f] px-5 text-[14px] font-semibold text-[#2a1f19] sm:h-[52px] sm:w-auto sm:px-6 sm:text-[15px]"
          >
            <CalendarCheck size={16} />
            {t("ctaPrimary")}
          </Link>
        </>
      }
    />
  );
}

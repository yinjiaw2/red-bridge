"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { useTranslations } from "next-intl";
import { BackgroundHero } from "@/components/shared/BackgroundHero";

export default function HeroSection() {
  const t = useTranslations("careerLaunch.hero");
  const rawPills = t.raw("pills");
  const rawStats = t.raw("stats");
  const pills = Array.isArray(rawPills) ? (rawPills as string[]) : [];
  const stats = Array.isArray(rawStats)
    ? (rawStats as Array<{ value: string; label: string }>)
    : [];

  return (
    <BackgroundHero
      id="top"
      sizeClassName="py-4 md:py-24"
      eyebrow={t("eyebrow")}
      eyebrowIcon={<BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />}
      title={
        <>
          {t("title1")}
          <br />
          <span className="text-[#b3131b]">{t("title2")}</span>
        </>
      }
      description={t("subtitle")}
      imageSrc="/home-assets/office-meeting.jpg"
      imageAlt={t("eyebrow")}
      imagePositionClassName="object-[72%_center]"
      trustItems={pills}
      stats={stats}
      actions={
        <>
          <Link
            href="/contact?src=career_launch_hero_cta"
            className="flex h-[48px] w-full items-center justify-center rounded-full bg-[#efb64f] px-5 text-[14px] font-semibold text-[#2a1f19] sm:h-[52px] sm:w-auto sm:px-6 sm:text-[15px]"
          >
            {t("primaryCta")}
          </Link>
          <button
            onClick={() =>
              document
                .getElementById("overview")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex h-[48px] w-full items-center justify-center rounded-full border border-[#d9868f] px-5 text-[14px] font-semibold text-[#b63c46] sm:h-[52px] sm:w-auto sm:px-6 sm:text-[15px]"
          >
            <span>{t("secondaryCta")}</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </>
      }
    />
  );
}

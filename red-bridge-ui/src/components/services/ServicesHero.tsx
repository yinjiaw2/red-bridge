"use client";

import Link from "next/link";
import { BackgroundHero } from "@/components/shared/BackgroundHero";
import { useTranslations } from "next-intl";
import { LayersIcon } from "./icons";

export function ServicesHero() {
  const t = useTranslations("servicesHome.hero");

  return (
    <BackgroundHero
      eyebrow={t("eyebrow")}
      eyebrowIcon={<LayersIcon className="h-4 w-4" />}
      title={
        <>
          {t("title1")}
          <br />
          <span className="text-[#b3131b]">{t("title2")}</span>
        </>
      }
      description={t("description")}
      imageSrc="/home-assets/wtc-hero.jpg"
      imageAlt={t("eyebrow")}
      imagePositionClassName="object-[72%_center]"
      actions={
        <>
          <Link
            href="/contact"
            className="flex h-[48px] w-full items-center justify-center rounded-full bg-[#efb64f] px-5 text-[14px] font-semibold text-[#2a1f19] sm:h-[52px] sm:w-auto sm:px-6 sm:text-[15px]"
          >
            {t("primaryCta")}
          </Link>
          <Link
            href="#find-your-path"
            className="flex h-[48px] w-full items-center justify-center rounded-full border border-[#d9868f] px-5 text-[14px] font-semibold text-[#b63c46] sm:h-[52px] sm:w-auto sm:px-6 sm:text-[15px]"
          >
            {t("secondaryCta")}
          </Link>
        </>
      }
    />
  );
}

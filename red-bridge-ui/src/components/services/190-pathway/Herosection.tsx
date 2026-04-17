"use client";

import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";
import { useTranslations } from "next-intl";
import { BackgroundHero } from "@/components/shared/BackgroundHero";

export default function HeroSection() {
  const t = useTranslations("visa190.hero");
  const trust = t.raw("trust") as string[];
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <BackgroundHero
      id="top"
      eyebrow={t("eyebrow")}
      eyebrowIcon={<MapPinned className="h-4 w-4" aria-hidden="true" />}
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
      imagePositionClassName="object-[72%_center]"
      trustItems={trust}
      stats={stats}
      actions={
        <>
          <Link
            href="/contact?src=190"
            className="flex h-[48px] w-full items-center justify-center rounded-full bg-[#efb64f] px-5 text-[14px] font-semibold text-[#2a1f19] sm:h-[52px] sm:w-auto sm:px-6 sm:text-[15px]"
          >
            {t("ctaPrimary")}
          </Link>
          <button
            onClick={() =>
              document
                .getElementById("how-190-differs")
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

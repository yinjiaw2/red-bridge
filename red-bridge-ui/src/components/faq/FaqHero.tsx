"use client";

import { CircleHelp } from "lucide-react";
import { useTranslations } from "next-intl";
import { BackgroundHero } from "@/components/shared/BackgroundHero";

export function FaqHero() {
  const t = useTranslations("faqPage.hero");

  return (
    <BackgroundHero
      eyebrow={t("eyebrow")}
      eyebrowIcon={<CircleHelp className="h-4 w-4" aria-hidden="true" />}
      title={
        <>
          {t("title1")}
          <br />
          <span className="text-[#b3131b]">{t("title2")}</span>
        </>
      }
      description={t("description")}
      imageSrc="/images/home/melbourne-city.jpg"
      imageAlt={t("eyebrow")}
      imagePositionClassName="object-[72%_center]"
      sizeClassName="min-h-[320px] sm:h-[44vh] sm:min-h-[340px]"
      contentHeightClassName="min-h-[320px] sm:h-full sm:min-h-0"
    />
  );
}

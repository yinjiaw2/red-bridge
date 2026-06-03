"use client";

import { Trophy } from "lucide-react";
import { useTranslations } from "next-intl";
import { BackgroundHero } from "@/components/shared/BackgroundHero";

interface Stat {
  value: string;
  label: string;
}

export default function SuccessCasesHero() {
  const t = useTranslations("successCasesHero");
  const stats = t.raw("stats") as Stat[];

  return (
    <BackgroundHero
      eyebrow={t("eyebrow")}
      eyebrowIcon={<Trophy className="h-4 w-4" aria-hidden="true" />}
      title={
        <>
          {t("headingLine1")}
          <br />
          {t("headingLine2")}{" "}
          <span className="text-[#b3131b]">{t("headingHighlight")}</span>
        </>
      }
      description={t("description")}
      imageSrc="/images/home/office-meeting.jpg"
      imageAlt={t("eyebrow")}
      imagePositionClassName="object-[72%_center]"
      stats={stats}
    />
  );
}

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Building2 } from "lucide-react";
import { BackgroundHero } from "@/components/shared/BackgroundHero";

export const RedBridgeIntro = () => {
  const t = useTranslations("aboutUs.intro");

  return (
    <BackgroundHero
      eyebrow={t("eyebrow")}
      eyebrowIcon={<Building2 className="h-4 w-4" aria-hidden="true" />}
      title={
        <>
          {t("headingLine1")}
          <br />
          <span className="text-[#b3131b]">{t("headingLine2")}</span>
        </>
      }
      description={t("body")}
      imageSrc="/about-assets/redbridge-sydney-desk.png"
      imageAlt={t("imageAlt")}
      imagePositionClassName="object-[64%_center]"
      actions={
        <>
          <Link
            href="/services"
            className="flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#efb64f] px-5 text-[14px] font-semibold text-[#2a1f19] sm:h-[52px] sm:w-auto sm:px-6 sm:text-[15px]"
          >
            {t("primaryCta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="flex h-[48px] w-full items-center justify-center rounded-full border border-[#d9868f] px-5 text-[14px] font-semibold text-[#b63c46] sm:h-[52px] sm:w-auto sm:px-6 sm:text-[15px]"
          >
            {t("secondaryCta")}
          </Link>
        </>
      }
    />
  );
};

export default RedBridgeIntro;

"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function SuccessCasesCta() {
  const t = useTranslations("successCasesCta");

  return (
    <section className="w-full py-28 px-[5%] bg-naviblue">
      <div className="max-w-300 mx-auto flex flex-col items-center text-center gap-5">
        <h2
          className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight font-serif"
        >
          <span className="block">{t("headingLine1")}</span>
          <span className="block">{t("headingLine2")}</span>
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg mb-4">
          {t("description")}
        </p>

        <Button
          asChild
          className="h-14 rounded-full bg-highlight px-10 text-[15px] font-bold uppercase tracking-widest text-naviblue hover:bg-yellow-400 transition-colors shadow-lg"
        >
          <Link href={t("buttonHref")}>{t("button")}</Link>
        </Button>

        <p className="text-gray-400 text-sm mt-2 tracking-wide">
          {t("phoneLine")}
        </p>
      </div>
    </section>
  );
}

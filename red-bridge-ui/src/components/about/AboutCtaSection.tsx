"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutCtaSection() {
  const t = useTranslations("aboutCta");

  return (
    <section className="w-full py-24 px-[5%] bg-naviblue">
      <div className="max-w-300 mx-auto flex flex-col items-center text-center gap-6">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight font-serif"
        >
          {t("headingMain")}
          <span className="text-white">{t("headingHighlight")}</span>
          {t("headingSuffix")}
        </h2>

        {/* Description */}
        <p className="text-white/90 text-base md:text-[17px] leading-relaxed max-w-xl">
          {t("description")}
        </p>

        {/* Button */}
        <Link
          href="/contact"
          className="mt-4 inline-flex h-12 items-center rounded-none bg-white px-10 text-[15px] font-bold uppercase tracking-widest text-brandred hover:bg-gray-100 transition-colors shadow-md"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}

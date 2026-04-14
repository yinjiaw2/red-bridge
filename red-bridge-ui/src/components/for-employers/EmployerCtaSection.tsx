"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function EmployerCtaSection() {
  const t = useTranslations("employerCta");

  return (
    <section
      className="w-full py-28 px-[5%]"
      style={{ background: "#1e160e" }}
    >
      <div className="max-w-300 mx-auto flex flex-col items-center text-center gap-6">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="block">{t("headingLine1")}</span>
          <span className="block">{t("headingLine2")}</span>
        </h2>

        {/* Description */}
        <p className="text-white/60 text-base md:text-[17px] leading-relaxed max-w-lg">
          {t("description")}
        </p>

        {/* Button */}
        <Link
          href={t("buttonHref")}
          className="mt-2 inline-flex h-12 items-center rounded-lg bg-white/10 border border-white/25 px-10 text-[15px] font-semibold text-white hover:bg-white/20 transition-colors"
        >
          {t("button")}
        </Link>

        {/* Phone */}
        <p className="text-white/35 text-[13px] tracking-wide">
          {t("phoneLine")}
        </p>
      </div>
    </section>
  );
}

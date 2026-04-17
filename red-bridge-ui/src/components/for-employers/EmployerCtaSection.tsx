"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function EmployerCtaSection() {
  const t = useTranslations("employerCta");

  return (
    <section
      className="relative w-full overflow-hidden bg-secondary py-28 px-[5%]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative mx-auto flex max-w-300 flex-col items-center gap-6 text-center">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight font-serif"
        >
          <span className="block">{t("headingLine1")}</span>
          <span className="block text-highlight">{t("headingLine2")}</span>
        </h2>

        {/* Description */}
        <p className="text-white/60 text-base md:text-[17px] leading-relaxed max-w-lg">
          {t("description")}
        </p>

        {/* Button */}
        <Link
          href={t("buttonHref")}
          className="mt-2 inline-flex h-12 items-center rounded-full bg-highlight px-10 text-[15px] font-bold text-secondary shadow-lg transition-colors hover:bg-yellow-400"
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

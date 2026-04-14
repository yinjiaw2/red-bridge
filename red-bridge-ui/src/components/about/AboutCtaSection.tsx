"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutCtaSection() {
  const t = useTranslations("aboutCta");

  return (
    <section
      className="w-full py-24 px-[5%]"
      style={{
        background:
          "linear-gradient(135deg, #c07840 0%, #a85e28 40%, #8c4a18 100%)",
      }}
    >
      <div className="max-w-300 mx-auto flex flex-col items-center text-center gap-6">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("headingMain")}{" "}
          <span className="text-[#f5d9b8]">{t("headingHighlight")}</span>
          {t("headingSuffix")}
        </h2>

        {/* Description */}
        <p className="text-white/75 text-base md:text-[17px] leading-relaxed max-w-xl">
          {t("description")}
        </p>

        {/* Button */}
        <Link
          href="/contact"
          className="mt-2 inline-flex h-12 items-center rounded-lg border border-white/50 px-8 text-[15px] font-semibold text-white hover:bg-white/10 transition-colors"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}

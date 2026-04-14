"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";

interface Bullet {
  label: string;
  detail: string;
}

export default function EmployerNetworkSection() {
  const t = useTranslations("aboutEmployer");
  const bullets = t.raw("bullets") as Bullet[];

  return (
    <section className="bg-naviblue py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow — lines on both sides */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="flex-1 max-w-16 h-px bg-white/20" />
          <span className="text-[0.75rem] font-bold tracking-widest text-highlight uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-white/20" />
        </div>

        {/* Heading */}
        <h2
          className="text-center text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-tight mb-7"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="block">{t("headingLine1")}</span>
          <span className="block">
            {t("headingLine2")}{" "}
            <span className="text-highlight">{t("headingHighlight")}</span>
          </span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-300 text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-12">
          {t("description")}
        </p>

        {/* Bullet list */}
        <div className="max-w-2xl mx-auto flex flex-col gap-5 mb-12">
          {bullets.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="shrink-0 mt-0.5">
                <CheckCircle
                  className="h-5 w-5 text-highlight"
                  aria-hidden="true"
                />
              </div>
              <div>
                <span className="font-bold text-white text-[15px]">
                  {item.label}
                </span>
                <span className="text-gray-300 text-[15px]">
                  {" "}
                  — {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={t("primaryHref")}
            className="inline-flex h-12 items-center gap-2 rounded-none bg-brandred px-8 text-[15px] font-bold uppercase tracking-widest text-white hover:bg-red-800 transition-colors shadow-md"
          >
            {t("primaryButton")}
          </Link>
          <Link
            href={t("secondaryHref")}
            className="inline-flex h-12 items-center rounded-none border border-white/30 bg-transparent px-8 text-[15px] font-bold uppercase tracking-widest text-white hover:bg-white/10 hover:border-white transition-colors"
          >
            {t("secondaryButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}

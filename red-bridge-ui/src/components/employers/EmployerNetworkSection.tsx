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
    <section className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow — lines on both sides */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="flex-1 max-w-16 h-px bg-[#c9a98a]" />
          <span className="text-[0.68rem] font-bold tracking-[0.2em] text-[#9a7a5e] uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-[#c9a98a]" />
        </div>

        {/* Heading */}
        <h2
          className="text-center text-5xl md:text-6xl lg:text-[4rem] font-bold text-[#1a1209] leading-tight mb-7"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="block">{t("headingLine1")}</span>
          <span className="block">
            {t("headingLine2")}{" "}
            <span className="text-[#A20000]">{t("headingHighlight")}</span>
          </span>
        </h2>

        {/* Description */}
        <p className="text-center text-[#6b5a4e] text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-12">
          {t("description")}
        </p>

        {/* Bullet list */}
        <div className="max-w-2xl mx-auto flex flex-col gap-5 mb-12">
          {bullets.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="shrink-0 mt-0.5">
                <CheckCircle
                  className="h-5 w-5 text-[#b3592a]"
                  aria-hidden="true"
                />
              </div>
              <div>
                <span className="font-semibold text-[#1a1209] text-[15px]">
                  {item.label}
                </span>
                <span className="text-[#6b5a4e] text-[15px]">
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
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#efb64f] px-8 text-[15px] font-semibold text-[#2a1f19] hover:bg-[#e0a43c] transition-colors"
          >
            {t("primaryButton")}
          </Link>
          <Link
            href={t("secondaryHref")}
            className="inline-flex h-12 items-center rounded-lg border border-[#c9a98a] px-8 text-[15px] font-semibold text-[#6b5a4e] hover:border-[#A20000] hover:text-[#A20000] transition-colors"
          >
            {t("secondaryButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}

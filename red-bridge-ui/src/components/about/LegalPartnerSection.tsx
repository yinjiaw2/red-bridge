"use client";

import { useTranslations } from "next-intl";
import { Scale, BadgeCheck } from "lucide-react";

export default function LegalPartnerSection() {
  const t = useTranslations("legal");
  const paragraphs = t.raw("card.paragraphs") as string[];

  return (
    <section className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="flex-1 max-w-16 h-px bg-[#c9a98a]" />
          <span className="text-[0.68rem] font-bold tracking-[0.22em] text-[#9a7a5e] uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-[#c9a98a]" />
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1209]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("headingMain")}{" "}
            <span className="text-[#A20000]">{t("headingHighlight")}</span>
          </h2>
        </div>

        {/* Sub-description */}
        <p className="text-center text-[#6b5a4e] text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-14">
          {t("description")}
        </p>

        {/* Partner card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#ede7df] shadow-sm p-8 md:p-10">
          {/* Card eyebrow + icon */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#f5ece1] flex items-center justify-center shrink-0">
              <Scale className="h-5 w-5 text-[#b3592a]" aria-hidden="true" />
            </div>
            <span className="text-[0.68rem] font-bold tracking-[0.2em] text-[#9a7a5e] uppercase">
              {t("card.eyebrow")}
            </span>
          </div>

          {/* Partner name */}
          <h3
            className="text-2xl md:text-3xl font-bold text-[#1a1209] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("card.name")}
          </h3>

          {/* MARN badge */}
          <div className="inline-flex items-center gap-2 bg-[#f0f7f0] border border-[#b8d8b8] rounded-full px-4 py-1.5 mb-7">
            <BadgeCheck className="h-4 w-4 text-[#3a7a3a] shrink-0" aria-hidden="true" />
            <span className="text-[12px] font-semibold text-[#2d5c2d] tracking-wide">
              {t("card.marnLabel")}
            </span>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 mb-8">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-[#6b5a4e] text-[15px] leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-[#ede7df] mb-6" />

          {/* External links */}
          <div className="flex flex-wrap gap-6">
            <a
              href={t("card.link1Href")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#A20000] hover:underline"
            >
              {t("card.link1Text")}
            </a>
            <a
              href={t("card.link2Href")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#6b5a4e] hover:text-[#A20000] hover:underline transition-colors"
            >
              {t("card.link2Text")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

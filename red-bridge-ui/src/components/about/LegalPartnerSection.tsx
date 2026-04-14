"use client";

import { useTranslations } from "next-intl";
import { Scale, BadgeCheck } from "lucide-react";

export default function LegalPartnerSection() {
  const t = useTranslations("legal");
  const paragraphs = t.raw("card.paragraphs") as string[];

  return (
    <section className="bg-gray-50 py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="flex-1 max-w-16 h-px bg-gray-300" />
          <span className="text-[0.75rem] font-bold tracking-widest text-brandred uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-gray-300" />
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("headingMain")}{" "}
            <span className="text-brandred">{t("headingHighlight")}</span>
          </h2>
        </div>

        {/* Sub-description */}
        <p className="text-center text-gray-600 text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-14">
          {t("description")}
        </p>

        {/* Partner card */}
        <div className="max-w-3xl mx-auto bg-white rounded-none border border-gray-200 shadow-md p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-brandred" />
          {/* Card eyebrow + icon */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-none bg-gray-100 flex items-center justify-center shrink-0">
              <Scale
                className="h-5 w-5 text-brandred"
                aria-hidden="true"
              />
            </div>
            <span className="text-[0.75rem] font-bold tracking-widest text-gray-900 uppercase">
              {t("card.eyebrow")}
            </span>
          </div>

          {/* Partner name */}
          <h3
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("card.name")}
          </h3>

          {/* MARN badge */}
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-none px-4 py-2 mb-7">
            <BadgeCheck
              className="h-4 w-4 text-brandred shrink-0"
              aria-hidden="true"
            />
            <span className="text-[12px] font-bold uppercase tracking-wider text-gray-900">
              {t("card.marnLabel")}
            </span>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 mb-8">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-gray-700 text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 mb-6" />

          {/* External links */}
          <div className="flex flex-wrap gap-6">
            <a
              href={t("card.link1Href")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brandred hover:text-red-800 transition-colors"
            >
              {t("card.link1Text")}
            </a>
            <a
              href={t("card.link2Href")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-gray-500 hover:text-brandred transition-colors"
            >
              {t("card.link2Text")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

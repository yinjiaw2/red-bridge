"use client";

import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";

export default function EmployerObligationsSection() {
  const t = useTranslations("employerObligations");
  const must = t.raw("must") as string[];
  const mustNot = t.raw("mustNot") as string[];

  return (
    <section className="bg-gray-50 py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow - lines on both sides */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="flex-1 max-w-16 h-px bg-gray-300" />
          <span className="text-lg font-bold tracking-widest text-brandred uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-gray-300" />
        </div>

        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl font-bold text-naviblue leading-tight font-serif mb-5"
        >
          {t("headingMain")}{" "}
          <span className="text-brandred">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-14">
          {t("description")}
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Must Do */}
          <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-none">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-none bg-green-50 flex items-center justify-center shrink-0">
                <Check className="h-5 w-5 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-naviblue font-bold text-lg uppercase tracking-wider">
                {t("mustTitle")}
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {must.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 text-green-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Must NOT Do */}
          <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-none">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-none bg-red-50 flex items-center justify-center shrink-0">
                <X className="h-5 w-5 text-brandred" aria-hidden="true" />
              </div>
              <h3 className="text-naviblue font-bold text-lg uppercase tracking-wider">
                {t("mustNotTitle")}
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {mustNot.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X
                    className="h-5 w-5 text-brandred shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

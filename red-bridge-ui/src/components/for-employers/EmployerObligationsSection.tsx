"use client";

import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";

export default function EmployerObligationsSection() {
  const t = useTranslations("employerObligations");
  const must = t.raw("must") as string[];
  const mustNot = t.raw("mustNot") as string[];

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
          className="text-center text-4xl md:text-5xl font-bold text-[#1a1209] leading-tight mb-5"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("headingMain")}{" "}
          <span className="text-[#A20000]">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-center text-[#6b5a4e] text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-14">
          {t("description")}
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Must Do */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-[#e8f5e8] flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5 text-[#3a7a3a]" aria-hidden="true" />
              </div>
              <h3 className="text-[#1a1209] font-bold text-[15px] uppercase tracking-[0.12em]">
                {t("mustTitle")}
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {must.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    className="h-4 w-4 text-[#3a7a3a] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[#4a4038] text-[14px] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Must NOT Do */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-[#fdf0f0] flex items-center justify-center shrink-0">
                <X className="h-3.5 w-3.5 text-[#A20000]" aria-hidden="true" />
              </div>
              <h3 className="text-[#1a1209] font-bold text-[15px] uppercase tracking-[0.12em]">
                {t("mustNotTitle")}
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {mustNot.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X
                    className="h-4 w-4 text-[#A20000] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[#4a4038] text-[14px] leading-relaxed">
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

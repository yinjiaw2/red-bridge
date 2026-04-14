"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

interface FeeRow {
  title: string;
  note: string;
  amount: string;
}

export default function EmployerFeesSection() {
  const t = useTranslations("employerFees");
  const rows = t.raw("rows") as FeeRow[];

  return (
    <section className="bg-naviblue py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-highlight" />
          <span className="text-[0.75rem] font-bold tracking-widest text-highlight uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-white leading-tight font-serif mb-5"
        >
          {t("headingMain")}{" "}
          <span className="text-highlight">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-[17px] leading-relaxed max-w-2xl mb-12">
          {t("description")}
        </p>

        {/* Fee table card */}
        <div className="bg-white rounded-none border border-gray-200 overflow-hidden mb-6 shadow-lg">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto] items-center px-8 py-4 bg-gray-50 border-b border-gray-200">
            <span className="text-[12px] font-bold tracking-wider uppercase text-naviblue">
              {t("tableHeaderLabel")}
            </span>
            <span className="text-[12px] font-bold tracking-wider uppercase text-naviblue">
              {t("tableHeaderAmount")}
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto] items-center gap-6 px-8 py-5 ${
                i < rows.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div>
                <p className="text-naviblue font-bold text-base leading-snug mb-1">
                  {row.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {row.note}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-brandred font-bold text-lg whitespace-nowrap">
                  {row.amount}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mb-8">
          {t("disclaimer")}
        </p>

        {/* Footer link */}
        <a
          href={t("footerLinkHref")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-highlight hover:text-white transition-colors"
        >
          {t("footerLinkText")}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

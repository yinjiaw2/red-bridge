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
    <section className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-[#c9a98a]" />
          <span className="text-[0.68rem] font-bold tracking-[0.2em] text-[#9a7a5e] uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-[#1a1209] leading-tight mb-5"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("headingMain")}{" "}
          <span className="text-[#A20000]">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-[#6b5a4e] text-base md:text-[17px] leading-relaxed max-w-2xl mb-12">
          {t("description")}
        </p>

        {/* Fee table card */}
        <div className="bg-white rounded-2xl border border-[#ede7df] overflow-hidden mb-6">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto] items-center px-6 py-3 bg-[#faf6f0] border-b border-[#ede7df]">
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#9a7a5e]">
              {t("tableHeaderLabel")}
            </span>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#9a7a5e]">
              {t("tableHeaderAmount")}
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto] items-center gap-6 px-6 py-4 ${
                i < rows.length - 1 ? "border-b border-[#f0ebe4]" : ""
              }`}
            >
              <div>
                <p className="text-[#1a1209] font-semibold text-[14px] leading-snug mb-0.5">
                  {row.title}
                </p>
                <p className="text-[#9a8a80] text-[12px] leading-relaxed">
                  {row.note}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[#b3592a] font-bold text-[14px] whitespace-nowrap">
                  {row.amount}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-[#9a8a80] text-[12px] leading-relaxed max-w-3xl mb-8">
          {t("disclaimer")}
        </p>

        {/* Footer link */}
        <a
          href={t("footerLinkHref")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#A20000] hover:underline"
        >
          {t("footerLinkText")}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

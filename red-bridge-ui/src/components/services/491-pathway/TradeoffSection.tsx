"use client";

import { Fragment } from "react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Column = {
  title: string;
  rows: string[];
};

export default function TradeoffSection() {
  const t = useTranslations("visa491.tradeoff");
  const rawColumns = t.raw("columns");
  const columns = Array.isArray(rawColumns) ? (rawColumns as Column[]) : [];
  const rawFactors = t.raw("factors");
  const factors = Array.isArray(rawFactors) ? (rawFactors as string[]) : [];

  return (
    <section
      id="the-tradeoff"
      style={{ fontFamily: font }}
      className="bg-[#ede5d8] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8501e]">
            <span className="h-px w-6 bg-[#bf6b35]" />
            {t("eyebrow")}
          </div>

          <h2 className="text-[34px] font-semibold leading-tight text-[#2a1f14] md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-[#a8501e]">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="mx-auto grid min-w-[760px] max-w-[960px] grid-cols-[1.3fr_repeat(3,1fr)] overflow-hidden rounded-[10px] border border-[rgba(42,31,20,0.09)] shadow-[0_4px_24px_rgba(42,31,20,0.08)]">
            <div className="bg-[#e8dfd2] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[rgba(42,31,20,0.45)]">
              {t("factorLabel")}
            </div>
            {columns.map((column, index) => (
              <div
                key={column.title}
                className={`px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.12em] ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,#5a7d5e,#3d5c40)] text-white"
                    : index === 1
                      ? "bg-[linear-gradient(135deg,#bf6b35,#8b3e18)] text-white"
                      : "bg-[rgba(42,31,20,0.08)] text-[rgba(42,31,20,0.62)]"
                }`}
              >
                {column.title}
              </div>
            ))}

            {factors.map((factor, rowIndex) => (
              <Fragment key={factor}>
                <div
                  className="border-t border-[rgba(42,31,20,0.09)] bg-[#e8dfd2] px-5 py-4 text-[14px] font-semibold text-[#2a1f14]"
                >
                  {factor}
                </div>
                {columns.map((column, colIndex) => (
                  <div
                    key={`${column.title}-${factor}`}
                    className={`border-t border-[rgba(42,31,20,0.09)] px-5 py-4 text-[14px] leading-6 ${
                      colIndex === 0
                        ? "bg-[rgba(90,125,94,0.06)] font-semibold text-[#5a7d5e]"
                        : colIndex === 1
                          ? "bg-[#faf6f0] text-[rgba(42,31,20,0.72)]"
                          : "bg-[#faf6f0] text-[rgba(42,31,20,0.62)]"
                    }`}
                  >
                    {column.rows[rowIndex] ?? ""}
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-[13px] text-[rgba(42,31,20,0.52)]">
          {t("note")}
        </p>
      </div>
    </section>
  );
}

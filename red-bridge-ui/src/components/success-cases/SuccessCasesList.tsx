"use client";

import { useTranslations } from "next-intl";
import { FileCheck, Clock, ClipboardList, BadgeCheck } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  employer:    "bg-[#fdf0ea] text-[#a04020] border-[#f0c8aa]",
  independent: "bg-[#eaf0fd] text-[#203ca0] border-[#aac0f0]",
  career:      "bg-[#eafdf0] text-[#20803c] border-[#aaf0c0]",
};

const STATUS_STYLES: Record<string, string> = {
  approved: "bg-[#eafdf0] text-[#1a6b30] border-[#9adbb0]",
  pr:       "bg-[#eaf0fd] text-[#1a306b] border-[#9ab0db]",
  ongoing:  "bg-[#fdf6ea] text-[#7a5010] border-[#f0d8aa]",
};

interface Case {
  category: string;
  categoryKey: string;
  colorKey: string;
  title: string;
  body: string;
  visa: string;
  timeline: string;
  assessment: string;
  status: "approved" | "pr" | "ongoing";
}

export default function SuccessCasesList() {
  const t = useTranslations("successCasesList");
  const cases = t.raw("cases") as Case[];

  const statusLabel = (s: string) => {
    if (s === "approved") return t("statusApproved");
    if (s === "pr") return t("statusPR");
    return t("statusOngoing");
  };

  return (
    <section className="bg-brandbackground py-16 px-[5%] pb-24">
      <div className="max-w-300 mx-auto">
        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-[#ede7df] flex flex-col overflow-hidden ${
                c.colorKey === "warm" ? "bg-[#fdf6ee]" : "bg-white"
              }`}
            >
              {/* Card body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Category badge */}
                <span
                  className={`self-start text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border ${
                    CATEGORY_COLORS[c.categoryKey] ?? CATEGORY_COLORS.employer
                  }`}
                >
                  {c.category}
                </span>

                {/* Title */}
                <h3
                  className="text-[#1a1209] font-bold text-[16px] leading-snug"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {c.title}
                </h3>

                {/* Body */}
                <p className="text-[#6b5a4e] text-[13px] leading-relaxed flex-1">
                  {c.body}
                </p>
              </div>

              {/* Stats strip */}
              <div className="border-t border-[#ede7df] grid grid-cols-4 divide-x divide-[#ede7df]">
                {/* Visa */}
                <div className="flex flex-col items-center gap-1 px-2 py-3">
                  <FileCheck className="h-3.5 w-3.5 text-[#9a7a5e]" aria-hidden="true" />
                  <span className="text-[9px] text-[#9a7a5e] uppercase tracking-wide">{t("statLabels.visa")}</span>
                  <span className="text-[11px] font-bold text-[#1a1209] text-center leading-tight">{c.visa}</span>
                </div>

                {/* Timeline */}
                <div className="flex flex-col items-center gap-1 px-2 py-3">
                  <Clock className="h-3.5 w-3.5 text-[#9a7a5e]" aria-hidden="true" />
                  <span className="text-[9px] text-[#9a7a5e] uppercase tracking-wide">{t("statLabels.timeline")}</span>
                  <span className="text-[11px] font-bold text-[#1a1209] text-center leading-tight">{c.timeline}</span>
                </div>

                {/* Assessment */}
                <div className="flex flex-col items-center gap-1 px-2 py-3">
                  <ClipboardList className="h-3.5 w-3.5 text-[#9a7a5e]" aria-hidden="true" />
                  <span className="text-[9px] text-[#9a7a5e] uppercase tracking-wide">{t("statLabels.assessment")}</span>
                  <span className="text-[11px] font-bold text-[#1a1209] text-center leading-tight">{c.assessment}</span>
                </div>

                {/* Status */}
                <div className="flex flex-col items-center gap-1 px-2 py-3">
                  <BadgeCheck className="h-3.5 w-3.5 text-[#9a7a5e]" aria-hidden="true" />
                  <span className="text-[9px] text-[#9a7a5e] uppercase tracking-wide">{t("statLabels.status")}</span>
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full border mt-0.5 ${
                      STATUS_STYLES[c.status] ?? STATUS_STYLES.ongoing
                    }`}
                  >
                    {statusLabel(c.status)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[#9a8a80] text-[12px] leading-relaxed max-w-3xl mx-auto">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}

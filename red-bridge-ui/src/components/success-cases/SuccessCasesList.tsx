"use client";

import { useTranslations } from "next-intl";
import { FileCheck, Clock, ClipboardList, BadgeCheck } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  employer: "bg-red-50 text-brandred border-red-200",
  independent: "bg-blue-50 text-naviblue border-blue-200",
  career: "bg-green-50 text-green-700 border-green-200",
};

const STATUS_STYLES: Record<string, string> = {
  approved: "bg-green-50 text-green-700 border-green-200",
  pr: "bg-blue-50 text-naviblue border-blue-200",
  ongoing: "bg-yellow-50 text-yellow-700 border-yellow-200",
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
    <section className="bg-gray-50 py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((c, i) => (
            <div
              key={i}
              className="rounded-none border border-gray-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col overflow-hidden bg-white"
            >
              {/* Card body */}
              <div className="p-8 flex flex-col gap-5 flex-1">
                {/* Category badge */}
                <span
                  className={`self-start text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-none border ${
                    CATEGORY_COLORS[c.categoryKey] ?? CATEGORY_COLORS.employer
                  }`}
                >
                  {c.category}
                </span>

                {/* Title */}
                <h3
                  className="text-naviblue font-bold text-xl leading-snug"
                >
                  {c.title}
                </h3>

                {/* Body */}
                <p className="text-gray-600 text-base leading-relaxed flex-1">
                  {c.body}
                </p>
              </div>

              {/* Stats strip */}
              <div className="border-t border-gray-200 grid grid-cols-4 divide-x divide-gray-200 bg-gray-50/50">
                {/* Visa */}
                <div className="flex flex-col items-center gap-1 px-2 py-3">
                  <FileCheck
                    className="h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {t("statLabels.visa")}
                  </span>
                  <span className="text-xs font-bold text-naviblue text-center leading-tight">
                    {c.visa}
                  </span>
                </div>

                {/* Timeline */}
                <div className="flex flex-col items-center gap-1 px-2 py-3">
                  <Clock className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {t("statLabels.timeline")}
                  </span>
                  <span className="text-xs font-bold text-naviblue text-center leading-tight">
                    {c.timeline}
                  </span>
                </div>

                {/* Assessment */}
                <div className="flex flex-col items-center gap-1 px-2 py-3">
                  <ClipboardList
                    className="h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {t("statLabels.assessment")}
                  </span>
                  <span className="text-xs font-bold text-naviblue text-center leading-tight">
                    {c.assessment}
                  </span>
                </div>

                {/* Status */}
                <div className="flex flex-col items-center gap-1 px-2 py-3">
                  <BadgeCheck
                    className="h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {t("statLabels.status")}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-none border mt-0.5 ${
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
        <p className="text-center text-gray-500 text-sm leading-relaxed max-w-3xl mx-auto">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}

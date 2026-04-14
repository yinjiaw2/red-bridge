"use client";

import { useTranslations } from "next-intl";
import { Info } from "lucide-react";

export default function ContextBand() {
  const t = useTranslations("visa189ContextBand");

  return (
    <section className="px-6 py-10 bg-gray-50 border-y border-gray-200">
      <div className="max-w-[900px] mx-auto">
        <div className="flex gap-5 items-start bg-white border border-gray-200 rounded-none p-8">
          {/* icon */}
          <Info size={24} className="text-brandred mt-1 shrink-0" />

          {/* text */}
          <div>
            <h4 className="text-lg font-bold text-naviblue mb-2">
              {t("title")}
            </h4>

            <p className="text-base leading-relaxed text-gray-700">
              {t("text1")}
              <span className="font-semibold text-brandred">
                {t("highlight")}
              </span>
              {t("text2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

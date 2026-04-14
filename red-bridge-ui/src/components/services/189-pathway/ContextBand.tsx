"use client";

import { useTranslations } from "next-intl";
import { Info } from "lucide-react";

export default function ContextBand() {
  const t = useTranslations("visa189ContextBand");

  return (
    <section className="px-6 py-10 bg-[#f5efe4]">
      <div className="max-w-[900px] mx-auto">

        <div className="flex gap-4 items-start bg-[#faf6f0] border border-[rgba(42,31,20,0.1)] rounded-xl p-6 shadow-sm">

          {/* icon */}
          <Info size={22} className="text-[#a8501e] mt-1 shrink-0" />

          {/* text */}
          <div>
            <h4 className="text-[15px] font-semibold text-[#2a1f14] mb-2">
              {t("title")}
            </h4>

            <p className="text-[14px] leading-[1.8] text-[rgba(42,31,20,0.65)]">
              {t("text1")}
              <span className="font-semibold text-[#bf6b35]">
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
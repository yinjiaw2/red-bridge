"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Group = {
  title: string;
  items: string[];
};

export default function RequirementsSection() {
  const t = useTranslations("visa190.requirements");
  const groups = t.raw("groups") as Group[];

  return (
    <section
      id="requirements"
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
            <em className="not-italic text-[#bf6b35]">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-[10px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] p-6"
            >
              <h3 className="mb-5 border-b border-[rgba(42,31,20,0.09)] pb-4 text-[18px] font-semibold text-[#2a1f14]">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div key={item} className="flex gap-3">
                    <Check size={16} className="mt-1 shrink-0 text-[#5a7d5e]" />
                    <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

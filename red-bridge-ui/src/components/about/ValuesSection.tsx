"use client";

import { useTranslations } from "next-intl";
import { Eye, ClipboardCheck, Scale, Handshake } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  eye: <Eye className="h-5 w-5" aria-hidden="true" />,
  clipboardCheck: <ClipboardCheck className="h-5 w-5" aria-hidden="true" />,
  scale: <Scale className="h-5 w-5" aria-hidden="true" />,
  handshake: <Handshake className="h-5 w-5" aria-hidden="true" />,
};

interface ValueItem {
  iconKey: string;
  title: string;
  description: string;
}

export default function ValuesSection() {
  const t = useTranslations("values");
  const items = t.raw("items") as ValueItem[];

  return (
    <section className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow — lines on both sides */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="flex-1 max-w-16 h-px bg-[#c9a98a]" />
          <span className="text-[0.68rem] font-bold tracking-[0.22em] text-[#9a7a5e] uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-[#c9a98a]" />
        </div>

        {/* Header — heading left, description right */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12 mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1209] shrink-0"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("heading")}
          </h2>
          <p className="text-[#6b5a4e] text-base md:text-[17px] leading-relaxed md:pb-1 max-w-xl">
            {t("description")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[#ede7df]"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#f5ece1] text-[#b3592a]">
                {ICON_MAP[item.iconKey]}
              </div>

              {/* Title */}
              <h3 className="text-[#1a1209] font-semibold text-base mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#6b5a4e] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

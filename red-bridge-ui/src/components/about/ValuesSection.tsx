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
    <section className="bg-naviblue py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow - lines on both sides */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="flex-1 max-w-16 h-px bg-white/20" />
          <span className="text-lg font-bold tracking-widest text-white uppercase whitespace-nowrap">
            {t("eyebrow")}
          </span>
          <span className="flex-1 max-w-16 h-px bg-white/20" />
        </div>

        {/* Header - heading left, description right */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12 mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-white shrink-0"
          >
            {t("heading")}
          </h2>
          <p className="text-gray-300 text-base md:text-[17px] leading-relaxed md:pb-1 max-w-xl">
            {t("description")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-none p-8 shadow-lg border-t-4 border-t-gray-900"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-brandred">
                {ICON_MAP[item.iconKey]}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-xl font-serif mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";

interface Stat {
  value: string;
  label: string;
  description: string;
}

export default function StorySection() {
  const t = useTranslations("story");
  const paragraphs = t.raw("paragraphs") as string[];
  const stats = t.raw("stats") as Stat[];

  return (
    <section className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-px bg-[#A20000]" />
              <span className="text-[0.7rem] font-bold tracking-[0.22em] text-[#A20000] uppercase">
                {t("eyebrow")}
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1a1209] leading-tight mb-10"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("heading")}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-[#6b5a4e] text-base md:text-[17px] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right column — stats */}
          <div className="flex flex-col justify-center">
            {stats.map((stat, i) => (
              <div key={i}>
                {i > 0 && <div className="h-px bg-[#e2d9d0] my-6" />}
                <div className="flex items-start gap-6">
                  <div className="min-w-20">
                    <div
                      className="text-3xl md:text-4xl font-bold text-[#A20000]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {stat.value}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#1a1209] font-semibold text-base mb-1">
                      {stat.label}
                    </div>
                    <div className="text-[#6b5a4e] text-sm leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

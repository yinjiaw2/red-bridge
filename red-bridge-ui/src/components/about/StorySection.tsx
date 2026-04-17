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
    <section className="bg-gray-50 py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-px bg-brandred" />
              <span className="text-lg font-bold tracking-widest text-brandred uppercase">
                {t("eyebrow")}
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-serif mb-10"
            >
              {t("heading")}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-base md:text-[17px] leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right column - stats */}
          <div className="flex flex-col justify-center">
            {stats.map((stat, i) => (
              <div key={i}>
                {i > 0 && <div className="h-px bg-gray-200 my-6" />}
                <div className="flex items-start gap-6">
                  <div className="min-w-20">
                    <div
                      className="text-3xl md:text-4xl font-bold text-brandred"
                    >
                      {stat.value}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold text-lg mb-1">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-sm leading-relaxed">
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

"use client";

import { useTranslations } from "next-intl";

type Step = {
  step: string;
  who: string;
  title: string;
  desc: string;
  time: string;
  type: "rb" | "ii";
};

export default function ProcessSection() {
  const t = useTranslations("visa189ProcessSection");

  const steps: Step[] = [
    {
      step: "01",
      who: t("steps.0.who"),
      title: t("steps.0.title"),
      desc: t("steps.0.desc"),
      time: t("steps.0.time"),
      type: "rb",
    },
    {
      step: "02",
      who: t("steps.1.who"),
      title: t("steps.1.title"),
      desc: t("steps.1.desc"),
      time: t("steps.1.time"),
      type: "rb",
    },
    {
      step: "03",
      who: t("steps.2.who"),
      title: t("steps.2.title"),
      desc: t("steps.2.desc"),
      time: t("steps.2.time"),
      type: "rb",
    },
    {
      step: "04",
      who: t("steps.3.who"),
      title: t("steps.3.title"),
      desc: t("steps.3.desc"),
      time: t("steps.3.time"),
      type: "ii",
    },
    {
      step: "05",
      who: t("steps.4.who"),
      title: t("steps.4.title"),
      desc: t("steps.4.desc"),
      time: t("steps.4.time"),
      type: "ii",
    },
  ];

  return (
    <section
      id="process"
      className="bg-white px-6 py-24 md:px-8 border-b border-gray-200"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* 标题 */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brandred">
            <span className="h-px w-6 bg-brandred" />
            {t("eyebrow")}
          </div>

          <h2 className="text-4xl font-bold leading-tight text-naviblue md:text-5xl font-serif">
            {t("title1")}
            <em className="not-italic text-brandred">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-lg leading-8 text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        {/* 时间线 */}
        <div className="relative mx-auto max-w-[720px]">
          {/* 竖线 */}
          <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-brandred to-gray-200" />

          <div className="flex flex-col gap-10">
            {steps.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[52px_1fr] gap-6 relative"
              >
                {/* 圆点 */}
                <div
                  className={`z-10 flex h-12 w-12 items-center justify-center rounded-none text-base font-bold text-white shadow-md ${
                    item.type === "rb" ? "bg-brandred" : "bg-naviblue"
                  }`}
                >
                  {item.step}
                </div>

                {/* 内容 */}
                <div>
                  <div
                    className={`mb-2 text-xs font-bold uppercase tracking-wider ${
                      item.type === "rb" ? "text-brandred" : "text-naviblue"
                    }`}
                  >
                    {item.who}
                  </div>

                  <h3 className="text-2xl font-bold text-naviblue font-serif">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-base leading-relaxed text-gray-600">
                    {item.desc}
                  </p>

                  <span className="mt-3 inline-block rounded-none bg-gray-100 border border-gray-200 px-3 py-1 text-xs text-gray-500">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

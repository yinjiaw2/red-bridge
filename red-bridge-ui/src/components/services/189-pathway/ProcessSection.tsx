"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

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
      style={{ fontFamily: font }}
      className="bg-[#f5efe4] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* 标题 */}
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8501e]">
            <span className="h-px w-6 bg-[#bf6b35]" />
            {t("eyebrow")}
          </div>

          <h2 className="text-[34px] font-semibold leading-tight text-[#2a1f14] md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-[#bf6b35]">
              {t("titleHighlight")}
            </em>
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        {/* 时间线 */}
        <div className="relative mx-auto max-w-[720px]">
          {/* 竖线 */}
          <div className="absolute left-[22px] top-[44px] bottom-[44px] w-[2px] bg-[linear-gradient(to_bottom,#bf6b35,rgba(168,80,30,0.1))]" />

          <div className="flex flex-col gap-10">
            {steps.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[44px_1fr] gap-6 relative"
              >
                {/* 圆点 */}
                <div
                  className={`z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full text-[13px] font-bold text-white shadow-md ${
                    item.type === "rb"
                      ? "bg-[linear-gradient(135deg,#bf6b35,#8b3e18)]"
                      : "bg-[linear-gradient(135deg,#5a7d5e,#3d5c40)]"
                  }`}
                >
                  {item.step}
                </div>

                {/* 内容 */}
                <div>
                  <div
                    className={`mb-1 text-[11px] font-bold uppercase tracking-[0.14em] ${
                      item.type === "rb"
                        ? "text-[#a8501e]"
                        : "text-[#5a7d5e]"
                    }`}
                  >
                    {item.who}
                  </div>

                  <h3 className="text-[20px] font-semibold text-[#2a1f14]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[14px] leading-7 text-[rgba(42,31,20,0.6)]">
                    {item.desc}
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-[#ede5d8] px-3 py-1 text-[11px] text-[rgba(42,31,20,0.5)]">
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
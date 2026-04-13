"use client";

import Link from "next/link";
import {
  Monitor,
  Calculator,
  Megaphone,
  HardHat,
  HeartPulse,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface EmployerCategory {
  title: string;
  count: number;
  iconKey: string;
}

const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  calculator: Calculator,
  megaphone: Megaphone,
  hardHat: HardHat,
  heartPulse: HeartPulse,
};

export default function EmployerNetwork() {
  const t = useTranslations("employerNetwork");
  const categories = t.raw("categories") as EmployerCategory[];

  return (
    <section
      id="employer-network"
      className="bg-[#f6f1eb] py-12 md:py-16 px-4 md:px-[4%]"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.9fr] gap-6 md:gap-8 items-start mb-10">
          <div>
            <p className="text-[11px] md:text-[12px] font-bold tracking-[0.16em] uppercase text-[#c96b2c] mb-3">
              {t("eyebrow")}
            </p>

            <h2 className="text-[30px] md:text-[42px] xl:text-[50px] leading-[1] font-serif font-bold text-[#231f1c] mb-4">
              {t("headingMain")}
              <span className="text-[#c96b2c] italic ml-2">
                {t("headingHighlight")}
              </span>
            </h2>

            <p className="max-w-[680px] text-[15px] md:text-[17px] leading-[1.55] text-[#6f6963] mb-8">
              {t("description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#f3e8de] flex items-center justify-center shrink-0">
                  <ShieldCheck
                    className="w-6 h-6 text-[#b85d1e]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] md:text-[16px] font-bold text-[#231f1c] mb-1 leading-[1.35]">
                    {t("feature1Title")}
                  </h3>
                  <p className="text-[13px] md:text-[14px] leading-[1.5] text-[#6f6963]">
                    {t("feature1Desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#f3e8de] flex items-center justify-center shrink-0">
                  <BadgeCheck
                    className="w-6 h-6 text-[#b85d1e]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] md:text-[16px] font-bold text-[#231f1c] mb-1 leading-[1.35]">
                    {t("feature2Title")}
                  </h3>
                  <p className="text-[13px] md:text-[14px] leading-[1.5] text-[#6f6963]">
                    {t("feature2Desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#f3e8de] flex items-center justify-center shrink-0">
                  <Monitor
                    className="w-6 h-6 text-[#b85d1e]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] md:text-[16px] font-bold text-[#231f1c] mb-1 leading-[1.35]">
                    {t("feature3Title")}
                  </h3>
                  <p className="text-[13px] md:text-[14px] leading-[1.5] text-[#6f6963]">
                    {t("feature3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#ead8ca] bg-[#f8f2ec] p-5 md:p-6 shadow-[0_8px_24px_rgba(60,35,15,0.04)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-[#fff3e8] flex items-center justify-center shrink-0">
                <BadgeCheck
                  className="w-5 h-5 text-[#b85d1e]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div className="inline-flex items-center rounded-full bg-[#f1dfd2] px-4 py-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#c96b2c]">
                {t("processBadge")}
              </div>
            </div>

            <div className="relative pl-1">
              <div className="absolute left-[15px] top-[18px] bottom-[70px] w-px bg-[#e7c8b2]" />

              {[
                {
                  num: "1",
                  title: t("step1Title"),
                  desc: t("step1Desc"),
                },
                {
                  num: "2",
                  title: t("step2Title"),
                  desc: t("step2Desc"),
                },
                {
                  num: "3",
                  title: t("step3Title"),
                  desc: t("step3Desc"),
                },
              ].map((step, index) => (
                <div key={index} className="relative flex gap-4 pb-5">
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#b85d1e] text-white text-[14px] font-bold flex items-center justify-center shrink-0 shadow-sm">
                    {step.num}
                  </div>

                  <div className="pt-0.5 flex-1 border-b border-[#ecd9cb] last:border-b-0 pb-4 last:pb-0">
                    <h3 className="text-[15px] md:text-[17px] font-bold text-[#231f1c] mb-1 leading-[1.4]">
                      {step.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] leading-[1.55] text-[#6f6963]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-[#e7efe4] px-4 py-4 flex items-center gap-3 text-[#356243]">
              <ShieldCheck
                className="w-5 h-5 shrink-0"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <p className="text-[14px] md:text-[15px] font-semibold leading-[1.45]">
                {t("verifiedBadge")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-3">
          <div>
            <p className="text-[11px] md:text-[12px] font-bold tracking-[0.16em] uppercase text-[#c96b2c] mb-2">
              {t("industriesEyebrow")}
            </p>

<h3 className="text-[24px] md:text-[30px] xl:text-[34px] leading-[1.1] font-serif font-bold text-[#231f1c]">              {t("industriesHeading")}
            </h3>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[15px] md:text-[16px] font-semibold text-[#c96b2c] hover:text-[#a34f16] transition-colors"
          >
            {t("seeAll")}
            <ArrowRight className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.iconKey] ?? Monitor;

            return (
              <div
                key={index}
                className="bg-[#fcfaf7] border border-[#efe3d8] rounded-[20px] px-4 md:px-5 py-6 md:py-7 text-center shadow-[0_10px_24px_rgba(60,35,15,0.04)] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(60,35,15,0.06)] transition-all duration-300"
              >
                <div className="mx-auto mb-4 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#f5e9df] flex items-center justify-center">
                  <Icon
                    className="w-6 h-6 md:w-7 md:h-7 text-[#b85d1e]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <h4 className="text-[15px] md:text-[17px] leading-[1.35] font-bold text-[#231f1c] min-h-[42px] md:min-h-[48px] mb-3">
                  {cat.title}
                </h4>

                <div className="text-[30px] md:text-[36px] leading-none font-serif font-bold text-[#b85d1e] mb-2">
                  {cat.count}
                </div>

                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase text-[#9a928b]">
                  {t("verifiedLabel")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
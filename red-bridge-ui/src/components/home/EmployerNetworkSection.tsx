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

export const EmployerNetwork = () => {
  const t = useTranslations("employerNetwork");
  const categories = t.raw("categories") as EmployerCategory[];

  return (
    <section id="employer-network" className="bg-[#f6f1eb] py-24 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        {/* Top layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_0.95fr] gap-10 items-start mb-16">
          {/* Left content */}
          <div>
            <p className="text-[13px] md:text-[14px] font-bold tracking-[0.18em] uppercase text-[#c96b2c] mb-5">
              {t("eyebrow")}
            </p>

            <h2 className="text-[42px] md:text-[58px] leading-[0.95] font-serif font-bold text-[#231f1c] mb-6">
              {t("headingMain")}
              <span className="text-[#c96b2c] italic ml-3">
                {t("headingHighlight")}
              </span>
            </h2>

            <p className="max-w-[760px] text-[20px] leading-[1.55] text-[#6f6963] mb-12">
              {t("description")}
            </p>

            {/* Feature row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-[#f3e8de] flex items-center justify-center">
                  <ShieldCheck
                    className="w-10 h-10 text-[#b85d1e]"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#231f1c] mb-2">
                    {t("feature1Title")}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[#6f6963]">
                    {t("feature1Desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-[#f3e8de] flex items-center justify-center">
                  <BadgeCheck
                    className="w-10 h-10 text-[#b85d1e]"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#231f1c] mb-2">
                    {t("feature2Title")}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[#6f6963]">
                    {t("feature2Desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-[#f3e8de] flex items-center justify-center">
                  <Monitor
                    className="w-10 h-10 text-[#b85d1e]"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#231f1c] mb-2">
                    {t("feature3Title")}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[#6f6963]">
                    {t("feature3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right process card */}
          <div className="rounded-[30px] border border-[#ead8ca] bg-[#f8f2ec] p-8 md:p-10 shadow-[0_10px_30px_rgba(60,35,15,0.04)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-[#fff3e8] flex items-center justify-center">
                <BadgeCheck
                  className="w-7 h-7 text-[#b85d1e]"
                  strokeWidth={1.8}
                />
              </div>
              <div className="inline-flex items-center rounded-full bg-[#f1dfd2] px-5 py-3 text-[13px] font-bold tracking-[0.12em] uppercase text-[#c96b2c]">
                {t("processBadge")}
              </div>
            </div>

            <div className="relative pl-2">
              <div className="absolute left-[20px] top-[22px] bottom-[90px] w-px bg-[#e7c8b2]" />

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
                <div key={index} className="relative flex gap-6 pb-8">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[#b85d1e] text-white text-[18px] font-bold flex items-center justify-center shrink-0 shadow-sm">
                    {step.num}
                  </div>

                  <div className="pt-1 flex-1 border-b border-[#ecd9cb] last:border-b-0 pb-7 last:pb-0">
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#231f1c] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[16px] leading-[1.6] text-[#6f6963]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e7efe4] px-5 py-5 flex items-center gap-3 text-[#356243]">
              <ShieldCheck className="w-6 h-6 shrink-0" strokeWidth={1.8} />
              <p className="text-[17px] font-semibold leading-[1.5]">
                {t("verifiedBadge")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <div>
            <p className="text-[13px] md:text-[14px] font-bold tracking-[0.18em] uppercase text-[#c96b2c] mb-3">
              {t("industriesEyebrow")}
            </p>
            <h3 className="text-[36px] md:text-[52px] leading-[1.02] font-serif font-bold text-[#231f1c]">
              {t("industriesHeading")}
            </h3>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[18px] font-semibold text-[#c96b2c] hover:text-[#a34f16] transition-colors"
          >
            {t("seeAll")}
            <ArrowRight className="w-5 h-5" strokeWidth={1.8} />
          </Link>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.iconKey] ?? Monitor;

            return (
              <div
                key={index}
                className="bg-[#fcfaf7] border border-[#efe3d8] rounded-[24px] px-8 py-10 text-center shadow-[0_12px_30px_rgba(60,35,15,0.04)] hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(60,35,15,0.07)] transition-all duration-300"
              >
                <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#f5e9df] flex items-center justify-center">
                  <Icon className="w-9 h-9 text-[#b85d1e]" strokeWidth={1.8} />
                </div>

                <h4 className="text-[22px] leading-[1.35] font-bold text-[#231f1c] min-h-[60px] mb-4">
                  {cat.title}
                </h4>

                <div className="text-[44px] leading-none font-serif font-bold text-[#b85d1e] mb-3">
                  {cat.count}
                </div>

                <p className="text-[14px] font-bold tracking-[0.12em] uppercase text-[#9a928b]">
                  {t("verifiedLabel")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmployerNetwork;
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
  Lock,
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
  const t = useTranslations("homeEmployerNetwork");

  const rawCategories = t.raw("categories");
  const categories: EmployerCategory[] = Array.isArray(rawCategories)
    ? (rawCategories as EmployerCategory[])
    : [];

  const steps = [
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
  ];

  return (
    <section
      id="employer-network"
      className="bg-[#fafafa] px-4 py-8 md:px-[5%] md:py-12"
    >
      <div className="mx-auto max-w-[1160px]">
        {/* Top */}
        <div className="mb-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A1523] md:text-[12px]">
              {t("eyebrow")}
            </p>

            <h2 className="mb-4 font-serif text-[32px] font-semibold leading-[1.02] text-[#1A2025] md:text-[46px] xl:text-[56px]">
              {t("headingMain")}
              <span className="text-[#8A1523]">{t("headingHighlight")}</span>
            </h2>

            <p className="mb-6 max-w-[520px] text-[15px] leading-[1.8] text-[rgba(26,32,37,0.7)] md:text-[16px]">
              {t("description")}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-[10px] border border-[rgba(0,0,0,0.08)] bg-white px-4 py-5 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(138,21,35,0.07)]">
                  <ShieldCheck
                    className="h-5 w-5 text-[#8A1523]"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-1 font-serif text-[15px] font-semibold text-[#1A2025]">
                  {t("feature1Title")}
                </h3>
                <p className="text-[12px] leading-[1.55] text-[rgba(26,32,37,0.4)] md:text-[13px]">
                  {t("feature1Desc")}
                </p>
              </div>

              <div className="rounded-[10px] border border-[rgba(0,0,0,0.08)] bg-white px-4 py-5 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(138,21,35,0.07)]">
                  <Lock
                    className="h-5 w-5 text-[#8A1523]"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-1 font-serif text-[15px] font-semibold text-[#1A2025]">
                  {t("feature2Title")}
                </h3>
                <p className="text-[12px] leading-[1.55] text-[rgba(26,32,37,0.4)] md:text-[13px]">
                  {t("feature2Desc")}
                </p>
              </div>

              <div className="rounded-[10px] border border-[rgba(0,0,0,0.08)] bg-white px-4 py-5 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(138,21,35,0.07)]">
                  <BadgeCheck
                    className="h-5 w-5 text-[#8A1523]"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-1 font-serif text-[15px] font-semibold text-[#1A2025]">
                  {t("feature3Title")}
                </h3>
                <p className="text-[12px] leading-[1.55] text-[rgba(26,32,37,0.4)] md:text-[13px]">
                  {t("feature3Desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Right verify card */}
          <div className="rounded-[12px] border border-[rgba(0,0,0,0.08)] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <div className="mb-5 flex items-center gap-3 border-b border-[rgba(0,0,0,0.08)] pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(138,21,35,0.08)]">
                <BadgeCheck
                  className="h-5 w-5 text-[#8A1523]"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[rgba(26,32,37,0.4)]">
                {t("processBadge")}
              </p>
            </div>

            <div className="mb-5 flex flex-col gap-4">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8A1523] text-[12px] font-bold text-white">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="mb-1 text-[14px] font-semibold text-[#1A2025] md:text-[15px]">
                      {step.title}
                    </h3>
                    <p className="text-[12px] leading-[1.55] text-[rgba(26,32,37,0.4)] md:text-[13px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-[8px] border border-[rgba(58,96,74,0.2)] bg-[rgba(58,96,74,0.08)] px-4 py-3">
              <ShieldCheck
                className="h-4 w-4 shrink-0 text-[#3A604A]"
                strokeWidth={1.9}
                aria-hidden="true"
              />
              <p className="text-[13px] font-semibold text-[#3A604A] md:text-[14px]">
                {t("verifiedBadge")}
              </p>
            </div>
          </div>
        </div>

        {/* Private protected strip */}
        <div className="mb-8 flex flex-col items-start gap-4 rounded-[10px] border border-[#C93A4A] bg-white px-5 py-5 md:flex-row md:items-center md:justify-between md:px-7">
          <div className="flex-1">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8A1523]">
              {t("privateLabel")}
            </p>
            <p className="text-[13px] leading-[1.6] text-[rgba(26,32,37,0.7)] md:text-[14px]">
              {t("privateDesc1")}{" "}
              <span className="font-semibold text-[#1A2025]">
                {t("privateDescStrong")}
              </span>{" "}
              {t("privateDesc2")}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_4px_18px_rgba(138,21,35,0.15)] transition hover:-translate-y-0.5"
          >
            {t("privateCta")}
          </Link>
        </div>

        {/* Industries */}
        <div className="border-t border-[rgba(0,0,0,0.08)] pt-8">
          <div className="mb-5">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A1523] md:text-[12px]">
                {t("industriesEyebrow")}
              </p>
              <h3 className="font-serif text-[26px] font-semibold text-[#1A2025] md:text-[32px]">
                {t("industriesHeading")}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
            {categories.map((cat, index) => {
              const Icon = iconMap[cat.iconKey] ?? Monitor;

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[10px] border border-[rgba(0,0,0,0.08)] bg-white px-4 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[rgba(138,21,35,0.18)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                >
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(138,21,35,0.07)]">
                    <Icon
                      className="h-6 w-6 text-[#8A1523]"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h4 className="mb-2 min-h-[44px] font-serif text-[15px] font-semibold leading-[1.3] text-[#1A2025]">
                    {cat.title}
                  </h4>

                  <span className="mb-1 block font-serif text-[28px] font-bold leading-none text-[#8A1523] md:text-[32px]">
                    {cat.count}
                  </span>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[rgba(26,32,37,0.4)] md:text-[11px]">
                    {t("verifiedLabel")}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] transition duration-300 group-hover:scale-x-100" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

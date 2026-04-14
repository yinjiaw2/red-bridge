"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function HeroSection() {
  const t = useTranslations("visa190.hero");
  const trust = t.raw("trust") as string[];
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <section
      id="top"
      style={{ fontFamily: font }}
      className="relative flex min-h-[88vh] items-center justify-center bg-[#f5efe4] px-6 pt-28 pb-20 text-center"
    >
      <div className="mx-auto max-w-[820px]">
        {/* eyebrow */}
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a8501e]">
          {t("eyebrow")}
        </div>

        {/* title */}
        <h1 className="mb-5 text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.1] text-[#2a1f14]">
          {t("title1")}
          <br />
          <span className="text-[#bf6b35]">{t("title2")}</span>
        </h1>

        {/* subtitle */}
        <p className="mx-auto mb-6 max-w-[600px] text-[1.05rem] leading-[1.8] text-[rgba(42,31,20,0.6)]">
          {t("subtitle")}
        </p>

        {/* trust */}
        <div className="mb-10 flex flex-wrap justify-center gap-4 text-[0.8rem] text-[rgba(42,31,20,0.5)]">
          {trust.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle size={14} className="text-[#5a7d5e]" />
              {item}
            </span>
          ))}
        </div>

        {/* buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/booking?src=190"
            className="rounded-full bg-[#a8501e] px-8 py-3 text-white font-semibold"
          >
            {t("ctaPrimary")}
          </Link>

          <button
            onClick={() =>
              document
                .getElementById("how-190-differs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border border-[#2a1f14]/20 px-8 py-3 text-[#2a1f14]"
          >
            {t("ctaSecondary")} →
          </button>
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 border border-[#2a1f14]/10 bg-white md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="p-4">
              <div className="font-bold text-[#bf6b35]">{item.value}</div>
              <div className="text-xs">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function HeroSection() {
  const t = useTranslations("careerLaunch.hero");
  const rawPills = t.raw("pills");
  const rawStats = t.raw("stats");
  const pills = Array.isArray(rawPills) ? (rawPills as string[]) : [];
  const stats = Array.isArray(rawStats)
    ? (rawStats as Array<{value: string; label: string}>)
    : [];

  return (
    <section
      id="top"
      style={{fontFamily: font}}
      className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-[linear-gradient(170deg,#ede0cc_0%,#f5efe4_55%,#ede5d8_100%)] px-6 py-24 text-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,80,30,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,80,30,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,black_20%,transparent_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(191,107,53,0.12)_0%,transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-[860px]">
        <div className="mb-5 inline-flex items-center rounded-full border border-[rgba(168,80,30,0.2)] bg-[rgba(168,80,30,0.08)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a8501e]">
          {t("eyebrow")}
        </div>

        <h1 className="mb-5 text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.08] text-[#2a1f14]">
          {t("title1")}
          <br />
          <span className="bg-[linear-gradient(135deg,#bf6b35,#8b3e18)] bg-clip-text text-transparent">
            {t("title2")}
          </span>
        </h1>

        <p className="mx-auto mb-5 max-w-[620px] text-[1.02rem] leading-[1.85] text-[rgba(42,31,20,0.65)]">
          {t("subtitle")}
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {pills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(168,80,30,0.18)] bg-[rgba(168,80,30,0.07)] px-4 py-2 text-[12px] text-[rgba(42,31,20,0.65)]"
            >
              <CheckCircle2 size={14} className="text-[#5a7d5e]" />
              {pill}
            </span>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/booking?src=career_launch_hero_cta"
            className="rounded-full bg-[linear-gradient(135deg,#bf6b35,#8b3e18)] px-8 py-3 font-semibold text-white shadow-[0_6px_24px_rgba(168,80,30,0.18)]"
          >
            {t("primaryCta")}
          </Link>
          <button
            onClick={() =>
              document.getElementById("overview")?.scrollIntoView({behavior: "smooth"})
            }
            className="rounded-full border border-[rgba(42,31,20,0.14)] px-8 py-3 text-[rgba(42,31,20,0.75)]"
          >
            {t("secondaryCta")}
          </button>
        </div>

        <div className="grid overflow-hidden rounded-[8px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] shadow-[0_8px_28px_rgba(42,31,20,0.08)] md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-b border-[rgba(42,31,20,0.09)] p-5 text-center last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0"
            >
              <div className="mb-1 text-[30px] font-semibold text-[#bf6b35]">
                {item.value}
              </div>
              <div className="text-[11px] uppercase tracking-[0.12em] text-[rgba(42,31,20,0.45)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { CalendarCheck, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Stat = { value: string; label: string };

export default function HeroSection() {
  const t = useTranslations("employerPathway.hero");
  const rawTrust = t.raw("trust");
  const rawStats = t.raw("stats");
  const trust = Array.isArray(rawTrust) ? (rawTrust as string[]) : [];
  const stats = Array.isArray(rawStats) ? (rawStats as Stat[]) : [];

  return (
    <section
      id="top"
      style={{ fontFamily: font }}
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-[linear-gradient(170deg,#e8d9c4_0%,#f5efe4_45%,#ede5d8_100%)] px-6 pt-28 pb-20 text-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,80,30,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,80,30,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_40%,black_0%,transparent_100%)]" />
      <div className="relative mx-auto max-w-[820px]">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a8501e]">
          {t("eyebrow")}
        </div>

        <h1 className="mb-5 text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.08] text-[#2a1f14]">
          {t("title1")} <span className="text-[#bf6b35]">{t("title2")}</span>
          <br />
          {t("title3")}
        </h1>

        <p className="mx-auto mb-6 max-w-[620px] text-[1.05rem] leading-[1.85] text-[rgba(42,31,20,0.62)]">
          {t("subtitle")}
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-4 text-[0.8rem] text-[rgba(42,31,20,0.52)]">
          {trust.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle size={14} className="text-[#5a7d5e]" />
              {item}
            </span>
          ))}
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/booking?src=employer_hero_cta"
            className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#bf6b35,#8b3e18)] px-8 py-3 font-semibold text-white shadow-[0_6px_28px_rgba(168,80,30,0.25)]"
          >
            <CalendarCheck size={16} className="mr-2" />
            {t("ctaPrimary")}
          </Link>

          <button
            onClick={() =>
              document
                .getElementById("is-this-for-you")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border border-[#2a1f14]/15 px-8 py-3 text-[#2a1f14]"
          >
            {t("ctaSecondary")} {"->"}
          </button>
        </div>

        <div className="grid overflow-hidden rounded-[8px] border border-[#2a1f14]/10 bg-[#faf6f0] shadow-[0_12px_48px_rgba(42,31,20,0.12)] md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-b border-[#2a1f14]/10 p-5 last:border-b-0 md:border-r md:last:border-r-0 md:border-b-0"
            >
              <div className="mb-1 text-[28px] font-semibold text-[#bf6b35]">
                {item.value}
              </div>
              <div className="text-[11px] leading-5 text-[rgba(42,31,20,0.52)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

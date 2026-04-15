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
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-background px-6 pt-28 pb-20 text-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(163,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(163,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_40%,black_0%,transparent_100%)]" />
      <div className="relative mx-auto max-w-[820px]">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {t("eyebrow")}
        </div>

        <h1 className="mb-5 text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.08] text-foreground">
          {t("title1")} <span className="text-primary">{t("title2")}</span>
          <br />
          {t("title3")}
        </h1>

        <p className="mx-auto mb-6 max-w-[620px] text-[1.05rem] leading-[1.85] text-muted-foreground">
          {t("subtitle")}
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-4 text-[0.8rem] text-muted-foreground">
          {trust.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle size={14} className="text-primary" />
              {item}
            </span>
          ))}
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/booking?src=employer_hero_cta"
            className="inline-flex items-center rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-95"
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
            className="rounded-full border border-border px-8 py-3 text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-md"
          >
            {t("ctaSecondary")} {"->"}
          </button>
        </div>

        <div className="grid overflow-hidden rounded-[8px] border border-border bg-card shadow-[0_12px_48px_rgba(42,31,20,0.12)] md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-b border-border p-5 last:border-b-0 md:border-r md:last:border-r-0 md:border-b-0"
            >
              <div className="mb-1 text-[28px] font-semibold text-primary">
                {item.value}
              </div>
              <div className="text-[11px] leading-5 text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

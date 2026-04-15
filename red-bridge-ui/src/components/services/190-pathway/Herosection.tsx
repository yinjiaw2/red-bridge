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
      className="relative flex min-h-[88vh] items-center justify-center bg-background px-6 pt-28 pb-20 text-center"
    >
      <div className="mx-auto max-w-[820px]">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {t("eyebrow")}
        </div>

        <h1 className="mb-5 text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.1] text-foreground">
          {t("title1")}
          <br />
          <span className="text-primary">{t("title2")}</span>
        </h1>

        <p className="mx-auto mb-6 max-w-[600px] text-[1.05rem] leading-[1.8] text-muted-foreground">
          {t("subtitle")}
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-4 text-[0.8rem] text-muted-foreground">
          {trust.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle size={14} className="text-[#2d6a4f]" />
              {item}
            </span>
          ))}
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact?src=190"
            className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-95"
          >
            {t("ctaPrimary")}
          </Link>

          <button
            onClick={() =>
              document
                .getElementById("how-190-differs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border border-border px-8 py-3 text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-md"
          >
            {t("ctaSecondary")} {"->"}
          </button>
        </div>

        <div className="grid grid-cols-2 border border-border bg-card md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="p-4">
              <div className="font-bold text-primary">{item.value}</div>
              <div className="text-xs text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


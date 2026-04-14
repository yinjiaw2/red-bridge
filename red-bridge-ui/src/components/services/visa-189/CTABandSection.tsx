"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, FileCheck2, CalendarDays } from "lucide-react";
import Link from "next/link";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function CtaSection() {
  const t = useTranslations("visa189CtaSection");

  const trustItems = [
    {
      icon: <ShieldCheck className="h-4 w-4" />,
      text: t("trust.0"),
    },
    {
      icon: <FileCheck2 className="h-4 w-4" />,
      text: t("trust.1"),
    },
    {
      icon: <CalendarDays className="h-4 w-4" />,
      text: t("trust.2"),
    },
  ];

  return (
    <section
      id="cta"
      style={{ fontFamily: font }}
      className="relative overflow-hidden bg-[linear-gradient(140deg,#6b2e0f,#a8501e,#bf6b35)] px-6 py-24 text-center md:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.05),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.04),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-[920px]">
        <h2 className="text-[34px] font-semibold leading-tight text-[#faf6f0] md:text-[52px]">
          {t("title1")}
          <em className="not-italic text-[rgba(245,239,228,0.72)]">
            {t("titleHighlight")}
          </em>
        </h2>

        <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-8 text-[rgba(245,239,228,0.75)] md:text-[16px]">
          {t("subtitle")}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
          {trustItems.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 text-[13px] text-[rgba(245,239,228,0.8)]"
            >
              <span className="text-[rgba(245,239,228,0.7)]">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>

        <div className="mt-9">
          <Link
            href="/booking?src=189_cta"
            className="inline-flex items-center justify-center rounded-full bg-[#faf6f0] px-8 py-4 text-[15px] font-bold text-[#a8501e] shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          >
            {t("button")}
          </Link>
        </div>

        <p className="mt-4 text-[13px] text-[rgba(245,239,228,0.68)]">
          {t("footnote")}
        </p>
      </div>
    </section>
  );
}
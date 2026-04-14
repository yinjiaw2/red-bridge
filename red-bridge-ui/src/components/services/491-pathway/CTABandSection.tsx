"use client";

import Link from "next/link";
import { Calendar, Check, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function CTABandSection() {
  const t = useTranslations("visa491.ctaBand");
  const rawTrust = t.raw("trust");
  const trust = Array.isArray(rawTrust) ? (rawTrust as string[]) : [];
  const icons = [Calendar, Shield, Check];

  return (
    <section
      id="book-now"
      style={{ fontFamily: font }}
      className="relative overflow-hidden bg-[linear-gradient(140deg,#2d4a30,#4a7a4e,#5a7d5e)] px-6 py-24 text-center text-[#faf6f0] md:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.05),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.04),transparent_50%)]" />

      <div className="relative mx-auto max-w-[860px]">
        <h2 className="text-[34px] font-semibold leading-tight md:text-[48px]">
          {t("title1")}
          <br />
          <em className="not-italic text-[rgba(245,239,228,0.72)]">{t("title2")}</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-[rgba(245,239,228,0.74)]">
          {t("subtitle")}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-[13px] text-[rgba(245,239,228,0.82)]">
          {trust.map((item, index) => {
            const Icon = icons[index] ?? Check;
            return (
              <span key={item} className="inline-flex items-center gap-2">
                <Icon size={15} className="text-[rgba(245,239,228,0.65)]" />
                {item}
              </span>
            );
          })}
        </div>

        <Link
          href="/booking?src=491_bottom_cta"
          className="mt-8 inline-flex rounded-full bg-white px-8 py-3 font-semibold text-[#2d6a4f]"
        >
          {t("button")}
        </Link>

        <p className="mt-5 text-[13px] text-[rgba(245,239,228,0.45)]">
          {t("phoneLabel")}{" "}
          <a href="tel:0399617301" className="underline underline-offset-4">
            03 9961 7301
          </a>
        </p>
      </div>
    </section>
  );
}

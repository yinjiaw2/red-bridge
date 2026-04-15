"use client";

import Link from "next/link";
import { Calendar, Check, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function CTABandSection() {
  const t = useTranslations("visa190.ctaBand");
  const trust = t.raw("trust") as string[];
  const icons = [Calendar, Shield, Check];

  return (
    <section
      id="book-now"
      style={{ fontFamily: font }}
      className="bg-secondary px-6 py-24 text-center text-white md:px-8"
    >
      <div className="mx-auto max-w-[860px]">
        <h2 className="text-[34px] font-semibold leading-tight md:text-[48px]">
          {t("title1")}
          <br />
          <em className="not-italic text-primary">{t("title2")}</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-[rgba(245,239,228,0.7)]">
          {t("subtitle")}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-[13px] text-[rgba(245,239,228,0.75)]">
          {trust.map((item, index) => {
            const Icon = icons[index] ?? Check;
            return (
              <span key={item} className="inline-flex items-center gap-2">
                <Icon size={15} className="text-primary" />
                {item}
              </span>
            );
          })}
        </div>

        <Link
          href="/contact?src=190_bottom_cta"
          className="mt-8 inline-flex rounded-full bg-white px-8 py-3 font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-95"
        >
          {t("button")}
        </Link>

        <p className="mt-5 text-[13px] text-white/70">
          {t("phoneLabel")}{" "}
          <a
            href="tel:0399617301"
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-secondary hover:shadow-md"
          >
            03 9961 7301
          </a>
        </p>
      </div>
    </section>
  );
}




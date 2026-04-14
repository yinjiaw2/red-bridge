"use client";

import Link from "next/link";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function CTASection() {
  const t = useTranslations("careerLaunch.cta");
  const rawTrust = t.raw("trust");
  const trust = Array.isArray(rawTrust) ? (rawTrust as string[]) : [];

  return (
    <section
      id="cta"
      style={{fontFamily: font}}
      className="relative overflow-hidden bg-[linear-gradient(140deg,#6b2e0f_0%,#a8501e_40%,#bf6b35_100%)] px-6 py-24 text-center md:px-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_10%,transparent_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_65%)]" />
      <div className="relative z-10 mx-auto max-w-[760px]">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
          <CalendarCheck size={14} />
          {t("eyebrow")}
        </div>
        <h2 className="text-[34px] font-semibold leading-tight text-white md:text-[48px]">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-8 text-white/75">
          {t("subtitle")}
        </p>
        <Link
          href="/booking?src=career_launch_bottom_cta"
          className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-[16px] font-semibold text-[#a8501e] shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
        >
          {t("button")}
        </Link>
        <div className="mt-7 flex flex-wrap justify-center gap-6 text-[13px] text-white/70">
          {trust.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle2 size={14} className="text-white/85" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

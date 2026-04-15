"use client";

import Link from "next/link";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const t = useTranslations("careerLaunch.cta");
  const rawTrust = t.raw("trust");
  const trust = Array.isArray(rawTrust) ? (rawTrust as string[]) : [];

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-naviblue px-6 py-24 text-center md:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.05),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.04),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-[760px]">
        <div className="mb-6 inline-flex items-center gap-2 rounded-none border border-white/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white">
          <CalendarCheck size={14} />
          {t("eyebrow")}
        </div>
        <h2 className="text-4xl font-bold leading-tight font-serif text-white md:text-5xl font-serif">
          {t("title")}
        </h2>
        <p className="mx-auto mt-6 max-w-[620px] text-lg leading-8 text-gray-300">
          {t("subtitle")}
        </p>
        <Button
          asChild
          className="mt-8 h-14 rounded-none bg-highlight px-10 text-[15px] font-bold uppercase tracking-widest text-naviblue shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-xl"
        >
          <Link href="/contact?src=career_launch_bottom_cta">
            {t("button")}
          </Link>
        </Button>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          {trust.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-highlight" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


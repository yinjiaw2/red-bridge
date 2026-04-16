"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Users,
  ClipboardCheck,
  HeartHandshake,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("homeHero");
  const locale = useLocale();

  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-white sm:h-[88vh] sm:min-h-[680px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/home-hero-bg.png"
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />

        <div className="absolute inset-y-0 left-0 w-[35%] bg-linear-to-r from-white/90 via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.93)_35%,rgba(255,255,255,0.75)_55%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-y-0 left-[45%] w-[20%] bg-white/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[620px] items-center px-5 py-14 sm:h-full sm:min-h-0 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[600px]">
          {/* Badge */}
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#ead6bf] bg-[#fbf4ec] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#cc7d3f] sm:mb-5 sm:px-5 sm:text-[12px]">
            <Shield className="h-4 w-4" aria-hidden="true" />
            <span className="min-w-0 truncate">{t("badge")}</span>
          </div>

          {/* Title */}
          <h1
            className={`text-[34px] leading-[1.06] text-[#22150f] sm:text-[38px] md:text-[50px] xl:text-[56px]${locale === "zh" ? " font-bold" : ""}`}
          >
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-[#b3131b]">{chunks}</span>
              ),
              br: () => <br />,
            })}
          </h1>

          {/* Description */}
          <p className="mt-4 text-[15px] leading-[1.65] text-[#6e6760] sm:mt-5 md:text-[17px]">
            {t("description")}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
            <Link
              href="/contact"
              className="flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#efb64f] px-5 text-[14px] font-semibold text-[#2a1f19] sm:h-[52px] sm:w-auto sm:justify-start sm:px-6 sm:text-[15px]"
            >
              {t("primaryButton")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/services#find-your-path"
              className="flex h-[48px] w-full items-center justify-center rounded-full border border-[#d9868f] px-5 text-[14px] font-semibold text-[#b63c46] sm:ml-4 sm:h-[52px] sm:w-auto sm:justify-start sm:px-6 sm:text-[15px]"
            >
              {t("secondaryButton")}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-7 border-t border-[#ece5de] pt-5 sm:mt-8 sm:pt-6">
            <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-3 min-[420px]:gap-0 min-[420px]:divide-x min-[420px]:divide-[#e2d9d0]">
              <div className="flex items-center gap-3 min-[420px]:pr-4">
                <Users className="h-6 w-6 text-[#b3131b]" aria-hidden="true" />
                <div>
                  <div className="text-xl font-bold sm:text-2xl">200+</div>
                  <div className="text-xs text-[#7a736d] sm:text-sm">
                    {t("stats.placements")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 min-[420px]:px-4">
                <ClipboardCheck
                  className="h-6 w-6 text-[#b3131b]"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-xl font-bold sm:text-2xl">300+</div>
                  <div className="text-xs text-[#7a736d] sm:text-sm">
                    {t("stats.assessments")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 min-[420px]:pl-4">
                <HeartHandshake
                  className="h-6 w-6 text-[#b3131b]"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-xl font-bold sm:text-2xl">10+</div>
                  <div className="text-xs text-[#7a736d] sm:text-sm">
                    {t("stats.employerPartners")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

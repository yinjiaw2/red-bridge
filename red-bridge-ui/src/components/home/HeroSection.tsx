"use client";

import { useEffect, useState } from "react";
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
import { cn } from "@/lib/utils";

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: {
    mobile?: boolean;
  };
};

function detectMobileDevice() {
  const nav = navigator as NavigatorWithUserAgentData;

  if (typeof nav.userAgentData?.mobile === "boolean") {
    return nav.userAgentData.mobile;
  }

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

export default function HeroSection() {
  const t = useTranslations("homeHero");
  const locale = useLocale();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = detectMobileDevice();
    setIsMobile(mobile);
    console.log("Is mobile:", mobile);
  }, []);

  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-white sm:h-[88vh] sm:min-h-[680px] xl:h-[780px] xl:max-h-[780px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/home-hero-bg.jpg"
          alt={t("imageAlt")}
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="object-cover object-center md:object-right"
        />

        <div className="absolute inset-y-0 left-0 w-[46%] bg-linear-to-r from-white/92 via-white/34 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.88)_28%,rgba(255,255,255,0.56)_46%,rgba(255,255,255,0.14)_62%,rgba(255,255,255,0)_74%)]" />
        <div className="absolute inset-y-0 left-0 w-[24%] bg-white/18 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[620px] items-center px-5 py-14 sm:h-full sm:min-h-0 sm:px-8 md:px-12 lg:px-16 xl:px-20 xl:min-h-0">
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
          <p className="mt-4 text-[15px] leading-[1.65] text-[#1f1f1f] sm:mt-5 md:text-[17px]">
            {t("description")}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
            <Link
              href={`/contact?ctasrc=home_hero_cta&locale=${locale}`}
              className="flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#efb64f] px-5 text-[14px] font-semibold text-[#2a1f19] sm:h-[52px] sm:w-auto sm:justify-start sm:px-6 sm:text-[15px]"
            >
              {t("primaryButton")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-7 border-t border-[#ece5de] pt-5 sm:mt-8 sm:pt-6">
            <div
              className={cn(
                "grid",
                isMobile
                  ? "grid-cols-1 gap-4"
                  : "grid-cols-1 gap-4 min-[420px]:grid-cols-3 min-[420px]:gap-0 min-[420px]:divide-x min-[420px]:divide-[#e2d9d0]",
              )}
            >
              <div
                className={cn(
                  "flex gap-3",
                  isMobile
                    ? "flex-col items-start gap-2"
                    : "flex-row items-center min-[420px]:pr-4",
                )}
              >
                <Users className="h-6 w-6 text-[#b3131b]" aria-hidden="true" />
                <div>
                  <div className="text-xl font-bold sm:text-2xl">200+</div>
                  <div className="text-xs text-[#1f1f1f] sm:text-sm">
                    {t("stats.placements")}
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "flex gap-3",
                  isMobile
                    ? "flex-col items-start gap-2"
                    : "flex-row items-center min-[420px]:px-4",
                )}
              >
                <ClipboardCheck
                  className="h-6 w-6 text-[#b3131b]"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-xl font-bold sm:text-2xl">300+</div>
                  <div className="text-xs text-[#1f1f1f] sm:text-sm">
                    {t("stats.assessments")}
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "flex gap-3",
                  isMobile
                    ? "flex-col items-start gap-2"
                    : "flex-row items-center min-[420px]:pl-4",
                )}
              >
                <HeartHandshake
                  className="h-6 w-6 text-[#b3131b]"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-xl font-bold text-[#1f1f1f] sm:text-2xl">
                    10+
                  </div>
                  <div className="text-xs text-[#1f1f1f] sm:text-sm">
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

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
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("homeHero");

  return (
    <section className="relative h-[88vh] min-h-[680px] w-full overflow-hidden bg-white">
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
      <div className="relative z-10 flex h-full items-center px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[600px]">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ead6bf] bg-[#fbf4ec] px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#cc7d3f]">
            <Shield className="h-4 w-4" aria-hidden="true" />
            {t("badge")}
          </div>

          {/* Title */}
          <h1
            className="text-[38px] leading-[1.05] text-[#22150f] md:text-[50px] xl:text-[56px]"
          >
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-[#b3131b]">{chunks}</span>
              ),
              br: () => <br />,
            })}
          </h1>

          {/* Description */}
          <p className="mt-5 text-[16px] leading-[1.7] text-[#6e6760] md:text-[17px]">
            {t("description")}
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="flex h-[52px] items-center gap-2 rounded-lg bg-[#efb64f] px-6 text-[15px] font-semibold text-[#2a1f19]"
            >
              {t("primaryButton")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/services#find-your-path"
              className="flex h-[52px] items-center rounded-lg border border-[#d9868f] px-6 text-[15px] font-semibold text-[#b63c46] sm:ml-4"
            >
              {t("secondaryButton")}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 border-t border-[#ece5de] pt-6">
            <div className="flex items-center whitespace-nowrap">
              <div className="flex items-center gap-3 pr-6">
                <Users className="h-6 w-6 text-[#b3131b]" aria-hidden="true" />
                <div>
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-[#7a736d]">
                    {t("stats.placements")}
                  </div>
                </div>
              </div>

              <div className="h-10 w-px bg-[#e2d9d0]" />

              <div className="flex items-center gap-3 px-6">
                <ClipboardCheck
                  className="h-6 w-6 text-[#b3131b]"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-sm text-[#7a736d]">
                    {t("stats.assessments")}
                  </div>
                </div>
              </div>

              <div className="h-10 w-px bg-[#e2d9d0]" />

              <div className="flex items-center gap-3 pl-6">
                <HeartHandshake
                  className="h-6 w-6 text-[#b3131b]"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-[#7a736d]">
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

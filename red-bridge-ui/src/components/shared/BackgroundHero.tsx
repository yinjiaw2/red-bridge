"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { CheckCircle } from "lucide-react";

type HeroStat = {
  value: string;
  label: string;
};

type BackgroundHeroProps = {
  id?: string;
  eyebrow?: ReactNode;
  eyebrowIcon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  actions?: ReactNode;
  trustItems?: string[];
  stats?: HeroStat[];
  sizeClassName?: string;
  contentHeightClassName?: string;
  imagePositionClassName?: string;
  contentClassName?: string;
};

export function BackgroundHero({
  id,
  eyebrow,
  eyebrowIcon,
  title,
  description,
  imageSrc,
  imageAlt,
  actions,
  trustItems,
  stats,
  sizeClassName = "min-h-[620px] sm:h-[88vh] sm:min-h-[680px]",
  contentHeightClassName = "min-h-[620px] sm:h-full sm:min-h-0",
  imagePositionClassName = "object-right",
  contentClassName = "max-w-[600px]",
}: BackgroundHeroProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden border-b border-[#ece5de] bg-white ${sizeClassName}`}
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${imagePositionClassName}`}
        />
        <div className="absolute inset-y-0 left-0 w-[35%] bg-linear-to-r from-white/90 via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.93)_35%,rgba(255,255,255,0.75)_55%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-y-0 left-[45%] w-[20%] bg-white/30 blur-3xl" />
      </div>

      <div className={`relative z-10 flex items-center px-5 py-14 sm:px-8 md:px-12 lg:px-16 xl:px-20 ${contentHeightClassName}`}>
        <div className={contentClassName}>
          {eyebrow ? (
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#ead6bf] bg-[#fbf4ec] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#cc7d3f] sm:mb-5 sm:px-5 sm:text-[12px]">
              {eyebrowIcon}
              <span className="min-w-0 truncate">{eyebrow}</span>
            </div>
          ) : null}

          <h1 className="text-[34px] font-bold leading-[1.06] text-[#22150f] sm:text-[38px] md:text-[50px] xl:text-[56px]">
            {title}
          </h1>

          {description ? (
            <p className="mt-4 text-[15px] leading-[1.65] text-[#6e6760] sm:mt-5 md:text-[17px]">
              {description}
            </p>
          ) : null}

          {trustItems?.length ? (
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-[#6e6760]">
              {trustItems.map((item) => (
                <span key={item} className="inline-flex items-start gap-2">
                  <CheckCircle
                    size={14}
                    className="mt-0.5 shrink-0 text-[#2d6a4f]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          ) : null}

          {actions ? (
            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
              {actions}
            </div>
          ) : null}

          {stats?.length ? (
            <div className="mt-7 border-t border-[#ece5de] pt-5 sm:mt-8 sm:pt-6">
              <div className="grid grid-cols-2 gap-4 min-[520px]:grid-cols-4 min-[520px]:gap-0 min-[520px]:divide-x min-[520px]:divide-[#e2d9d0]">
                {stats.map((stat) => (
                  <div
                    key={`${stat.value}-${stat.label}`}
                    className="min-[520px]:px-4 first:min-[520px]:pl-0"
                  >
                    <div className="text-xl font-bold text-[#22150f] sm:text-2xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-[#7a736d] sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

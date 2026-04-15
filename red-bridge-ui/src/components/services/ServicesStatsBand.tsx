"use client";

import { useTranslations } from "next-intl";

export function ServicesStatsBand() {
  const t = useTranslations("servicesHome.stats");
  const stats = t.raw("items") as Array<{ value: string; label: string }>;

  return (
    <section className="bg-secondary px-6 py-8 text-white md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[18px] border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "px-6 py-7 text-center",
                index < stats.length - 1 ? "border-b border-white/10 lg:border-b-0" : "",
                index % 2 === 0 ? "sm:border-r sm:border-white/10 lg:border-r lg:border-white/10" : "",
                index < stats.length - 1 && index !== 1 ? "lg:border-r lg:border-white/10" : "",
                index === stats.length - 1 ? "lg:border-r-0" : "",
              ].join(" ")}
            >
              <div className="font-serif text-[2.4rem] leading-none text-highlight md:text-[2.8rem]">{stat.value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/65">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

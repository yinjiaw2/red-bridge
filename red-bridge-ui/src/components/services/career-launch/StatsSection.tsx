"use client";

import { useTranslations } from "next-intl";

export default function StatsSection() {
  const t = useTranslations("careerLaunch.stats");
  const rawItems = t.raw("items");
  const items = Array.isArray(rawItems)
    ? (rawItems as Array<{ value: string; label: string }>)
    : [];

  return (
    <section id="stats" className="bg-naviblue px-6 pb-24 md:px-8">
      <div className="mx-auto grid max-w-[760px] overflow-hidden rounded-none border border-white/20 bg-transparent shadow-lg md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-white/5 px-8 py-10 text-center transition-colors hover:bg-white/10"
          >
            <div className="mb-2 text-5xl font-bold leading-none text-highlight">
              {item.value}
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

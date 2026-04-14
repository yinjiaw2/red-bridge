"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function StatsSection() {
  const t = useTranslations("careerLaunch.stats");
  const rawItems = t.raw("items");
  const items = Array.isArray(rawItems)
    ? (rawItems as Array<{value: string; label: string}>)
    : [];

  return (
    <section
      id="stats"
      style={{fontFamily: font}}
      className="bg-[#2a1f14] px-6 pb-24 md:px-8"
    >
      <div className="mx-auto grid max-w-[760px] gap-px overflow-hidden rounded-[6px] border border-white/10 bg-white/10 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-white/[0.03] px-8 py-10 text-center transition hover:bg-white/[0.06]"
          >
            <div className="mb-2 bg-[linear-gradient(135deg,#e8a878,#bf6b35)] bg-clip-text text-[48px] font-semibold leading-none text-transparent">
              {item.value}
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(245,239,228,0.45)]">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

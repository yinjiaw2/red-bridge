"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Region = {
  distance: string;
  title: string;
  desc: string;
  tags: string[];
};

export default function RegionalAreasSection() {
  const t = useTranslations("visa491.regionalAreas");
  const rawRegions = t.raw("regions");
  const regions = Array.isArray(rawRegions) ? (rawRegions as Region[]) : [];

  return (
    <section
      id="regional-areas"
      style={{ fontFamily: font }}
      className="bg-[#f5efe4] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5a7d5e]">
            <span className="h-px w-6 bg-[#5a7d5e]" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-[#2a1f14] md:text-[44px]">
            {t("title1")}
            <br />
            <em className="not-italic text-[#5a7d5e]">{t("title2")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {regions.map((region) => (
            <article
              key={region.title}
              className="rounded-[10px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] p-7 transition hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(42,31,20,0.08)]"
            >
              <span className="mb-3 inline-block rounded-full bg-[rgba(90,125,94,0.08)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#5a7d5e]">
                {region.distance}
              </span>
              <h3 className="mb-3 text-[21px] font-semibold text-[#2a1f14]">
                {region.title}
              </h3>
              <p className="mb-5 text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
                {region.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {region.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[4px] bg-[#ede5d8] px-3 py-1 text-[11px] text-[rgba(42,31,20,0.55)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-[13px] text-[rgba(42,31,20,0.52)]">
          {t("sourcePrefix")}{" "}
          <a
            href={t("sourceHref")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a7d5e] underline underline-offset-4"
          >
            {t("sourceLinkText")}
          </a>
        </p>
      </div>
    </section>
  );
}

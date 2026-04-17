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
      className="bg-background px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-foreground md:text-[44px]">
            {t("title1")}
            <br />
            <em className="not-italic text-primary">{t("title2")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {regions.map((region) => (
            <article
              key={region.title}
              className="rounded-[10px] border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(42,31,20,0.08)]"
            >
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-primary">
                {region.distance}
              </span>
              <h3 className="mb-3 text-[21px] font-semibold text-foreground">
                {region.title}
              </h3>
              <p className="mb-5 text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
                {region.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {region.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[4px] bg-muted px-3 py-1 text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-[13px] text-muted-foreground">
          {t("sourcePrefix")}{" "}
          <a
            href={t("sourceHref")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[12px] font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md"
          >
            {t("sourceLinkText")}
          </a>
        </p>
      </div>
    </section>
  );
}



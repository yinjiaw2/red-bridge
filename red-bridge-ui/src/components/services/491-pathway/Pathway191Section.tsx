"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Requirement = {
  title: string;
  desc: string;
};

type Stat = {
  value: string;
  label: string;
};

export default function Pathway191Section() {
  const t = useTranslations("visa491.pathway191");
  const rawRequirements = t.raw("requirements");
  const rawStats = t.raw("stats");
  const requirements = Array.isArray(rawRequirements)
    ? (rawRequirements as Requirement[])
    : [];
  const stats = Array.isArray(rawStats) ? (rawStats as Stat[]) : [];

  return (
    <section
      id="191-pathway"
      style={{ fontFamily: font }}
      className="bg-muted px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-foreground md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto max-w-[860px] rounded-[12px] border border-primary/20 bg-primary/5 p-8 md:p-10">
          <h3 className="mb-4 text-[30px] font-semibold text-foreground">
            {t("cardTitle1")}
            <em className="not-italic text-primary">{t("cardTitle2")}</em>
          </h3>
          <p className="mb-4 text-[15px] leading-8 text-[rgba(42,31,20,0.68)]">
            {t("body1")}
          </p>
          <p className="mb-5 text-[15px] leading-8 text-[rgba(42,31,20,0.68)]">
            {t("body2")}
          </p>

          <div className="space-y-4">
            {requirements.map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#2d6a4f]" />
                <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.68)]">
                  <strong className="text-foreground">{item.title}</strong>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[13px] text-muted-foreground">
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

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[8px] bg-primary/10 px-5 py-6 text-center"
              >
                <div className="mb-1 text-[34px] font-semibold text-primary">
                  {item.value}
                </div>
                <div className="text-[12px] leading-5 text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



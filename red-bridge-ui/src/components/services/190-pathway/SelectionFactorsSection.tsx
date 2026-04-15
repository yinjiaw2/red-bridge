"use client";

import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Item = {
  title: string;
  desc: string;
  weight: string;
};

export default function SelectionFactorsSection() {
  const t = useTranslations("visa190.selectionFactors");
  const items = t.raw("items") as Item[];

  return (
    <section
      id="roi-factors"
      style={{ fontFamily: font }}
      className="bg-muted px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight text-foreground md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-4 rounded-[10px] border border-border bg-card p-5 md:grid-cols-[56px_1fr_auto] md:items-start"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                {index + 1}
              </div>
              <div>
                <h3 className="mb-1 text-[18px] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-7 text-[rgba(42,31,20,0.65)]">
                  {item.desc}
                </p>
              </div>
              <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                {item.weight}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



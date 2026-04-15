"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type Pathway = {
  visa: string;
  title: string;
  desc: string;
  linkText: string;
  href: string;
};

export default function RelatedPathwaysSection() {
  const t = useTranslations("visa491.related");
  const rawItems = t.raw("items");
  const items = Array.isArray(rawItems) ? (rawItems as Pathway[]) : [];

  return (
    <section id="related" style={{ fontFamily: font }} className="bg-background px-6 py-24 md:px-8">
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
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-[10px] border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                {item.visa}
              </div>
              <h3 className="mb-2 text-[20px] font-semibold text-foreground">{item.title}</h3>
              <p className="mb-4 text-[14px] leading-7 text-muted-foreground">{item.desc}</p>
              <span className="text-[13px] font-semibold text-primary">{item.linkText}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

type Pathway = {
  visa: string;
  title: string;
  desc: string;
  linkText: string;
  href: string;
};

export default function RelatedPathwaysSection() {
  const t = useTranslations("visa189RelatedPathwaysSection");

  const pathways: Pathway[] = [
    { visa: t("items.0.visa"), title: t("items.0.title"), desc: t("items.0.desc"), linkText: t("items.0.linkText"), href: "/services/visa-190" },
    { visa: t("items.1.visa"), title: t("items.1.title"), desc: t("items.1.desc"), linkText: t("items.1.linkText"), href: "/services/visa-491" },
    { visa: t("items.2.visa"), title: t("items.2.title"), desc: t("items.2.desc"), linkText: t("items.2.linkText"), href: "/services/employer-sponsored" },
  ];

  return (
    <section id="related-pathways" className="border-b border-border bg-muted px-6 py-24 md:px-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-lg font-bold uppercase tracking-widest text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {t("title1")}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-lg leading-8 text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-3">
          {pathways.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block rounded-none border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">{item.visa}</div>
              <h4 className="mb-3 font-serif text-xl font-bold text-foreground">{item.title}</h4>
              <p className="mb-5 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
              <span className="text-sm font-bold uppercase tracking-wider text-primary">{item.linkText}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    {
      visa: t("items.0.visa"),
      title: t("items.0.title"),
      desc: t("items.0.desc"),
      linkText: t("items.0.linkText"),
      href: "/services/visa-190",
    },
    {
      visa: t("items.1.visa"),
      title: t("items.1.title"),
      desc: t("items.1.desc"),
      linkText: t("items.1.linkText"),
      href: "/services/visa-491",
    },
    {
      visa: t("items.2.visa"),
      title: t("items.2.title"),
      desc: t("items.2.desc"),
      linkText: t("items.2.linkText"),
      href: "/services/employer-sponsored",
    },
  ];

  return (
    <section
      id="related-pathways"
      className="bg-gray-50 px-6 py-24 md:px-8 border-b border-gray-200"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brandred">
            <span className="h-px w-6 bg-brandred" />
            {t("eyebrow")}
          </div>

          <h2 className="text-4xl font-bold leading-tight text-naviblue md:text-5xl font-serif">
            {t("title1")}
            <em className="not-italic text-brandred">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-lg leading-8 text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-3">
          {pathways.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block rounded-none border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-brandred">
                {item.visa}
              </div>

              <h4 className="mb-3 text-xl font-bold text-naviblue font-serif">
                {item.title}
              </h4>

              <p className="mb-5 text-base leading-relaxed text-gray-600">
                {item.desc}
              </p>

              <span className="text-sm font-bold uppercase tracking-wider text-brandred">
                {item.linkText}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

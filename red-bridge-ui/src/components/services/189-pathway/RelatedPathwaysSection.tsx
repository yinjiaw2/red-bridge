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
      style={{ fontFamily: font }}
      className="bg-[#f5efe4] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8501e]">
            <span className="h-px w-6 bg-[#bf6b35]" />
            {t("eyebrow")}
          </div>

          <h2 className="text-[34px] font-semibold leading-tight text-[#2a1f14] md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-[#bf6b35]">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)] md:text-[16px]">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-4 md:grid-cols-3">
          {pathways.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block rounded-[8px] border border-[rgba(42,31,20,0.09)] bg-[#faf6f0] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,80,30,0.2)] hover:shadow-[0_4px_24px_rgba(42,31,20,0.1)]"
            >
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#a8501e]">
                {item.visa}
              </div>

              <h4 className="mb-2 text-[18px] font-semibold text-[#2a1f14]">
                {item.title}
              </h4>

              <p className="mb-4 text-[14px] leading-7 text-[rgba(42,31,20,0.6)]">
                {item.desc}
              </p>

              <span className="text-[13px] font-semibold text-[#a8501e]">
                {item.linkText}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
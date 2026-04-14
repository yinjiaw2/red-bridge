"use client";

import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type FAQItem = {
  question: string;
  answer: string;
  linkText?: string;
};

export default function FAQSection() {
  const t = useTranslations("visa190.faq");
  const items = t.raw("items") as FAQItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{ fontFamily: font }}
      className="bg-[#2a1f14] px-6 py-24 text-[#f5efe4] md:px-8"
    >
      <div className="mx-auto max-w-[960px]">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c97a45]">
            <span className="h-px w-6 bg-[#c97a45]" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-[#c97a45]">{t("titleHighlight")}</em>
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={item.question}
                className="rounded-[10px] border border-white/10 bg-white/5"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className="text-[17px] font-semibold">{item.question}</h3>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>

                {isOpen ? (
                  <div className="border-t border-white/10 px-5 py-4 text-[14px] leading-7 text-[rgba(245,239,228,0.75)]">
                    <p>
                      {item.answer}{" "}
                      {item.linkText ? (
                        <Link
                          href="/services/189-pathway"
                          className="text-[#c97a45] underline underline-offset-4"
                        >
                          {item.linkText}
                        </Link>
                      ) : null}
                    </p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

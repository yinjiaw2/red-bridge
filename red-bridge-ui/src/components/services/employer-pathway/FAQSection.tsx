"use client";

import { Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const t = useTranslations("employerPathway.faq");
  const rawItems = t.raw("items");
  const items = Array.isArray(rawItems) ? (rawItems as FAQItem[]) : [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{ fontFamily: font }}
      className="bg-secondary px-6 py-24 text-white md:px-8"
    >
      <div className="mx-auto max-w-[960px]">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("eyebrow")}
          </div>
          <h2 className="text-[34px] font-semibold leading-tight md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-primary">{t("titleHighlight")}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[15px] leading-7 text-white/70">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-[10px] border border-white/10 bg-white/5"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className="text-[17px] font-semibold">{item.question}</h3>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>

                {isOpen ? (
                  <div className="border-t border-white/10 px-5 py-4 text-[14px] leading-7 text-white/80">
                    {item.answer}
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



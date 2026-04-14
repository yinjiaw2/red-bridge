"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Plus, Minus, ExternalLink } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  sourceText?: string;
  sourceHref?: string;
}

export default function EmployerFaqSection() {
  const t = useTranslations("employerFaq");
  const items = t.raw("items") as FaqItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-brandred" />
          <span className="text-[0.75rem] font-bold tracking-widest text-brandred uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-naviblue leading-tight font-serif mb-14"
        >
          {t("headingMain")}{" "}
          <span className="text-brandred">{t("headingHighlight")}</span>
        </h2>

        {/* FAQ accordion */}
        <div className="divide-y divide-gray-200">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base md:text-lg font-bold leading-snug transition-colors ${
                      isOpen
                        ? "text-brandred"
                        : "text-naviblue group-hover:text-brandred"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-none border flex items-center justify-center transition-colors ${isOpen ? "border-brandred text-brandred" : "border-gray-300 text-gray-500 group-hover:border-brandred group-hover:text-brandred"}`}
                  >
                    {isOpen ? (
                      <Minus className="h-3 w-3" aria-hidden="true" />
                    ) : (
                      <Plus className="h-3 w-3" aria-hidden="true" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="pb-6 pr-12">
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.answer}
                    </p>
                    {item.sourceText && item.sourceHref && (
                      <a
                        href={item.sourceHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold tracking-wide uppercase text-brandred hover:text-red-800 transition-colors"
                      >
                        <ExternalLink
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        {item.sourceText}
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

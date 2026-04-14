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
    <section className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-[#c9a98a]" />
          <span className="text-[0.68rem] font-bold tracking-[0.2em] text-[#9a7a5e] uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-[#1a1209] leading-tight mb-14"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("headingMain")}{" "}
          <span className="text-[#A20000]">{t("headingHighlight")}</span>
        </h2>

        {/* FAQ accordion */}
        <div className="divide-y divide-[#e2d9d0]">
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
                    className={`text-[15px] md:text-[16px] font-medium leading-snug transition-colors ${
                      isOpen ? "text-[#A20000]" : "text-[#1a1209] group-hover:text-[#A20000]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className="shrink-0 w-6 h-6 rounded-full border border-[#c9a98a] flex items-center justify-center text-[#9a7a5e]">
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
                    <p className="text-[#4a4038] text-[14px] md:text-[15px] leading-relaxed">
                      {item.answer}
                    </p>
                    {item.sourceText && item.sourceHref && (
                      <a
                        href={item.sourceHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[#A20000] hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
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

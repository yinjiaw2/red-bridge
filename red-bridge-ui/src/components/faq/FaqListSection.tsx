"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaqAccordion } from "./FaqAccordion";

const itemKeys = [
  "placements",
  "visa482186",
  "process482",
  "cost",
  "payment",
  "skillsAssessment",
  "legal",
  "location",
] as const;

export function FaqListSection() {
  const t = useTranslations("faqPage.list");

  const items = itemKeys.map((key) => ({
    question: t(`items.${key}.question`),
    answer: t.rich(`items.${key}.answer`, {
      p: (chunks) => <p className="mb-3 last:mb-0">{chunks}</p>,
      strong: (chunks) => <strong className="font-semibold text-foreground">{chunks}</strong>,
      career: (chunks) => (
        <Link href="/services/career-launch" className="font-semibold text-primary underline underline-offset-4">
          {chunks}
        </Link>
      ),
      employer: (chunks) => (
        <Link
          href="/services/employer-pathway"
          className="font-semibold text-primary underline underline-offset-4"
        >
          {chunks}
        </Link>
      ),
      visa189: (chunks) => (
        <Link href="/services/189-pathway" className="font-semibold text-primary underline underline-offset-4">
          {chunks}
        </Link>
      ),
      visa190: (chunks) => (
        <Link href="/services/190-pathway" className="font-semibold text-primary underline underline-offset-4">
          {chunks}
        </Link>
      ),
      visa491: (chunks) => (
        <Link href="/services/491-pathway" className="font-semibold text-primary underline underline-offset-4">
          {chunks}
        </Link>
      ),
      insight: (chunks) => (
        <a
          href="https://www.insightidea.com.au/en/success"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-primary underline underline-offset-4"
        >
          {chunks}
        </a>
      ),
    }),
  }));

  return (
    <section className="bg-muted/35 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[920px]">
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}

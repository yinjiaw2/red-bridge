"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";

type AccordionItem = {
  question: string;
  answer: ReactNode;
};

type FaqAccordionProps = {
  items: readonly AccordionItem[];
};

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <article
      className={[
        "overflow-hidden rounded-[22px] border bg-[var(--bg-card)] transition-all",
        isOpen
          ? "border-[rgba(168,80,30,0.24)] shadow-[0_8px_24px_rgba(168,80,30,0.08)]"
          : "border-[var(--border-soft)]",
      ].join(" ")}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-[1.15rem] leading-tight text-[var(--text-main)] md:text-[1.25rem]">{item.question}</span>
          <span
            aria-hidden="true"
            className={[
              "inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border text-xl transition-transform",
              isOpen
                ? "rotate-45 border-[var(--accent)] bg-[rgba(168,80,30,0.08)] text-[var(--accent)]"
                : "border-[var(--border-soft)] text-[var(--accent)]",
            ].join(" ")}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="border-t border-[var(--border-soft)] px-6 py-5 text-sm leading-8 text-[var(--text-sub)] md:text-[0.95rem]"
      >
        {item.answer}
      </div>
    </article>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionRow
          key={`${index}-${item.question}`}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}

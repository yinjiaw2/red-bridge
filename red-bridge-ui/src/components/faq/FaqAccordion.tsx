"use client";

import { useId, useState, type ReactNode } from "react";
import { AnalyticsEvent, trackEvent } from "@/lib/analytics";

type AccordionItem = {
  question: string;
  answer: ReactNode;
};

type FaqAccordionProps = {
  items: AccordionItem[];
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
        "overflow-hidden rounded-[22px] border bg-card transition-all duration-200",
        isOpen
          ? "border-primary/25 shadow-[0_10px_28px_rgba(230,25,25,0.10)]"
          : "border-border hover:border-primary/20",
      ].join(" ")}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-primary/5"
        >
          <span className="text-[1.05rem] leading-tight text-foreground md:text-[1.2rem]">
            {item.question}
          </span>
          <span
            aria-hidden="true"
            className={[
              "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-200",
              isOpen
                ? "rotate-45 border-primary bg-primary/10 text-primary"
                : "border-border text-primary",
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
        className="border-t border-border px-6 py-5 text-sm leading-8 text-muted-foreground md:text-[0.95rem]"
      >
        {item.answer}
      </div>
    </article>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  function handleToggle(index: number, question: string) {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : -1);
    if (isOpening) {
      trackEvent(AnalyticsEvent.FAQ_QUESTION_OPENED, {
        event_category: "FAQ",
        event_label: question,
      });
    }
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionRow
          key={`${index}-${item.question}`}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index, item.question)}
        />
      ))}
    </div>
  );
}

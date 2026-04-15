import type { ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

type PathwayFaqSectionProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  items: readonly FaqItem[];
};

export function PathwayFaqSection({ eyebrow, title, description, items }: PathwayFaqSectionProps) {
  return (
    <section id="faq" className="w-full bg-[var(--footer-bg)] py-14 text-white md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow text-[var(--accent-light)]">{eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[#f5f1eb] md:text-[3.2rem]">{title}</h2>
          {description ? <p className="mt-4 text-lg leading-8 text-white/68">{description}</p> : null}
        </div>

        <div className="mt-10 space-y-4">
          {items.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-[20px] border border-white/10 bg-white/5 px-6 py-5"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none text-left">
                <span className="flex items-center justify-between gap-4">
                  <span className="text-[1.35rem] leading-tight text-[#f5f1eb]">{item.question}</span>
                  <span className="text-white/50 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <div className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-white/68">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

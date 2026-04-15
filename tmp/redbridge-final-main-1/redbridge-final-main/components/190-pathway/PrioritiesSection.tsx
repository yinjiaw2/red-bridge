import Link from "next/link";
import { priorityCards } from "./pathway-data";

const toneClasses = {
  high: "border-[rgba(58,96,74,0.18)] bg-[rgba(58,96,74,0.05)]",
  mid: "border-[rgba(201,169,76,0.24)] bg-[rgba(201,169,76,0.05)]",
  note: "border-[rgba(138,21,35,0.18)] bg-[rgba(138,21,35,0.04)]",
} as const;

export function PrioritiesSection() {
  return (
    <section id="victoria-priorities" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">What Victoria Looks For</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            How Victoria <span className="italic text-[var(--accent)]">Ranks Your ROI</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            Occupation sectors with genuine workforce shortages carry structural advantage in Victoria&apos;s current
            program settings.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {priorityCards.map((card) => (
            <article
              key={card.title}
              className={`rounded-[22px] border px-5 py-6 shadow-[var(--shadow)] ${toneClasses[card.tone]}`}
            >
              <span className="inline-flex rounded-full bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                {card.label}
              </span>
              <h3 className="mt-4 text-[1.35rem] leading-tight text-[var(--text-main)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{card.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm leading-7 text-[var(--text-sub)]">
          Source context: Victoria&apos;s recent invitation pattern and current Live in Melbourne guidance.{" "}
          <Link href="https://liveinmelbourne.vic.gov.au" target="_blank" rel="noreferrer" className="font-semibold text-[var(--accent)] underline underline-offset-4">
            Review the official program →
          </Link>
        </p>
      </div>
    </section>
  );
}

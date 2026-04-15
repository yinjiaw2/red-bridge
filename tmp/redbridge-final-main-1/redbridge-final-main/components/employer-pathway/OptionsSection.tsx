import Link from "next/link";
import { pathwayOptions } from "./pathway-data";

const toneClasses = {
  foundation: "border-[rgba(74,111,165,0.18)] bg-[rgba(74,111,165,0.04)]",
  core: "border-[rgba(138,21,35,0.14)] bg-[var(--bg-card)]",
  direct: "border-[rgba(58,96,74,0.18)] bg-[rgba(58,96,74,0.04)]",
} as const;

export function OptionsSection() {
  return (
    <section id="pathways" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">Your Options</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Three Routes. <span className="italic text-[var(--accent)]">One Goal.</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            The right employer-sponsored route depends almost entirely on how much experience you have today.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {pathwayOptions.map((option) => (
            <article
              key={option.title}
              className={`rounded-[28px] border px-6 py-7 shadow-[var(--shadow)] md:px-8 ${toneClasses[option.tone]}`}
            >
              <span className="inline-flex rounded-full bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                {option.badge}
              </span>
              <h3 className="mt-4 font-display text-[2.15rem] leading-tight text-[var(--text-main)]">{option.title}</h3>
              <p className="mt-2 text-[1.05rem] font-medium text-[var(--text-main)]">{option.subtitle}</p>
              <p className="mt-4 max-w-[860px] text-sm leading-7 text-[var(--text-sub)]">{option.description}</p>

              <div className="mt-8 grid gap-5 xl:grid-cols-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{option.leftTitle}</h4>
                  <ul className="mt-4 space-y-3">
                    {option.leftItems.map((item) => (
                      <li key={item} className="rounded-[18px] border border-[var(--border-soft)] bg-white px-4 py-4 text-sm leading-7 text-[var(--text-sub)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{option.rightTitle}</h4>
                  <ul className="mt-4 space-y-3">
                    {option.rightItems.map((item) => (
                      <li key={item} className="rounded-[18px] border border-[var(--border-soft)] bg-white px-4 py-4 text-sm leading-7 text-[var(--text-sub)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {option.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[rgba(138,21,35,0.12)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-dim)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-[18px] border border-[rgba(168,80,30,0.12)] bg-[rgba(168,80,30,0.05)] px-4 py-4">
                <p className="text-sm leading-7 text-[var(--text-sub)]">
                  <strong className="text-[var(--text-main)]">Honest note:</strong> {option.note}
                </p>
              </div>

              <Link
                href={option.ctaHref}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f9cf69_0%,#f7bf47_100%)] px-7 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_12px_24px_rgba(249,196,91,0.22)]"
              >
                {option.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { employerPhases } from "./employers-data";

export function EmployersProcessSection() {
  return (
    <section id="how-it-works" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="section-eyebrow">The Process</p>
          <h2 className="mt-3 font-display text-[2.5rem] leading-[0.98] text-[var(--text-main)] md:text-[3.1rem]">
            Three Phases from <span className="italic text-[var(--accent)]">Gap to Grant</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-lg leading-8 text-[var(--text-sub)]">
            SBS, nomination, and visa work can often be prepared in sequence without waiting for each stage to be
            formally approved first, which saves weeks on the overall timeline.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {employerPhases.map((phase) => (
            <article
              key={phase.number}
              className="relative overflow-hidden rounded-[24px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 shadow-[var(--shadow)]"
            >
              <span className="absolute right-5 top-4 font-display text-[4rem] leading-none text-[rgba(168,80,30,0.08)]">
                {phase.number}
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
                {phase.number}
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">{phase.label}</p>
              <h3 className="mt-3 text-[1.55rem] leading-tight text-[var(--text-main)]">{phase.title}</h3>
              <ul className="mt-5 space-y-3">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-[var(--text-sub)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sage)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-sm text-[var(--text-dim)]">
          <Link
            href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[var(--accent)] underline underline-offset-4"
          >
            482 Visa — Department of Home Affairs
          </Link>
        </p>
      </div>
    </section>
  );
}

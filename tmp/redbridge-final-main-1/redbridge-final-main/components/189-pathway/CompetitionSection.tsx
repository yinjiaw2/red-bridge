import Link from "next/link";
import { occupationTiers } from "./pathway-data";

const toneClasses = {
  hard: "border-[rgba(168,32,48,0.2)] bg-[rgba(138,21,35,0.03)]",
  mid: "border-[rgba(201,169,76,0.28)] bg-[rgba(201,169,76,0.05)]",
  easy: "border-[rgba(58,96,74,0.22)] bg-[rgba(58,96,74,0.05)]",
} as const;

export function CompetitionSection() {
  return (
    <section id="competition" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">Occupation Reality</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Know Your <span className="italic text-[var(--accent)]">Starting Position</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            Invitation cut-off scores vary significantly by occupation. Here is where ICT and Marketing occupations
            currently sit — based on recent 2025–26 invitation round data.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {occupationTiers.map((tier) => (
            <article
              key={tier.title}
              className={`grid gap-5 rounded-[22px] border px-6 py-6 shadow-[var(--shadow)] md:grid-cols-[170px_minmax(0,1fr)_160px] md:items-center ${toneClasses[tier.tone]}`}
            >
              <div>
                <span className="inline-flex rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                  {tier.label}
                </span>
              </div>
              <div>
                <h3 className="text-[1.45rem] leading-tight text-[var(--text-main)]">{tier.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{tier.description}</p>
              </div>
              <div className="md:text-right">
                <div className="font-display text-[2.4rem] leading-none text-[var(--accent)]">{tier.score}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-dim)]">
                  {tier.scoreLabel}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-[var(--text-sub)]">
          Cut-off scores are based on publicly available November 2025 and August 2025 SkillSelect round data. Scores
          change each round.{" "}
          <Link
            href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect/invitation-rounds"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[var(--accent)] underline underline-offset-4"
          >
            View current invitation round data →
          </Link>
        </p>
      </div>
    </section>
  );
}

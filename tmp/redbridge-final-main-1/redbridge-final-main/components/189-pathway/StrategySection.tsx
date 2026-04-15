import { strategyCards } from "./pathway-data";
import {
  BriefcaseIcon,
  CalculatorIcon,
  ClipboardIcon,
  LanguageIcon,
  MapPinIcon,
  UsersIcon,
} from "./icons";

const strategyIcons = {
  calculator: CalculatorIcon,
  language: LanguageIcon,
  clipboard: ClipboardIcon,
  briefcase: BriefcaseIcon,
  users: UsersIcon,
  "map-pin": MapPinIcon,
} as const;

export function StrategySection() {
  return (
    <section id="strategy" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">What RedBridge Does</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Finding Points You <span className="italic text-[var(--accent)]">Didn&apos;t Know You Had</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            Our role in the 189 pathway is points maximisation and skills assessment preparation. The visa lodgement is
            handled by Insight Idea — your MARA-registered migration agent.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {strategyCards.map((card) => {
            const Icon = strategyIcons[card.icon];

            return (
              <article
                key={card.title}
                className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg)] px-6 py-6 shadow-[var(--shadow)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-[rgba(138,21,35,0.06)] text-[var(--accent)]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[1.45rem] leading-tight text-[var(--text-main)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{card.description}</p>
                <span className="mt-4 inline-flex rounded-full bg-[rgba(138,21,35,0.06)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
                  {card.badge}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

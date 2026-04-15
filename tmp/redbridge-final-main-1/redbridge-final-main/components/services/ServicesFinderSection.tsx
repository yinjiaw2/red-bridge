import Link from "next/link";
import { finderCards } from "./services-data";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  MapPinIcon,
  QuestionIcon,
  SproutIcon,
  StarIcon,
} from "./icons";

const finderIcons = {
  graduation: GraduationCapIcon,
  star: StarIcon,
  "map-pin": MapPinIcon,
  sprout: SproutIcon,
  briefcase: BriefcaseIcon,
  question: QuestionIcon,
} as const;

export function ServicesFinderSection() {
  return (
    <section id="find-your-path" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">Find Your Path</p>
          <h2 className="mt-3 font-display text-[2.6rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Which Service <span className="italic text-[var(--accent)]">Fits You?</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-sub)]">
            Not sure where to start? Use these profiles to identify the most relevant pathway — then book a free
            consultation for a personalised assessment.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {finderCards.map((card) => {
            const Icon = finderIcons[card.icon];

            return (
              <article
                key={card.title}
                className="rounded-[18px] border border-[var(--border-soft)] bg-[var(--bg)] px-5 py-5 shadow-[var(--shadow)]"
              >
                <div className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[rgba(58,96,74,0.09)] text-[var(--sage)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[1.28rem] leading-tight text-[var(--text-main)]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-sub)]">{card.description}</p>
                    <Link href={card.href} className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                      {card.cta}
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { pathways } from "./home-data";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CompassIcon,
  GraduationCapIcon,
} from "./icons";

const pathwayIcons = {
  graduate: GraduationCapIcon,
  briefcase: BriefcaseIcon,
  compass: CompassIcon,
} as const;

export function PathwaysSection() {
  return (
    <section
      id="pathways"
      className="w-full bg-[var(--bg)] py-14 md:py-16"
    >
      <div className="home-inner">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="section-eyebrow">Tailored Pathways for Your Situation</p>
          <h2 className="mt-3 font-display text-[2.6rem] leading-[0.98] text-[var(--text-main)] md:text-[3.15rem]">
            What Brings You Here Today?
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-lg leading-8 text-[var(--text-sub)]">
            Choose your situation and we&apos;ll show you the right pathway forward.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pathways.map((pathway) => {
            const Icon = pathwayIcons[pathway.icon];

            return (
              <article
                key={pathway.title}
                className="rounded-[20px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 shadow-[var(--shadow)]"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(138,21,35,0.06)] text-[var(--accent)]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-[1.8rem] leading-tight text-[var(--text-main)]">{pathway.title}</h3>
                <p className="mt-4 min-h-[118px] text-base leading-8 text-[var(--text-sub)]">{pathway.description}</p>
                <Link
                  href={pathway.href}
                  className="mt-7 inline-flex w-full items-center justify-between rounded-full border border-[#f4c24f] bg-[linear-gradient(135deg,#f9cf69_0%,#f7bf47_100%)] px-5 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_10px_22px_rgba(249,196,91,0.2)]"
                >
                  {pathway.cta}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="border-l-4 border-[var(--accent-light)] pl-5">
            <p className="font-display text-[1.95rem] leading-none text-[var(--text-main)]">Not sure which applies to you?</p>
            <p className="mt-2 text-base text-[var(--text-sub)]">
              Explore all pathways or get a personalised plan with a free assessment.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#comparison"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(168,32,48,0.2)] bg-white px-8 py-3.5 text-sm font-bold text-[var(--accent)]"
            >
              Explore All Pathways
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-8 py-3.5 text-sm font-bold text-white"
            >
              Book Free Assessment
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

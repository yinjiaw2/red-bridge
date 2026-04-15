import Link from "next/link";
import { roiSteps } from "./pathway-data";

const toneClasses = {
  federal: "bg-[rgba(201,169,76,0.08)] text-[var(--gold-deep)]",
  state: "bg-[rgba(138,21,35,0.08)] text-[var(--accent)]",
  legal: "bg-[rgba(138,21,35,0.08)] text-[var(--accent)]",
  success: "bg-[linear-gradient(135deg,#2d6a4f,#1b4332)] text-white",
} as const;

export function RoiStepsSection() {
  return (
    <section id="how-it-works" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">The Process</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            EOI + ROI: <span className="italic text-[var(--accent)]">Two Systems, One Goal</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            Victoria&apos;s 190 requires submissions to both the federal and state systems. Knowing the difference is
            where most applicants either gain clarity or lose months.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {roiSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg)] px-5 py-6 shadow-[var(--shadow)]"
            >
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${toneClasses[step.tone]}`}
              >
                {step.number}
              </span>
              <div className="mt-4 inline-flex rounded-full bg-[rgba(138,21,35,0.06)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                {step.label}
              </div>
              <h3 className="mt-4 text-[1.35rem] leading-tight text-[var(--text-main)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{step.description}</p>
              <span className="mt-4 inline-flex rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-dim)]">
                {step.timing}
              </span>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[680px] rounded-[20px] border border-[rgba(168,80,30,0.12)] bg-[rgba(168,80,30,0.05)] px-6 py-5">
          <p className="text-sm leading-7 text-[var(--text-sub)]">
            <strong className="text-[var(--text-main)]">Important:</strong> an ROI is not an application. It is a
            request to be considered for state nomination, and Victoria ranks that request against its own criteria.
            {" "}
            <Link
              href="https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/skilled-nominated-visa-subclass-190"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--accent)] underline underline-offset-4"
            >
              See the official Victorian 190 requirements →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

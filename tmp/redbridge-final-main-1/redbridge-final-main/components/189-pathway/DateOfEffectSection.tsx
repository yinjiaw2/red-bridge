import { ClockIcon } from "./icons";

export function DateOfEffectSection() {
  return (
    <section id="doe" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">The Rule Most Applicants Miss</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Your Date of Effect <span className="italic text-[var(--accent)]">Is a Weapon</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            When two applicants have identical points scores, the one who submitted their EOI first wins the
            invitation. This single rule changes how you should approach SkillSelect.
          </p>
        </div>

        <div className="mt-10 rounded-[24px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 shadow-[var(--shadow)] md:px-8 md:py-8">
          <div className="grid gap-6 md:grid-cols-[auto_1fr]">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(138,21,35,0.06)] text-[var(--accent)]">
              <ClockIcon className="h-8 w-8" />
            </span>
            <div>
              <h3 className="text-[1.7rem] leading-tight text-[var(--text-main)]">What Is the Date of Effect?</h3>
              <div className="mt-4 space-y-4 text-base leading-8 text-[var(--text-sub)]">
                <p>
                  The <strong className="text-[var(--text-main)]">Date of Effect (DOE)</strong> is the date you first
                  reached your current points score in SkillSelect. When the Department holds an invitation round and
                  two applicants share the same score, the applicant whose DOE is earlier is invited first.
                </p>
                <p>
                  This means submitting your EOI as soon as you are eligible — even before your points are at their
                  maximum — locks in an early DOE. If you later improve your score, your DOE resets to the date of that
                  improvement. Strategy matters: knowing when to submit versus when to wait for a higher score requires
                  careful calculation.
                </p>
                <div className="rounded-[18px] border border-[rgba(168,32,48,0.14)] bg-[rgba(138,21,35,0.04)] px-5 py-5">
                  <p className="text-sm leading-7 text-[var(--text-sub)]">
                    <strong className="text-[var(--text-main)]">Example:</strong> Two applicants, both with 90 points
                    in an ICT occupation. Applicant A submitted their EOI in January 2025. Applicant B submitted in
                    June 2025. In the August 2025 round, both are at the cut-off score — Applicant A receives the
                    invitation. Applicant B waits for the next round.
                  </p>
                </div>
                <p>
                  During your free consultation, Insight Idea reviews your profile and advises on the optimal
                  submission timing — including whether to lodge now or wait for a specific points improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

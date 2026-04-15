import { roiFactors } from "./pathway-data";

const weightClasses = {
  high: "bg-[rgba(58,96,74,0.08)] text-[var(--sage)]",
  mid: "bg-[rgba(201,169,76,0.12)] text-[var(--gold-deep)]",
  low: "bg-[rgba(138,21,35,0.08)] text-[var(--accent)]",
} as const;

export function RoiFactorsSection() {
  return (
    <section id="roi-factors" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">Your ROI Score</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            What Victoria Weighs When <span className="italic text-[var(--accent)]">Ranking You</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            Victoria does not simply take the highest SkillSelect score. The state weighs a more practical picture of
            how well your profile fits its current needs.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {roiFactors.map((factor) => (
            <article
              key={factor.title}
              className="grid gap-5 rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-6 shadow-[var(--shadow)] md:grid-cols-[72px_minmax(0,1fr)_170px] md:items-start"
            >
              <div className="flex md:justify-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(138,21,35,0.08)] text-base font-bold text-[var(--accent)]">
                  {factor.number}
                </span>
              </div>
              <div>
                <h3 className="text-[1.4rem] leading-tight text-[var(--text-main)]">{factor.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{factor.description}</p>
              </div>
              <div className="md:text-right">
                <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${weightClasses[factor.tone]}`}>
                  {factor.weight}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

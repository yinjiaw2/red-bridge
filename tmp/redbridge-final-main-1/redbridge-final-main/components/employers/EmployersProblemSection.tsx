import { employerProblems } from "./employers-data";

export function EmployersProblemSection() {
  return (
    <section id="the-problem" className="w-full bg-[var(--bg-2)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">The Skill Gap</p>
          <h2 className="mt-3 font-display text-[2.5rem] leading-[0.98] text-[var(--text-main)] md:text-[3.1rem]">
            Why Australian Businesses <span className="italic text-[var(--accent)]">Sponsor</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-lg leading-8 text-[var(--text-sub)]">
            Local talent shortages in key occupations are structural, not temporary. Sponsorship is often the practical
            solution for roles that cannot be filled domestically.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {employerProblems.map((problem) => (
            <article
              key={problem.title}
              className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-5 py-6 shadow-[var(--shadow)]"
            >
              <div className="h-1 w-16 rounded-full bg-[var(--accent)]" />
              <h3 className="mt-5 text-[1.45rem] leading-tight text-[var(--text-main)]">{problem.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{problem.description}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[700px] text-center font-display text-[1.7rem] leading-[1.35] text-[var(--text-main)] md:text-[2rem]">
          RedBridge solves the candidate problem. <span className="italic text-[var(--accent)]">Insight Idea</span>{" "}
          solves the compliance problem.
        </p>
      </div>
    </section>
  );
}

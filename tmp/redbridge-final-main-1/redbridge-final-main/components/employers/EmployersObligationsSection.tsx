import { employerObligations } from "./employers-data";

export function EmployersObligationsSection() {
  return (
    <section id="obligations" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="section-eyebrow">What You're Committing To</p>
          <h2 className="mt-3 font-display text-[2.5rem] leading-[0.98] text-[var(--text-main)] md:text-[3.1rem]">
            Sponsor Obligations — <span className="italic text-[var(--accent)]">Clearly Stated</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-lg leading-8 text-[var(--text-sub)]">
            Sponsorship is a regulated relationship. These are the most material obligations, and Insight Idea
            monitors them for employer clients.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 shadow-[var(--shadow)]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">You must</p>
            <div className="mt-5 space-y-4">
              {employerObligations.must.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-[var(--text-sub)]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--sage)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 shadow-[var(--shadow)]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b21e1e]">You cannot</p>
            <div className="mt-5 space-y-4">
              {employerObligations.cannot.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-[var(--text-sub)]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b21e1e]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

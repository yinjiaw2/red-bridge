import { employerValueCards } from "./employers-data";

export function EmployersValueSection() {
  return (
    <section id="why-us" className="w-full bg-[var(--bg-2)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">Why RedBridge</p>
          <h2 className="mt-3 font-display text-[2.5rem] leading-[0.98] text-[var(--text-main)] md:text-[3.1rem]">
            What Makes This Different from Using a <span className="italic text-[var(--accent)]">Recruiter</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {employerValueCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-5 py-6 shadow-[var(--shadow)]"
            >
              <h3 className="text-[1.45rem] leading-tight text-[var(--text-main)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

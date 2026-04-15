import { processSteps } from "./pathway-data";

export function ProcessSection() {
  return (
    <section id="how-it-works" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">Our Process</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            From First Call to <span className="italic text-[var(--accent)]">Visa Grant</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            A milestone-based process with clear expectations at each stage.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-6 text-center shadow-[var(--shadow)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] text-sm font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-4 text-[1.3rem] leading-tight text-[var(--text-main)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{step.description}</p>
              <span className="mt-4 inline-flex rounded-full bg-[var(--bg)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-dim)]">
                {step.timing}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

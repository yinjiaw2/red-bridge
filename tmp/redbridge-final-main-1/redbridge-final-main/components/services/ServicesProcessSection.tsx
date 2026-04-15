import { processSteps } from "./services-data";

export function ServicesProcessSection() {
  return (
    <section id="how-it-works" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="section-eyebrow">The Process</p>
          <h2 className="mt-3 font-display text-[2.6rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Your Journey in <span className="italic text-[var(--accent)]">4 Steps</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-sub)]">
            A transparent, milestone-based process — so you always know exactly where you stand and what comes next
            before any money changes hands.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-[18px] border border-[var(--border-soft)] bg-[var(--bg)] px-6 py-7 text-center shadow-[var(--shadow)]"
            >
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[rgba(168,32,48,0.3)] text-base font-semibold text-[var(--accent)]">
                {step.number}
              </div>
              <h3 className="mt-5 text-[1.45rem] leading-tight text-[var(--text-main)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

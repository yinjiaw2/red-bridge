import { processSteps } from "./pathway-data";

export function ProcessSection() {
  return (
    <section id="process" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">How It Works</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            From First Call to <span className="italic text-[var(--accent)]">PR Grant</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            Clear responsibilities at every step — RedBridge prepares you, Insight Idea lodges for you.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {processSteps.map((step) => {
            const isSuccess = "success" in step && step.success;

            return (
              <article
                key={step.title}
                className="grid gap-5 rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-6 shadow-[var(--shadow)] md:grid-cols-[84px_minmax(0,1fr)]"
              >
                <div className="flex md:justify-center">
                  <span
                    className={[
                      "inline-flex h-14 w-14 items-center justify-center rounded-full text-base font-semibold",
                      isSuccess
                        ? "bg-[linear-gradient(135deg,#2d6a4f,#1b4332)] text-white"
                        : step.legal
                          ? "bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] text-white"
                          : "bg-[rgba(138,21,35,0.08)] text-[var(--accent)]",
                    ].join(" ")}
                  >
                    {step.number}
                  </span>
                </div>

                <div>
                  <span
                    className={[
                      "inline-flex rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em]",
                      step.legal
                        ? "bg-[rgba(138,21,35,0.08)] text-[var(--accent)]"
                        : "bg-[rgba(58,96,74,0.08)] text-[var(--sage)]",
                    ].join(" ")}
                  >
                    {step.who}
                  </span>
                  <h3 className="mt-4 text-[1.5rem] leading-tight text-[var(--text-main)]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{step.description}</p>
                  <span
                    className={[
                      "mt-4 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em]",
                      isSuccess
                        ? "bg-[rgba(58,96,74,0.1)] text-[var(--sage)]"
                        : "bg-[var(--bg)] text-[var(--text-dim)]",
                    ].join(" ")}
                  >
                    {step.timing}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

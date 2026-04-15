import { tradeoffRows } from "./pathway-data";

export function TradeoffSection() {
  return (
    <section id="the-tradeoff" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="section-eyebrow">Honest Assessment</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            What You <span className="italic text-[var(--accent)]">Give Up</span> for 15 Points
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            The 491 gives the biggest uplift, but it also carries the clearest trade-off. That choice needs to be made
            with eyes open.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[26px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]">
          <div className="min-w-[780px]">
            <div className="grid grid-cols-[1.15fr_1fr_1fr_1fr]">
              <div className="border-b border-[var(--border-soft)] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--text-dim)]">
                Factor
              </div>
              <div className="border-b border-l border-[var(--border-soft)] bg-[rgba(58,96,74,0.06)] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--sage)]">
                491 Regional
              </div>
              <div className="border-b border-l border-[var(--border-soft)] bg-[rgba(138,21,35,0.04)] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                190 Nominated
              </div>
              <div className="border-b border-l border-[var(--border-soft)] bg-[rgba(201,169,76,0.08)] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--gold-deep)]">
                189 Independent
              </div>
            </div>

            {tradeoffRows.map((row, index) => {
              const isLast = index === tradeoffRows.length - 1;
              const cellBorder = isLast ? "" : "border-b border-[var(--border-soft)]";

              return (
                <div key={row.factor} className="grid grid-cols-[1.15fr_1fr_1fr_1fr]">
                  <div className={`px-5 py-4 text-sm font-semibold text-[var(--text-main)] ${cellBorder}`}>
                    {row.factor}
                  </div>
                  <div className={`border-l border-[var(--border-soft)] px-5 py-4 text-sm leading-7 text-[var(--text-sub)] ${cellBorder}`}>
                    {row.visa491}
                  </div>
                  <div className={`border-l border-[var(--border-soft)] px-5 py-4 text-sm leading-7 text-[var(--text-sub)] ${cellBorder}`}>
                    {row.visa190}
                  </div>
                  <div className={`border-l border-[var(--border-soft)] px-5 py-4 text-sm leading-7 text-[var(--text-sub)] ${cellBorder}`}>
                    {row.visa189}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-[760px] text-center text-sm leading-7 text-[var(--text-sub)]">
          Many clients run 491 and 190 simultaneously. The question is not which label sounds better. The question is
          which queue can realistically move first for your profile.
        </p>
      </div>
    </section>
  );
}

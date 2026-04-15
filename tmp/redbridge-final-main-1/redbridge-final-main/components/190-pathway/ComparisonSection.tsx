import { compareColumns } from "./pathway-data";

const toneClasses = {
  light: "border-[var(--border-soft)] bg-[var(--bg-card)]",
  accent: "border-[rgba(168,32,48,0.18)] bg-[rgba(138,21,35,0.04)]",
} as const;

const rowToneClasses = {
  positive: "bg-[rgba(58,96,74,0.06)] text-[var(--text-main)]",
  neutral: "bg-[rgba(201,169,76,0.08)] text-[var(--text-main)]",
  negative: "bg-[rgba(138,21,35,0.05)] text-[var(--text-main)]",
} as const;

export function ComparisonSection() {
  return (
    <section id="how-190-differs" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">189 vs 190</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Same Destination. <span className="italic text-[var(--accent)]">Different Route.</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            Both visas grant permanent residency from day one. The real differences are in how the invitation comes and
            what commitments sit behind it.
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {compareColumns.map((column) => (
            <article
              key={column.visa}
              className={`rounded-[24px] border px-6 py-6 shadow-[var(--shadow)] md:px-7 ${toneClasses[column.tone]}`}
            >
              <span className="inline-flex rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                {column.visa}
              </span>
              <h3 className="mt-4 font-display text-[2rem] leading-tight text-[var(--text-main)]">{column.title}</h3>
              <div className="mt-6 space-y-3">
                {column.rows.map((row) => (
                  <div
                    key={row.text}
                    className={`grid grid-cols-[16px_minmax(0,1fr)] gap-3 rounded-[16px] px-4 py-4 ${rowToneClasses[row.tone]}`}
                  >
                    <span
                      className={[
                        "mt-1 h-4 w-4 rounded-full border",
                        row.tone === "positive"
                          ? "border-[var(--sage)] bg-[var(--sage)]"
                          : row.tone === "neutral"
                            ? "border-[var(--gold)] bg-[var(--gold)]"
                            : "border-[var(--accent)] bg-[var(--accent)]",
                      ].join(" ")}
                    />
                    <p className="text-sm leading-7 text-[var(--text-sub)]">{row.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-[760px] text-center text-sm leading-7 text-[var(--text-sub)]">
          Many clients run 189 and 190 in parallel. The goal is not to fall in love with one visa label. The goal is
          to reach PR by the queue that is most realistic for your profile right now.
        </p>
      </div>
    </section>
  );
}

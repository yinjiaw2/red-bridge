import { promiseColumns } from "./pathway-data";

const toneClasses = {
  yes: "border-[rgba(58,96,74,0.18)] bg-[rgba(58,96,74,0.04)]",
  no: "border-[rgba(168,80,30,0.18)] bg-[rgba(168,80,30,0.03)]",
} as const;

export function PromiseSection() {
  return (
    <section id="our-promise" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">Transparency</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            What RedBridge Does — <span className="italic text-[var(--accent)]">And Doesn&apos;t</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {promiseColumns.map((column) => (
            <article
              key={column.title}
              className={`rounded-[24px] border px-6 py-6 shadow-[var(--shadow)] md:px-7 ${toneClasses[column.tone]}`}
            >
              <h3 className="font-display text-[2rem] leading-tight text-[var(--text-main)]">{column.title}</h3>
              <ul className="mt-6 space-y-4">
                {column.items.map((item) => (
                  <li key={item} className="grid grid-cols-[14px_minmax(0,1fr)] gap-3">
                    <span
                      className={[
                        "mt-2 h-3.5 w-3.5 rounded-full",
                        column.tone === "yes" ? "bg-[var(--sage)]" : "bg-[var(--accent)]",
                      ].join(" ")}
                    />
                    <span className="text-sm leading-7 text-[var(--text-sub)]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

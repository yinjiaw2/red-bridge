import { fitCards } from "./pathway-data";

const toneClasses = {
  yes: "border-[rgba(58,96,74,0.18)] bg-[rgba(58,96,74,0.04)]",
  no: "border-[rgba(168,80,30,0.18)] bg-[rgba(168,80,30,0.03)]",
} as const;

export function FitSection() {
  return (
    <section id="is-this-for-you" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="section-eyebrow">Eligibility Check</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Is This <span className="italic text-[var(--accent)]">The Right Path</span> For You?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            The employer-sponsored route is powerful when it fits, and the wrong answer when it doesn&apos;t. Here is
            the direct version.
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {fitCards.map((card) => (
            <article
              key={card.title}
              className={`rounded-[24px] border px-6 py-6 shadow-[var(--shadow)] md:px-7 ${toneClasses[card.tone]}`}
            >
              <h3 className="font-display text-[2rem] leading-tight text-[var(--text-main)]">{card.title}</h3>
              <ul className="mt-6 space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="grid grid-cols-[14px_minmax(0,1fr)] gap-3">
                    <span
                      className={[
                        "mt-2 h-3.5 w-3.5 rounded-full",
                        card.tone === "yes" ? "bg-[var(--sage)]" : "bg-[var(--accent)]",
                      ].join(" ")}
                    />
                    <span className="text-sm leading-7 text-[var(--text-sub)]">{item}</span>
                  </li>
                ))}
              </ul>
              {card.footnote ? <p className="mt-6 text-sm leading-7 text-[var(--text-sub)]">{card.footnote}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

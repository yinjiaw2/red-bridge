import { employerRoleLanes } from "./employers-data";

export function EmployersRolesSection() {
  return (
    <section id="our-role" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="section-eyebrow">Who Does What</p>
          <h2 className="mt-3 font-display text-[2.5rem] leading-[0.98] text-[var(--text-main)] md:text-[3.1rem]">
            RedBridge + Insight Idea — <span className="italic text-[var(--accent)]">Each Lane, Clearly Defined</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-lg leading-8 text-[var(--text-sub)]">
            RedBridge focuses on finding and preparing the right candidate. Insight Idea, our co-located legal partner,
            handles migration advice, lodgement, and sponsorship compliance.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {employerRoleLanes.map((lane, index) => (
            <article
              key={lane.title}
              className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 shadow-[var(--shadow)]"
            >
              <p className={["text-xs font-bold uppercase tracking-[0.16em]", index === 0 ? "text-[var(--accent)]" : "text-[var(--sage)]"].join(" ")}>
                {lane.eyebrow}
              </p>
              <h3 className="mt-3 text-[1.65rem] leading-tight text-[var(--text-main)]">{lane.title}</h3>
              <ul className="mt-5 space-y-3">
                {lane.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-[var(--text-sub)]">
                    <span className={["mt-2 h-1.5 w-1.5 shrink-0 rounded-full", index === 0 ? "bg-[var(--accent)]" : "bg-[var(--sage)]"].join(" ")} />
                    <span>{item}</span>
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

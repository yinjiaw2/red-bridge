import { industries } from "./pathway-data";

export function NetworkSection() {
  return (
    <section id="our-network" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="section-eyebrow">Our Employer Network</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Industries Where We Have <span className="italic text-[var(--accent)]">Real Reach</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            We only introduce employers we have personally vetted. That means real sponsorship approval and genuine
            demand, not recycled lists.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg)] px-6 py-6 shadow-[var(--shadow)]"
            >
              <h3 className="font-display text-[2rem] leading-tight text-[var(--text-main)]">{industry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{industry.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {industry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(138,21,35,0.12)] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-dim)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

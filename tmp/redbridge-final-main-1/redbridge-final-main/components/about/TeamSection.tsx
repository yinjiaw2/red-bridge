import Link from "next/link";
import { aboutTeam } from "./about-data";

export function TeamSection() {
  return (
    <section id="our-team" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">Our Team</p>
          <h2 className="mt-3 font-display text-[2.6rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            The People <span className="italic text-[var(--accent)]">Behind the Work</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--text-sub)]">
            RedBridge is a small, specialist team. We deliberately stay that way — every client is handled by
            experienced staff, not passed down to interns. The team covers career consulting, employer relations,
            business analysis, marketing, and client relationship management, with all formal migration and legal work
            handled by our partner firm Insight Idea.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {aboutTeam.map((member) => (
            <article
              key={`${member.name}-${member.label}`}
              className="rounded-[18px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 shadow-[var(--shadow)]"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(138,21,35,0.09)] text-lg font-bold tracking-[0.14em] text-[var(--accent)]">
                {member.initials}
              </div>
              <h3 className="mt-5 text-[1.55rem] leading-tight text-[var(--text-main)]">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{member.role}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-sub)]">{member.description}</p>
              <span className="mt-5 inline-flex rounded-full bg-[rgba(138,21,35,0.07)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-dim)]">
                {member.label}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--text-dim)]">
          Interested in joining our team?{" "}
          <Link href="/#contact" className="font-semibold text-[var(--accent)] underline underline-offset-4">
            View current openings →
          </Link>
        </p>
      </div>
    </section>
  );
}

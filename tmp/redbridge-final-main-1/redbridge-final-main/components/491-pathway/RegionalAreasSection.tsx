import Link from "next/link";
import { regionalAreas } from "./pathway-data";

export function RegionalAreasSection() {
  return (
    <section id="regional-areas" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="section-eyebrow">Where Is Regional Victoria?</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Closer to Melbourne
            <br />
            <span className="italic text-[var(--accent)]">Than You Might Think</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            Regional Victoria is not remote Australia. Several qualifying locations sit comfortably within established
            liveable cities and strong employment markets.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {regionalAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg)] px-6 py-6 shadow-[var(--shadow)]"
            >
              <span className="inline-flex rounded-full bg-[rgba(138,21,35,0.06)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                {area.distance}
              </span>
              <h3 className="mt-4 font-display text-[2rem] leading-tight text-[var(--text-main)]">{area.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{area.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
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

        <p className="mt-6 text-center text-sm leading-7 text-[var(--text-sub)]">
          Check whether your employer&apos;s address qualifies as regional:{" "}
          <Link
            href="https://immi.homeaffairs.gov.au/visas/working-in-australia/regional-migration/regional-postcodes"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[var(--accent)] underline underline-offset-4"
          >
            Department of Home Affairs — Regional Postcodes →
          </Link>
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";
import { journeyTracks } from "./pathway-data";

export function JourneySection() {
  return (
    <section id="journey" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="section-eyebrow">Your Road to PR</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Every Path Leads to <span className="italic text-[var(--accent)]">the Same Destination</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            Where you start changes the route, not the ambition. These are the most common employer-sponsored tracks we
            map for clients.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {journeyTracks.map((track) => (
            <article
              key={track.key}
              className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg)] px-6 py-7 shadow-[var(--shadow)] md:px-8"
            >
              <h3 className="font-display text-[2rem] leading-tight text-[var(--text-main)]">{track.title}</h3>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {track.timeline.map((step) => (
                  <span
                    key={step}
                    className="rounded-full border border-[rgba(138,21,35,0.12)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-dim)]"
                  >
                    {step}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-5 xl:grid-cols-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{track.leftTitle}</h4>
                  <ul className="mt-4 space-y-3">
                    {track.leftItems.map((item) => (
                      <li key={item} className="rounded-[18px] border border-[var(--border-soft)] bg-white px-4 py-4 text-sm leading-7 text-[var(--text-sub)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{track.rightTitle}</h4>
                  <ul className="mt-4 space-y-3">
                    {track.rightItems.map((item) => (
                      <li key={item} className="rounded-[18px] border border-[var(--border-soft)] bg-white px-4 py-4 text-sm leading-7 text-[var(--text-sub)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={track.ctaHref}
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f9cf69_0%,#f7bf47_100%)] px-7 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_12px_24px_rgba(249,196,91,0.22)]"
                >
                  {track.ctaLabel}
                </Link>
                <span className="text-sm leading-7 text-[var(--text-sub)]">{track.timing}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

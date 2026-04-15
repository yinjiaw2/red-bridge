import Link from "next/link";
import { pathway191Requirements, pathway191Stats } from "./pathway-data";
import { CheckIcon } from "@/components/shared/pathway/icons";

export function Pathway191Section() {
  return (
    <section id="191-pathway" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="section-eyebrow">The End Goal</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Your 3-Year Road to <span className="italic text-[var(--accent)]">the 191</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            The 491 is a vehicle to the 191 permanent residence visa. The three-year period is the price of the points
            advantage up front.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[980px] rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg)] px-6 py-8 shadow-[var(--shadow)] md:px-8">
          <h3 className="font-display text-[2.2rem] leading-tight text-[var(--text-main)]">
            Subclass 191 — <span className="italic text-[var(--accent)]">Permanent Residence (Regional)</span>
          </h3>
          <p className="mt-4 text-base leading-8 text-[var(--text-sub)]">
            Once the 191 is granted, the regional restriction falls away and you become a permanent resident with the
            ability to live and work anywhere in Australia.
          </p>
          <div className="mt-6 space-y-4">
            {pathway191Requirements.map((item) => (
              <div key={item.title} className="grid grid-cols-[20px_minmax(0,1fr)] gap-3">
                <CheckIcon className="mt-1 h-5 w-5 text-[var(--sage)]" />
                <div>
                  <h4 className="text-[1.05rem] leading-7 text-[var(--text-main)]">{item.title}</h4>
                  <p className="text-sm leading-7 text-[var(--text-sub)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-[var(--text-sub)]">
            Source:{" "}
            <Link
              href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/permanent-residence-regional-191"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--accent)] underline underline-offset-4"
            >
              Department of Home Affairs — Subclass 191 →
            </Link>
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pathway191Stats.map((stat) => (
              <div key={stat.label} className="rounded-[20px] border border-[var(--border-soft)] bg-white px-5 py-5">
                <div className="font-display text-[2.3rem] leading-none text-[var(--accent)]">{stat.value}</div>
                <div className="mt-2 text-sm leading-6 text-[var(--text-sub)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { employerCostRows } from "./employers-data";

export function EmployersCostSection() {
  return (
    <section id="costs" className="w-full bg-[var(--bg-2)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="section-eyebrow">Honest Cost Breakdown</p>
          <h2 className="mt-3 font-display text-[2.5rem] leading-[0.98] text-[var(--text-main)] md:text-[3.1rem]">
            What Sponsorship <span className="italic text-[var(--accent)]">Actually Costs</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-lg leading-8 text-[var(--text-sub)]">
            Government fees are mandatory and non-negotiable. Professional service fees depend on scope, which is why
            we quote after the role assessment instead of guessing.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[860px] overflow-hidden rounded-[24px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]">
          <div className="grid grid-cols-[1fr_auto] bg-[var(--bg)] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-dim)]">
            <span>Item</span>
            <span>Amount</span>
          </div>
          {employerCostRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_auto] gap-4 border-t border-[var(--border-soft)] px-6 py-5"
            >
              <div>
                <p className="text-base font-medium text-[var(--text-main)]">{row.label}</p>
                <p className="mt-1 text-sm leading-7 text-[var(--text-dim)]">{row.note}</p>
              </div>
              <p className="text-right text-sm font-bold text-[var(--accent)]">{row.amount}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-[860px] text-center text-sm leading-7 text-[var(--text-dim)]">
          By law, sponsorship costs must be borne by the employer, not the visa holder. See{" "}
          <Link
            href="https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/sponsorship-obligations/sponsor-obligations"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[var(--accent)] underline underline-offset-4"
          >
            Department of Home Affairs sponsor obligations
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

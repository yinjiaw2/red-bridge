import Link from "next/link";
import { legalPartnerLinks } from "./about-data";
import { CertificateIcon, ExternalLinkIcon, ScaleIcon } from "./icons";

export function LegalPartnerSection() {
  return (
    <section id="legal-partner" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">Our Legal Partner</p>
          <h2 className="mt-3 font-display text-[2.6rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Migration Law, <span className="italic text-[var(--accent)]">Properly Done</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-sub)]">
            We do not provide migration advice in-house. All formal legal matters are handled by a registered firm —
            because your visa is too important for anything less.
          </p>
        </div>

        <div className="mt-10 rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg)] px-6 py-7 shadow-[var(--shadow)] md:px-8 md:py-8">
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
            <span className="inline-flex h-18 w-18 items-center justify-center rounded-full bg-[rgba(138,21,35,0.07)] text-[var(--accent)]">
              <ScaleIcon className="h-8 w-8" />
            </span>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                Registered Migration Law Partner
              </p>
              <h3 className="mt-2 text-[2.2rem] leading-none text-[var(--text-main)]">Insight Idea</h3>

              <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-full bg-[rgba(138,21,35,0.07)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
                <CertificateIcon className="h-4 w-4" />
                MARN: 1467870 — Verified on the MARA Register
              </div>

              <div className="mt-5 space-y-4 text-base leading-8 text-[var(--text-sub)]">
                <p>
                  Insight Idea is a registered Australian law firm and MARA (Migration Agents Registration Authority)
                  registered migration agent. They handle all formal migration advice, visa application preparation,
                  lodgements, and legal representations for RedBridge clients.
                </p>
                <p>
                  Insight Idea&apos;s Registered Migration Agent is based <strong className="text-[var(--text-main)]">in the same office as RedBridge</strong> at
                  Level 9, Tower 3, 18–38 Siddeley Street, Docklands. This means your career consultant and your
                  migration agent work from the same floor — your case doesn&apos;t get handed off to a separate firm across
                  town. Coordination is direct, communication is fast, and there is no gap between the career and legal
                  sides of your application.
                </p>
                <p>
                  By engaging RedBridge, you receive career development and employer placement support from our team, and
                  fully regulated migration legal services from Insight Idea — both under a single coordinated program
                  with a unified fee structure.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {legalPartnerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-[rgba(168,32,48,0.25)] bg-white px-5 py-3 text-sm font-bold text-[var(--accent)]"
                  >
                    {link.label}
                    <ExternalLinkIcon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

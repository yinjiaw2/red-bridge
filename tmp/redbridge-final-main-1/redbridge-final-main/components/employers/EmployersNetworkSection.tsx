import Link from "next/link";
import { employerFeatures, employerSteps, industries } from "@/components/home/home-data";
import {
  ArrowRightIcon,
  CalculatorIcon,
  CheckIcon,
  HardHatIcon,
  HeartbeatIcon,
  LaptopCodeIcon,
  LockIcon,
  MedalIcon,
  MegaphoneIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/home/icons";

const featureIcons = {
  shield: ShieldIcon,
  lock: LockIcon,
  users: UsersIcon,
} as const;

const industryIcons = {
  laptop: LaptopCodeIcon,
  calculator: CalculatorIcon,
  megaphone: MegaphoneIcon,
  "hard-hat": HardHatIcon,
  heartbeat: HeartbeatIcon,
} as const;

export function EmployersNetworkSection() {
  return (
    <section id="network" className="w-full bg-[var(--bg-2)] py-14 md:py-16">
      <div className="home-inner">
        <div className="grid gap-x-8 gap-y-8 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-start">
          <div>
            <p className="section-eyebrow">Verified Network Snapshot</p>
            <h2 className="mt-3 font-display text-[2.5rem] leading-[0.98] text-[var(--text-main)] md:text-[3.1rem]">
              We Only Introduce <span className="italic text-[var(--accent)]">Real Employer Demand</span>
            </h2>
            <p className="mt-4 max-w-[640px] text-lg leading-8 text-[var(--text-sub)]">
              The same verification framework we use on the public homepage is applied here for employers too. We
              confirm sponsor status, role legitimacy, and suitability before we discuss candidate matching.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {employerFeatures.map((feature) => {
                const Icon = featureIcons[feature.icon];

                return (
                  <div key={feature.title}>
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-[16px] bg-[rgba(138,21,35,0.06)] text-[var(--accent)]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-4 text-[1.4rem] leading-tight text-[var(--text-main)]">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-sub)]">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-7 py-7 shadow-[var(--shadow)]">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(138,21,35,0.07)] text-[var(--accent)]">
                <MedalIcon className="h-7 w-7" />
              </span>
              <span className="rounded-full bg-[rgba(138,21,35,0.07)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                Our Verification Process
              </span>
            </div>

            <div className="mt-7 space-y-6">
              {employerSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4 border-b border-[var(--border-soft)] pb-6 last:border-b-0 last:pb-0">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[1.3rem] leading-tight text-[var(--text-main)]">{step.title}</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-sub)]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-4 rounded-[20px] bg-[var(--bg)] px-5 py-5 text-[var(--sage)]">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--sage)]">
                <CheckIcon className="h-5 w-5" />
              </span>
              <p className="text-[1.1rem] leading-tight">All employer relationships verified before introductions are made.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow">Industries We Commonly Work In</p>
              <h3 className="mt-3 font-display text-[2.15rem] leading-[0.98] text-[var(--text-main)] md:text-[2.65rem]">
                Sponsorship Demand Across Key Sectors
              </h3>
            </div>
            <Link href="#employer-inquiry" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
              Discuss your hiring need
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-5">
            {industries.map((industry) => {
              const Icon = industryIcons[industry.icon];

              return (
                <article
                  key={industry.title}
                  className="rounded-[20px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-5 py-7 text-center shadow-[var(--shadow)]"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(138,21,35,0.06)] text-[var(--accent)]">
                    <Icon className="h-8 w-8" />
                  </span>
                  <h4 className="mt-4 text-[1.2rem] leading-tight text-[var(--text-main)]">{industry.title}</h4>
                  <p className="mt-3 font-display text-[2.05rem] leading-none text-[var(--accent)]">{industry.count}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-dim)]">
                    Verified Employers
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

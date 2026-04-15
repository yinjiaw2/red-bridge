import Link from "next/link";
import { employerFeatures, employerSteps, industries } from "./home-data";
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
} from "./icons";

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

export function EmployerNetworkSection() {
  return (
    <section id="employer-network" className="w-full bg-[var(--bg)] pb-18 pt-8 md:pb-20 md:pt-10">
      <div className="home-inner">
        <div className="grid gap-x-8 gap-y-8 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-start">
          <div>
            <p className="section-eyebrow">Our Employer Network</p>
            <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.25rem]">
              The Jobs Are <span className="italic text-[var(--accent)]">Real.</span>
            </h2>
            <p className="mt-4 max-w-[640px] text-lg leading-8 text-[var(--text-sub)]">
              Every employer in our network is individually verified for active 482 sponsorship approval before we introduce them to you.
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

          <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-7 py-7 shadow-[var(--shadow)] lg:mt-2 lg:self-start">
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
                <div key={step.title} className="relative flex gap-4 border-b border-[var(--border-soft)] pb-6 last:border-b-0 last:pb-0">
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
          </div>

          <div className="mt-0 flex w-full flex-col gap-5 rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-7">
            <div className="max-w-[620px]">
              <span className="inline-block rounded-full bg-[rgba(138,21,35,0.07)] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                Private & Protected
              </span>
              <p className="mt-3 text-base leading-7 text-[var(--text-sub)]">
                Employer profiles are shared <strong className="text-[var(--text-main)]">privately</strong> during your consultation — not publicly listed to protect hiring relationships.
              </p>
            </div>
            <Link
              href="/booking"
              className="inline-flex max-w-[360px] items-center justify-between gap-3 rounded-[18px] bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-7 py-5 text-base font-bold text-white shadow-[0_16px_30px_rgba(201,58,74,0.18)]"
            >
              <span>Book your free consultation to see who&apos;s hiring</span>
              <ArrowRightIcon className="h-4 w-4 shrink-0" />
            </Link>
          </div>

          <div className="flex items-center gap-4 rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-5 py-5 text-[var(--sage)] shadow-[var(--shadow)] lg:self-start">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--sage)]">
              <CheckIcon className="h-5 w-5" />
            </span>
            <p className="text-[1.25rem] leading-tight">All employers verified before listing. Always.</p>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow">Our Verified Employers by Industry</p>
              <h3 className="mt-3 font-display text-[2.25rem] leading-[0.98] text-[var(--text-main)] md:text-[2.75rem]">
                Opportunities Across Key Industries
              </h3>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
              See All Industries
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
                  <h4 className="mt-4 text-[1.28rem] leading-tight text-[var(--text-main)]">{industry.title}</h4>
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

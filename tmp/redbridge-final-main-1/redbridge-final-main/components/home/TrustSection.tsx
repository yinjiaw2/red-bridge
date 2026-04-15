import Link from "next/link";
import { trustCards } from "./home-data";
import {
  ArrowRightIcon,
  BuildingIcon,
  ExternalLinkIcon,
  ShieldIcon,
} from "./icons";

const trustIcons = {
  shield: ShieldIcon,
  building: BuildingIcon,
} as const;

export function TrustSection() {
  return (
    <section id="why-redbridge" className="w-full bg-[var(--bg)] py-8 md:py-10">
      <div className="home-inner rounded-[26px] bg-[var(--footer-bg)] px-7 py-10 text-white shadow-[var(--shadow-lg)] md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="max-w-[620px]">
            <p className="section-eyebrow text-[var(--accent-light)]">Why RedBridge?</p>
            <h2 className="mt-4 font-display text-[2.7rem] leading-[1.02] text-[#f5f1eb] md:text-[3.5rem]">
              We Know What You&apos;re <span className="text-[#f6c257]">Thinking</span> — Because We&apos;ve Seen It All.
            </h2>
            <p className="mt-6 max-w-[540px] text-lg leading-9 text-white/64">
              This industry has its risks. Fake job listings. Hidden fees. Empty promises. We built RedBridge to be the verifiable opposite — transparent, professional, and results-driven.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-7 py-3.5 text-sm font-bold text-white"
              >
                Book a Free Assessment
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#comparison"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white"
              >
                See How We&apos;re Different
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            {trustCards.map((card) => {
              const Icon = trustIcons[card.icon];

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-5 rounded-[20px] border border-white/12 bg-white/5 px-5 py-6 hover:border-white/20"
                >
                  <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[rgba(138,21,35,0.35)] text-[var(--accent-light)]">
                    <Icon className="h-8 w-8" />
                  </span>
                  <span className="block">
                    <span className="block text-sm font-bold uppercase tracking-[0.18em] text-white/45">{card.label}</span>
                    <span className="mt-2 flex items-center gap-2 font-display text-[1.75rem] leading-tight text-[#f5f1eb]">
                      {card.title}
                      <ExternalLinkIcon className="h-4 w-4 text-white/60" />
                    </span>
                    <span className="mt-2 block text-base text-white/58">{card.description}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

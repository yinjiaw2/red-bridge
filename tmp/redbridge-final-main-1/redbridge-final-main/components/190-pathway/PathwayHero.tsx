import Link from "next/link";
import { heroStats, heroTrustItems } from "./pathway-data";
import { ArrowRightIcon, CheckIcon } from "@/components/shared/pathway/icons";

export function PathwayHero() {
  return (
    <section className="w-full border-b border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--bg-card)_0%,var(--bg)_100%)] py-16 md:py-20">
      <div className="home-inner">
        <div className="mx-auto max-w-[940px] text-center">
          <p className="section-eyebrow">Subclass 190 — Skilled Nominated Visa · Victoria</p>
          <h1 className="mt-4 font-display text-[3rem] leading-[0.95] text-[var(--text-main)] md:text-[4.25rem]">
            Five Extra Points.
            <br />
            A <span className="italic text-[var(--accent)]">Separate Queue.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[780px] text-lg leading-8 text-[var(--text-sub)]">
            If your profile is strong but too exposed to the 189 queue, Victoria&apos;s 190 pathway changes the equation.
            State nomination adds 5 points and moves you into a smaller state-managed selection pool, where the right
            mix of occupation, earnings, and local ties can matter more than raw federal score alone.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--text-sub)]">
            {heroTrustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(138,21,35,0.12)] bg-[var(--bg-card)] px-4 py-2"
              >
                <CheckIcon className="h-4 w-4 text-[var(--sage)]" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#f9cf69_0%,#f7bf47_100%)] px-7 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_12px_24px_rgba(249,196,91,0.22)]"
            >
              Check My 190 Eligibility — Free
            </Link>
            <Link
              href="#how-190-differs"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(168,32,48,0.24)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--accent)]"
            >
              How it differs from 189
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-5 py-5 shadow-[var(--shadow)]"
              >
                <div className="font-display text-[2.3rem] leading-none text-[var(--accent)] md:text-[2.6rem]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-6 text-[var(--text-sub)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

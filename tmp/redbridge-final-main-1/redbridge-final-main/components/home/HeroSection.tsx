import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { heroStats } from "./home-data";
import { ArrowRightIcon, ClipboardCheckIcon, HeartHandshakeIcon, UsersIcon } from "./icons";

const statIcons = {
  users: UsersIcon,
  clipboard: ClipboardCheckIcon,
  heart: HeartHandshakeIcon,
} as const;

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full overflow-hidden border-b border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--bg-card)_0%,var(--bg)_100%)] pt-8 md:pt-10"
    >
      <div className="home-inner">
        <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]">
          <Header />
        </div>
      </div>
      <div className="home-container overflow-hidden">
        <div className="grid items-stretch lg:grid-cols-[0.94fr_1.06fr]">
          <div className="flex flex-col justify-center px-6 pb-8 pt-10 md:px-8 md:pb-10 lg:px-[7vw] lg:py-12 xl:px-[8vw]">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(168,32,48,0.16)] bg-[rgba(168,32,48,0.05)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
              Registered Australian Consultancy
            </div>
            <h1 className="text-balance font-display text-[2.8rem] leading-[0.95] text-[var(--text-main)] md:text-[3.55rem] xl:text-[4.15rem]">
              Build Your Career in
              <br />
              <span className="italic text-[var(--accent)]">Australia</span>, With a
              <br />
              Team That Keeps It Real.
            </h1>
            <p className="mt-5 max-w-[540px] text-[1.02rem] leading-8 text-[var(--text-sub)]">
              Get placed with verified employers, build the right experience, and move from study to 482 visa and PR
              with a pathway that is honest, structured, and grounded in real opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#f9cf69_0%,#f7bf47_100%)] px-7 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_12px_24px_rgba(249,196,91,0.22)]"
              >
                Get Free Assessment
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#pathways"
                className="inline-flex items-center gap-3 rounded-full border border-[rgba(168,32,48,0.24)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--accent)]"
              >
                View Programs
              </Link>
            </div>

            <div className="mt-10 grid max-w-[640px] gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => {
                const Icon = statIcons[stat.icon];
                const hasAccent = "accent" in stat && stat.accent;

                return (
                  <div
                    key={stat.label}
                    className="rounded-[18px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-4 py-4"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(138,21,35,0.06)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className={["mt-4 text-[1.5rem] font-semibold leading-none text-[var(--text-main)]", hasAccent ? "text-[1.1rem]" : ""].join(" ")}>
                      {stat.value}
                    </p>
                    <p className={["mt-2 text-xs font-semibold uppercase tracking-[0.1em]", hasAccent ? "text-[var(--accent)]" : "text-[var(--text-dim)]"].join(" ")}>
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-[var(--bg)] lg:min-h-[580px]">
            <Image
              src="/home-assets/wtc-hero.png"
              alt="Melbourne skyline — RedBridge Consulting"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
            <div className="absolute inset-y-0 left-0 hidden w-[28%] bg-gradient-to-r from-[var(--bg-card)] via-[rgba(250,250,250,0.8)] to-transparent lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

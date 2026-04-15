import Link from "next/link";
import { LayersIcon } from "./icons";

export function ServicesHero() {
  return (
    <section className="w-full border-b border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--bg-card)_0%,var(--bg)_100%)] py-16 md:py-20">
      <div className="home-inner">
        <div className="mx-auto max-w-[860px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(168,32,48,0.16)] bg-[rgba(168,32,48,0.05)] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
            <LayersIcon className="h-4 w-4" />
            Our Services
          </div>
          <h1 className="mt-5 font-display text-[3rem] leading-[0.96] text-[var(--text-main)] md:text-[4.25rem]">
            Every Pathway to
            <br />
            <span className="italic text-[var(--accent)]">Australian Residency</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-lg leading-8 text-[var(--text-sub)]">
            Whether you need work experience, a points-based visa, or an employer sponsor — we map the most direct
            route to your goal and stay with you to the finish line.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f9cf69_0%,#f7bf47_100%)] px-7 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_12px_24px_rgba(249,196,91,0.22)]"
            >
              Book Free Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(168,32,48,0.28)] px-7 py-3.5 text-sm font-bold text-[var(--accent)]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

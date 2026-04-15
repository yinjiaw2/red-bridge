import Link from "next/link";
import { PhoneIcon } from "./icons";

export function ServicesCtaSection() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,var(--bg)_0%,var(--bg-card)_100%)] py-14 md:py-16">
      <div className="home-inner">
        <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-10 text-center shadow-[var(--shadow)] md:px-10">
          <p className="section-eyebrow justify-center">Start Here</p>
          <h2 className="mt-3 font-display text-[2.8rem] leading-[0.96] text-[var(--text-main)] md:text-[3.4rem]">
            Not Sure Where
            <br />
            You <span className="italic text-[var(--accent)]">Stand?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[650px] text-lg leading-8 text-[var(--text-sub)]">
            Your free consultation covers your points score, skills assessment eligibility, occupation competitiveness,
            and the most realistic timeline to residency — with no obligation to proceed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f9cf69_0%,#f7bf47_100%)] px-7 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_12px_24px_rgba(249,196,91,0.22)]"
            >
              Book Free Consult
            </Link>
            <Link
              href="tel:0399617301"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(168,32,48,0.28)] px-7 py-3.5 text-sm font-bold text-[var(--accent)]"
            >
              <PhoneIcon className="h-4 w-4" />
              03 9961 7301
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

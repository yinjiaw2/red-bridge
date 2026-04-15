import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/home/icons";
import { employerHeroTrust } from "./employers-data";

export function EmployersHero() {
  return (
    <section className="w-full border-b border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--bg-card)_0%,var(--bg)_100%)] py-16 md:py-20">
      <div className="home-inner">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="section-eyebrow">For Australian Employers · 482 / 186 Sponsorship</p>
          <h1 className="mt-4 font-display text-[3rem] leading-[0.95] text-[var(--text-main)] md:text-[4.15rem]">
            The Talent You Need
            <br />
            Is Already <span className="italic text-[var(--accent)]">in Australia.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[700px] text-lg leading-8 text-[var(--text-sub)]">
            Thousands of skilled professionals on graduate and temporary visas are actively seeking sponsorship right
            now. RedBridge identifies, assesses, and matches pre-vetted candidates to your role, then Insight Idea
            handles the sponsorship process from SBS to visa grant.
          </p>

          <div className="mx-auto mt-8 grid max-w-[760px] gap-3 text-left">
            {employerHeroTrust.map((item) => (
              <div key={item} className="flex gap-3 rounded-[18px] bg-[var(--bg-card)] px-4 py-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--sage)]" />
                <p className="text-sm leading-7 text-[var(--text-sub)]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#employer-inquiry"
              className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(168,32,48,0.18)]"
            >
              Submit Employer Inquiry
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-3 rounded-full border border-[rgba(168,32,48,0.24)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--accent)]"
            >
              How it works
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function EmployersCtaSection() {
  return (
    <section className="w-full bg-[var(--footer-bg)] py-16 md:py-20">
      <div className="home-inner text-center">
        <p className="section-eyebrow text-[var(--accent-light)]">Next Step</p>
        <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[#f5f1eb] md:text-[3.3rem]">
          Your Next Hire Is Already <span className="italic text-[#f6c257]">Skills-Assessed.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-lg leading-8 text-white/68">
          Submit an employer inquiry and we&apos;ll assess your role against our pre-vetted candidate pool within one
          business day.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#employer-inquiry"
            className="inline-flex items-center justify-center rounded-full bg-[#f5f1eb] px-8 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
          >
            Submit Employer Inquiry
          </Link>
          <Link href="tel:0399617301" className="text-sm font-semibold text-white/78 underline underline-offset-4">
            Or call 03 9961 7301
          </Link>
        </div>
      </div>
    </section>
  );
}

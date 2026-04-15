import Link from "next/link";

export function SuccessCasesCta() {
  return (
    <section className="w-full bg-[var(--footer-bg)] py-16 md:py-20">
      <div className="home-inner text-center">
        <p className="section-eyebrow text-[var(--accent-light)]">Next Step</p>
        <h2 className="mt-3 text-[2.6rem] leading-[0.98] text-white md:text-[3.35rem]">
          Your Outcome Could Be
          <br />
          <span className="italic text-white/65">The Next Success Case.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-base leading-8 text-white/70">
          Free consultation. No commitment. We assess your profile honestly and tell you what&apos;s realistic — then we
          execute.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full bg-[#f9c45b] px-7 py-3.5 text-sm font-semibold text-[var(--text-main)] shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
          >
            Book My Free Assessment
          </Link>
          <Link href="tel:0399617301" className="text-sm font-semibold text-white/78 underline underline-offset-4">
            Or call us: 03 9961 7301
          </Link>
        </div>
      </div>
    </section>
  );
}

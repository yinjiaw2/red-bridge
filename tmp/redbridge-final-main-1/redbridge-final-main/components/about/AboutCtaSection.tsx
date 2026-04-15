import Link from "next/link";

export function AboutCtaSection() {
  return (
    <section className="w-full bg-[var(--footer-bg)] py-14 text-white md:py-16">
      <div className="home-inner text-center">
        <p className="section-eyebrow text-[var(--accent-light)]">Ready to Talk?</p>
        <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[#f5f1eb] md:text-[3.35rem]">
          Ready to Talk to Our <span className="italic text-[#f6c257]">Team?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[760px] text-lg leading-8 text-white/72">
          Your first consultation is free. We&apos;ll give you an honest assessment of your options — and tell you clearly
          if we&apos;re not the right fit for your situation.
        </p>
        <Link
          href="/booking"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f9cf69_0%,#f7bf47_100%)] px-8 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_12px_24px_rgba(249,196,91,0.22)]"
        >
          Book Your Free Consultation
        </Link>
      </div>
    </section>
  );
}

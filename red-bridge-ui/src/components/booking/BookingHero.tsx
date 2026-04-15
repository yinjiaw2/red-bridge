export function BookingHero() {
  return (
    <section className="w-full border-b border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--bg-card)_0%,var(--bg)_100%)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="eyebrow text-primary">Free · No Obligation · Melbourne-Based</p>
          <h1 className="mt-4 font-serif text-[3rem] leading-[0.95] text-[var(--text-main)] md:text-[4.2rem]">
            Book Your
            <br />
            <span className="text-[var(--accent)]">Free Consultation</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[650px] text-lg leading-8 text-[var(--text-sub)]">
            Select a time window, tell us a little about your situation, and we&apos;ll prepare an honest first
            assessment before we speak.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutHero() {
  return (
    <section className="w-full border-b border-[var(--border-soft)] bg-[var(--bg-card)] py-16 md:py-20">
      <div className="home-inner">
        <div className="max-w-[920px]">
          <p className="section-eyebrow">About RedBridge</p>
          <h1 className="mt-4 max-w-[900px] font-display text-[2.9rem] leading-[0.96] text-[var(--text-main)] md:text-[4rem]">
            Career Development. Employer Matching. <span className="italic text-[var(--accent)]">Nothing Else.</span>
          </h1>
          <p className="mt-5 max-w-[820px] text-lg leading-8 text-[var(--text-sub)] md:text-[1.2rem]">
            RedBridge is a career and employer consultancy — not a migration agent. We build your experience, match you
            with verified sponsors, and coordinate with our licensed legal partner Insight Idea for all visa matters.
            That separation is deliberate.
          </p>
        </div>
      </div>
    </section>
  );
}

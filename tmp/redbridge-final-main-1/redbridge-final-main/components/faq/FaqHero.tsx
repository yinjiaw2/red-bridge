export function FaqHero() {
  return (
    <section className="w-full border-b border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--bg-card)_0%,var(--bg)_100%)] py-16 md:py-20">
      <div className="home-inner">
        <div className="mx-auto max-w-[880px] text-center">
          <p className="section-eyebrow">Support & Answers</p>
          <h1 className="mt-4 font-display text-[3rem] leading-[0.95] text-[var(--text-main)] md:text-[4.25rem]">
            Frequently Asked
            <br />
            <span className="italic text-[var(--accent)]">Questions</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[700px] text-lg leading-8 text-[var(--text-sub)]">
            Straight answers to the questions we hear most about visas, skills assessments, employer sponsorship, and
            how RedBridge works.
          </p>
        </div>
      </div>
    </section>
  );
}

import { successCaseStats } from "@/components/home/home-data";

export function SuccessCasesHero() {
  return (
    <section id="hero" className="w-full bg-[linear-gradient(160deg,#f4ece0_0%,#faf6ef_48%,#efe6d8_100%)] py-16 md:py-20">
      <div className="home-inner">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="section-eyebrow justify-center">Verified Outcomes · Real Clients</p>
          <h1 className="mt-4 text-balance font-display text-[3rem] leading-[0.95] text-[var(--text-main)] md:text-[4.4rem]">
            200+ Careers Built.
            <br />
            Every Pathway. <span className="italic text-[var(--accent)]">Real Results.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[700px] text-base leading-8 text-[var(--text-sub)] md:text-[1.02rem]">
            These are representative outcomes from RedBridge Consulting clients. Client details are anonymised by initials
            and occupation to protect privacy. All visa outcomes and program completions are verified internal records.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[980px] gap-px overflow-hidden rounded-[24px] border border-[var(--border-soft)] bg-[var(--border-soft)] shadow-[var(--shadow-lg)] sm:grid-cols-2 xl:grid-cols-4">
          {successCaseStats.map((stat) => (
            <article key={stat.label} className="bg-[var(--bg-card)] px-6 py-6 text-center">
              <div className="text-[2.35rem] font-semibold leading-none text-[var(--accent)] md:text-[2.75rem]">
                {stat.value}
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--text-sub)]">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

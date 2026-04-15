import { featuredSuccessCase } from "@/components/home/home-data";

export function SuccessCasesSpotlight() {
  return (
    <section id="real-story" className="w-full bg-[var(--bg)] py-10 md:py-14">
      <div className="home-inner">
        <div className="grid overflow-hidden rounded-[28px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow-lg)] lg:grid-cols-[0.92fr_1.28fr]">
          <div className="bg-[var(--accent)] px-7 py-8 text-white md:px-9 md:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">{featuredSuccessCase.eyebrow}</p>
            <h2 className="mt-4 text-[2.35rem] leading-[1] text-white md:text-[3rem]">{featuredSuccessCase.title}</h2>

            <div className="mt-8 space-y-3">
              {featuredSuccessCase.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[14px] border border-white/15 bg-white/8 px-4 py-3 text-sm font-medium leading-6 text-white/88"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="px-7 py-8 md:px-10 md:py-10">
            <p className="section-eyebrow">{featuredSuccessCase.subtitle}</p>
            <blockquote className="mt-4 border-l-[3px] border-[var(--accent)] pl-5 font-display text-[1.3rem] italic leading-9 text-[var(--text-main)] md:text-[1.5rem]">
              {featuredSuccessCase.quote}
            </blockquote>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--text-sub)]">
              {featuredSuccessCase.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

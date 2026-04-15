import { aboutStoryParagraphs, aboutStoryStats } from "./about-data";

export function StorySection() {
  return (
    <section id="our-story" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="grid gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:gap-10">
          <div>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-[2.5rem] leading-[0.98] text-[var(--text-main)] md:text-[3.05rem]">
              Built to Fix a Broken Industry
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--text-sub)] md:text-[1.04rem]">
              {aboutStoryParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 self-start sm:grid-cols-2 lg:grid-cols-2">
            {aboutStoryStats.map((stat, index) => (
              <article
                key={stat.title}
                className={[
                  "rounded-[18px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-4 py-4 shadow-[var(--shadow)] md:px-5 md:py-5",
                  index === aboutStoryStats.length - 1 ? "sm:col-span-2" : "",
                ].join(" ")}
              >
                <div className="text-[2.1rem] font-semibold leading-none text-[var(--accent)] md:text-[2.4rem]">
                  {stat.value}
                </div>
                <h3 className="mt-2.5 text-[1.28rem] leading-tight text-[var(--text-main)] md:text-[1.38rem]">
                  {stat.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-sub)]">{stat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

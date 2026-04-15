import { aboutValues } from "./about-data";
import { EyeIcon, HandshakeIcon, ScaleIcon, ShieldIcon } from "./icons";

const valueIcons = {
  eye: EyeIcon,
  shield: ShieldIcon,
  scale: ScaleIcon,
  handshake: HandshakeIcon,
} as const;

export function ValuesSection() {
  return (
    <section id="our-values" className="w-full bg-[var(--bg-card)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">What We Stand For</p>
          <h2 className="mt-3 font-display text-[2.6rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Our <span className="italic text-[var(--accent)]">Values</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-sub)]">
            These aren&apos;t marketing copy. They&apos;re the operational standards every team member is held to.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {aboutValues.map((value) => {
            const Icon = valueIcons[value.accent];

            return (
              <article
                key={value.title}
                className="rounded-[18px] border border-[var(--border-soft)] bg-[var(--bg)] px-6 py-7 shadow-[var(--shadow)]"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(138,21,35,0.07)] text-[var(--accent)]">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-[1.55rem] leading-tight text-[var(--text-main)]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{value.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

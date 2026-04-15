import Link from "next/link";
import { serviceCards } from "./services-data";
import { ArrowRightIcon, BriefcaseIcon, CheckIcon, MapPinIcon, RocketIcon, SproutIcon, StarIcon } from "./icons";

const serviceIcons = {
  rocket: RocketIcon,
  star: StarIcon,
  "map-pin": MapPinIcon,
  sprout: SproutIcon,
  briefcase: BriefcaseIcon,
} as const;

export function ServicesGridSection() {
  return (
    <section id="services" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="mt-3 font-display text-[2.6rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            Five Pathways. <span className="italic text-[var(--accent)]">One Team.</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-sub)]">
            Each service is designed to work as a standalone solution or as part of a longer migration strategy — we
            advise on the right combination for your profile.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card) => {
            const Icon = serviceIcons[card.icon];
            const isFeatured = "featured" in card && card.featured;

            return (
              <article
                key={card.id}
                id={card.id}
                className={[
                  "flex h-full flex-col rounded-[20px] border bg-[var(--bg-card)] shadow-[var(--shadow)]",
                  isFeatured ? "border-[rgba(168,32,48,0.25)]" : "border-[var(--border-soft)]",
                ].join(" ")}
              >
                <div
                  className={[
                    "rounded-t-[20px] px-6 pb-4 pt-6",
                    isFeatured ? "bg-[linear-gradient(180deg,rgba(168,32,48,0.05)_0%,transparent_100%)]" : "",
                  ].join(" ")}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-[rgba(138,21,35,0.08)] text-[var(--accent)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{card.eyebrow}</p>
                  <h3 className="mt-2 text-[1.8rem] leading-[1.02] text-[var(--text-main)]">
                    {card.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="italic text-[var(--accent)]">{card.title.split(" ").slice(-1)}</span>
                  </h3>
                </div>

                <p className="px-6 text-sm leading-7 text-[var(--text-sub)]">{card.description}</p>

                <div className="mt-5 flex flex-wrap gap-2 px-6">
                  {card.pills.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-2 rounded-full border border-[rgba(138,21,35,0.12)] bg-[rgba(138,21,35,0.05)] px-3 py-1.5 text-xs font-medium text-[var(--text-sub)]"
                    >
                      <CheckIcon className="h-3.5 w-3.5 text-[var(--sage)]" />
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto px-6 pb-6 pt-5">
                  <Link href={card.href} className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                    {card.cta}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

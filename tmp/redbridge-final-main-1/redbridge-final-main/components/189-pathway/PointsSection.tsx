import { pointsCategories } from "./pathway-data";
import {
  AgeIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  LanguageIcon,
  StarIcon,
  UsersIcon,
} from "./icons";

const categoryIcons = {
  age: AgeIcon,
  language: LanguageIcon,
  briefcase: BriefcaseIcon,
  education: GraduationCapIcon,
  partner: UsersIcon,
  star: StarIcon,
} as const;

export function PointsSection() {
  return (
    <section id="points-table" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">Points Test</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.25rem]">
            Every Point <span className="italic text-[var(--accent)]">Counts</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">
            The points test has a maximum possible score of 130. Here is exactly how the system works — and where
            RedBridge focuses your strategy.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {pointsCategories.map((category) => {
            const Icon = categoryIcons[category.icon];
            const isFeatured = "featured" in category && category.featured;

            return (
              <article
                key={category.title}
                className={[
                  "rounded-[22px] border bg-[var(--bg-card)] px-6 py-6 shadow-[var(--shadow)]",
                  isFeatured ? "border-[rgba(168,32,48,0.22)] bg-[rgba(138,21,35,0.03)]" : "border-[var(--border-soft)]",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={[
                      "inline-flex h-12 w-12 items-center justify-center rounded-[14px]",
                      isFeatured ? "bg-[rgba(138,21,35,0.12)] text-[var(--accent)]" : "bg-[rgba(138,21,35,0.06)] text-[var(--accent)]",
                    ].join(" ")}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-[1.5rem] leading-tight text-[var(--text-main)]">{category.title}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{category.max}</p>
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-[16px] border border-[var(--border-soft)]">
                  {category.rows.map(([label, value], index) => (
                    <div
                      key={`${category.title}-${label}`}
                      className={[
                        "flex items-center justify-between gap-4 bg-white px-4 py-3 text-sm",
                        index !== category.rows.length - 1 ? "border-b border-[var(--border-soft)]" : "",
                      ].join(" ")}
                    >
                      <span className="text-[var(--text-sub)]">{label}</span>
                      <span
                        className={[
                          "text-right font-semibold",
                          value.toLowerCase().includes("not eligible")
                            ? "text-[var(--accent)]"
                            : value.toLowerCase().includes("competitive range") || value.toLowerCase().includes("strong")
                              ? "text-[var(--sage)]"
                              : "text-[var(--text-main)]",
                        ].join(" ")}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--text-sub)]">{category.note}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import {
  successCaseFilters,
  successStories,
  type SuccessCaseFilter,
  type SuccessStory,
} from "@/components/home/home-data";

const accentClassMap: Record<SuccessStory["accent"], string> = {
  career: "bg-[linear-gradient(90deg,#c97a45,#a8501e)]",
  employer: "bg-[var(--gradient)]",
  "189": "bg-[linear-gradient(90deg,#4a7a4e,#2d6a4f)]",
  "190": "bg-[linear-gradient(90deg,#5a7d5e,#3d5c40)]",
  "491": "bg-[linear-gradient(90deg,#5a7d5e,#2d6a4f)]",
};

const outcomeToneClassMap: Record<SuccessStory["outcomeTone"], string> = {
  placed: "bg-[rgba(90,125,94,0.12)] text-[var(--sage)]",
  secured: "bg-[rgba(168,80,30,0.12)] text-[var(--accent)]",
  granted: "bg-[rgba(45,106,79,0.12)] text-[#2d6a4f]",
  reversed: "bg-[rgba(178,30,30,0.08)] text-[#b21e1e]",
};

const avatarToneClassMap: Record<SuccessStory["avatarTone"], string> = {
  orange: "bg-[rgba(168,80,30,0.12)] text-[var(--accent)]",
  sage: "bg-[rgba(90,125,94,0.12)] text-[var(--sage)]",
  green: "bg-[rgba(45,106,79,0.12)] text-[#2d6a4f]",
  red: "bg-[rgba(178,30,30,0.08)] text-[#b21e1e]",
};

const tagToneClassMap: Record<Exclude<SuccessCaseFilter["value"], "all">, string> = {
  career: "bg-[rgba(168,80,30,0.1)] text-[var(--accent)]",
  employer: "bg-[rgba(168,80,30,0.1)] text-[var(--accent)]",
  "189": "bg-[rgba(45,106,79,0.1)] text-[#2d6a4f]",
  "190": "bg-[rgba(90,125,94,0.1)] text-[var(--sage)]",
  "491": "bg-[rgba(90,125,94,0.1)] text-[var(--sage)]",
};

const filterLabelMap: Record<Exclude<SuccessCaseFilter["value"], "all">, string> = {
  career: "Career Launch",
  employer: "Employer Sponsored",
  "189": "189 Independent",
  "190": "190 State Nominated",
  "491": "491 Regional",
};

export function TestimonialGrid() {
  const [activeFilter, setActiveFilter] = useState<SuccessCaseFilter["value"]>("all");

  const visibleStories = useMemo(() => {
    if (activeFilter === "all") {
      return successStories;
    }

    return successStories.filter((story) => story.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="case-studies" className="w-full bg-[var(--bg)] py-10 md:py-14">
      <div className="home-inner">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-[var(--text-dim)]">Filter:</span>
          {successCaseFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
              className={[
                "rounded-full border px-4 py-2 text-sm font-semibold",
                activeFilter === filter.value
                  ? "border-transparent bg-[var(--accent)] text-white shadow-[0_10px_24px_rgba(168,80,30,0.18)]"
                  : "border-[var(--border-soft)] bg-transparent text-[var(--text-sub)] hover:border-[rgba(168,80,30,0.24)] hover:text-[var(--accent)]",
              ].join(" ")}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {visibleStories.map((story) => (
            <article
              key={story.title}
              className="overflow-hidden rounded-[24px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]"
            >
              <div className={["h-1.5 w-full", accentClassMap[story.accent]].join(" ")} />

              <div className="flex h-full flex-col px-6 py-6 md:px-7 md:py-7">
                <div className="flex flex-wrap gap-2">
                  {story.categories.map((category) => (
                    <span
                      key={`${story.title}-${category}`}
                      className={[
                        "rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em]",
                        tagToneClassMap[category],
                      ].join(" ")}
                    >
                      {filterLabelMap[category]}
                    </span>
                  ))}
                </div>

                <span
                  className={[
                    "mt-4 inline-flex w-fit rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em]",
                    outcomeToneClassMap[story.outcomeTone],
                  ].join(" ")}
                >
                  {story.outcomeLabel}
                </span>

                <h3 className="mt-4 text-[1.9rem] leading-[1.05] text-[var(--text-main)]">{story.title}</h3>

                <div className="mt-5 flex items-center gap-4 border-b border-[var(--border-soft)] pb-5">
                  <div
                    className={[
                      "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      avatarToneClassMap[story.avatarTone],
                    ].join(" ")}
                  >
                    {story.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-main)]">{story.name}</p>
                    <p className="text-sm leading-6 text-[var(--text-sub)]">{story.credentials}</p>
                  </div>
                </div>

                <blockquote className="mt-5 flex-1 border-l-2 border-[var(--accent)] pl-4 font-display text-[1.15rem] italic leading-8 text-[var(--text-sub)]">
                  {story.quote}
                </blockquote>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {story.metrics.map((metric) => (
                    <div key={`${story.title}-${metric.label}`} className="rounded-[16px] bg-[var(--bg)] px-4 py-4 text-center">
                      <span className="block text-[1.5rem] font-semibold leading-none text-[var(--text-main)]">
                        {metric.value}
                      </span>
                      <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-dim)]">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleStories.length === 0 ? (
          <div className="mt-8 rounded-[24px] border border-dashed border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-12 text-center">
            <p className="text-base leading-8 text-[var(--text-sub)]">
              No cases match that filter right now.
              <button type="button" onClick={() => setActiveFilter("all")} className="ml-2 font-semibold text-[var(--accent)]">
                Show all outcomes
              </button>
            </p>
          </div>
        ) : null}

        <p className="mx-auto mt-7 max-w-[900px] text-center text-sm leading-7 text-[var(--text-dim)]">
          Client details anonymised to protect privacy. Outcomes and program completions are verified internal records.
          Individual results vary based on occupation, points score, and visa pathway.
        </p>
      </div>
    </section>
  );
}

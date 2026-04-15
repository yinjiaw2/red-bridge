import type { ReactNode } from "react";
import Link from "next/link";

type RelatedItem = {
  visa: string;
  title: string;
  description: string;
  href: string;
};

type RelatedPathwaysSectionProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  items: readonly RelatedItem[];
};

export function RelatedPathwaysSection({
  eyebrow,
  title,
  description,
  items,
}: RelatedPathwaysSectionProps) {
  return (
    <section id="related" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            {title}
          </h2>
          {description ? <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">{description}</p> : null}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((pathway) => (
            <Link
              key={pathway.title}
              href={pathway.href}
              className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-6 shadow-[var(--shadow)]"
            >
              <span className="inline-flex rounded-full bg-[rgba(138,21,35,0.06)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[var(--accent)]">
                {pathway.visa}
              </span>
              <h3 className="mt-4 text-[1.5rem] leading-tight text-[var(--text-main)]">{pathway.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{pathway.description}</p>
              <span className="mt-5 inline-flex text-sm font-bold text-[var(--accent)]">Explore pathway →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

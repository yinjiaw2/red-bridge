import type { ReactNode } from "react";
import Link from "next/link";
import { CheckIcon } from "./icons";

type RequirementItem = {
  title: string;
  description: string;
};

type RequirementGroup = {
  title: string;
  items: readonly RequirementItem[];
  tone?: "default" | "warning";
};

type RequirementsColumnsSectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  groups: readonly RequirementGroup[];
  footer?: {
    prefix: ReactNode;
    href: string;
    linkLabel: string;
  };
};

const groupToneClasses = {
  default: {
    card: "border-[var(--border-soft)] bg-[var(--bg-card)]",
    icon: "text-[var(--sage)]",
    heading: "text-[var(--text-main)]",
  },
  warning: {
    card: "border-[rgba(168,80,30,0.18)] bg-[rgba(168,80,30,0.03)]",
    icon: "text-[var(--accent)]",
    heading: "text-[var(--accent)]",
  },
} as const;

function RequirementGroupCard({ group }: { group: RequirementGroup }) {
  const tone = group.tone ?? "default";
  const classes = groupToneClasses[tone];

  return (
    <article className={`rounded-[24px] border px-6 py-6 shadow-[var(--shadow)] md:px-7 ${classes.card}`}>
      <h3 className={`font-display text-[2rem] leading-tight ${classes.heading}`}>{group.title}</h3>
      <div className="mt-6 space-y-4">
        {group.items.map((item) => (
          <div key={item.title} className="grid grid-cols-[20px_minmax(0,1fr)] gap-3">
            <CheckIcon className={`mt-1 h-5 w-5 ${classes.icon}`} />
            <div>
              <h4 className="text-[1.05rem] leading-7 text-[var(--text-main)]">{item.title}</h4>
              <p className="text-sm leading-7 text-[var(--text-sub)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function RequirementsColumnsSection({
  id,
  eyebrow,
  title,
  description,
  groups,
  footer,
}: RequirementsColumnsSectionProps) {
  return (
    <section id={id} className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.2rem]">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-sub)]">{description}</p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {groups.map((group) => (
            <RequirementGroupCard key={group.title} group={group} />
          ))}
        </div>

        {footer ? (
          <p className="mt-6 text-sm leading-7 text-[var(--text-sub)]">
            {footer.prefix}{" "}
            <Link
              href={footer.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--accent)] underline underline-offset-4"
            >
              {footer.linkLabel}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}

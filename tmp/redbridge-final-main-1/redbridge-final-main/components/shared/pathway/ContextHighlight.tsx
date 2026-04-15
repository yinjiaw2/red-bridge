import type { ReactNode } from "react";
import { InfoIcon } from "./icons";

type ContextHighlightProps = {
  title: string;
  children: ReactNode;
};

export function ContextHighlight({ title, children }: ContextHighlightProps) {
  return (
    <section className="w-full bg-[var(--bg)] py-8">
      <div className="home-inner">
        <div className="rounded-[22px] border border-[rgba(168,32,48,0.14)] bg-[rgba(138,21,35,0.05)] px-6 py-6 shadow-[var(--shadow)] md:px-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(138,21,35,0.08)] text-[var(--accent)]">
              <InfoIcon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-[1.5rem] leading-tight text-[var(--text-main)]">{title}</h3>
              <div className="mt-3 text-base leading-8 text-[var(--text-sub)]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

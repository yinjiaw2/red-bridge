import type { ReactNode } from "react";
import Link from "next/link";
import { CalendarIcon } from "./icons";

type ReviewedNoticeProps = {
  children: ReactNode;
  href: string;
  linkLabel: string;
};

export function ReviewedNotice({ children, href, linkLabel }: ReviewedNoticeProps) {
  return (
    <div className="w-full border-y border-[var(--border-soft)] bg-[var(--bg-card)] py-4">
      <div className="home-inner flex flex-col gap-3 text-sm text-[var(--text-sub)] md:flex-row md:items-center md:justify-between">
        <div className="inline-flex items-center gap-2">
          <CalendarIcon className="h-4 w-4 text-[var(--accent)]" />
          <span>{children}</span>
        </div>
        <Link href={href} target="_blank" rel="noreferrer" className="font-semibold text-[var(--accent)]">
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import Link from "next/link";
import { CalendarIcon, CheckIcon } from "./icons";

type Chip = {
  label: string;
  icon: "calendar" | "check";
};

type PathwayCtaBandProps = {
  title: ReactNode;
  description: ReactNode;
  chips: readonly Chip[];
  buttonLabel: string;
  buttonHref: string;
  footer: ReactNode;
};

function ChipIcon({ icon }: { icon: Chip["icon"] }) {
  if (icon === "calendar") {
    return <CalendarIcon className="h-4 w-4 text-[#f6c257]" />;
  }

  return <CheckIcon className="h-4 w-4 text-[#f6c257]" />;
}

export function PathwayCtaBand({
  title,
  description,
  chips,
  buttonLabel,
  buttonHref,
  footer,
}: PathwayCtaBandProps) {
  return (
    <section id="book-now" className="w-full bg-[var(--footer-bg)] py-14 text-white md:py-16">
      <div className="home-inner">
        <div className="rounded-[26px] border border-white/10 bg-white/5 px-6 py-10 text-center shadow-[var(--shadow-lg)] md:px-10">
          <h2 className="font-display text-[2.8rem] leading-[0.96] text-[#f5f1eb] md:text-[3.4rem]">{title}</h2>
          <p className="mx-auto mt-5 max-w-[760px] text-lg leading-8 text-white/68">{description}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
              >
                <ChipIcon icon={chip.icon} />
                {chip.label}
              </span>
            ))}
          </div>

          <Link
            href={buttonHref}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f9cf69_0%,#f7bf47_100%)] px-8 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-[0_12px_24px_rgba(249,196,91,0.22)]"
          >
            {buttonLabel}
          </Link>

          <p className="mt-5 text-sm text-white/50">{footer}</p>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { comparisonRows } from "./home-data";
import {
  ArrowRightIcon,
  CheckIcon,
  CreditCardIcon,
  FileWarningIcon,
  HeadsetIcon,
  RouteIcon,
  UserOffIcon,
  ClipboardListIcon,
  XIcon,
} from "./icons";

const rowIcons = {
  file: FileWarningIcon,
  card: CreditCardIcon,
  "user-off": UserOffIcon,
  "clipboard-list": ClipboardListIcon,
  route: RouteIcon,
  headset: HeadsetIcon,
} as const;

export function ComparisonSection() {
  return (
    <section id="comparison" className="w-full bg-[var(--bg)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="section-eyebrow">Why RedBridge?</p>
          <h2 className="mt-3 font-display text-[2.7rem] leading-[0.98] text-[var(--text-main)] md:text-[3.3rem]">
            How We&apos;re <span className="italic text-[var(--accent)]">Different</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[780px] text-lg leading-8 text-[var(--text-sub)]">
            The migration industry has a trust problem. We built RedBridge to be the verifiable opposite.
          </p>
        </div>

        <div className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-[rgba(138,21,35,0.18)] bg-[rgba(138,21,35,0.05)] px-4 py-2 text-xs font-semibold text-[var(--accent)] md:hidden">
          <span aria-hidden="true">↻</span>
          Rotate your phone horizontally for the best table view.
        </div>

        <div className="mt-9 overflow-hidden rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] shadow-[var(--shadow)]">
          <div className="grid grid-cols-1 md:grid-cols-[1.18fr_0.78fr_1.18fr]">
            <div className="border-b border-[var(--border-soft)] bg-white px-7 py-5 text-sm font-bold uppercase tracking-[0.12em] text-[var(--text-dim)] md:border-r">
              You Deserve Better
            </div>
            <div className="border-b border-[var(--border-soft)] bg-[var(--bg)] px-7 py-5 text-sm font-bold uppercase tracking-[0.12em] text-[var(--text-dim)] md:border-r">
              Other Agencies
            </div>
            <div className="border-b border-[var(--border-soft)] bg-[rgba(138,21,35,0.06)] px-7 py-5 text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
              RedBridge Consulting
            </div>
          </div>

          {comparisonRows.map((row) => {
            const Icon = rowIcons[row.icon];

            return (
              <div key={row.problem} className="grid border-b border-[var(--border-soft)] last:border-b-0 md:grid-cols-[1.18fr_0.78fr_1.18fr]">
                <div className="flex gap-5 bg-white px-7 py-6">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[rgba(138,21,35,0.07)] text-[#6f6f6f]">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-[1.38rem] font-semibold leading-tight text-[var(--text-main)]">{row.problem}</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-sub)]">{row.problemDescription}</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-[var(--bg)] px-7 py-6">
                  <XIcon className="mt-1 h-5 w-5 shrink-0 text-[#caa989]" />
                  <p className="text-sm leading-7 text-[var(--text-sub)]">{row.other}</p>
                </div>

                <div className="flex gap-4 bg-white px-7 py-6">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--sage)]" />
                  <div>
                    <p className="text-[1.22rem] font-semibold leading-tight text-[var(--accent)]">{row.redbridge}</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-sub)]">{row.redbridgeDescription}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="border-l-4 border-[var(--accent-light)] pl-5">
            <p className="font-display text-[2rem] leading-none text-[var(--text-main)]">Still have questions? Let&apos;s talk.</p>
            <p className="mt-2 text-base text-[var(--text-sub)]">A free consultation. Clear answers. No pressure.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-8 py-3.5 text-sm font-bold text-white shadow-[0_14px_26px_rgba(201,58,74,0.18)]"
            >
              Book Free Consultation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(168,32,48,0.25)] bg-white px-8 py-3.5 text-sm font-bold text-[var(--accent)]"
            >
              See How We Work
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

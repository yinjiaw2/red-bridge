import Link from "next/link";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-3 z-[70] px-3 sm:px-4 lg:hidden">
      <div className="mx-auto flex max-w-[460px] gap-3 rounded-full border border-[var(--border-soft)] bg-white/96 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur">
        <Link
          href="tel:0399617301"
          className="flex flex-1 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--bg-2)] px-4 py-3 text-sm font-semibold text-[var(--text-main)]"
        >
          Call Us
        </Link>
        <Link
          href="/booking"
          className="flex flex-1 items-center justify-center rounded-full bg-[linear-gradient(135deg,#A82030_0%,#5C0E17_100%)] px-4 py-3 text-sm font-semibold text-white"
        >
          Free Consult
        </Link>
      </div>
    </div>
  );
}

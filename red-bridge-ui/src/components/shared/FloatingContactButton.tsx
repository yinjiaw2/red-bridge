import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingContactButton() {
  return (
    <Link
      href="/contact"
      aria-label="Contact us"
      title="Contact us"
      className="group fixed bottom-9 right-5 z-50 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-[0_14px_35px_rgba(177,18,23,0.32)] transition-all duration-300 hover:w-44 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_18px_45px_rgba(177,18,23,0.42)] focus-visible:w-44 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 md:bottom-12 md:right-7 md:h-16 md:w-16 md:hover:w-48 md:focus-visible:w-48"
    >
      <span className="flex min-w-0 items-center justify-center gap-2 px-4">
        <MessageCircle
          className="absolute left-1/2 h-7 w-7 shrink-0 -translate-x-1/2 transition-all duration-300 group-hover:static group-hover:translate-x-0 group-focus-visible:static group-focus-visible:translate-x-0 md:h-8 md:w-8"
          strokeWidth={2.2}
        />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold uppercase tracking-[0.12em] opacity-0 transition-all duration-300 group-hover:max-w-32 group-hover:opacity-100 group-focus-visible:max-w-32 group-focus-visible:opacity-100">
          Contact us
        </span>
      </span>
    </Link>
  );
}

import { outcomes } from "./home-data";

const tickerItems = [...outcomes, ...outcomes];

export function OutcomesTicker() {
  return (
    <section className="overflow-hidden border-y border-[var(--border-soft)] bg-[var(--bg-card)] py-4">
      <div className="relative before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-20 before:bg-gradient-to-r before:from-[var(--bg-card)] before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-20 after:bg-gradient-to-l after:from-[var(--bg-card)] after:to-transparent">
        <div className="animate-[ticker_42s_linear_infinite] whitespace-nowrap">
          {tickerItems.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center px-8 text-sm font-medium text-[var(--text-sub)]">
              <span className="font-bold text-[var(--text-main)]">{item.split(" — ")[0]}</span>
              <span className="px-2">—</span>
              <span>{item.split(" — ")[1]}</span>
              <span className="pl-8 text-[var(--accent)]/35">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

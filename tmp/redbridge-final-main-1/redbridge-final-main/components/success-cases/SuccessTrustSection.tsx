import {
  ClipboardCheckIcon,
  RouteIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/home/icons";
import { successTrustItems } from "@/components/home/home-data";

const iconMap = {
  clipboard: ClipboardCheckIcon,
  users: UsersIcon,
  shield: ShieldIcon,
  route: RouteIcon,
};

export function SuccessTrustSection() {
  return (
    <section id="why-trust" className="w-full bg-[var(--bg-2)] py-14 md:py-16">
      <div className="home-inner">
        <div className="mx-auto max-w-[920px] text-center">
          <p className="section-eyebrow justify-center">Why It Works</p>
          <h2 className="mt-3 text-[2.45rem] leading-[0.98] text-[var(--text-main)] md:text-[3.15rem]">
            Why These <span className="italic text-[var(--accent)]">Outcomes Are Achievable</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-8 text-[var(--text-sub)]">
            Every case on this page reflects a real client journey — not a best-case scenario. The consistent factor across
            all outcomes is early assessment, correct pathway mapping, and executing the skills assessment and application
            without errors.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {successTrustItems.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article
                key={item.title}
                className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--bg-card)] px-5 py-6 text-center shadow-[var(--shadow)]"
              >
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(168,80,30,0.08)] text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[1.45rem] leading-tight text-[var(--text-main)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-sub)]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { servicesStats } from "./services-data";

export function ServicesStatsBand() {
  return (
    <section className="w-full bg-[var(--footer-bg)] py-8 md:py-10">
      <div className="home-inner">
        <div className="grid overflow-hidden rounded-[18px] border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {servicesStats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "px-6 py-7 text-center",
                index < servicesStats.length - 1 ? "border-b border-white/10 lg:border-b-0" : "",
                index % 2 === 0 ? "sm:border-r sm:border-white/10 lg:border-r lg:border-white/10" : "",
                index < servicesStats.length - 1 && index !== 1 ? "lg:border-r lg:border-white/10" : "",
                index === servicesStats.length - 1 ? "lg:border-r-0" : "",
              ].join(" ")}
            >
              <div className="font-display text-[2.4rem] leading-none text-[#f6c257] md:text-[2.8rem]">{stat.value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/56">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

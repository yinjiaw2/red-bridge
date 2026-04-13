"use client";
import { useTranslations } from "next-intl";

interface StatItem {
  value: string;
  label: string;
}

export const StatsSection = () => {
  const t = useTranslations("hero");
  const items = t.raw("stats") as StatItem[];

  return (
    <section id="our-track-record" className="bg-[#2d241e] py-24 px-[5%] text-white">
      <div className="max-w-300 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[0.75rem] font-bold tracking-[0.2em] text-primary uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary/30"></span>
            Proven Results
            <span className="w-8 h-px bg-primary/30"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Trusted by professionals
            <span className="text-primary italic ml-2">across pathways</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A snapshot of the outcomes and reach reflected across our current client base.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 rounded-4xl overflow-hidden border border-white/10 shadow-2xl">
          {items.map((stat, index) => {
            const [mainLabel, subLabel = ""] = stat.label.split("\n");

            return (
              <div
                key={index}
                className="bg-[#362c25] p-12 flex flex-col items-center text-center transition-colors hover:bg-[#3d322a]"
              >
                <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white font-bold text-lg mb-2">{mainLabel}</div>
                <div className="text-stone-500 text-sm font-medium uppercase tracking-widest">
                  {subLabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

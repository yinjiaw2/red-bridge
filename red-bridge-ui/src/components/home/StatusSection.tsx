import React from "react";

interface StatItem {
  number: string;
  label: string;
  subLabel: string;
}

const stats: StatItem[] = [
  {
    number: "200+",
    label: "职业匹配",
    subLabel: "完成项目后就业",
  },
  {
    number: "4.9",
    label: "客户平均评分",
    subLabel: "基于项目后反馈",
  },
  {
    number: "300+",
    label: "技能评估",
    subLabel: "ACS和AMI首次通过",
  },
];

export const StatsSection = () => {
  return (
    <section
      id="our-track-record"
      className="bg-[#2d241e] py-24 px-[5%] text-white"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="text-[0.75rem] font-bold tracking-[0.2em] text-[#b4907a] uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-[#b4907a]/30"></span>
            我们的业绩
            <span className="w-8 h-[1px] bg-[#b4907a]/30"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            用成果<span className="text-[#b4907a] italic ml-2">说话</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed">
            基于真实职业匹配、真实客户、真实成果的数字 — 始于2018
          </p>
        </div>

        {/* Bento 统计网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#362c25] p-12 flex flex-col items-center text-center transition-colors hover:bg-[#3d322a]"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#b4907a] mb-4 tracking-tight">
                {stat.number}
              </div>
              <div className="text-white font-bold text-lg mb-2">
                {stat.label}
              </div>
              <div className="text-stone-500 text-sm font-medium uppercase tracking-widest">
                {stat.subLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

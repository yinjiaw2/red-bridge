"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  GraduationCap,
  Handshake,
  Compass,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// 定义分类类型
type Category = "all" | "graduate" | "employer" | "independent";

interface Program {
  id: string;
  category: Category;
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  href: string;
  isFeatured?: boolean;
}

const programsData: Program[] = [
  {
    id: "p1",
    category: "employer",
    isFeatured: true,
    price: "From AUD 250,000",
    title: "482 / 186 雇主担保",
    subtitle:
      "通过真实担保雇主获得永久居留的最直接途径 — 在您承诺之前完全透明地了解雇主是谁。",
    features: [
      "接入经验证的雇主网络",
      "签约前分享雇主资料",
      "简历和面试辅导",
      "通过 Insight Idea 提供全面法律支持",
    ],
    href: "/zh/employer-pathway",
  },
  {
    id: "p2",
    category: "graduate",
    price: "From AUD 50,000",
    title: "职业起航计划",
    subtitle:
      "为需要真实、有薪的澳洲工作经验以获得技术移民资格的应届毕业生 — 而非无薪实习。",
    features: [
      "400+小时真实有薪项目工作",
      "CAANZ、ACS、AMI认可的工时表",
      "专业作品集开发",
      "技能评估保证",
    ],
    href: "/zh/career-launch",
  },
  {
    id: "p3",
    category: "independent",
    price: "From AUD 50,000",
    title: "189 独立技术移民",
    subtitle: "基于打分的永久居留，无需雇主担保。",
    features: [
      "打分策略与差距分析",
      "工作经验规划",
      "技能评估匹配",
      "专业职业指导",
    ],
    href: "/zh/189-pathway",
  },
  {
    id: "p4",
    category: "independent",
    price: "From AUD 50,000",
    title: "190 州提名移民",
    subtitle: "通过州提名提升您的分数 — 根据您的职业和个人情况匹配合适的州。",
    features: [
      "针对特定州的提名策略",
      "目标行业和地区匹配",
      "基于项目的经验计划",
      "提名申请支持",
    ],
    href: "/zh/190-pathway",
  },
  {
    id: "p5",
    category: "independent",
    price: "From AUD 50,000",
    title: "491 偏远地区移民",
    subtitle:
      "偏远地区移民享有额外加分、更快处理速度，以及通向191永久居留的明确路径。",
    features: [
      "偏远地区雇主联系",
      "特定地区职业发展",
      "通向191永久居留的路径",
      "定制化搬迁支持",
    ],
    href: "/zh/491-pathway",
  },
];

export const ProgramsSection = () => {
  const [filter, setFilter] = useState<Category>("all");

  const filteredPrograms =
    filter === "all"
      ? programsData
      : programsData.filter((p) => p.category === filter);

  const filters = [
    { id: "all", label: "显示全部", icon: <LayoutGrid size={16} /> },
    {
      id: "graduate",
      label: "我是应届毕业生",
      icon: <GraduationCap size={16} />,
    },
    {
      id: "employer",
      label: "我有感兴趣的雇主",
      icon: <Handshake size={16} />,
    },
    { id: "independent", label: "我想独立申请", icon: <Compass size={16} /> },
  ];

  return (
    <section id="programs" className="bg-[#f5f1ea] py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="text-[0.75rem] font-bold tracking-[0.2em] text-[#a28e7e] uppercase mb-4">
            我们的项目
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d241e] mb-6">
            找到您的<span className="text-[#7c5a43] italic ml-2">移民方案</span>
          </h2>
          <p className="text-[#928276] text-lg">
            选择您的情况以查看最相关的项目。
          </p>
        </div>

        {/* 筛选按钮组 */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as Category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                filter === f.id
                  ? "bg-[#7c5a43] text-white border-[#7c5a43] shadow-lg shadow-[#7c5a43]/20"
                  : "bg-white text-[#928276] border-[#e8dfd4] hover:border-[#7c5a43] hover:text-[#7c5a43]"
              }`}
            >
              {f.icon} {f.label}
            </button>
          ))}
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-500 ${
                program.isFeatured
                  ? "lg:col-span-2 bg-[#2d241e] border-[#2d241e] text-white shadow-2xl md:flex-row gap-10"
                  : "bg-[#fbf9f4] border-[#e8dfd4] text-[#2d241e]"
              }`}
            >
              {program.isFeatured && (
                <div className="absolute -top-3 left-8 bg-[#b45309] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={10} fill="currentColor" /> 最受欢迎
                </div>
              )}

              {/* 卡片左侧/顶部 */}
              <div className={program.isFeatured ? "flex-1" : ""}>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest mb-4 block ${program.isFeatured ? "text-[#b4907a]" : "text-[#a28e7e]"}`}
                >
                  {program.price}
                </span>
                <h3 className="text-2xl font-serif font-bold mb-4">
                  {program.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-8 ${program.isFeatured ? "text-stone-400" : "text-[#928276]"}`}
                >
                  {program.subtitle}
                </p>
                {!program.isFeatured && (
                  <Link
                    href={program.href}
                    className="mt-auto inline-flex items-center gap-2 text-[#b45309] font-bold hover:gap-3 transition-all text-sm"
                  >
                    查看详情 <ArrowRight size={16} />
                  </Link>
                )}
              </div>

              {/* 卡片右侧（仅 Featured 有）或列表部分 */}
              <div
                className={`flex flex-col justify-between ${program.isFeatured ? "flex-1 border-l border-white/10 pl-10" : "mt-6 pt-6 border-t border-[#e8dfd4]"}`}
              >
                <ul className="space-y-3 mb-8">
                  {program.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2
                        size={16}
                        className={
                          program.isFeatured
                            ? "text-[#b4907a] shrink-0"
                            : "text-[#7c5a43] shrink-0"
                        }
                      />
                      <span
                        className={
                          program.isFeatured
                            ? "text-stone-300"
                            : "text-[#928276]"
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                {program.isFeatured && (
                  <Link
                    href={program.href}
                    className="w-full bg-[#b4907a] hover:bg-[#a37f68] text-white text-center py-4 rounded-xl font-bold transition-colors"
                  >
                    查看详情
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 底部 CTA */}
        <p className="text-center mt-12 text-[#928276] text-sm">
          不确定哪条路径适合？{" "}
          <Link
            href="/booking"
            className="text-[#b45309] font-bold underline underline-offset-4 decoration-2"
          >
            预约免费咨询
          </Link>{" "}
          — 我们诚实评估您的选项，包括告诉您是否没有合适的方案。
        </p>
      </div>
    </section>
  );
};

export default ProgramsSection;

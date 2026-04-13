"use client";
import Link from "next/link";

// 定义卡片的数据结构
interface Scenario {
  title: string;
  description: string;
  linkText: string;
  href: string;
  icon: string;
  filterType?: string; // 用于匹配你原有的 filterPrograms 逻辑
}

const scenarios: Scenario[] = [
  {
    title: "我刚毕业",
    description: "我有澳洲学位，但还没有足够的本地工作经验来申请移民。",
    linkText: "职业起航计划 →",
    href: "#programs",
    icon: "fa-user-graduate",
    filterType: "graduate",
  },
  {
    title: "我需要签证担保",
    description:
      "我是一名技术专业人才或者我拥有工作经验，正在寻找能为我担保482或186签证的澳洲雇主。",
    linkText: "雇主担保 →",
    href: "#programs",
    icon: "fa-briefcase",
    filterType: "employer",
  },
  {
    title: "我想获得永久居留权",
    description: "我想通过打分制技术移民系统独立申请PR。",
    linkText: "189 / 190 / 491 →",
    href: "#programs",
    icon: "fa-compass",
    filterType: "independent",
  },
  {
    title: "我的签证即将到期",
    description: "我时间紧迫，需要关于过桥签证、签证延期或转换签证的紧急指导。",
    linkText: "紧急签证方案 →",
    href: "/zh/emergency.html",
    icon: "fa-clock",
  },
];

export const UserScenarioSection = () => {
  // 模拟原有的 filterPrograms 函数逻辑
  const handleCardClick = (filterType?: string) => {
    if (filterType) {
      console.log(`Filtering for: ${filterType}`);
      // 这里可以对接你的状态管理逻辑
    }
  };

  return (
    <section className="py-12 px-[5%] bg-[var(--bg-card)] border-b border-[var(--border-soft)]">
      <div className="max-w-[900px] mx-auto text-center">
        {/* 顶部副标题 */}
        <p className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[var(--text-dim)] mb-5">
          👉 您现在最需要什么帮助？
        </p>

        {/* 网格容器 */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {scenarios.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => handleCardClick(item.filterType)}
              className="group flex flex-col p-6 bg-white border border-transparent rounded-lg transition-all hover:shadow-md hover:border-[var(--accent)] text-left"
            >
              <div className="text-[var(--accent)] text-xl mb-4 transition-transform group-hover:scale-110">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h4 className="text-lg font-bold mb-2 text-[var(--text-main)]">
                {item.title}
              </h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-4 flex-grow">
                {item.description}
              </p>
              <span className="text-sm font-semibold text-[var(--accent)] group-hover:underline">
                {item.linkText}
              </span>
            </Link>
          ))}
        </div>

        {/* 底部引导文案 */}
        <p className="mt-7 text-[0.88rem] text-[var(--text-dim)]">
          不确定哪个适合您？{" "}
          <Link
            href="#programs"
            className="text-[var(--accent)] font-semibold underline underline-offset-[3px]"
          >
            详细了解所有移民路径
          </Link>
          {" 或 "}
          <Link
            href="/booking"
            className="text-[var(--accent)] font-semibold underline underline-offset-[3px]"
          >
            预约免费初步评估
          </Link>
        </p>
      </div>
    </section>
  );
};

export default UserScenarioSection;

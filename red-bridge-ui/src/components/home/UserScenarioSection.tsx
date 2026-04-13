"use client";
import Link from "next/link";
import {
  Briefcase,
  Compass,
  GraduationCap,
  Clock3,
  type LucideIcon,
} from "lucide-react";

// 定义卡片的数据结构（保持不变）
interface Scenario {
  title: string;
  description: string;
  linkText: string;
  href: string;
  icon: LucideIcon;
  filterType?: string;
}

const scenarios: Scenario[] = [
  {
    title: "我刚毕业",
    description: "我有澳洲学位，但还没有足够的本地工作经验来申请移民。",
    linkText: "职业起航计划 →",
    href: "#programs",
    icon: GraduationCap,
    filterType: "graduate",
  },
  {
    title: "我需要签证担保",
    description:
      "我是一名技术专业人才或者我拥有工作经验，正在寻找能为我担保482或186签证的澳洲雇主。",
    linkText: "雇主担保 →",
    href: "#programs",
    icon: Briefcase,
    filterType: "employer",
  },
  {
    title: "我想获得永久居留权",
    description: "我想通过打分制技术移民系统独立申请PR。",
    linkText: "189 / 190 / 491 →",
    href: "#programs",
    icon: Compass,
    filterType: "independent",
  },
  {
    title: "我的签证即将到期",
    description: "我时间紧迫，需要关于过桥签证、签证延期或转换签证的紧急指导。",
    linkText: "紧急签证方案 →",
    href: "/zh/emergency.html",
    icon: Clock3,
  },
];

export const UserScenarioSection = () => {
  // 模拟逻辑保持不变
  const handleCardClick = (filterType?: string) => {
    if (filterType) {
      console.log(`Filtering for: ${filterType}`);
    }
  };

  return (
    // 使用统一的浅米色背景：bg-[#f5f1ea]
    <section className="py-20 px-[5%] bg-[#f5f1ea] border-b border-[#e5e1d7]">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* 顶部副标题 */}
        <p className="flex items-center justify-center gap-2 text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[#a28e7e] mb-12 font-serif">
          <span>👉</span>
          <span>您现在最需要什么帮助？</span>
        </p>

        {/* 网格容器：适配图片 3+1 布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {scenarios.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => handleCardClick(item.filterType)}
              // 卡片样式调整：背景、圆角、阴影、对齐
              className="group flex flex-col items-center justify-start p-10 pt-12 pb-14 bg-[#fbf9f4] border border-[#e8dfd4] rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:border-[#dbcac1] text-center"
            >
              {/* 图标容器：深米色圆形背景 */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#ebdccf] mb-8 transition-transform duration-300 group-hover:scale-110">
                {/* 图标本身：深咖啡色 */}
                <item.icon className="h-8 w-8 text-[#7c5a43]" strokeWidth={2} />
              </div>

              {/* 卡片标题 */}
              <h4 className="text-2xl font-bold mb-4 text-[#7c5a43] leading-tight font-serif">
                {item.title}
              </h4>

              {/* 卡片描述：文字颜色调淡 */}
              <p className="text-base text-[#928276] leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* 卡片链接：咖啡色，粗体 */}
              <span className="text-base font-bold text-[#b4907a] group-hover:text-[#a17c66] transition-colors">
                {item.linkText}
              </span>
            </Link>
          ))}
        </div>

        {/* 底部引导文案 */}
        <p className="flex items-center justify-center gap-x-2 mt-7 text-lg text-[#928276]">
          <span className="text-[#a28e7e]">不确定哪个适合您？</span>{" "}
          <Link
            href="#programs"
            className="text-[#b4907a] font-bold hover:text-[#a17c66]"
          >
            详细了解所有移民路径
          </Link>
          {" 或 "}
          <Link
            href="/booking"
            className="text-[#b4907a] font-bold hover:text-[#a17c66]"
          >
            预约免费初步评估
          </Link>
        </p>
      </div>
    </section>
  );
};

export default UserScenarioSection;

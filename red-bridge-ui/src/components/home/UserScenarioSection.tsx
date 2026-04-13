"use client";
import Link from "next/link";
import {
  Briefcase,
  Compass,
  GraduationCap,
  Clock3,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

// 定义卡片的数据结构（保持不变）
interface Scenario {
  title: string;
  description: string;
  linkText: string;
  href: string;
  icon: LucideIcon;
  filterType?: string;
}

type ScenarioMessage = Omit<Scenario, "icon">;

const scenarioIcons: Record<string, LucideIcon> = {
  graduate: GraduationCap,
  employer: Briefcase,
  independent: Compass,
  urgent: Clock3,
};

export const UserScenarioSection = () => {
  const t = useTranslations("userScenario");
  const scenarios = t.raw("scenarios") as ScenarioMessage[];

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
          <span>{t("eyebrow")}</span>
        </p>

        {/* 网格容器：适配图片 3+1 布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {scenarios.map((item, index) => {
            const Icon = scenarioIcons[item.filterType ?? "urgent"] ?? Clock3;

            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => handleCardClick(item.filterType)}
                className="group flex flex-col items-center justify-start p-10 pt-12 pb-14 bg-[#fbf9f4] border border-[#e8dfd4] rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:border-[#dbcac1] text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#ebdccf] mb-8 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-[#7c5a43]" strokeWidth={2} />
                </div>

                <h4 className="text-2xl font-bold mb-4 text-[#7c5a43] leading-tight font-serif">
                  {item.title}
                </h4>

                <p className="text-base text-[#928276] leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                <span className="text-base font-bold text-[#b4907a] group-hover:text-[#a17c66] transition-colors">
                  {item.linkText}
                </span>
              </Link>
            );
          })}
        </div>

        {/* 底部引导文案 */}
        <p className="flex items-center justify-center gap-x-2 mt-7 text-lg text-[#928276]">
          <span className="text-[#a28e7e]">{t("footer.prefix")}</span>{" "}
          <Link
            href="#programs"
            className="text-[#b4907a] font-bold hover:text-[#a17c66]"
          >
            {t("footer.learnMore")}
          </Link>
          {t("footer.separator")}
          <Link
            href="/booking"
            className="text-[#b4907a] font-bold hover:text-[#a17c66]"
          >
            {t("footer.booking")}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default UserScenarioSection;

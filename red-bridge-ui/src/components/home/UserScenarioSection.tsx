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
    <section className="py-20 px-[5%] bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* 顶部副标题 */}
        <p className="flex items-center justify-center gap-2 text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[#A30000] mb-12 font-serif">
          <span>👉</span>
          <span>{t("eyebrow")}</span>
        </p>

        {/* 网格容器：适配图片 3+1 布局 */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {scenarios.map((item, index) => {
            const Icon = scenarioIcons[item.filterType ?? "urgent"] ?? Clock3;

            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => handleCardClick(item.filterType)}
                className="group flex flex-col items-center justify-start rounded-2xl border border-gray-200 bg-white px-8 pt-10 pb-12 text-center shadow-sm transition-all duration-300 hover:border-[#A30000]/30 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="mb-7 flex h-18 w-18 items-center justify-center rounded-full bg-[#A30000]/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-[#A30000]" strokeWidth={2} />
                </div>

                <h4 className="mb-4 font-serif text-[2rem] font-bold leading-tight text-gray-900 xl:text-[1.85rem]">
                  {item.title}
                </h4>

                <p className="mb-6 flex-grow text-[0.95rem] leading-relaxed text-gray-600 xl:text-[0.92rem]">
                  {item.description}
                </p>

                <span className="text-base font-bold text-[#A30000] transition-colors group-hover:text-[#8a0000]">
                  {item.linkText}
                </span>
              </Link>
            );
          })}
        </div>

        {/* 底部引导文案 */}
        <p className="flex items-center justify-center gap-x-2 mt-7 text-lg text-gray-600">
          <span className="text-gray-500">{t("footer.prefix")}</span>{" "}
          <Link
            href="#programs"
            className="text-[#A30000] font-bold hover:text-[#8a0000] transition-colors"
          >
            {t("footer.learnMore")}
          </Link>
          {t("footer.separator")}
          <Link
            href="/booking"
            className="text-[#A30000] font-bold hover:text-[#8a0000] transition-colors"
          >
            {t("footer.booking")}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default UserScenarioSection;

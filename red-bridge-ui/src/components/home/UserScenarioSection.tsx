"use client";
import Link from "next/link";
import {
  Briefcase,
  Compass,
  GraduationCap,
  Clock3,
  MoveRight,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

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
          <MoveRight size={14} aria-hidden="true" />
          <span>{t("eyebrow")}</span>
        </p>

        {/* 网格容器：适配图片 3+1 布局 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {scenarios.map((item, index) => {
            const Icon = scenarioIcons[item.filterType ?? "urgent"] ?? Clock3;

            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => handleCardClick(item.filterType)}
                className="group flex flex-col items-center justify-start p-10 pt-12 pb-14 bg-white border border-gray-200 shadow-sm rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:border-[#A30000]/30 text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#A30000]/10 mb-8 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-[#A30000]" strokeWidth={2} />
                </div>

                <h4 className="text-2xl font-bold mb-4 text-gray-900 leading-tight font-serif">
                  {item.title}
                </h4>

                <p className="text-base text-gray-600 leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                <span className="text-base font-bold text-[#A30000] group-hover:text-[#8a0000] transition-colors">
                  {item.linkText}
                </span>
              </Link>
            );
          })}
        </div>

        {/* 底部引导文案 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-none border-brandred text-brandred hover:bg-brandred hover:text-white px-8 text-[13px] font-bold uppercase tracking-widest transition-colors"
          >
            <Link href="#programs">{t("footer.learnMore")}</Link>
          </Button>
          <Button
            asChild
            className="h-11 rounded-none bg-brandred hover:bg-red-800 text-white px-8 text-[13px] font-bold uppercase tracking-widest transition-colors shadow-md"
          >
            <Link href="/booking">{t("footer.booking")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserScenarioSection;

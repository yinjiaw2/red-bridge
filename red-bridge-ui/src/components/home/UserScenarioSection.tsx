"use client";
import Link from "next/link";
import {
  Briefcase,
  Compass,
  GraduationCap,
  Clock3,
  MoveRight,
  ArrowRight,
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

        {/* 网格容器 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scenarios.map((item, index) => {
            const Icon = scenarioIcons[item.filterType ?? "urgent"] ?? Clock3;

            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => handleCardClick(item.filterType)}
                className="group flex flex-col items-center justify-start p-8 pt-10 pb-10 bg-white border border-gray-200 shadow-sm rounded-none transition-all duration-300 hover:shadow-lg hover:border-brandred/40 hover:-translate-y-1 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-none bg-brandred/10 mb-8 transition-all duration-300 group-hover:scale-110 group-hover:bg-brandred/20">
                  <Icon className="h-8 w-8 text-brandred" strokeWidth={2} />
                </div>

                <h4 className="text-2xl font-bold mb-4 text-gray-900 leading-tight font-serif">
                  {item.title}
                </h4>

                <p className="text-base text-gray-600 leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-brandred border-b border-brandred/40 pb-px group-hover:border-brandred transition-colors">
                  {item.linkText}
                  <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* 底部引导文案 */}
        <div className="mt-10 border border-gray-200 bg-white shadow-sm border-l-4 border-l-brandred flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 text-left">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-base mb-1">
              {t("footer.cardTitle")}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("footer.cardDescription")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-full border-brandred text-brandred hover:bg-brandred hover:text-white px-6 text-[13px] font-semibold transition-colors gap-2"
            >
              <Link href={t("footer.learnMoreHref")}>
                {t("footer.learnMore")}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-10 rounded-full bg-brandred hover:bg-red-800 text-white px-6 text-[13px] font-semibold transition-colors shadow-sm gap-2"
            >
              <Link href={t("footer.bookingHref")}>
                {t("footer.booking")}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserScenarioSection;

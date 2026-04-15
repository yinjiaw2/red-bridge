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

const scenarioHrefMap: Record<string, string> = {
  graduate: "/services/career-launch",
  employer: "/services/employer-pathway",
  independent: "/services",
  urgent: "/contact",
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
        <p className="mb-12 flex items-center justify-center gap-2 font-serif text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#B5121B]">
          <MoveRight size={14} aria-hidden="true" />
          <span>{t("eyebrow")}</span>
        </p>

        {/* 网格容器 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scenarios.map((item, index) => {
            const Icon = scenarioIcons[item.filterType ?? "urgent"] ?? Clock3;
            const href = scenarioHrefMap[item.filterType ?? "urgent"] ?? item.href;

            return (
              <Link
                key={index}
                href={href}
                onClick={() => handleCardClick(item.filterType)}
                className="group flex flex-col items-center justify-start rounded-none border border-gray-200 bg-white p-8 pb-10 pt-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B5121B]/40 hover:shadow-lg"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-none bg-[#B5121B]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B5121B]/20">
                  <Icon className="h-8 w-8 text-[#B5121B]" strokeWidth={2} />
                </div>

                <h4 className="mb-4 font-serif text-[2rem] font-bold leading-tight text-gray-900 xl:text-[1.85rem]">
                  {item.title}
                </h4>

                <p className="text-base text-gray-600 leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <span className="inline-flex items-center gap-1.5 border-b border-[#B5121B]/40 pb-px text-[11px] font-bold uppercase tracking-widest text-[#B5121B] transition-colors group-hover:border-[#B5121B]">
                  {item.linkText}
                  <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* 底部引导文案 */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border border-gray-200 border-l-4 border-l-[#B5121B] bg-white px-8 py-6 text-left shadow-sm sm:flex-row">
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
              className="h-10 gap-2 rounded-full border-[#B5121B] px-6 text-[13px] font-semibold text-[#B5121B] transition-colors hover:bg-[#B5121B] hover:text-white"
            >
              <Link href={t("footer.learnMoreHref")}>
                {t("footer.learnMore")}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-10 gap-2 rounded-full bg-[#B5121B] px-6 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-[#981018]"
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

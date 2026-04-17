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

// Card data shape.
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

  // Placeholder interaction hook.
  const handleCardClick = (filterType?: string) => {
    if (filterType) {
      console.log(`Filtering for: ${filterType}`);
    }
  };

  return (
    <section className="bg-white border-b border-gray-200 px-5 py-14 sm:px-[5%] md:py-20">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Eyebrow */}
        <p className="mb-8 flex items-center justify-center gap-2 font-serif text-lg font-bold uppercase tracking-[0.16em] text-[#B5121B] sm:mb-12 sm:text-lg sm:tracking-[0.2em]">
          <MoveRight size={14} aria-hidden="true" />
          <span className="min-w-0">{t("eyebrow")}</span>
        </p>

        {/* Card grid */}
        <div className="grid grid-cols-1 gap-4 mb-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 md:mb-16">
          {scenarios.map((item, index) => {
            const Icon = scenarioIcons[item.filterType ?? "urgent"] ?? Clock3;
            const href = scenarioHrefMap[item.filterType ?? "urgent"] ?? item.href;

            return (
              <Link
                key={index}
                href={href}
                onClick={() => handleCardClick(item.filterType)}
                className="group flex flex-col items-center justify-start rounded-none border border-gray-200 bg-white px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B5121B]/40 hover:shadow-lg sm:p-8 sm:pb-10 sm:pt-10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#B5121B]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B5121B]/20 sm:mb-8 sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 text-[#B5121B] sm:h-8 sm:w-8" strokeWidth={2} />
                </div>

                <h4 className="mb-3 font-serif text-[1.55rem] font-bold leading-tight text-gray-900 sm:mb-4 sm:text-[2rem] xl:text-[1.85rem]">
                  {item.title}
                </h4>

                <p className="mb-6 flex-grow text-[15px] leading-relaxed text-gray-600 sm:mb-8 sm:text-base">
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

        {/* Bottom prompt */}
        <div className="mt-8 flex flex-col items-stretch justify-between gap-5 border border-gray-200 border-l-4 border-l-[#B5121B] bg-white px-5 py-5 text-left shadow-sm sm:mt-10 sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-6">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-base mb-1">
              {t("footer.cardTitle")}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("footer.cardDescription")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Button
              asChild
              variant="outline"
              className="h-10 w-full gap-2 rounded-full border-[#B5121B] px-5 text-[13px] font-semibold text-[#B5121B] transition-colors hover:bg-[#B5121B] hover:text-white sm:w-auto sm:px-6"
            >
              <Link href={t("footer.learnMoreHref")}>
                {t("footer.learnMore")}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-10 w-full gap-2 rounded-full bg-[#B5121B] px-5 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-[#981018] sm:w-auto sm:px-6"
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

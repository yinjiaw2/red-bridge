"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  CheckCircle2, // 使用更符合图片的 CheckCircle 样式
  Calculator,
  Code2,
  BarChart3,
  Clock,
  Briefcase,
  FileText,
  Users,
} from "lucide-react";

type PathwayKey = "acc" | "it" | "mkt";
type FeatureKey = "outcome" | "position" | "project" | "duration" | "reference";

const CareerTabsSection = () => {
  const t = useTranslations("serviceCareerLaunch");
  const [activeTab, setActiveTab] = useState<PathwayKey>("acc");

  const pathways: Record<
    PathwayKey,
    { id: PathwayKey; featureKeys: FeatureKey[] }
  > = {
    acc: {
      id: "acc",
      featureKeys: ["outcome", "position", "project", "duration", "reference"],
    },
    it: {
      id: "it",
      featureKeys: ["outcome", "position", "project", "duration", "reference"],
    },
    mkt: {
      id: "mkt",
      featureKeys: ["outcome", "position", "project", "duration", "reference"],
    },
  };

  return (
    <section className="py-16 px-4 w-full mx-auto font-sans bg-[#FDF8F1]">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-[1px] w-8 bg-[#A65E32]"></div>
          <div className="text-sm font-medium tracking-wider text-[#A65E32] uppercase">
            {t("eyebrow")}
          </div>
          <div className="h-[1px] w-8 bg-[#A65E32]"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6">
          {t("headingMain")}
          <span className="text-[#A65E32] italic ml-3 font-serif">
            {t("headingHighlight")}
          </span>
        </h2>
        <p className="text-stone-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* Tabs Header - 改为图片中的圆角药丸样式 */}
      <div className="flex justify-center gap-4 mb-12">
        {Object.values(pathways).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 border
              ${
                activeTab === tab.id
                  ? "bg-[#A65E32] text-white border-[#A65E32] shadow-lg shadow-orange-900/10"
                  : "bg-white text-stone-400 border-stone-200 hover:border-stone-300 hover:text-stone-600"
              }`}
          >
            {t(`pathways.${tab.id}.label`)}
          </button>
        ))}
      </div>

      {/* Tab Content - 极简圆角卡片 */}
      <div className="bg-white rounded-[32px] shadow-sm border border-stone-100 overflow-hidden transition-all duration-500">
        <div className="flex flex-col md:flex-row">
          {/* Content Left */}
          <div className="flex-1 p-10 md:p-16">
            <h3 className="text-3xl font-bold text-stone-800 mb-6">
              {t(`pathways.${activeTab}.title`)}
            </h3>
            <p className="text-stone-500 leading-relaxed mb-10 text-[17px]">
              {t(`pathways.${activeTab}.description`)}
            </p>

            {/* Tools Tags - 灰色胶囊样式 */}
            <div className="flex flex-wrap gap-3 mb-12">
              {t.raw(`pathways.${activeTab}.tools`).map((tool: string) => (
                <span
                  key={tool}
                  className="px-5 py-2 bg-stone-100 text-stone-500 text-sm font-medium rounded-xl"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Assessing Body - 淡色背景块 */}
            <div className="p-6 bg-[#FDF8F1] rounded-2xl border border-orange-50/50">
              <p className="text-sm leading-relaxed">
                <span className="text-[#A65E32] font-bold mr-2">
                  {t("assessingBodyLabel")}:
                </span>
                <span className="text-stone-600">
                  {t(`pathways.${activeTab}.assessingBody`)}
                </span>
              </p>
            </div>
          </div>

          {/* 分隔线（仅桌面端显示） */}
          <div className="hidden md:block w-[1px] bg-stone-100 my-16"></div>

          {/* Content Right (Features) - 列表样式优化 */}
          <div className="w-full md:w-[45%] p-10 md:p-16 flex flex-col justify-center">
            <div className="space-y-6">
              {pathways[activeTab].featureKeys.map((featureKey) => (
                <div key={featureKey} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex flex-row items-baseline gap-2">
                    <span className="text-stone-800 font-bold whitespace-nowrap">
                      {t(`features.${featureKey}.label`)}:
                    </span>
                    <span className="text-stone-500 font-medium">
                      {t(`pathways.${activeTab}.features.${featureKey}`)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTabsSection;

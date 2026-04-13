import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  CheckCircle,
  Calculator,
  Code2,
  BarChart3,
  Clock,
  Briefcase,
  FileText,
  Users,
} from "lucide-react";

type PathwayKey = "acc" | "it" | "mkt";

type FeatureKey =
  | "outcome"
  | "position"
  | "project"
  | "duration"
  | "reference";

const CareerTabsSection = () => {
  const t = useTranslations("serviceCareerLaunch");
  const [activeTab, setActiveTab] = useState<PathwayKey>("acc");

  const pathways: Record<
    PathwayKey,
    {
      id: PathwayKey;
      icon: React.ReactNode;
      featureKeys: FeatureKey[];
    }
  > = {
    acc: {
      id: "acc",
      icon: <Calculator className="w-4 h-4" />,
      featureKeys: ["outcome", "position", "project", "duration", "reference"],
    },
    it: {
      id: "it",
      icon: <Code2 className="w-4 h-4" />,
      featureKeys: ["outcome", "position", "project", "duration", "reference"],
    },
    mkt: {
      id: "mkt",
      icon: <BarChart3 className="w-4 h-4" />,
      featureKeys: ["outcome", "position", "project", "duration", "reference"],
    },
  };

  const featureIcons: Record<FeatureKey, React.ReactNode> = {
    outcome: <FileText className="w-5 h-5 text-green-500" />,
    position: <Briefcase className="w-5 h-5 text-green-500" />,
    project: <CheckCircle className="w-5 h-5 text-green-500" />,
    duration: <Clock className="w-5 h-5 text-green-500" />,
    reference: <Users className="w-5 h-5 text-green-500" />,
  };

  const activeContent = pathways[activeTab];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto font-sans">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">
          {t("eyebrow")}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          {t("headingMain")}
          <em className="text-blue-600 not-italic ml-2 text-border-bottom">
            {t("headingHighlight")}
          </em>
        </h2>
        <p className="text-slate-500 text-lg">
          {t("description")}
        </p>
      </div>

      {/* Tabs Header */}
      <div className="flex justify-center gap-2 mb-8 border-b border-slate-200">
        {Object.values(pathways).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px
              ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600 bg-blue-50/50"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }`}
          >
            {tab.icon}
            {t(`pathways.${tab.id}.label`)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Content Left */}
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {t(`pathways.${activeTab}.title`)}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              {t(`pathways.${activeTab}.description`)}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {t.raw(`pathways.${activeTab}.tools`).map((tool: string) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-50 text-sm">
              <strong className="text-slate-800">{t("assessingBodyLabel")}</strong>
              <span className="text-slate-600 ml-2">
                {t(`pathways.${activeTab}.assessingBody`)}
              </span>
            </div>
          </div>

          {/* Content Right (Features) */}
          <div className="w-full md:w-2/5 bg-slate-50/50 p-8 md:p-12">
            <div className="space-y-6">
              {activeContent.featureKeys.map((featureKey) => (
                <div key={featureKey} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-white rounded-full shadow-sm">
                    {featureIcons[featureKey]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">
                      {t(`features.${featureKey}.label`)}
                    </span>
                    <span className="text-slate-700 font-medium leading-snug">
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

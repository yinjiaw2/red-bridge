"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

type PathwayKey = "acc" | "it" | "mkt";
type FeatureKey = "outcome" | "position" | "project" | "duration" | "reference";

const CareerTabsSection = () => {
  const t = useTranslations("careerLaunch.majors");
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

  const rawTools = t.raw(`pathways.${activeTab}.tools`);
  const tools = Array.isArray(rawTools) ? (rawTools as string[]) : [];

  return (
    <section
      id="overview"
      className="mx-auto w-full bg-gray-50 border-b border-gray-200 px-4 py-24 font-sans"
    >
      <div className="mb-12 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <div className="h-[1px] w-8 bg-brandred" />
          <div className="text-sm font-bold uppercase tracking-widest text-brandred">
            {t("eyebrow")}
          </div>
          <div className="h-[1px] w-8 bg-brandred" />
        </div>
        <h2 className="mb-6 text-4xl font-bold text-naviblue md:text-5xl font-serif">
          {t("headingMain")}
          <span className="ml-3 font-serif text-brandred">
            {t("headingHighlight")}
          </span>
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
          {t("description")}
        </p>
      </div>

      <div className="mb-12 flex justify-center gap-4">
        {Object.values(pathways).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-none border px-10 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === tab.id
                ? "border-brandred bg-brandred text-white shadow-md"
                : "border-gray-300 bg-white text-gray-500 hover:border-brandred hover:text-brandred"
            }`}
          >
            {t(`pathways.${tab.id}.label`)}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-[980px] overflow-hidden rounded-none border border-gray-200 bg-white shadow-md transition-all duration-500">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-10 md:p-16">
            <h3 className="mb-6 text-3xl font-bold text-naviblue font-serif">
              {t(`pathways.${activeTab}.title`)}
            </h3>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              {t(`pathways.${activeTab}.description`)}
            </p>

            <div className="mb-12 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-none border border-gray-200 bg-gray-100 px-5 py-2 text-sm font-bold text-naviblue tracking-wide"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="rounded-none border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm leading-relaxed">
                <span className="mr-2 font-bold text-brandred uppercase tracking-wider">
                  {t("assessingBodyLabel")}:
                </span>
                <span className="text-gray-700 font-medium">
                  {t(`pathways.${activeTab}.assessingBody`)}
                </span>
              </p>
            </div>
          </div>

          <div className="my-16 hidden w-px bg-gray-200 md:block" />

          <div className="flex w-full flex-col justify-center p-10 md:w-[45%] md:p-16">
            <div className="space-y-6">
              {pathways[activeTab].featureKeys.map((featureKey) => (
                <div key={featureKey} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex flex-row items-baseline gap-2">
                    <span className="whitespace-nowrap font-bold text-naviblue">
                      {t(`features.${featureKey}.label`)}:
                    </span>
                    <span className="font-medium text-gray-600">
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

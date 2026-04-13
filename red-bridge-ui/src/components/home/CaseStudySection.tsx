import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  CalendarCheck,
  Briefcase,
  FileCheck,
  CircleDollarSign,
  ArrowRight,
} from "lucide-react";

export default function CaseStudySection() {
  const t = useTranslations("homeCaseStudy");

  // 根据图片，将图标颜色和类型微调
  const icons = [CalendarCheck, Briefcase, FileCheck, CircleDollarSign];

  return (
    <section className="py-16 md:py-24 bg-[#FDF8F1]" id="real-story">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[1px] w-8 bg-[#A65E32]"></div>
            <div className="text-sm font-medium tracking-wider text-[#A65E32]">
              {t("eyebrow")}
            </div>
            <div className="h-[1px] w-8 bg-[#A65E32]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">
            {t("headingMain")}
            <span className="text-[#A65E32] italic ml-3 font-serif">
              {t("headingHighlight")}
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Case Study Card */}
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl shadow-stone-200/50 overflow-hidden border border-stone-100">
          {/* Left Column - 棕色背景 */}
          <div className="lg:w-[38%] bg-[#A65E32] text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* 装饰背景（模拟图片的质感） */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>

            <div className="relative z-10 mb-12">
              <div className="text-orange-200/80 text-xs font-semibold tracking-widest uppercase mb-4">
                {t("clientProfile")}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-[1.2] tracking-tight">
                {t("clientNameLine1")}
                <br className="hidden md:block" />
                {t("clientNameLine2")}
              </h3>
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              {icons.map((Icon, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10 hover:bg-white/20 transition-all cursor-default"
                >
                  <Icon className="text-orange-200 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium opacity-90">
                    {t(`pills.${index}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 内容区 */}
          <div className="lg:w-[62%] p-10 md:p-16 flex flex-col justify-center bg-white">
            <div className="text-[#A65E32] font-bold tracking-widest text-xs mb-6 uppercase">
              {t("quoteEyebrow")}
            </div>

            <div className="relative mb-10">
              {/* 装饰引号 */}
              <span className="absolute -left-6 -top-4 text-6xl text-stone-100 font-serif">
                “
              </span>
              <blockquote className="text-xl md:text-2xl font-bold text-stone-800 leading-snug border-l-4 border-[#A65E32] pl-8 py-2 italic relative z-10">
                {t("quote")}
              </blockquote>
            </div>

            <div className="text-stone-500 mb-10 leading-relaxed space-y-6 text-base md:text-[17px]">
              <p className="first-letter:text-2xl first-letter:font-bold first-letter:text-stone-800 first-letter:mr-1">
                {t("paragraph1")}
              </p>
              <p>
                {t.rich("paragraph2", {
                  highlight: (chunks) => (
                    <strong className="text-stone-900 font-bold border-b-2 border-orange-100 pb-0.5">
                      {chunks}
                    </strong>
                  ),
                })}
              </p>
            </div>

            <div>
              <Link
                href="/success-cases"
                className="inline-flex items-center gap-3 text-[#A65E32] font-bold hover:gap-5 transition-all group border-b-2 border-transparent hover:border-orange-200 pb-1"
              >
                {t("readMore")}
                <ArrowRight className="w-5 h-5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

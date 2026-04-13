import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

type Country = {
  label: string;
  title: string;
};

type Stat = {
  value: string;
  label: string;
};

export default function HeroSection() {
  const t = useTranslations("hero");
  const countries = t.raw("countries") as Country[];
  const trustPoints = t.raw("trustPoints") as string[];
  const stats = t.raw("stats") as Stat[];

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#f5f1ea] py-24 lg:py-32"
    >
      {/* 1. 还原背景方格纹理 (Grid Pattern) */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#7c5a43 1px, transparent 1px), linear-gradient(90deg, #7c5a43 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. 中心渐变光晕 */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* 3. 顶部 Badge：改为深米色，文字深咖啡色 */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ebdccf] px-5 py-1.5 text-xs font-bold text-[#7c5a43] tracking-wider uppercase shadow-sm mb-8">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <span>{t("badge")}</span>
          </div>

          {/* 4. 标题还原：深咖啡色为主，去掉亮橙色渐变，使用衬线体 */}
          <h1 className="text-5xl font-bold tracking-tight text-[#2d241e] sm:text-7xl font-serif leading-[1.15]">
            {t("titlePrefix")}
            <span className="text-[#7c5a43]">{t("titleHighlight")}</span>
            {t("titleMiddle")}
            <br />
            {t("titleSuffix")}
          </h1>

          {/* 5. 国家/人才描述：字体颜色调至中等咖啡色 */}
          <p className="mx-auto mt-8 max-w-3xl text-sm font-bold tracking-wide text-[#a28e7e] uppercase">
            {t("introLead")} {t("introCountriesPrefix")}
            {countries.map((country, index) => (
              <span key={country.title} className="mx-1">
                {country.label}
              </span>
            ))}
            {t("introCountriesSuffix")}
          </p>

          {/* 6. 主描述文案：字间距和行间距调优 */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#928276] font-medium">
            {t("description")}
          </p>

          {/* 7. Trust Points：改为图片中的 Check 样式 */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[#7c5a43] font-semibold text-sm"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7c5a43] text-white">
                  <CheckCircle2 size={12} strokeWidth={4} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* 8. 按钮还原：主按钮使用深棕色渐变，次按钮背景半透明 */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#b45309] px-10 text-base font-bold text-white shadow-xl shadow-orange-900/20 transition hover:bg-[#92400e] hover:-translate-y-0.5"
            >
              {t("primaryCta")}
            </Link>
            <Link
              href="/success-cases"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[#b4907a]/30 bg-[#fbf9f4]/50 px-10 text-base font-bold text-[#7c5a43] transition hover:bg-[#fbf9f4]"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

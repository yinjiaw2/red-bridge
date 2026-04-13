"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Step {
  num: string;
  title: string;
  description: string;
}

export const ProcessSection = () => {
  const t = useTranslations("processSection");
  const steps = t.raw("steps") as Step[];

  return (
    <section id="how-it-works" className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="text-[0.75rem] font-bold tracking-[0.2em] text-[#a28e7e] uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#a28e7e]/40"></span>
            {t("eyebrow")}
            <span className="w-8 h-px bg-[#a28e7e]/40"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d241e] mb-6">
            {t("headingMain")}
            <span className="text-[#7c5a43] font-serif ml-2">{t("headingHighlight")}</span>
          </h2>
          <p className="text-[#928276] text-lg max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-px bg-[#7c5a43]/20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative z-10 w-20 h-20 rounded-full border border-[#7c5a43]/40 bg-brandbackground flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:border-[#7c5a43]">
                  <span className="text-xl font-serif font-bold text-[#7c5a43]">
                    {step.num}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#2d241e] mb-4">{step.title}</h4>
                <p className="text-[#928276] text-[0.95rem] leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center text-[#7c5a43] font-bold border-b border-[#7c5a43]/30 pb-1 hover:text-[#b45309] hover:border-[#b45309] transition-all"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  GraduationCap,
  Handshake,
  Compass,
  Star,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

type Category = "all" | "graduate" | "employer" | "independent";

interface FilterItem {
  id: string;
  label: string;
  iconKey: string;
}

interface ProgramItem {
  id: string;
  category: Category;
  isFeatured: boolean;
  price: string;
  title: string;
  subtitle: string;
  features: string[];
  href: string;
}

const filterIconMap: Record<string, LucideIcon> = {
  layoutGrid: LayoutGrid,
  graduationCap: GraduationCap,
  handshake: Handshake,
  compass: Compass,
};

export const ProgramsSection = () => {
  const t = useTranslations("programs");
  const filters = t.raw("filters") as FilterItem[];
  const programItems = t.raw("items") as ProgramItem[];

  const [filter, setFilter] = useState<Category>("all");

  const filteredPrograms =
    filter === "all"
      ? programItems
      : programItems.filter((p) => p.category === filter);

  return (
    <section id="programs" className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[0.75rem] font-bold tracking-[0.2em] text-[#a28e7e] uppercase mb-4">
            {t("eyebrow")}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d241e] mb-6">
            {t("headingMain")}
            <span className="text-[#7c5a43] italic ml-2">{t("headingHighlight")}</span>
          </h2>
          <p className="text-[#928276] text-lg">{t("description")}</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((f) => {
            const Icon = filterIconMap[f.iconKey] ?? LayoutGrid;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as Category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                  filter === f.id
                    ? "bg-[#7c5a43] text-white border-[#7c5a43] shadow-lg shadow-[#7c5a43]/20"
                    : "bg-white text-[#928276] border-[#e8dfd4] hover:border-[#7c5a43] hover:text-[#7c5a43]"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Program grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className={`relative flex flex-col p-8 rounded-4xl border transition-all duration-500 ${
                program.isFeatured
                  ? "lg:col-span-2 bg-[#2d241e] border-[#2d241e] text-white shadow-2xl md:flex-row gap-10"
                  : "bg-[#fbf9f4] border-[#e8dfd4] text-[#2d241e]"
              }`}
            >
              {program.isFeatured && (
                <div className="absolute -top-3 left-8 bg-[#b45309] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true" />
                  {t("mostPopular")}
                </div>
              )}

              {/* Card left / top */}
              <div className={program.isFeatured ? "flex-1" : ""}>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest mb-4 block ${program.isFeatured ? "text-primary" : "text-[#a28e7e]"}`}
                >
                  {program.price}
                </span>
                <h3 className="text-2xl font-serif font-bold mb-4">{program.title}</h3>
                <p className={`text-sm leading-relaxed mb-8 ${program.isFeatured ? "text-stone-400" : "text-[#928276]"}`}>
                  {program.subtitle}
                </p>
                {!program.isFeatured && (
                  <Link
                    href={program.href}
                    className="mt-auto inline-flex items-center gap-2 text-[#b45309] font-bold hover:gap-3 transition-all text-sm"
                  >
                    {t("viewDetails")}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                )}
              </div>

              {/* Card right (featured) / feature list */}
              <div
                className={`flex flex-col justify-between ${program.isFeatured ? "flex-1 border-l border-white/10 pl-10" : "mt-6 pt-6 border-t border-[#e8dfd4]"}`}
              >
                <ul className="space-y-3 mb-8">
                  {program.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2
                        className={`h-4 w-4 shrink-0 ${program.isFeatured ? "text-primary" : "text-[#7c5a43]"}`}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span className={program.isFeatured ? "text-stone-300" : "text-[#928276]"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                {program.isFeatured && (
                  <Link
                    href={program.href}
                    className="w-full bg-primary hover:bg-[#a37f68] text-white text-center py-4 rounded-xl font-bold transition-colors"
                  >
                    {t("viewDetails")}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <p className="text-center mt-12 text-[#928276] text-sm">
          {t("footerText")}{" "}
          <Link
            href="/booking"
            className="text-[#b45309] font-bold underline underline-offset-4 decoration-2"
          >
            {t("footerCta")}
          </Link>{" "}
          {t("footerSuffix")}
        </p>
      </div>
    </section>
  );
};

export default ProgramsSection;

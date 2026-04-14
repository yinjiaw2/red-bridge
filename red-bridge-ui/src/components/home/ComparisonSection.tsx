import React from "react";
import Link from "next/link";
import { X, Check, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { comparisonMeta, ICON_MAP } from "@/lib/comparisonCategory";

export const ComparisonSection = () => {
  const t = useTranslations("comparison");

  return (
    <section id="why-us" className="bg-white py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[0.75rem] font-bold tracking-[0.2em] text-[#a28e7e] uppercase block mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d241e] mb-6">
            {t("headingMain")}{" "}
            <em className="text-[#A30000] not-italic">
              {t("headingHighlight")}
            </em>
          </h2>
          <p className="text-[#928276] text-lg max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-3xl border bg-[#FFFBFA] shadow-sm">
          <Table>
            <TableHeader className="[&_tr]:border-b-0">
              <TableRow className="hover:bg-transparent border-b border-[#e8dfd4] align-top">
                <TableHead className="py-6 px-6 text-[#6b7280] font-bold text-xs uppercase tracking-widest w-[22%] whitespace-normal h-auto border-b border-[#e8dfd4]">
                  {t("col1")}
                </TableHead>
                <TableHead className="hidden md:table-cell py-6 px-6 text-[#a28e7e] font-bold text-xs uppercase tracking-widest w-[33%] border-l bg-[#F2E1D6] whitespace-normal h-auto">
                  <div className="flex items-center gap-2">
                    <X size={14} className="opacity-50" aria-hidden="true" />
                    {t("col2")}
                  </div>
                </TableHead>
                <TableHead className="py-6 px-6 text-white font-bold text-xs uppercase tracking-widest w-[45%] border-l border-[#e8dfd4] whitespace-normal h-auto bg-[#A20000]">
                  <div className="flex items-center gap-2">
                    <Check size={14} aria-hidden="true" />
                    {t("col3")}
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonMeta.map((meta, index) => (
                <TableRow
                  key={index}
                  className="border-b border-[#e8dfd4] last:border-b-0 hover:bg-brandbackground/40 transition-colors align-top"
                >
                  {/* You Deserve Better */}
                  <TableCell className="py-6 px-6 text-[#374151] text-sm whitespace-normal bg-[#FFFBFA]">
                    <div className="flex gap-3 items-start">
                      <span className="mt-0.5 shrink-0 text-[#6b7280]">
                        {ICON_MAP[meta.iconKey]}
                      </span>
                      <div>
                        <p className="font-semibold text-[#1f2937] leading-snug mb-1">
                          {t(`rows.${index}.deserve.title`)}
                        </p>
                        <p className="text-xs text-[#6b7280] leading-relaxed">
                          {t(`rows.${index}.deserve.description`)}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* Other Agencies */}
                  <TableCell className="hidden md:table-cell py-6 px-6 text-[#928276] text-sm whitespace-normal border-l bg-[#FFF4ED]">
                    <div className="flex gap-3 items-start">
                      <X
                        size={14}
                        className="mt-0.5 shrink-0 text-[#a28e7e]/50"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-medium text-[#7c6a60] leading-snug mb-1">
                          {t(`rows.${index}.others.title`)}
                        </p>
                        <p className="text-xs text-[#a28e7e] leading-relaxed">
                          {t(`rows.${index}.others.description`)}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* RedBridge */}
                  <TableCell className="py-6 px-6 text-sm whitespace-normal border-l border-[#e8dfd4] bg-[#fdf6f0]">
                    <div className="flex gap-3 items-start">
                      <span className="mt-0.5 shrink-0 p-1 rounded-full bg-[#b45309]/10">
                        <Check
                          size={12}
                          className="text-[#b45309]"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <p className="font-bold text-[#2d241e] leading-snug mb-1">
                          {t(`rows.${index}.redBridge.title`)}
                        </p>
                        <p className="text-xs text-[#7c5a43] leading-relaxed">
                          {meta.richRedBridge
                            ? t.rich(`rows.${index}.redBridge.description`, {
                                link: (chunks) => (
                                  <a
                                    href="https://www.insightidea.com.au/en/success"
                                    target="_blank"
                                    rel="noopener"
                                    className="font-bold underline underline-offset-2"
                                  >
                                    {chunks}
                                  </a>
                                ),
                              })
                            : t(`rows.${index}.redBridge.description`)}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* CTA Card */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-[#FAF5F0] border border-[#e8dfd4] px-8 py-6">
          <div className="flex items-start gap-4">
            <div className="w-1 self-stretch rounded-full bg-[#A20000] shrink-0" />
            <div>
              <p className="text-lg font-bold text-[#1f2937]">
                {t("cta.heading")}
              </p>
              <p className="text-sm text-[#928276] mt-0.5">
                {t("cta.subheading")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-xl bg-highlightyellow px-6 py-3 text-sm font-bold text-[#1f2937] hover:bg-[#c4920f] transition-colors"
            >
              {t("cta.primaryBtn")}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="#process"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#A20000] px-6 py-3 text-sm font-bold text-[#A20000] hover:bg-[#A20000]/5 transition-colors"
            >
              {t("cta.secondaryBtn")}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

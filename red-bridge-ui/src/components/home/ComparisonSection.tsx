import React from "react";
import Link from "next/link";
import { X, Check, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { comparisonMeta, ICON_MAP } from "@/lib/comparisonCategory";

export const ComparisonSection = () => {
  const t = useTranslations("comparison");
  const locale = useLocale();

  return (
    <section
      id="why-us"
      className="bg-gray-50 py-24 px-[5%] border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="flex-1 max-w-16 h-px bg-brandred" />
            <span className="text-[0.75rem] font-bold tracking-widest text-brandred uppercase whitespace-nowrap">
              {t("eyebrow")}
            </span>
            <span className="flex-1 max-w-16 h-px bg-brandred" />
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-naviblue leading-tight font-serif mb-6${locale === "zh" ? " font-bold" : ""}`}
          >
            {t("headingMain")}
            <span
              className={`text-brandred ${locale === "zh" ? " font-extrabold" : ""}`}
            >
              {t("headingHighlight")}
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-none border border-gray-200 bg-white shadow-md">
          <Table>
            <TableHeader className="[&_tr]:border-b-0">
              <TableRow className="hover:bg-transparent border-b border-gray-200 align-top">
                <TableHead className="py-6 px-6 text-gray-500 font-bold text-xs uppercase tracking-widest w-[22%] whitespace-normal h-auto border-b border-gray-200 bg-gray-100">
                  {t("col1")}
                </TableHead>
                <TableHead className="hidden md:table-cell py-6 px-6 text-gray-600 font-bold text-xs uppercase tracking-widest w-[33%] border-l border-gray-300 bg-gray-200 whitespace-normal h-auto">
                  <div className="flex items-center gap-2">
                    <X size={16} className="text-gray-400" aria-hidden="true" />
                    {t("col2")}
                  </div>
                </TableHead>
                <TableHead className="py-6 px-6 text-white font-bold text-xs uppercase tracking-widest w-[45%] border-l border-brandred whitespace-normal h-auto bg-brandred">
                  <div className="flex items-center gap-2">
                    <Check size={16} aria-hidden="true" />
                    {t("col3")}
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonMeta.map((meta, index) => (
                <TableRow
                  key={index}
                  className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors align-top"
                >
                  {/* You Deserve Better */}
                  <TableCell className="py-6 px-6 text-gray-700 text-sm whitespace-normal bg-white">
                    <div className="flex gap-3 items-start">
                      <span className="mt-0.5 shrink-0 text-gray-400">
                        {ICON_MAP[meta.iconKey]}
                      </span>
                      <div>
                        <p className="font-bold text-naviblue leading-snug mb-1">
                          {t(`rows.${index}.deserve.title`)}
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {t(`rows.${index}.deserve.description`)}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* Other Agencies */}
                  <TableCell className="hidden md:table-cell py-6 px-6 text-gray-600 text-sm whitespace-normal border-l border-gray-200 bg-gray-50/50">
                    <div className="flex gap-3 items-start">
                      <X
                        size={16}
                        className="mt-0.5 shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-bold text-gray-700 leading-snug mb-1">
                          {t(`rows.${index}.others.title`)}
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {t(`rows.${index}.others.description`)}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* RedBridge */}
                  <TableCell className="py-6 px-6 text-sm whitespace-normal border-l border-red-100 bg-red-50/30">
                    <div className="flex gap-3 items-start">
                      <span className="mt-0.5 shrink-0 p-1 rounded-none bg-brandred/10">
                        <Check
                          size={14}
                          className="text-brandred"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <p className="font-bold text-brandred leading-snug mb-1">
                          {t(`rows.${index}.redBridge.title`)}
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {meta.richRedBridge
                            ? t.rich(`rows.${index}.redBridge.description`, {
                                link: (chunks) => (
                                  <a
                                    href="https://www.insightidea.com.au/en/success"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-brandred underline underline-offset-4 hover:text-red-800 transition-colors"
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
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-none bg-white border border-gray-200 shadow-sm p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brandred" />
          <div className="flex items-start gap-4">
            <div>
              <p className="text-xl font-bold text-naviblue">
                {t("cta.heading")}
              </p>
              <p className="text-base text-gray-600 mt-2">
                {t("cta.subheading")}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <Button
              asChild
              className="w-full sm:w-auto h-12 rounded-none bg-brandred px-8 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-800 transition-colors shadow-md"
            >
              <Link href="/contact">
                <span>{t("cta.primaryBtn")}</span>
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto h-12 rounded-none border border-brandred bg-transparent px-8 text-sm font-bold uppercase tracking-widest text-brandred hover:bg-brandred/5 transition-colors"
            >
              <Link href="/services#how-it-works">
                <span>{t("cta.secondaryBtn")}</span>
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

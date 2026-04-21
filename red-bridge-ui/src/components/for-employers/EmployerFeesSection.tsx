"use client";

import { useTranslations } from "next-intl";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FeeRow {
  title: string;
  note: string;
  amount: string;
}

export default function EmployerFeesSection() {
  const t = useTranslations("employerFees");
  const rows = t.raw("rows") as FeeRow[];

  return (
    <section className="bg-naviblue py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-highlight" />
          <span className="text-lg font-bold tracking-widest text-highlight uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-serif mb-5">
          {t("headingMain")}{" "}
          <span className="text-highlight">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-[17px] leading-relaxed max-w-2xl mb-12">
          {t("description")}
        </p>

        {/* Fee table */}
        <div className="bg-white shadow-lg mb-6 overflow-hidden">
          <Table className="w-full table-fixed">
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[70%] px-8 py-4 text-[12px] font-bold tracking-wider uppercase text-naviblue wrap-break-word">
                  {t("tableHeaderLabel")}
                </TableHead>
                <TableHead className="w-[30%] px-8 py-4 text-[12px] font-bold tracking-wider uppercase text-naviblue text-right wrap-break-word">
                  {t("tableHeaderAmount")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i} className="border-gray-100">
                  <TableCell className="px-8 py-5 align-top">
                    <p className="text-naviblue font-bold text-base leading-snug mb-1 wrap-break-word">
                      {row.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed wrap-break-word">
                      {row.note}
                    </p>
                  </TableCell>
                  <TableCell className="px-8 py-5 text-right align-top">
                    <span className="text-brandred font-bold text-lg wrap-break-word">
                      {row.amount}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

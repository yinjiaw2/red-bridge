"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Phase {
  number: string;
  teamBadge: string;
  title: string;
  bullets: string[];
}

export default function EmployerProcessSection() {
  const t = useTranslations("employerProcess");
  const phases = t.raw("phases") as Phase[];
  const footerLinkHref = t("footerLinkHref");

  return (
    <section className="bg-white py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow — left-aligned with single line */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-brandred" />
          <span className="text-[0.75rem] font-bold tracking-widest text-brandred uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-naviblue leading-tight font-serif mb-6">
          <span className="block">{t("headingLine1")}</span>
          <span className="block">
            {t("headingLine2")}{" "}
            <span className="text-brandred">{t("headingHighlight")}</span>
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-[17px] leading-relaxed max-w-2xl mb-14">
          {t("description")}
        </p>

        {/* Phase cards */}
        <Table className="mb-10 border table-fixed w-full items-center justify-center">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[9%] text-sm">
                {t("tableHeaders.phase")}
              </TableHead>
              <TableHead className="w-[22%] text-sm">
                {t("tableHeaders.title")}
              </TableHead>
              <TableHead className="w-[20%] text-sm">
                {t("tableHeaders.team")}
              </TableHead>
              <TableHead className="text-sm">
                {t("tableHeaders.details")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {phases.map((phase) => (
              <TableRow key={phase.number} className="align-top">
                <TableCell className="font-bold text-3xl text-brandred font-serif pt-5">
                  {phase.number}
                </TableCell>
                <TableCell className="font-bold text-base text-naviblue align-top pt-5 leading-snug">
                  {phase.title}
                </TableCell>
                <TableCell className="align-top pt-5">
                  <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-brandred border border-brandred bg-white px-3 py-1 whitespace-normal wrap-break-word">
                    {phase.teamBadge}
                  </span>
                </TableCell>
                <TableCell className="align-top pt-5">
                  <ul className="flex flex-col gap-3">
                    {phase.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className="mt-0.5 text-green-600 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-gray-600 text-[15px] leading-relaxed wrap-break-word">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Footer link */}
        <div className="flex justify-center">
          <a
            href={footerLinkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-none bg-brandred px-8 text-[15px] font-bold uppercase tracking-widest text-white hover:bg-red-800 transition-colors shadow-md"
          >
            {t("footerLinkText")}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

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
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
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
        <Table className="mb-10 border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">Phase</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {phases.map((phase) => (
              <TableRow key={phase.number}>
                <TableCell className="font-bold text-lg text-brandred">
                  {phase.number}
                </TableCell>
                <TableCell className="font-semibold text-gray-900">
                  {phase.title}
                </TableCell>
                <TableCell>
                  <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-brandred border border-brandred bg-white px-3 py-1">
                    {phase.teamBadge}
                  </span>
                </TableCell>
                <TableCell>
                  <ul className="flex flex-col gap-2">
                    {phase.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          className="mt-0.5 text-green-600 shrink-0"
                        />
                        <span className="text-gray-600 text-sm">{bullet}</span>
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
            href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brandred hover:text-red-800 transition-colors"
          >
            {t("footerLinkText")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

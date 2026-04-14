"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

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
    <section className="bg-brandbackground py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow — left-aligned with single line */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-[#c9a98a]" />
          <span className="text-[0.68rem] font-bold tracking-[0.2em] text-[#9a7a5e] uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-[#1a1209] leading-tight mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="block">{t("headingLine1")}</span>
          <span className="block">
            {t("headingLine2")}{" "}
            <span className="text-[#A20000]">{t("headingHighlight")}</span>
          </span>
        </h2>

        {/* Description */}
        <p className="text-[#6b5a4e] text-base md:text-[17px] leading-relaxed max-w-2xl mb-14">
          {t("description")}
        </p>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#ede7df] p-7 flex flex-col gap-5"
            >
              {/* Team badge */}
              <div className="inline-flex items-center self-start rounded-full bg-[#f5ece1] px-3 py-1">
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#9a7a5e] uppercase">
                  {phase.teamBadge}
                </span>
              </div>

              {/* Phase number + title */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#A20000] flex items-center justify-center text-white text-[13px] font-bold">
                  {phase.number}
                </div>
                <h3
                  className="text-[#1a1209] font-bold text-[17px] leading-snug pt-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {phase.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#ede7df]" />

              {/* Bullets */}
              <ul className="flex flex-col gap-2.5">
                {phase.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#b3592a]" />
                    <span className="text-[#6b5a4e] text-[13px] leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="flex justify-center">
          <a
            href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#A20000] hover:underline"
          >
            {t("footerLinkText")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

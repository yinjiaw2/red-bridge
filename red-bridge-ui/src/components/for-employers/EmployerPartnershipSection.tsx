"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

interface PartnerCard {
  badge: string;
  title: string;
  bullets: string[];
}

export default function EmployerPartnershipSection() {
  const t = useTranslations("employerPartnership");
  const cards = t.raw("cards") as PartnerCard[];

  return (
    <section className="bg-[#faf6f0] py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-[#c9a98a]" />
          <span className="text-[0.68rem] font-bold tracking-[0.2em] text-[#9a7a5e] uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-[#1a1209] leading-tight mb-5"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("headingMain")}{" "}
          <span className="text-[#A20000]">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-[#6b5a4e] text-base md:text-[17px] leading-relaxed max-w-2xl mb-14">
          {t("description")}
        </p>

        {/* Two partner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#ede7df] p-7 flex flex-col gap-5"
            >
              {/* Badge */}
              <div className="inline-flex self-start rounded-full bg-[#f5ece1] px-3 py-1">
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#9a7a5e] uppercase">
                  {card.badge}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-[#1a1209] font-bold text-xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {card.title}
              </h3>

              <div className="h-px bg-[#ede7df]" />

              {/* Bullets */}
              <ul className="flex flex-col gap-3">
                {card.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <ArrowRight
                      className="h-3.5 w-3.5 text-[#b3592a] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-[#4a4038] text-[13px] leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="bg-white py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-brandred" />
          <span className="text-[0.75rem] font-bold tracking-widest text-brandred uppercase">
            {t("eyebrow")}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-naviblue leading-tight font-serif mb-5"
        >
          {t("headingMain")}{" "}
          <span className="text-brandred">{t("headingHighlight")}</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-[17px] leading-relaxed max-w-2xl mb-14">
          {t("description")}
        </p>

        {/* Two partner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-none border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col gap-6"
            >
              {/* Badge */}
              <div className="inline-flex self-start bg-naviblue px-4 py-1.5 rounded-none">
                <span className="text-[11px] font-bold tracking-widest text-white uppercase">
                  {card.badge}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-naviblue font-bold text-2xl"
              >
                {card.title}
              </h3>

              <div className="h-px bg-gray-200" />

              {/* Bullets */}
              <ul className="flex flex-col gap-3">
                {card.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <ArrowRight
                      className="h-4 w-4 text-brandred shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 text-[15px] leading-relaxed">
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

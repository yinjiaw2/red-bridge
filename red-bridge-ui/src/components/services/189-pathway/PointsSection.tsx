"use client";

import { useTranslations } from "next-intl";
import {
  Award,
  Briefcase,
  GraduationCap,
  Languages,
  Star,
  Users,
  Cake,
} from "lucide-react";

type Row = {
  label: string;
  value: string;
  muted?: boolean;
  highlight?: "accent" | "accent2" | "sage";
};

type Card = {
  icon: React.ReactNode;
  title: string;
  max: string;
  note: string;
  featured?: boolean;
  rows: Row[];
};

function ValueText({
  value,
  muted,
  highlight,
}: {
  value: string;
  muted?: boolean;
  highlight?: "accent" | "accent2" | "sage";
}) {
  if (muted) {
    return <span className="text-sm font-medium text-gray-500">{value}</span>;
  }

  if (highlight === "accent") {
    return (
      <span className="text-sm font-semibold text-highlight">{value}</span>
    );
  }

  if (highlight === "accent2") {
    return <span className="text-sm font-semibold text-brandred">{value}</span>;
  }

  if (highlight === "sage") {
    return (
      <span className="text-sm font-semibold text-green-600">{value}</span>
    );
  }

  return (
    <span className="whitespace-nowrap text-sm font-bold text-brandred">
      {value}
    </span>
  );
}

export default function PointsSection() {
  const t = useTranslations("visa189PointsSection");

  const cards: Card[] = [
    {
      icon: <Cake className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.age.title"),
      max: t("cards.age.max"),
      note: t("cards.age.note"),
      rows: [
        {
          label: t("cards.age.rows.0.label"),
          value: t("cards.age.rows.0.value"),
        },
        {
          label: t("cards.age.rows.1.label"),
          value: t("cards.age.rows.1.value"),
        },
        {
          label: t("cards.age.rows.2.label"),
          value: t("cards.age.rows.2.value"),
        },
        {
          label: t("cards.age.rows.3.label"),
          value: t("cards.age.rows.3.value"),
        },
        {
          label: t("cards.age.rows.4.label"),
          value: t("cards.age.rows.4.value"),
          muted: true,
        },
      ],
    },
    {
      icon: <Languages className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.english.title"),
      max: t("cards.english.max"),
      note: t("cards.english.note"),
      rows: [
        {
          label: t("cards.english.rows.0.label"),
          value: t("cards.english.rows.0.value"),
        },
        {
          label: t("cards.english.rows.1.label"),
          value: t("cards.english.rows.1.value"),
        },
        {
          label: t("cards.english.rows.2.label"),
          value: t("cards.english.rows.2.value"),
          muted: true,
        },
      ],
    },
    {
      icon: <Briefcase className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.experience.title"),
      max: t("cards.experience.max"),
      note: t("cards.experience.note"),
      rows: [
        {
          label: t("cards.experience.rows.0.label"),
          value: t("cards.experience.rows.0.value"),
        },
        {
          label: t("cards.experience.rows.1.label"),
          value: t("cards.experience.rows.1.value"),
        },
        {
          label: t("cards.experience.rows.2.label"),
          value: t("cards.experience.rows.2.value"),
        },
        {
          label: t("cards.experience.rows.3.label"),
          value: t("cards.experience.rows.3.value"),
        },
        {
          label: t("cards.experience.rows.4.label"),
          value: t("cards.experience.rows.4.value"),
        },
        {
          label: t("cards.experience.rows.5.label"),
          value: t("cards.experience.rows.5.value"),
        },
        {
          label: t("cards.experience.rows.6.label"),
          value: t("cards.experience.rows.6.value"),
        },
      ],
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.education.title"),
      max: t("cards.education.max"),
      note: t("cards.education.note"),
      rows: [
        {
          label: t("cards.education.rows.0.label"),
          value: t("cards.education.rows.0.value"),
        },
        {
          label: t("cards.education.rows.1.label"),
          value: t("cards.education.rows.1.value"),
        },
        {
          label: t("cards.education.rows.2.label"),
          value: t("cards.education.rows.2.value"),
        },
        {
          label: t("cards.education.rows.3.label"),
          value: t("cards.education.rows.3.value"),
        },
        {
          label: t("cards.education.rows.4.label"),
          value: t("cards.education.rows.4.value"),
        },
        {
          label: t("cards.education.rows.5.label"),
          value: t("cards.education.rows.5.value"),
        },
      ],
    },
    {
      icon: <Users className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.partner.title"),
      max: t("cards.partner.max"),
      note: t("cards.partner.note"),
      rows: [
        {
          label: t("cards.partner.rows.0.label"),
          value: t("cards.partner.rows.0.value"),
        },
        {
          label: t("cards.partner.rows.1.label"),
          value: t("cards.partner.rows.1.value"),
        },
        {
          label: t("cards.partner.rows.2.label"),
          value: t("cards.partner.rows.2.value"),
        },
        {
          label: t("cards.partner.rows.3.label"),
          value: t("cards.partner.rows.3.value"),
        },
      ],
    },
    {
      icon: <Star className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.total.title"),
      max: t("cards.total.max"),
      note: t("cards.total.note"),
      featured: true,
      rows: [
        {
          label: t("cards.total.rows.0.label"),
          value: t("cards.total.rows.0.value"),
          muted: true,
        },
        {
          label: t("cards.total.rows.1.label"),
          value: t("cards.total.rows.1.value"),
          highlight: "accent",
        },
        {
          label: t("cards.total.rows.2.label"),
          value: t("cards.total.rows.2.value"),
          highlight: "accent2",
        },
        {
          label: t("cards.total.rows.3.label"),
          value: t("cards.total.rows.3.value"),
          highlight: "sage",
        },
        {
          label: t("cards.total.rows.4.label"),
          value: t("cards.total.rows.4.value"),
          highlight: "sage",
        },
      ],
    },
  ];

  return (
    <section
      id="points-table"
      className="bg-gray-50 px-6 py-24 md:px-8 border-b border-gray-200"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brandred">
            <span className="h-px w-6 bg-brandred" />
            {t("eyebrow")}
          </div>

          <h2 className="text-4xl font-bold leading-tight font-serif text-naviblue md:text-5xl font-serif">
            {t("title1")}
            <em className="not-italic text-brandred">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-lg leading-8 text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-none border p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg ${
                card.featured
                  ? "border-brandred bg-brandred/5"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="mb-6 flex items-center gap-4 border-b border-gray-200 pb-5">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-none ${
                    card.featured ? "bg-brandred/10" : "bg-gray-100"
                  }`}
                >
                  {card.icon}
                </div>

                <div>
                  <div className="text-xl font-bold text-naviblue font-serif">
                    {card.title}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-brandred">
                    {card.max}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                {card.rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex items-center justify-between rounded-none px-3 py-2 transition-colors hover:bg-gray-100"
                  >
                    <span className="pr-4 text-base text-gray-600">
                      {row.label}
                    </span>

                    <ValueText
                      value={row.value}
                      muted={row.muted}
                      highlight={row.highlight}
                    />
                  </div>
                ))}
              </div>

              <p className="mt-5 border-t border-gray-200 pt-4 text-sm leading-relaxed text-gray-400">
                {card.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

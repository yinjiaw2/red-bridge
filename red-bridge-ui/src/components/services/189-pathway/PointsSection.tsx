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

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

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
    return <span className="text-[13px] font-medium text-[#7a6858]">{value}</span>;
  }

  if (highlight === "accent") {
    return <span className="text-[13px] font-semibold text-[#a8501e]">{value}</span>;
  }

  if (highlight === "accent2") {
    return <span className="text-[13px] font-semibold text-[#bf6b35]">{value}</span>;
  }

  if (highlight === "sage") {
    return <span className="text-[13px] font-semibold text-[#5a7d5e]">{value}</span>;
  }

  return (
    <span
      className="whitespace-nowrap text-[13px] font-bold"
      style={{
        background: "linear-gradient(135deg,#bf6b35 0%,#8b3e18 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
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
        { label: t("cards.age.rows.0.label"), value: t("cards.age.rows.0.value") },
        { label: t("cards.age.rows.1.label"), value: t("cards.age.rows.1.value") },
        { label: t("cards.age.rows.2.label"), value: t("cards.age.rows.2.value") },
        { label: t("cards.age.rows.3.label"), value: t("cards.age.rows.3.value") },
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
        { label: t("cards.english.rows.0.label"), value: t("cards.english.rows.0.value") },
        { label: t("cards.english.rows.1.label"), value: t("cards.english.rows.1.value") },
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
        { label: t("cards.experience.rows.0.label"), value: t("cards.experience.rows.0.value") },
        { label: t("cards.experience.rows.1.label"), value: t("cards.experience.rows.1.value") },
        { label: t("cards.experience.rows.2.label"), value: t("cards.experience.rows.2.value") },
        { label: t("cards.experience.rows.3.label"), value: t("cards.experience.rows.3.value") },
        { label: t("cards.experience.rows.4.label"), value: t("cards.experience.rows.4.value") },
        { label: t("cards.experience.rows.5.label"), value: t("cards.experience.rows.5.value") },
        { label: t("cards.experience.rows.6.label"), value: t("cards.experience.rows.6.value") },
      ],
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.education.title"),
      max: t("cards.education.max"),
      note: t("cards.education.note"),
      rows: [
        { label: t("cards.education.rows.0.label"), value: t("cards.education.rows.0.value") },
        { label: t("cards.education.rows.1.label"), value: t("cards.education.rows.1.value") },
        { label: t("cards.education.rows.2.label"), value: t("cards.education.rows.2.value") },
        { label: t("cards.education.rows.3.label"), value: t("cards.education.rows.3.value") },
        { label: t("cards.education.rows.4.label"), value: t("cards.education.rows.4.value") },
        { label: t("cards.education.rows.5.label"), value: t("cards.education.rows.5.value") },
      ],
    },
    {
      icon: <Users className="h-5 w-5 text-[#a8501e]" />,
      title: t("cards.partner.title"),
      max: t("cards.partner.max"),
      note: t("cards.partner.note"),
      rows: [
        { label: t("cards.partner.rows.0.label"), value: t("cards.partner.rows.0.value") },
        { label: t("cards.partner.rows.1.label"), value: t("cards.partner.rows.1.value") },
        { label: t("cards.partner.rows.2.label"), value: t("cards.partner.rows.2.value") },
        { label: t("cards.partner.rows.3.label"), value: t("cards.partner.rows.3.value") },
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
      style={{ fontFamily: font }}
      className="bg-[#f5efe4] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8501e]">
            <span className="h-px w-6 bg-[#bf6b35]" />
            {t("eyebrow")}
          </div>

          <h2 className="text-[34px] font-semibold leading-tight text-[#2a1f14] md:text-[44px]">
            {t("title1")}
            <em className="not-italic text-[#bf6b35]">{t("titleHighlight")}</em>
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-[rgba(42,31,20,0.6)] md:text-[16px]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-[8px] border p-7 transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(42,31,20,0.1)] ${
                card.featured
                  ? "border-[rgba(168,80,30,0.2)] bg-[rgba(168,80,30,0.03)]"
                  : "border-[rgba(42,31,20,0.09)] bg-[#faf6f0]"
              }`}
            >
              <div className="mb-5 flex items-center gap-3 border-b border-[rgba(42,31,20,0.09)] pb-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] ${
                    card.featured ? "bg-[rgba(168,80,30,0.12)]" : "bg-[rgba(168,80,30,0.07)]"
                  }`}
                >
                  {card.icon}
                </div>

                <div>
                  <div className="text-[18px] font-semibold text-[#2a1f14]">
                    {card.title}
                  </div>
                  <div className="mt-0.5 text-[12px] font-semibold text-[#a8501e]">
                    {card.max}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {card.rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex items-center justify-between rounded-[5px] px-[10px] py-[8px] transition-colors hover:bg-[#ede5d8]"
                  >
                    <span className="pr-4 text-[14px] text-[rgba(42,31,20,0.6)]">
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

              <p className="mt-4 border-t border-[rgba(42,31,20,0.09)] pt-3 text-[12px] leading-5 text-[rgba(42,31,20,0.36)]">
                {card.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
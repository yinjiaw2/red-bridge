"use client";

import { useTranslations } from "next-intl";

const AVATAR_COLORS: Record<string, { bg: string; text: string }> = {
  red: { bg: "#bf4a2e", text: "#ffffff" },
  teal: { bg: "#3d8c8c", text: "#ffffff" },
  blue: { bg: "#4a6fa5", text: "#ffffff" },
  green: { bg: "#4a8c5a", text: "#ffffff" },
  orange: { bg: "#c07030", text: "#ffffff" },
  purple: { bg: "#7a5aaa", text: "#ffffff" },
};

interface TeamMember {
  initials: string;
  colorKey: string;
  title: string;
  tag: string;
  description: string;
}

export default function TeamSection() {
  const t = useTranslations("team");
  const members = t.raw("members") as TeamMember[];

  return (
    <section className="bg-white py-24 px-[5%] border-b border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Intro paragraph */}
        <p className="text-gray-700 text-base md:text-[17px] leading-relaxed max-w-3xl mb-14">
          {t("intro")}
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((member, i) => {
            const color = AVATAR_COLORS[member.colorKey] ?? AVATAR_COLORS.red;
            return (
              <div
                key={i}
                className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-none flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: color.bg, color: color.text }}
                >
                  {member.initials}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-gray-900 font-bold text-lg font-serif leading-snug mb-2">
                    {member.title}
                  </h3>

                  {/* Tag */}
                  <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-brandred border border-brandred bg-white px-3 py-1">
                    {member.tag}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {member.description}
                </p>

                {/* Learn more */}
                <a
                  href="#"
                  className="text-sm font-bold uppercase tracking-wide text-brandred hover:text-red-800 transition-colors mt-2 self-start"
                >
                  {t("learnMore")} →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

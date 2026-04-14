"use client";

import { useTranslations } from "next-intl";

const AVATAR_COLORS: Record<string, { bg: string; text: string }> = {
  red:    { bg: "#bf4a2e", text: "#ffffff" },
  teal:   { bg: "#3d8c8c", text: "#ffffff" },
  blue:   { bg: "#4a6fa5", text: "#ffffff" },
  green:  { bg: "#4a8c5a", text: "#ffffff" },
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
    <section className="bg-[#faf6f0] py-24 px-[5%]">
      <div className="max-w-300 mx-auto">
        {/* Intro paragraph */}
        <p className="text-[#6b5a4e] text-base md:text-[17px] leading-relaxed max-w-3xl mb-14">
          {t("intro")}
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((member, i) => {
            const color = AVATAR_COLORS[member.colorKey] ?? AVATAR_COLORS.red;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#ede7df] flex flex-col gap-3"
              >
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: color.bg, color: color.text }}
                >
                  {member.initials}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-[#1a1209] font-semibold text-[15px] leading-snug mb-2">
                    {member.title}
                  </h3>

                  {/* Tag */}
                  <span className="inline-block text-[11px] font-semibold tracking-wide text-[#A20000] border border-[#e8c0b8] bg-[#fdf2f0] rounded-full px-3 py-0.5">
                    {member.tag}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#6b5a4e] text-[13px] leading-relaxed flex-1">
                  {member.description}
                </p>

                {/* Learn more */}
                <a
                  href="#"
                  className="text-[13px] font-semibold text-[#A20000] hover:underline mt-1 self-start"
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

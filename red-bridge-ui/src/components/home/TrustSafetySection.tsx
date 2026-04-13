"use client";
import Link from "next/link";
import {
  Award,
  Building2,
  Mail,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface VerifyItem {
  label: string;
  linkText: string;
  description: string;
  href: string;
  iconKey: string;
}

const iconMap: Record<string, LucideIcon> = {
  certificate: Award,
  building: Building2,
  envelope: Mail,
};

export const TrustSafetySection = () => {
  const t = useTranslations("trustSafety");
  const items = t.raw("items") as VerifyItem[];

  return (
    <section className="bg-[#172D5D] py-20 px-[5%] overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-14">
        {/* Left */}
        <div className="flex-1 max-w-lg">
          <span className="text-[#D4A017] text-xs font-bold tracking-[0.2em] uppercase block mb-5">
            {t("eyebrow")}
          </span>

          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
            {t("heading")}
            <br />
            <em className="text-[#D4A017] not-italic">
              {t("headingHighlight")}
            </em>{" "}
            {t("headingSuffix")}
          </h2>

          <p className="text-white/60 text-base leading-relaxed mb-8">
            {t("description")}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-lg border border-[#D4A017] text-[#D4A017] px-5 py-2.5 text-sm font-semibold hover:bg-[#D4A017]/10 transition-colors"
            >
              {t("primaryCta")}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="#why-us"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              {t("secondaryCta")}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Right — verify cards */}
        <div className="flex flex-col gap-3 w-full lg:w-95">
          {items.map((item, index) => {
            const Icon = iconMap[item.iconKey] ?? Mail;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
              >
                <div className="shrink-0 mt-0.5 p-2 rounded-lg bg-[#D4A017]/15">
                  <Icon
                    size={18}
                    className="text-[#D4A017]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest">
                    {item.label}
                  </span>
                  <Link
                    href={item.href}
                    target={
                      item.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      item.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-white text-sm font-semibold hover:text-[#D4A017] transition-colors"
                  >
                    {item.linkText}
                  </Link>
                  <span className="text-white/50 text-xs leading-relaxed">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;

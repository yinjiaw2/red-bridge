"use client";
import Link from "next/link";
import { Award, Building2, Mail, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

interface VerifyItem {
  label: string;
  linkText: string;
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
    <section className="bg-[#2d241e] py-16 px-[5%] overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left text */}
        <div className="flex-1 text-left">
          <h3 className="text-white text-3xl font-bold mb-4 leading-tight font-serif">
            {t("heading")}
            <br />
            <span className="text-primary italic font-normal mt-2 block">
              {t("subheading")}
            </span>
          </h3>
          <p className="text-primary text-lg leading-relaxed max-w-[600px]">
            {t("description")}
          </p>
        </div>

        {/* Right verify cards */}
        <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[320px]">
          {items.map((item, index) => {
            const Icon = iconMap[item.iconKey] ?? Mail;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-[#3a3028] border border-[#4a3f36] rounded-xl transition-all hover:bg-[#43382f]"
              >
                <div className="mt-1 text-primary">
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#a28e7e] text-sm font-medium mb-1">
                    {item.label}
                  </span>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d9c5b2] text-sm hover:text-white transition-colors underline decoration-[#4a3f36] underline-offset-4"
                  >
                    {item.linkText}
                  </Link>
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

import React from "react";
import {
  Star,
  Building2,
  Scale,
  MapPin,
  History,
  ExternalLink,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const CredentialsBarSection = () => {
  const t = useTranslations("credentials");

  const credentials = [
    {
      icon: <Star size={20} className="fill-current" />,
      label: t("googleRating"),
      value: (
        <div className="flex items-center gap-2">
          <span className="text-lg font-serif font-bold text-[#2d241e]">
            4.9
          </span>
          <span className="text-amber-400 text-xs tracking-tighter">★★★★★</span>
        </div>
      ),
      color: "text-amber-600 bg-amber-50",
    },
    {
      icon: <Building2 size={20} />,
      label: t("registeredCompany"),
      value: (
        <span className="text-sm font-bold text-[#2d241e]">
          {t("companyName")}
        </span>
      ),
      color: "text-[#7c5a43] bg-[#7c5a43]/10",
    },
    {
      icon: <Scale size={20} />,
      label: t("licensedPartner"),
      value: (
        <a
          href="https://www.insightidea.com.au/en/success"
          target="_blank"
          rel="noopener"
          className="text-sm font-bold text-[#2d241e] hover:text-[#7c5a43] transition-colors inline-flex items-center gap-1 group"
        >
          {t("partnerName")}
          <ExternalLink
            size={12}
            className="opacity-50 group-hover:opacity-100 transition-opacity"
          />
        </a>
      ),
      color: "text-emerald-700 bg-emerald-50",
    },
    {
      icon: <MapPin size={20} />,
      label: t("headquarters"),
      value: (
        <span className="text-sm font-bold text-[#2d241e]">
          {t("hqAddress")}
        </span>
      ),
      color: "text-[#7c5a43] bg-[#7c5a43]/10",
    },
    {
      icon: <History size={20} />,
      label: t("established"),
      value: (
        <span className="text-sm font-bold text-[#2d241e]">
          {t("establishedText")}
        </span>
      ),
      color: "text-[#7c5a43] bg-[#7c5a43]/10",
    },
  ];

  return (
    <div className="w-full bg-[#fbf9f4] border-y border-[#e8dfd4] py-8 px-[5%]">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-8 gap-x-4">
          {credentials.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-4 min-w-fit">
                {/* 图标容器 */}
                <div
                  className={`p-3 rounded-full transition-transform hover:scale-105 ${item.color}`}
                >
                  {item.icon}
                </div>

                {/* 文字内容 */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a28e7e] mb-1">
                    {item.label}
                  </div>
                  <div className="whitespace-nowrap">{item.value}</div>
                </div>
              </div>

              {/* 分割线：仅在桌面端且不是最后一项时显示 */}
              {index < credentials.length - 1 && (
                <div className="hidden lg:block w-px h-10 bg-[#e8dfd4]/60" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CredentialsBarSection;

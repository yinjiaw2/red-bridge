"use client";
import Link from "next/link";
import {
  MapPin,
  PhoneCall,
  MailOpen,
  HelpCircle,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const ContactSection = () => {
  const t = useTranslations("home.contact");

  return (
    <section
      id="contact"
      className="bg-[#f5f1ea] py-24 px-[5%] border-t border-[#e8dfd4]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="text-[0.75rem] font-bold tracking-[0.2em] text-[#a28e7e] uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-[#a28e7e]/40"></span>
            {t("eyebrow")}
            <span className="w-8 h-[1px] bg-[#a28e7e]/40"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d241e] mb-6">
            {t("headingMain")}
            <span className="text-[#7c5a43] italic ml-2">
              {t("headingHighlight")}
            </span>
          </h2>
          <p className="text-[#928276] text-lg max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="space-y-12">
          {/* 联系卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 公司地址 */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#fbf9f4] border border-[#e8dfd4] p-10 rounded-[2rem] text-center transition-all hover:shadow-xl hover:shadow-[#7c5a43]/5 hover:-translate-y-1"
            >
              <div className="inline-flex p-4 rounded-2xl bg-[#7c5a43]/10 text-[#7c5a43] mb-6 group-hover:bg-[#7c5a43] group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <h4 className="text-lg font-bold text-[#2d241e] mb-4">
                {t("addressTitle")}
              </h4>
              <p className="text-[#928276] leading-relaxed mb-4">
                {t("addressLine1")}
                <br />
                {t("addressLine2")}
                <br />
                {t("addressLine3")}
              </p>
              <p className="text-xs font-bold text-[#a28e7e] uppercase tracking-wider">
                {t("addressSub")}
              </p>
            </a>

            {/* 电话联系 */}
            <a
              href="tel:0399617301"
              className="group bg-[#fbf9f4] border border-[#e8dfd4] p-10 rounded-[2rem] text-center transition-all hover:shadow-xl hover:shadow-[#7c5a43]/5 hover:-translate-y-1"
            >
              <div className="inline-flex p-4 rounded-2xl bg-[#b45309]/10 text-[#b45309] mb-6 group-hover:bg-[#b45309] group-hover:text-white transition-colors">
                <PhoneCall size={24} />
              </div>
              <h4 className="text-lg font-bold text-[#2d241e] mb-4">
                {t("phoneTitle")}
              </h4>
              <p className="text-2xl font-serif font-bold text-[#7c5a43] mb-4">
                {t("phoneNumber")}
              </p>
              <p className="text-[#928276] leading-relaxed">
                {t("phoneTime1")}
                <br />
                {t("phoneTime2")}
              </p>
            </a>

            {/* 邮件联系 */}
            <a
              href="mailto:hello@redbridge.com.au"
              className="group bg-[#fbf9f4] border border-[#e8dfd4] p-10 rounded-[2rem] text-center transition-all hover:shadow-xl hover:shadow-[#7c5a43]/5 hover:-translate-y-1"
            >
              <div className="inline-flex p-4 rounded-2xl bg-[#5c7247]/10 text-[#5c7247] mb-6 group-hover:bg-[#5c7247] group-hover:text-white transition-colors">
                <MailOpen size={24} />
              </div>
              <h4 className="text-lg font-bold text-[#2d241e] mb-4">
                {t("emailTitle")}
              </h4>
              <p className="text-[#2d241e] font-bold mb-4 underline decoration-[#5c7247]/30 underline-offset-4">
                {t("emailLink")}
              </p>
              <p className="text-[#928276] leading-relaxed">
                {t("emailTime1")}
                <br />
                {t("emailTime2")}
              </p>
            </a>
          </div>

          {/* 底部双重 CTA */}
          <div className="bg-[#2d241e] rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* 装饰性背景 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c5a43] opacity-10 rounded-full -mr-32 -mt-32"></div>

            <div className="relative z-10 max-w-xl mx-auto">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 bg-[#b4907a] hover:bg-[#a37f68] text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
              >
                <Calendar size={20} />
                {t("ctaMain")}
              </Link>

              <div className="mt-10 flex items-center justify-center gap-2 text-stone-400">
                <HelpCircle size={18} className="text-[#b4907a]" />
                <span>{t("ctaSubPrefix")}</span>
                <Link
                  href="/eligibility"
                  className="text-[#b4907a] font-bold hover:text-white transition-colors flex items-center gap-1 group"
                >
                  {t("ctaSubLink")}
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

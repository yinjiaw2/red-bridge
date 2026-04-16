"use client";
import Link from "next/link";
import {
  MapPin,
  PhoneCall,
  MailOpen,
  Calendar,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const ContactSection = () => {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="bg-[#0e0b07] px-5 py-14 sm:px-[5%] md:py-24"
    >
      <div className="max-w-275 mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#A20000]" />
            <span className="text-[0.7rem] font-bold tracking-[0.25em] text-[#A20000] uppercase">
              {t("eyebrow")}
            </span>
            <span className="w-8 h-px bg-[#A20000]" />
          </div>
          <h2 className="mb-4 font-serif text-[2.15rem] font-bold leading-tight text-white sm:text-4xl md:mb-5 md:text-5xl">
            {t("headingMain")}
            <em className="text-[#D4A017] font-serif not-italic ml-2">
              {t("headingHighlight")}
            </em>
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-white/50 sm:text-base">
            {t("description")}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-10">
          {/* Visit Us */}
          <a
            href="https://maps.google.com/?q=Level+9+Tower+3+18-38+Siddeley+Street+Docklands+VIC+3008"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/4 border border-white/8 rounded-2xl p-6 text-center hover:bg-white/[0.07] hover:border-white/[0.14] transition-all sm:p-8"
          >
            <div className="inline-flex p-3 rounded-full bg-[#A20000]/15 mb-5 group-hover:bg-[#A20000]/25 transition-colors">
              <MapPin size={22} className="text-[#c44040]" aria-hidden="true" />
            </div>
            <h4 className="text-base font-bold text-white mb-3">
              {t("addressTitle")}
            </h4>
            <p className="text-white/55 text-sm leading-relaxed mb-2">
              {t("addressLine1")}
              <br />
              {t("addressLine2")}
              <br />
              {t("addressLine3")}
            </p>
            <p className="text-white/30 text-xs font-medium">
              {t("addressSub")}
            </p>
          </a>

          {/* Call Us */}
          <a
            href="tel:0399617301"
            className="group bg-white/4 border border-white/8 rounded-2xl p-6 text-center hover:bg-white/[0.07] hover:border-white/[0.14] transition-all sm:p-8"
          >
            <div className="inline-flex p-3 rounded-full bg-[#A20000]/15 mb-5 group-hover:bg-[#A20000]/25 transition-colors">
              <PhoneCall size={22} className="text-[#c44040]" aria-hidden="true" />
            </div>
            <h4 className="text-base font-bold text-white mb-3">
              {t("phoneTitle")}
            </h4>
            <p className="text-xl font-bold text-white mb-2 sm:text-2xl">
              {t("phoneNumber")}
            </p>
            <p className="text-white/55 text-sm leading-relaxed">
              {t("phoneTime1")}
              <br />
              {t("phoneTime2")}
            </p>
          </a>

          {/* Email Us */}
          <a
            href="mailto:info@red-bridge.com.au"
            className="group bg-white/4 border border-white/8 rounded-2xl p-6 text-center hover:bg-white/[0.07] hover:border-white/[0.14] transition-all sm:p-8"
          >
            <div className="inline-flex p-3 rounded-full bg-[#A20000]/15 mb-5 group-hover:bg-[#A20000]/25 transition-colors">
              <MailOpen size={22} className="text-[#c44040]" aria-hidden="true" />
            </div>
            <h4 className="text-base font-bold text-white mb-3">
              {t("emailTitle")}
            </h4>
            <p className="text-white font-semibold text-sm mb-2 underline underline-offset-4 decoration-white/20">
              info@red-bridge.com.au
            </p>
            <p className="text-white/55 text-sm leading-relaxed">
              {t("emailTime1")}
              <br />
              {t("emailTime2")}
            </p>
          </a>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#A20000] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#8b0000] hover:shadow-[0_0_24px_rgba(162,0,0,0.4)] active:scale-95 sm:w-auto sm:px-10 sm:text-base"
          >
            <Calendar size={18} aria-hidden="true" />
            {t("ctaMain")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


"use client";
import Link from "next/link";
import {
  MapPin,
  PhoneCall,
  MailOpen,
  Calendar,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export const ContactSection = () => {
  const t = useTranslations("contact");
  const locale = useLocale();
  const emailAddress = t("emailLink");
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-secondary px-5 py-14 sm:px-[5%] md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-275 mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-highlight" />
            <span className="text-lg font-bold tracking-[0.25em] text-highlight uppercase">
              {t("eyebrow")}
            </span>
            <span className="w-8 h-px bg-highlight" />
          </div>
          <h2 className="mb-4 font-serif text-[2.15rem] font-bold leading-tight text-white sm:text-4xl md:mb-5 md:text-5xl">
            {t("headingMain")}
            <em className="text-highlight font-serif not-italic ml-2">
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
          <div className="group bg-white/4 border border-white/8 rounded-2xl p-6 text-center hover:bg-white/[0.07] hover:border-white/[0.14] transition-all sm:p-8">
            <div className="inline-flex p-3 rounded-full bg-highlight/15 mb-5 group-hover:bg-highlight/25 transition-colors">
              <MapPin size={22} className="text-highlight" aria-hidden="true" />
            </div>
            <h4 className="text-base font-bold text-white mb-4">
              {t("addressTitle")}
            </h4>

            {/* Australia */}
            <p className="text-highlight/80 text-xs font-semibold uppercase tracking-widest mb-1">
              {t("addressAuLabel")}
            </p>
            <a
              href="https://maps.google.com/?q=Level+9+Tower+3+18-38+Siddeley+Street+Docklands+VIC+3008"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <p className="text-white/55 text-sm leading-relaxed mb-1 hover:text-white/75 transition-colors">
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

            <div className="my-4 border-t border-white/10" />

            {/* China HQ */}
            <p className="text-highlight/80 text-xs font-semibold uppercase tracking-widest mb-1">
              {t("addressCnLabel")}
            </p>
            <p className="text-white/55 text-sm leading-relaxed">
              {t("addressCnLine1")}
              <br />
              {t("addressCnLine2")}
            </p>
          </div>

          {/* Call Us */}
          <div className="group bg-white/4 border border-white/8 rounded-2xl p-6 text-center hover:bg-white/[0.07] hover:border-white/[0.14] transition-all sm:p-8">
            <div className="inline-flex p-3 rounded-full bg-highlight/15 mb-5 group-hover:bg-highlight/25 transition-colors">
              <PhoneCall size={22} className="text-highlight" aria-hidden="true" />
            </div>
            <h4 className="text-base font-bold text-white mb-4">
              {t("phoneTitle")}
            </h4>

            {/* Australia */}
            <p className="text-highlight/80 text-xs font-semibold uppercase tracking-widest mb-1">
              {t("phoneAuLabel")}
            </p>
            <a href="tel:0399617301" className="block">
              <p className="text-xl font-bold text-white mb-1 sm:text-2xl hover:text-white/80 transition-colors">
                {t("phoneNumber")}
              </p>
            </a>
            <p className="text-white/55 text-sm leading-relaxed">
              {t("phoneTime1")}
            </p>

            <div className="my-4 border-t border-white/10" />

            {/* China HQ */}
            <p className="text-highlight/80 text-xs font-semibold uppercase tracking-widest mb-1">
              {t("phoneCnLabel")}
            </p>
            <a href="tel:13084409464" className="block">
              <p className="text-xl font-bold text-white mb-1 sm:text-2xl hover:text-white/80 transition-colors">
                {t("phoneCnNumber")}
              </p>
            </a>
            <p className="text-white/55 text-sm leading-relaxed">
              {t("phoneCnTime")}
            </p>
          </div>

          {/* Email Us */}
          <a
            href={gmailComposeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/4 border border-white/8 rounded-2xl p-6 text-center hover:bg-white/[0.07] hover:border-white/[0.14] transition-all sm:p-8"
          >
            <div className="inline-flex p-3 rounded-full bg-highlight/15 mb-5 group-hover:bg-highlight/25 transition-colors">
              <MailOpen size={22} className="text-highlight" aria-hidden="true" />
            </div>
            <h4 className="text-base font-bold text-white mb-3">
              {t("emailTitle")}
            </h4>
            <p className="text-white font-semibold text-sm mb-2 underline underline-offset-4 decoration-white/20">
              {emailAddress}
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
            href={`/contact?ctasrc=home_footer_cta&locale=${locale}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-highlight px-7 py-4 text-sm font-bold text-secondary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-xl active:scale-95 sm:w-auto sm:px-10 sm:text-base"
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

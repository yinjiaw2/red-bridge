"use client";

import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import {
  CircleStar,
  BookOpen,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface FooterLinkItem {
  name: string;
  href: string;
}

function FacebookIcon({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.5 21v-7.5H16l.5-3h-3V8.7c0-.9.3-1.5 1.6-1.5h1.6V4.5c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.1v2.1H7.5v3h2.6V21h3.4Z" />
    </svg>
  );
}

const socialIconMap: Record<string, LucideIcon | typeof FacebookIcon> = {
  wechat: MessageCircle,
  facebook: FacebookIcon,
  rednote: BookOpen,
  instagram: CircleStar,
};

const socialHrefs: Record<string, string> = {
  facebook: "https://www.facebook.com/people/RedBridge-Consulting/61587635078885/",
  rednote:
    "https://www.xiaohongshu.com/user/profile/69c209f000000000260005c7?xsec_token=ABT65EPMLmwKVsY516MoVKZF6jFbDQVNlZBwnemdpNyfY%3D&xsec_source=pc_search",
  instagram: "https://www.instagram.com/redbridgeconsulting/",
};

export const Footer = () => {
  const t = useTranslations("footer");
  const companyLinks = t.raw("companyLinks") as FooterLinkItem[];

  const socialKeys = ["wechat", "facebook", "rednote", "instagram"] as const;

  return (
    <footer className="bg-white text-gray-600 py-9 px-5 md:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Top content */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_minmax(320px,420px)] gap-10 lg:gap-20 xl:gap-28 mb-9 items-start justify-center">
          {/* Brand */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="mb-3">
              <Image
                src="/rb-logo.png"
                alt={t("logoAlt")}
                width={144}
                height={40}
                className="h-auto object-contain mx-auto lg:mx-0"
              />
            </div>

            <p className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase mb-3">
              {t("tagline")}
            </p>

            <p className="text-[13px] leading-6 max-w-lg mx-auto lg:mx-0">
              {t("descriptionBefore")}
              <a
                href="https://www.insightidea.com.au/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium hover:underline mx-1 inline-flex items-center gap-1"
              >
                {t("descriptionLink")}
                <ExternalLink size={12} />
              </a>
              {t("descriptionAfter")}
            </p>
          </div>

          {/* Company */}
          <div className="w-full max-w-md text-center lg:text-left">
            <h5 className="text-gray-900 font-bold text-sm mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-4 h-px bg-[#D4A017]" />
              {t("companyTitle")}
            </h5>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-[13px] leading-5 justify-items-center lg:justify-items-start">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          {/* Social + legal */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
            {/* Social */}
            <div className="flex flex-wrap justify-center gap-6">
              {socialKeys.map((key) => {
                const Icon = socialIconMap[key];
                const href = socialHrefs[key];
                const label = t(`social.${key}`);

                const inner = (
                  <>
                    <span className="p-2 rounded-lg bg-gray-100 group-hover:bg-[#D4A017]/10 group-hover:text-[#D4A017] transition-all">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {label}
                    </span>
                  </>
                );

                return href ? (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-900 transition-all group"
                  >
                    {inner}
                  </a>
                ) : (
                  <button
                    key={key}
                    type="button"
                    className="relative flex items-center gap-2 hover:text-gray-900 transition-all group"
                    aria-label={label}
                  >
                    {inner}
                    {key === "wechat" ? (
                      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 rounded-md border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <Image
                          src="/wechat-official-account-qr.jpg"
                          alt={label}
                          width={160}
                          height={160}
                          className="h-40 w-40 max-w-none"
                        />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            {/* Legal links */}
            <div className="flex gap-6 text-xs font-medium text-gray-500">
              <span>
                {t("legal.privacy")}
              </span>
              <span>
                {t("legal.terms")}
              </span>
              <span>
                {t("legal.copyright")}
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-3">
            <p className="text-[0.7rem] uppercase tracking-widest text-gray-400">
              A{" "}
              <a
                href="https://abr.business.gov.au/ABN/View?abn=97693501147"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 underline underline-offset-4"
              >
                {t("siddeleyGroup")}
              </a>{" "}
              {t("affiliationSuffix")}
              <span className="mx-2 text-gray-300">|</span>
              {t("partner1")}
              <span className="mx-2 text-gray-300">|</span>
              {t("partner2")}
            </p>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-[0.7rem] text-gray-500">
                <ShieldCheck size={14} className="text-[#D4A017]" />
                {t("copyrightText")}
              </div>
              <p className="text-[0.7rem] text-gray-400 max-w-2xl mx-auto">
                {t("disclaimer")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

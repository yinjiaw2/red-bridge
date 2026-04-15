"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CircleStar,
  BookOpen,
  MessageCircle,
  Hash,
  ExternalLink,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface ServiceItem {
  name: string;
  href: string;
}

interface FooterLinkItem {
  name: string;
  href: string;
}

const socialIconMap: Record<string, LucideIcon> = {
  wechat: MessageCircle,
  tiktok: Hash,
  rednote: BookOpen,
  instagram: CircleStar,
};

const socialHrefs: Record<string, string> = {
  rednote: "https://www.xiaohongshu.com/user/profile/6363be4d000000001f017d2c",
  instagram: "https://www.instagram.com/redbridgeconsulting/",
};

export const Footer = () => {
  const t = useTranslations("footer");
  const services = t.raw("services") as ServiceItem[];
  const companyLinks = t.raw("companyLinks") as FooterLinkItem[];

  const socialKeys = ["wechat", "tiktok", "rednote", "instagram"] as const;

  return (
    <footer className="bg-white text-gray-600 py-10 px-[5%] border-t border-gray-200">
      <div className="max-w-300 mx-auto">
        {/* Top content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2 pr-0 lg:pr-20">
            <div className="mb-4">
              <Image
                src="/rb-logo.png"
                alt={t("logoAlt")}
                width={160}
                height={44}
                className="object-contain"
              />
            </div>

            <p className="text-[#D4A017] font-bold tracking-widest text-xs uppercase mb-4">
              {t("tagline")}
            </p>

            <p className="text-sm leading-relaxed max-w-md">
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

          {/* Services */}
          <div>
            <h5 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[#D4A017]" />
              {t("servicesTitle")}
            </h5>
            <ul className="space-y-3 text-sm">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[#D4A017]" />
              {t("companyTitle")}
            </h5>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-900 transition-colors"
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
                    className="flex items-center gap-2 hover:text-gray-900 transition-all group"
                  >
                    {inner}
                  </button>
                );
              })}
            </div>

            {/* Legal links */}
            <div className="flex gap-6 text-xs font-medium text-gray-500">
              <Link
                href="/privacy"
                className="hover:text-gray-900 transition-colors"
              >
                {t("legal.privacy")}
              </Link>
              <Link
                href="/terms"
                className="hover:text-gray-900 transition-colors"
              >
                {t("legal.terms")}
              </Link>
              <Link
                href="/terms#copyright"
                className="hover:text-gray-900 transition-colors"
              >
                {t("legal.copyright")}
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-gray-900 transition-colors"
              >
                {t("legal.sitemap")}
              </Link>
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
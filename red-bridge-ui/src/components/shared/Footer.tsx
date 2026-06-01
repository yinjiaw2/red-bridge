"use client";

import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import {
  BookOpen,
  MessageCircle,
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

function InstagramIcon({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socialIconMap: Record<string, LucideIcon | typeof FacebookIcon | typeof InstagramIcon> = {
  wechat: MessageCircle,
  facebook: FacebookIcon,
  rednote: BookOpen,
  instagram: InstagramIcon,
};

const socialHrefs: Record<string, string> = {
  facebook: "https://www.facebook.com/people/RedBridge-Consulting/61587635078885/",
  rednote:
    "https://www.xiaohongshu.com/user/profile/69c209f000000000260005c7?xsec_token=ABT65EPMLmwKVsY516MoVKZF6jFbDQVNlZBwnemdpNyfY%3D&xsec_source=pc_search",
  instagram: "https://www.instagram.com/redbridgeconsulting/",
};

const GROUP_LINKS = [
  { label: "Siddeley Group", href: "https://siddeleygroup-v.pages.dev/" },
  { label: "Insight Idea Law Firm", href: "https://www.insightidea.com.au/en" },
  { label: "Good Mood Studio", href: "https://goodmood-self.vercel.app/" },
];

export const Footer = () => {
  const t = useTranslations("footer");
  const companyLinks = t.raw("companyLinks") as FooterLinkItem[];
  const socialKeys = ["wechat", "facebook", "rednote", "instagram"] as const;

  return (
    <footer className="bg-[#0f1c38] text-white/70">
      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-10 lg:gap-16 xl:gap-24">

          {/* Brand column */}
          <div className="max-w-sm">
            <div className="mb-5 inline-block bg-white rounded-lg px-3 py-2">
              <Image
                src="/rb-logo.png"
                alt={t("logoAlt")}
                width={132}
                height={36}
                className="h-auto object-contain"
              />
            </div>
            <p className="text-[#D4A017] font-bold tracking-[0.18em] text-[10px] uppercase mb-4">
              {t("tagline")}
            </p>
            <p className="text-[13px] leading-[1.7] text-white/50 mb-6">
              {t("descriptionBefore")}
              <a
                href="https://www.insightidea.com.au/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#D4A017] transition-colors font-medium mx-1 underline underline-offset-4 decoration-white/20"
              >
                {t("descriptionLink")}
              </a>
              {t("descriptionAfter")}
            </p>
            {/* MARA badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <ShieldCheck size={14} className="text-[#D4A017] shrink-0" />
              <span className="text-[11px] font-semibold text-white/60">
                MARA Registered · MARN 1467870
              </span>
            </div>
          </div>

          {/* Navigation column */}
          <div className="min-w-[160px]">
            <h5 className="text-white font-bold text-[11px] uppercase tracking-[0.12em] mb-5">
              {t("companyTitle")}
            </h5>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div className="min-w-[180px]">
            <h5 className="text-white font-bold text-[11px] uppercase tracking-[0.12em] mb-5">
              Follow Us
            </h5>
            <div className="flex flex-col gap-3">
              {socialKeys.map((key) => {
                const Icon = socialIconMap[key];
                const href = socialHrefs[key];
                const label = t(`social.${key}`);

                const content = (
                  <span className="flex items-center gap-3 text-[13px] text-white/50 hover:text-white transition-colors group">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/8 group-hover:bg-[#D4A017]/15 group-hover:text-[#D4A017] transition-all">
                      <Icon size={14} aria-hidden="true" />
                    </span>
                    {label}
                  </span>
                );

                return href ? (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    {content}
                  </a>
                ) : (
                  <button
                    key={key}
                    type="button"
                    className="relative text-left"
                    aria-label={label}
                  >
                    {content}
                    {key === "wechat" && (
                      <span className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 rounded-lg border border-white/10 bg-[#0f1c38] p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <Image
                          src="/wechat-official-account-qr.jpg"
                          alt={label}
                          width={140}
                          height={140}
                          className="h-35 w-35 max-w-none"
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/8 mx-5 md:mx-8" />

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col gap-4">
        {/* Group affiliates */}
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-[11px] text-white/35">
          <span>Part of the</span>
          {GROUP_LINKS.map((item, i) => (
            <span key={item.href} className="flex items-center gap-1">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#D4A017] transition-colors font-medium underline underline-offset-4 decoration-white/15"
              >
                {item.label}
              </a>
              {i < GROUP_LINKS.length - 1 && (
                <span className="text-white/20 mx-1">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Legal links row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px]">
          <Link href="/privacy" className="text-white/40 hover:text-white/70 transition-colors">
            {t("legal.privacy")}
          </Link>
          <Link href="/terms" className="text-white/40 hover:text-white/70 transition-colors">
            {t("legal.terms")}
          </Link>
          <Link href="/copyright" className="text-white/40 hover:text-white/70 transition-colors">
            {t("legal.copyright")}
          </Link>
        </div>

        {/* Copyright + website interest row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] text-white/30">
            <ShieldCheck size={12} className="text-[#D4A017]/60 shrink-0" />
            <span>{t("copyrightText")}</span>
          </div>
          <p className="text-[11px] text-white/25">
            {t("websiteInterest")}{" "}
            <a
              href="https://www.linkedin.com/in/vanessachs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#D4A017] transition-colors underline underline-offset-2 decoration-white/20"
            >
              {t("websiteInterestLink")}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

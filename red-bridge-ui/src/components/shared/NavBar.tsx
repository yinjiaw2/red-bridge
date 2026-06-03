"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

// --- Constants ---

const SOCIAL_LINKS = {
  xiaohongshu:
    "https://www.xiaohongshu.com/user/profile/69c209f000000000260005c7?xsec_token=ABT65EPMLmwKVsY516MoVKZF6jFbDQVNlZBwnemdpNyfY%3D&xsec_source=pc_search",
  instagram: "https://www.instagram.com/redbridgeconsulting/",
  facebook: "https://www.facebook.com/people/RedBridge-Consulting/61587635078885/",
} as const;

type QrTarget = "wechat" | "tiktok";

const QR_SRCS: Record<QrTarget, string> = {
  wechat: "/wechat-official-account-qr.jpg",
  tiktok: "/images/qr-tiktok.png",
};

// --- Social SVG icons ---

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M13.5 21v-7.5H16l.5-3h-3V8.7c0-.9.3-1.5 1.6-1.5h1.6V4.5c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.1v2.1H7.5v3h2.6V21h3.4Z" />
    </svg>
  );
}

function WeChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M9.5 4C5.36 4 2 6.92 2 10.5c0 2.03 1.05 3.84 2.7 5.04L3.5 18l2.7-1.35A8.2 8.2 0 0 0 9.5 17c.34 0 .68-.02 1.01-.06A5.5 5.5 0 0 1 10 14.5C10 11.46 12.91 9 16.5 9c.18 0 .36.01.54.02C16.17 6.2 13.13 4 9.5 4zm-2 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.5 10C13.46 10 11 12.01 11 14.5S13.46 19 16.5 19c.7 0 1.37-.12 1.98-.34L21 20l-1.04-2.18A4.28 4.28 0 0 0 21 14.5C21 12.01 19.54 10 16.5 10zm-2 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm4 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
    </svg>
  );
}

// --- Component ---

export default function NavBar() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isEmployerSponsorshipActive =
    pathname === "/services/employer-pathway" ||
    pathname.startsWith("/services/employer-pathway/");

  const [menuOpen, setMenuOpen] = useState(false);
  const [qrModal, setQrModal] = useState<QrTarget | null>(null);
  const [spokeOpen, setSpokeOpen] = useState(false);
  const [spokeExpanded, setSpokeExpanded] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const switchLocale = useCallback(() => {
    const next = locale === "zh" ? "en" : "zh";
    router.replace(pathname, { locale: next });
  }, [locale, pathname, router]);

  const targetLocale = locale === "zh" ? "en" : "zh";

  function closeAll() {
    setMenuOpen(false);
    setSpokeExpanded(false);
  }

  const desktopNavLinkClass =
    "inline-flex items-center justify-center rounded-full px-2.5 py-1.5 text-sm transition-all hover:bg-primary/5 hover:text-brandred whitespace-nowrap lg:px-3";

  const spokes = [
    {
      href: "/services/employer-pathway/career-launch-program",
      label: t("nav.careerLaunch"),
      sub: t("nav.careerLaunchSub"),
    },
    {
      href: "/services/employer-pathway/482-visa-employer-matching",
      label: t("nav.employerMatching"),
      sub: t("nav.employerMatchingSub"),
    },
    {
      href: "/services/employer-pathway/186-direct-entry-sponsorship",
      label: t("nav.directEntry"),
      sub: t("nav.directEntrySub"),
    },
  ];

  return (
    <>
      {/* -- Fixed header bar -- */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-24 bg-white shadow-sm font-(family-name:--font-geist-sans) font-semibold">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" onClick={closeAll}>
            <Image
              src="/rb-logo.png"
              alt="RedBridge Consulting"
              width={240}
              height={60}
              className="w-[160px] h-auto object-contain md:w-[240px] 2xl:w-[270px]"
              priority
            />
          </Link>

          {/* -- Desktop navigation -- */}
          <nav aria-label={t("nav.ariaLabel")} className="hidden lg:flex items-center gap-4 lg:gap-5">
            <ul className="flex items-center gap-1 lg:gap-2 list-none m-0 p-0">
              <li>
                <Link
                  href="/"
                  className={`${desktopNavLinkClass} ${isActive("/") ? "bg-primary/10 text-brandred" : "text-gray-700"}`}
                >
                  {t("nav.home")}
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className={`${desktopNavLinkClass} ${isActive("/about") ? "bg-primary/10 text-brandred" : "text-gray-700"}`}
                >
                  {t("nav.about")}
                </Link>
              </li>

              {/* Employer Sponsorship — hover dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setSpokeOpen(true)}
                onMouseLeave={() => setSpokeOpen(false)}
              >
                <Link
                  href="/services/employer-pathway"
                  className={`${desktopNavLinkClass} gap-1 ${isEmployerSponsorshipActive ? "bg-primary/10 text-brandred" : "text-gray-700"}`}
                  onClick={closeAll}
                >
                  {t("nav.employeeSponsorship")}
                  <ChevronDown size={13} strokeWidth={2.5} aria-hidden className={`transition-transform duration-150 ${spokeOpen ? "rotate-180" : ""}`} />
                </Link>

                {spokeOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-2 min-w-[260px] z-50">
                    {spokes.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={closeAll}
                        className={`flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors ${pathname === s.href ? "text-brandred" : "text-gray-800"}`}
                      >
                        <span className="text-sm font-semibold">{s.label}</span>
                        <span className="text-xs text-gray-400 mt-0.5">{s.sub}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/for-employers"
                  className={`${desktopNavLinkClass} ${isActive("/for-employers") ? "bg-primary/10 text-brandred" : "text-gray-700"}`}
                >
                  {t("nav.forEmployers")}
                </Link>
              </li>

              <li>
                <Link
                  href="/services/faq"
                  className={`${desktopNavLinkClass} ${isActive("/services/faq") ? "bg-primary/10 text-brandred" : "text-gray-700"}`}
                >
                  {t("nav.faq")}
                </Link>
              </li>
            </ul>

            {/* Language toggle + CTA */}
            <div className="flex items-center gap-3 ml-2 shrink-0">
              <button
                onClick={switchLocale}
                aria-label={t("localeSwitch.ariaLabel")}
                className="w-16 text-center text-sm text-gray-500 hover:text-brandred transition-colors whitespace-nowrap"
              >
                {t(`localeSwitch.${targetLocale}`)}
              </button>
              <Link
                href={`/contact?ctasrc=nav_bar_cta&locale=${locale}`}
                className="ml-8 inline-flex min-w-36 items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-[#1a1a1a] bg-[#FDC365] hover:bg-[#b88a10] hover:shadow-[0_0_12px_rgba(212,160,23,0.4)] transition-all shadow-sm whitespace-nowrap"
              >
                {t("cta")}
              </Link>
            </div>
          </nav>

          {/* -- Mobile: lang toggle + hamburger -- */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={switchLocale}
              aria-label={t("localeSwitch.ariaLabel")}
              className="w-16 text-center text-sm text-gray-500"
            >
              {t(`localeSwitch.${targetLocale}`)}
            </button>
            <button
              className="p-1 text-gray-700"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? t("actions.closeMenu") : t("actions.openMenu")}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* -- Mobile drawer -- */}
      {menuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 bg-white pt-16 overflow-y-auto lg:hidden">
          <nav aria-label={t("nav.ariaLabel")}>
            <ul className="px-4 py-4 list-none m-0 divide-y divide-gray-100">
              <li>
                <Link
                  href="/"
                  className={`block py-4 font-medium ${isActive("/") ? "text-brandred" : "text-gray-800"}`}
                  onClick={closeAll}
                >
                  {t("nav.home")}
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className={`block py-4 font-medium ${isActive("/about") ? "text-brandred" : "text-gray-800"}`}
                  onClick={closeAll}
                >
                  {t("nav.about")}
                </Link>
              </li>

              {/* Employer Sponsorship — accordion */}
              <li>
                <button
                  className={`w-full flex items-center justify-between py-4 font-medium ${isEmployerSponsorshipActive ? "text-brandred" : "text-gray-800"}`}
                  onClick={() => setSpokeExpanded((v) => !v)}
                >
                  {t("nav.employeeSponsorship")}
                  <ChevronDown size={16} className={`transition-transform duration-150 ${spokeExpanded ? "rotate-180" : ""}`} aria-hidden />
                </button>
                {spokeExpanded && (
                  <ul className="pb-3 pl-3 space-y-1 list-none m-0">
                    <li>
                      <Link
                        href="/services/employer-pathway"
                        className={`block py-2 text-sm font-medium ${isActive("/services/employer-pathway") ? "text-brandred" : "text-gray-700"}`}
                        onClick={closeAll}
                      >
                        {t("nav.employeeSponsorship")} — Overview
                      </Link>
                    </li>
                    {spokes.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={closeAll}
                          className={`block py-2 text-sm ${pathname === s.href ? "text-brandred font-semibold" : "text-gray-700"}`}
                        >
                          {s.label}
                          <span className="ml-1.5 text-xs text-gray-400">{s.sub}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/for-employers"
                  className={`block py-4 font-medium ${isActive("/for-employers") ? "text-brandred" : "text-gray-800"}`}
                  onClick={closeAll}
                >
                  {t("nav.forEmployers")}
                </Link>
              </li>

              <li>
                <Link
                  href="/services/faq"
                  className={`block py-4 font-medium ${isActive("/services/faq") ? "text-brandred" : "text-gray-800"}`}
                  onClick={closeAll}
                >
                  {t("nav.faq")}
                </Link>
              </li>

              {/* CTA */}
              <li className="pt-4 pb-2">
                <Link
                  href={`/contact?ctasrc=nav_bar_cta&locale=${locale}`}
                  className="block text-center py-3 rounded-full font-medium text-white bg-linear-to-r from-brandred to-brandred/80"
                  onClick={closeAll}
                >
                  {t("cta")}
                </Link>
              </li>

              {/* Social icons row */}
              <li className="py-6">
                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    aria-label={t("social.wechat")}
                    onClick={() => setQrModal("wechat")}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#07C160] text-white"
                  >
                    <WeChatIcon />
                  </button>

                  <a
                    href={SOCIAL_LINKS.xiaohongshu}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("social.xiaohongshu")}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF2442] text-white overflow-hidden"
                  >
                    <Image
                      src="/home-assets/xhs-logo.png"
                      alt="Xiaohongshu"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </a>

                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("social.instagram")}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 text-white"
                  >
                    <InstagramIcon />
                  </a>

                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("social.facebook")}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* -- QR code modal -- */}
      {qrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setQrModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={t(`qrModal.${qrModal}`)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-64 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold text-gray-800">{t(`qrModal.${qrModal}`)}</p>
              <button
                onClick={() => setQrModal(null)}
                aria-label={t("qrModal.close")}
                className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src={QR_SRCS[qrModal]}
                alt={t(`qrModal.${qrModal}`)}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

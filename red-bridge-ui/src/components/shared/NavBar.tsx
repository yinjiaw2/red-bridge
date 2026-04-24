"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// â”€â”€â”€ Constants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const LOCALE_COOKIE = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/61400000000",
  xiaohongshu:
    "https://www.xiaohongshu.com/user/profile/6363be4d000000001f017d2c",
  instagram: "https://www.instagram.com/redbridgeconsulting/",
} as const;

type QrTarget = "wechat" | "tiktok";

// â”€â”€â”€ Social SVG icons â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function XiaohongshuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-3.5 5h-4v1.5h3.5v2h-3.5v1h3.5V13h-3.5v1.5H17V16H7v-1.5h3.5V13H7v-1.5h3.5v-1H7V8.5h3.5V7H7V5.5h10.5V7zM9 18.5H7.5v-2H9v2zm7.5 0H15v-2h1.5v2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

// â”€â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function NavBar() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isEmployeeSponsorshipActive = pathname === "/services/employer-pathway";

  const [menuOpen, setMenuOpen] = useState(false);
  const [qrModal, setQrModal] = useState<QrTarget | null>(null);

  // Close mobile menu on desktop resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const switchLocale = useCallback(() => {
    const next = locale === "zh" ? "en" : "zh";
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${COOKIE_MAX_AGE}`;
    router.refresh();
  }, [locale, router]);

  const targetLocale = locale === "zh" ? "en" : "zh";

  function closeAll() {
    setMenuOpen(false);
  }

  const desktopNavLinkClass =
    "inline-flex items-center justify-center text-sm transition-colors hover:text-brandred whitespace-nowrap";

  return (
    <>
      {/* â”€â”€ Fixed header bar â”€â”€ */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 2xl:h-20 bg-white shadow-sm font-(family-name:--font-geist-sans) font-semibold">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            onClick={closeAll}
          >
            <Image
              src="/rb-logo.png"
              alt="RedBridge Consulting"
              width={160}
              height={40}
              className="h-auto object-contain 2xl:w-[180px]"
              priority
            />
          </Link>

          {/* â”€â”€ Desktop navigation â”€â”€ */}
          <nav
            aria-label={t("nav.ariaLabel")}
            className="hidden md:flex items-center gap-6"
          >
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              <li>
                <Link
                  href="/"
                  className={`${desktopNavLinkClass} w-14 ${isActive("/") ? "text-brandred" : "text-gray-700"}`}
                >
                  {t("nav.home")}
                </Link>
              </li>

              <li>
                <Link
                  href="/services/employer-pathway"
                  className={`${desktopNavLinkClass} w-40 ${isEmployeeSponsorshipActive ? "text-brandred" : "text-gray-700"}`}
                  onClick={closeAll}
                >
                  {t("nav.employeeSponsorship")}
                </Link>
              </li>

              <li>
                <Link
                  href="/success-cases"
                  className={`${desktopNavLinkClass} w-28 ${isActive("/success-cases") ? "text-brandred" : "text-gray-700"}`}
                >
                  {t("nav.successCases")}
                </Link>
              </li>

              <li>
                <Link
                  href="/for-employers"
                  className={`${desktopNavLinkClass} w-28 ${isActive("/for-employers") ? "text-brandred" : "text-gray-700"}`}
                >
                  {t("nav.forEmployers")}
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className={`${desktopNavLinkClass} w-20 ${isActive("/about") ? "text-brandred" : "text-gray-700"}`}
                >
                  {t("nav.about")}
                </Link>
              </li>

              <li>
                <Link
                  href="/services/faq"
                  className={`${desktopNavLinkClass} w-16 ${isActive("/services/faq") ? "text-brandred" : "text-gray-700"}`}
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
                href="/contact"
                className="ml-8 inline-flex min-w-36 items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-[#1a1a1a] bg-[#FDC365] hover:bg-[#b88a10] hover:shadow-[0_0_12px_rgba(212,160,23,0.4)] transition-all shadow-sm whitespace-nowrap"
              >
                {t("cta")}
              </Link>
            </div>
          </nav>

          {/* â”€â”€ Mobile: lang toggle + hamburger â”€â”€ */}
          <div className="flex items-center gap-3 md:hidden">
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
              aria-label={
                menuOpen ? t("actions.closeMenu") : t("actions.openMenu")
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* â”€â”€ Mobile drawer â”€â”€ */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-white pt-16 overflow-y-auto md:hidden"
        >
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
                  href="/services/employer-pathway"
                  className={`block py-4 font-medium ${isEmployeeSponsorshipActive ? "text-brandred" : "text-gray-800"}`}
                  onClick={closeAll}
                >
                  {t("nav.employeeSponsorship")}
                </Link>
              </li>

              <li>
                <Link
                  href="/success-cases"
                  className={`block py-4 font-medium ${isActive("/success-cases") ? "text-brandred" : "text-gray-800"}`}
                  onClick={closeAll}
                >
                  {t("nav.successCases")}
                </Link>
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
                  href="/about"
                  className={`block py-4 font-medium ${isActive("/about") ? "text-brandred" : "text-gray-800"}`}
                  onClick={closeAll}
                >
                  {t("nav.about")}
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
                  href="/contact"
                  className="block text-center py-3 rounded-full font-medium text-white bg-linear-to-r from-brandred to-brandred/80"
                  onClick={closeAll}
                >
                  {t("cta")}
                </Link>
              </li>

              {/* Social icons row */}
              <li className="py-6">
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("social.whatsapp")}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white"
                  >
                    <WhatsAppIcon />
                  </a>

                  <a
                    href={SOCIAL_LINKS.xiaohongshu}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("social.xiaohongshu")}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF2442] text-white"
                  >
                    <XiaohongshuIcon />
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
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* â”€â”€ QR code modal â”€â”€ */}
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
              <p className="font-semibold text-gray-800">
                {t(`qrModal.${qrModal}`)}
              </p>
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
                src={`/images/qr-${qrModal}.png`}
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

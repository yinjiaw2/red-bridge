import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const LOCALES = new Set(['en', 'zh']);
const DEFAULT_LOCALE = 'en';
const LOCALE_COOKIE = 'NEXT_LOCALE';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale = LOCALES.has(requested ?? '')
    ? requested!
    : LOCALES.has(cookieLocale ?? '')
      ? cookieLocale!
      : DEFAULT_LOCALE;

  // Static imports are bundled at build time — no filesystem access at runtime.
  // This is required for Cloudflare Workers compatibility.
  const messages =
    locale === 'zh'
      ? (await import('../messages/zh/index')).default
      : (await import('../messages/en/index')).default;

  return { locale, messages };
});

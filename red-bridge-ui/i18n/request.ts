import { getRequestConfig } from 'next-intl/server';
import { routing } from '../src/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!routing.locales.includes(locale as 'en' | 'zh')) {
    locale = routing.defaultLocale;
  }

  // Static imports are bundled at build time — no filesystem access at runtime.
  // This is required for Cloudflare Workers compatibility.
  const messages =
    locale === 'zh'
      ? (await import('../messages/zh/index')).default
      : (await import('../messages/en/index')).default;

  return { locale, messages };
});

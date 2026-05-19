import { getRequestConfig } from 'next-intl/server';
import { routing } from '../src/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: 'en' | 'zh' = routing.locales.includes(requested as 'en' | 'zh')
    ? (requested as 'en' | 'zh')
    : routing.defaultLocale;

  // Static imports are bundled at build time — no filesystem access at runtime.
  // This is required for Cloudflare Workers compatibility.
  const messages =
    locale === 'zh'
      ? (await import('../messages/zh/index')).default
      : (await import('../messages/en/index')).default;

  return { locale, messages };
});

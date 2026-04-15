import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';
import fs from 'fs';
import path from 'path';

const LOCALES = new Set(['en', 'zh']);
const DEFAULT_LOCALE = 'en';
const LOCALE_COOKIE = 'NEXT_LOCALE';

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  const result = {...target};

  for (const [key, value] of Object.entries(source)) {
    const existing = result[key];
    result[key] =
      isPlainObject(existing) && isPlainObject(value)
        ? deepMerge(existing, value)
        : value;
  }

  return result;
}

function getJsonFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, {withFileTypes: true});

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getJsonFiles(fullPath);
    }

    return entry.name.endsWith('.json') ? [fullPath] : [];
  });
}

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale = LOCALES.has(requested ?? '')
    ? requested!
    : LOCALES.has(cookieLocale ?? '')
      ? cookieLocale!
      : DEFAULT_LOCALE;

  const messagesDir = path.join(process.cwd(), 'messages', locale);
  const files = getJsonFiles(messagesDir);
  const messages = files.reduce<Record<string, unknown>>((acc, file) => {
    const raw = fs.readFileSync(file, 'utf-8').replace(/^\uFEFF/, '');
    const content = JSON.parse(raw) as Record<
      string,
      unknown
    >;
    return deepMerge(acc, content);
  }, {});

  return {locale, messages};
});

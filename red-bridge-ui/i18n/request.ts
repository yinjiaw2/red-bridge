import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';
import fs from 'fs';
import path from 'path';

const LOCALES = new Set(['en', 'zh']);
const DEFAULT_LOCALE = 'en';
const LOCALE_COOKIE = 'NEXT_LOCALE';

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
  const files = fs.readdirSync(messagesDir).filter((f) => f.endsWith('.json'));
  const messages = files.reduce<Record<string, unknown>>((acc, file) => {
    const content = JSON.parse(
      fs.readFileSync(path.join(messagesDir, file), 'utf-8')
    );
    return {...acc, ...content};
  }, {});

  return {locale, messages};
});

import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import fs from 'fs';
import path from 'path';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

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

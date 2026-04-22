import type { Metadata } from "next";

export const SITE_URL = "https://redbridge-consulting.com.au";
export const SITE_NAME = "RedBridge Consulting";
export const SITE_NAME_ZH = "红桥咨询";

export const OG_IMAGE = {
  url: "/rb-logo.png",
  width: 160,
  height: 44,
  alt: "RedBridge Consulting",
};

export const DEFAULT_DESCRIPTION =
  "Get placed with verified employers. Gain the right experience. Move from study to 482 visa and PR with confidence. Melbourne & Sydney's leading migration and career consultancy.";

export type LocaleMeta = {
  title: string;
  description: string;
};

/**
 * Builds a full Next.js Metadata object for a page in both EN and ZH.
 * EN titles flow through the root layout template (%s | RedBridge Consulting).
 * ZH titles use `absolute` to substitute 红桥咨询 as the brand suffix.
 */
export function buildMetadata(
  locale: string,
  en: LocaleMeta,
  zh: LocaleMeta,
  path: string,
): Metadata {
  const isZh = locale === "zh";
  const meta = isZh ? zh : en;
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: isZh ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        "en-AU": url,
        "zh-CN": url,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE.url],
    },
  };
}

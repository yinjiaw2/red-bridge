import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { FloatingContactButton } from "@/components/shared/FloatingContactButton";
import { JsonLd } from "@/components/seo/JsonLd";
import Script from "next/script";
import { SITE_URL, SITE_NAME, OG_IMAGE, DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Australia Career and Recruitment Specialists`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_AU",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "REDBRIDGE CONSULTING PTY LTD",
  url: SITE_URL,
  logo: `${SITE_URL}/rb-logo.png`,
  image: `${SITE_URL}/rb-logo.png`,
  description:
    "Australian migration and career placement consultancy specialising in skilled migration (189, 190, 491), employer sponsorship (482/186), and career launch programs for international graduates.",
  telephone: "+61399617301",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 9, Tower 3, 18-38 Siddeley Street",
    addressLocality: "Docklands",
    addressRegion: "VIC",
    postalCode: "3008",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.8228,
    longitude: 144.9569,
  },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "City", name: "Sydney" },
    { "@type": "Country", name: "Australia" },
  ],
  sameAs: [
    "https://www.facebook.com/people/RedBridge-Consulting/61587635078885/",
    "https://www.instagram.com/redbridgeconsulting/",
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["en-AU", "zh-CN"],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full antialiased">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KQS3JSRV');`}
        </Script>
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQS3JSRV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <FloatingContactButton locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

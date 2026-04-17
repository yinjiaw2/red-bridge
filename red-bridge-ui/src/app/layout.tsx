import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { FloatingContactButton } from "@/components/shared/FloatingContactButton";

export const metadata: Metadata = {
  title: "Red Bridge",
  description: "Red Bridge UI",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <FloatingContactButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

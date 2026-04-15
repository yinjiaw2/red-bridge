import type { Metadata } from "next";
import { GlobalFloatingActions } from "@/components/site/GlobalFloatingActions";
import "./globals.css";

export const metadata: Metadata = {
  title: "RedBridge Consulting",
  description:
    "Build your career in Australia with verified employers, structured pathways, and honest migration support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {children}
        <GlobalFloatingActions />
      </body>
    </html>
  );
}

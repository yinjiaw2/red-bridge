import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://connect.facebook.net https://static.cloudflareinsights.com https://signals.birch.events",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://www.facebook.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.googletagmanager.com https://www.google.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://connect.facebook.net https://www.facebook.com https://signals.birch.events https://script.google.com https://script.googleusercontent.com",
  "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net",
  "object-src 'none'",
  "base-uri 'self'",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 86400,
  },
  async redirects() {
    return [
      // v2 → canonical (Phase 1)
      { source: "/:locale/home-v2", destination: "/:locale", permanent: true },
      { source: "/:locale/about-v2", destination: "/:locale/about", permanent: true },
      { source: "/:locale/for-employers-v2", destination: "/:locale/for-employers", permanent: true },
      { source: "/:locale/success-cases-v2", destination: "/:locale/success-cases", permanent: true },
      { source: "/:locale/services/faq-v2", destination: "/:locale/services/faq", permanent: true },
      // employer-pathway-v2 → hub (Phase 2)
      { source: "/:locale/services/employer-pathway-v2", destination: "/:locale/services/employer-pathway", permanent: true },
      // deleted v1 services pages
      { source: "/:locale/services/career-launch", destination: "/:locale/services/employer-pathway/career-launch-program", permanent: true },
      { source: "/:locale/services/189-pathway", destination: "/:locale", permanent: true },
      { source: "/:locale/services/190-pathway", destination: "/:locale", permanent: true },
      { source: "/:locale/services/491-pathway", destination: "/:locale", permanent: true },
      { source: "/:locale/services/home", destination: "/:locale/services/employer-pathway", permanent: true },
      { source: "/:locale/services", destination: "/:locale/services/employer-pathway", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/_next/image(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/home-assets/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);

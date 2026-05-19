import type { MetadataRoute } from "next";

const BASE_URL = "https://redbridge-consulting.com.au";

const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
  {
    path: "/services/189-pathway",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services/190-pathway",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services/491-pathway",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services/career-launch",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/employer-pathway",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/faq",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/for-employers",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/success-cases",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    // English URL (no prefix)
    entries.push({
      url: `${BASE_URL}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });

    // Chinese URL (/zh prefix)
    entries.push({
      url: `${BASE_URL}/zh${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  return entries;
}

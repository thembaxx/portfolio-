import type { MetadataRoute } from "next";
import { siteUrl, isIndexable } from "@/lib/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];
  const baseUrl = siteUrl;
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...projects.map(project => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: .8,
    })),
  ];
}

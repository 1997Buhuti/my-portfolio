import type { MetadataRoute } from "next";

import { portfolioData } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/`,
    changeFrequency: "monthly",
    priority: 1,
  };

  const projects: MetadataRoute.Sitemap = portfolioData.projects.map(
    (project) => ({
      url: `${SITE_URL}/projects/${project.slug}/`,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [home, ...projects];
}

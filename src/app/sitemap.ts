import { articles } from "@/app/articles";
import { galleryCategories } from "@/app/galerie/gallery-data";
import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map(({ id }) => ({
    url: `${SITE_URL}/blog/${id}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const galleryPages: MetadataRoute.Sitemap = Object.entries(
    galleryCategories,
  ).flatMap(([categoryId, category]) => [
    {
      url: `${SITE_URL}/galerie/${categoryId}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...category.images.map(({ id }) => ({
      url: `${SITE_URL}/detail/${categoryId}/${id}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]);

  return [...staticPages, ...articlePages, ...galleryPages];
}

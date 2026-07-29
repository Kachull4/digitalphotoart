import { describe, expect, it } from "vitest";
import {
  articles,
  getArticleById,
  getArticlesByNewest,
  getLatestArticles,
} from "./articles";
import { articleContentById } from "./blog/_content";
import { formatCurrency, formatDate } from "./_lib/formatters";
import {
  galleryCategories,
  getGalleryCategory,
  getGalleryItem,
} from "./galerie/gallery-data";
import type { GalleryCategory } from "./galerie/gallery-data";

describe("gallery data", () => {
  const categoryEntries: [string, GalleryCategory][] =
    Object.entries(galleryCategories);
  const galleryItems = categoryEntries.flatMap(([, category]) => category.images);

  it("keeps category and item IDs unique", () => {
    const categoryIds = categoryEntries.map(([categoryId]) => categoryId);
    const itemIds = galleryItems.map(({ id }) => id);

    expect(new Set(categoryIds).size).toBe(categoryIds.length);
    expect(new Set(itemIds).size).toBe(itemIds.length);
  });

  it("resolves categories and stable item IDs", () => {
    const [categoryId, category] = categoryEntries[0];
    const item = category.images[0];

    expect(getGalleryCategory(categoryId)).toBe(category);
    expect(getGalleryItem(categoryId, item.id)).toBe(item);
  });

  it("keeps legacy numeric item URLs working", () => {
    const [categoryId, category] = categoryEntries[0];

    expect(getGalleryItem(categoryId, "0")).toBe(category.images[0]);
    expect(getGalleryItem(categoryId, "-1")).toBeUndefined();
  });

  it("returns undefined for unknown records", () => {
    expect(getGalleryCategory("unknown")).toBeUndefined();
    expect(getGalleryItem("unknown", "unknown")).toBeUndefined();
  });
});

describe("article data", () => {
  it("keeps article IDs unique and dates in ISO format", () => {
    const articleIds = articles.map(({ id }) => id);

    expect(new Set(articleIds).size).toBe(articleIds.length);

    for (const article of articles) {
      expect(article.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("resolves articles by ID", () => {
    const article = articles[0];

    expect(getArticleById(article.id)).toBe(article);
    expect(getArticleById("unknown")).toBeUndefined();
  });

  it("keeps article metadata and content in sync", () => {
    const articleIds = articles.map(({ id }) => id).sort();
    const contentIds = Object.keys(articleContentById).sort();

    expect(contentIds).toEqual(articleIds);
  });

  it("sorts articles from newest to oldest without mutating the registry", () => {
    const originalOrder = articles.map(({ id }) => id);
    const sortedArticles = getArticlesByNewest();
    const sortedDates = sortedArticles.map(({ date }) => date);

    expect(sortedDates).toEqual([...sortedDates].sort().reverse());
    expect(articles.map(({ id }) => id)).toEqual(originalOrder);
    expect(getLatestArticles(3)).toEqual(sortedArticles.slice(0, 3));
  });
});

describe("formatters", () => {
  it("formats Czech koruna prices consistently", () => {
    expect(formatCurrency(500, "CZK")).toBe("500 Kč");
    expect(formatCurrency(12000, "CZK")).toBe("12 000 Kč");
  });

  it("formats ISO dates for Czech article presentation", () => {
    expect(formatDate("2026-05-22")).toBe("22.5.2026");
  });
});

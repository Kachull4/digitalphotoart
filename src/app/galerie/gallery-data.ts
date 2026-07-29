import { images as canvasHigh } from "@/app/galerie/arrays/canvas-high";
import { images as canvasWide } from "@/app/galerie/arrays/canvas-wide";
import { images as photoHigh } from "@/app/galerie/arrays/photo-high";
import { images as photoWide } from "@/app/galerie/arrays/photo-wide";
import { GalleryItem } from "@/app/galerie/types";

export type GalleryCategory = {
  title: string;
  images: GalleryItem[];
};

export const galleryCategories = {
  "fotografie-na-sirku": {
    title: "Fotografie na šířku",
    images: photoWide,
  },
  "fotografie-na-vysku": {
    title: "Fotografie na výšku",
    images: photoHigh,
  },
  "obrazy-na-sirku": {
    title: "Obrazy na šířku",
    images: canvasWide,
  },
  "obrazy-na-vysku": {
    title: "Obrazy na výšku",
    images: canvasHigh,
  },
} satisfies Record<string, GalleryCategory>;

export type GalleryCategorySlug = keyof typeof galleryCategories;

export const isGalleryCategorySlug = (
  slug: string,
): slug is GalleryCategorySlug => slug in galleryCategories;

export const getGalleryCategory = (slug: string): GalleryCategory | undefined =>
  isGalleryCategorySlug(slug) ? galleryCategories[slug] : undefined;

export const getGalleryItem = (categorySlug: string, itemId: string) => {
  const category = getGalleryCategory(categorySlug);

  if (!category) {
    return undefined;
  }

  const legacyItemIndex = Number(itemId);

  return Number.isInteger(legacyItemIndex) && legacyItemIndex >= 0
    ? category.images[legacyItemIndex]
    : category.images.find(({ id }) => id === itemId);
};

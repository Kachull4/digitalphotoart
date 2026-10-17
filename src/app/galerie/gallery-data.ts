import { images as canvasAbstract } from "@/app/galerie/arrays/canvas-abstract";
import { images as canvasHigh } from "@/app/galerie/arrays/canvas-high";
import { images as canvasWide } from "@/app/galerie/arrays/canvas-wide";
import { images as photoHigh } from "@/app/galerie/arrays/photo-high";
import { images as photoWide } from "@/app/galerie/arrays/photo-wide";
import {
  attachTechnicalData,
  czechNatureTechnicalData,
  petTechnicalData,
  queenslandTechnicalData,
} from "@/app/galerie/arrays/photo-technical-data";
import { images as yellowstone } from "@/app/galerie/arrays/yellowstone";
import { GalleryItem } from "@/app/galerie/types";

const queensland = [...photoWide, ...photoHigh]
  .filter((image) => image.location.includes("Austrálie"))
  .map((image) => ({
    ...image,
    id: `australie-${image.id}`,
  }));

const pets = photoWide
  .filter((image) => image.id === "kukadla")
  .map((image) => ({
    ...image,
    id: `mazlicci-${image.id}`,
  }));

const czechNature = photoWide
  .filter((image) => ["vyr-velky-1", "vyr-velky-2", "zajic-na-hrane-sveta"].includes(image.id))
  .map((image) => ({
    ...image,
    id: `ceska-priroda-${image.id}`,
  }));

export type GalleryCategory = {
  title: string;
  subtitle?: string;
  description?: string;
  images: GalleryItem[];
};

export const galleryCategories = {
  "australie": {
    title: "Skrytý Queensland",
    subtitle: "Austrálie · Queensland · 2024",
    description:
      "Žáby, cikády, plazi a další obyvatelé tropického severu, které člověk snadno přehlédne.",
    images: attachTechnicalData(queensland, queenslandTechnicalData),
  },
  "yellowstone": {
    title: "Nespoutaný Yellowstone",
    subtitle: "USA · Wyoming · 2025",
    description:
      "Divoká zvířata, geotermální krajina a noc pod Mléčnou dráhou.",
    images: yellowstone,
  },
  "divocina-za-humny": {
    title: "Divočina za humny",
    subtitle: "Česko",
    description:
      "Setkání s divokými zvířaty, za kterými nebylo potřeba cestovat přes půl světa.",
    images: attachTechnicalData(czechNature, czechNatureTechnicalData),
  },
  "domaci-partaci": {
    title: "Domácí parťáci",
    subtitle: "Zvířata, která patří do rodiny",
    description:
      "Portréty domácích mazlíčků s vlastní povahou a výrazem.",
    images: attachTechnicalData(pets, petTechnicalData),
  },
  "obrazy-prirody": {
    title: "Obrazy přírody",
    images: [...canvasWide, ...canvasHigh],
  },
  "abstraktni-obrazy": {
    title: "Abstraktní obrazy",
    images: canvasAbstract,
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

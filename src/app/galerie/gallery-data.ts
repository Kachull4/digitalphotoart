import { images as canvasAbstract } from "@/app/galerie/arrays/canvas-abstract";
import { images as canvasNature } from "@/app/galerie/arrays/canvas-nature";
import { images as canvasNatureMore } from "@/app/galerie/arrays/canvas-nature-more";
import { images as costaRica } from "@/app/galerie/arrays/costa-rica";
import { images as photography } from "@/app/galerie/arrays/photography";
import { images as queenslandAdditional } from "@/app/galerie/arrays/queensland";
import {
  attachTechnicalData,
  czechNatureTechnicalData,
  petTechnicalData,
  queenslandTechnicalData,
} from "@/app/galerie/arrays/photo-technical-data";
import { images as yellowstone } from "@/app/galerie/arrays/yellowstone";
import { GalleryItem } from "@/app/galerie/types";

const queensland = [...photography, ...queenslandAdditional]
  .filter((image) => image.location.includes("Austrálie"))
  .map((image) => ({
    ...image,
    id: `australie-${image.id}`,
  }));

const queenslandCapturedAtById: Record<string, string> = {
  "australie-cikada-na-kmeni": "2024-11-18T14:03:24",
  "australie-zrozeni-cikady": "2024-11-18T14:15:12",
  "australie-silueta-sidla": "2024-11-18T16:11:43",
  "australie-jezura-zblizka": "2024-11-18T16:28:25",
  "australie-klokan-skalni": "2024-11-18T21:50:03",
  "australie-bradavicnik-arafursky": "2024-11-19T13:09:17",
  "australie-lednak-obrovsky": "2024-11-20T08:24:29",
  "australie-zabi-oko": "2024-11-20T13:20:01",
  "australie-zaba-v-desti": "2024-11-21T12:49:10",
  "australie-svlecena-cikada": "2024-11-21T13:26:16",
  "australie-pakobylky-na-vetvi": "2024-11-22T11:48:45",
  "australie-rosnicka-zlutoboka": "2024-11-22T12:55:15",
  "australie-zabi-romance": "2024-11-23T03:19:00",
  "australie-barevny-belasek": "2024-11-26T12:36:26",
  "australie-kasuar-prilbovy": "2024-11-28T04:54:02",
  "australie-tabon-lesni": "2024-11-29T02:10:36",
  "australie-lesni-drak": "2024-11-29T08:00:34",
  "australie-maskovana-zaba": "2024-11-29T14:18:53",
  "australie-pagekon-lupenoocasy": "2024-11-29T14:58:28",
};

const pets = photography
  .filter((image) => image.id === "kukadla")
  .map((image) => ({
    ...image,
    id: `mazlicci-${image.id}`,
  }));

const czechNature = photography
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
  "ziva-kostarika": {
    title: "Živá Kostarika",
    subtitle: "Kostarika · 2026",
    description:
      "Žáby, hmyz a další obyvatelé tropického pralesa zachycení z bezprostřední blízkosti.",
    images: costaRica,
  },
  "nespoutany-yellowstone": {
    title: "Nespoutaný Yellowstone",
    subtitle: "USA · Wyoming · 2025",
    description:
      "Divoká zvířata, geotermální krajina a noc pod Mléčnou dráhou.",
    images: yellowstone,
  },
  "skryty-queensland": {
    title: "Skrytý Queensland",
    subtitle: "Austrálie · Queensland · 2024",
    description:
      "Žáby, cikády, plazi a další obyvatelé tropického severu, které člověk snadno přehlédne.",
    images: attachTechnicalData(queensland, queenslandTechnicalData).sort(
      (first, second) =>
        queenslandCapturedAtById[first.id].localeCompare(
          queenslandCapturedAtById[second.id],
        ),
    ),
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
    images: [...canvasNature, ...canvasNatureMore],
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

import { PhotoItem } from "../types";

type PhotoTechnicalData = Pick<
  PhotoItem,
  "focalLength" | "aperture" | "shutterSpeed" | "iso"
> & Partial<Pick<PhotoItem, "lens">>;

export const attachTechnicalData = (
  images: PhotoItem[],
  technicalData: PhotoTechnicalData[],
): PhotoItem[] => {
  if (images.length !== technicalData.length) {
    throw new Error("Počet fotografií neodpovídá počtu EXIF záznamů.");
  }

  return images.map((image, index) => ({
    ...image,
    ...technicalData[index],
  }));
};

export const queenslandTechnicalData: PhotoTechnicalData[] = [
  { focalLength: "90 mm", aperture: "f/10", shutterSpeed: "1/200 s", iso: "ISO 400" },
  { focalLength: "90 mm", aperture: "f/10", shutterSpeed: "1/200 s", iso: "ISO 400" },
  { focalLength: "382 mm", aperture: "f/13", shutterSpeed: "1/400 s", iso: "ISO 12800" },
  { focalLength: "90 mm", aperture: "f/10", shutterSpeed: "1/400 s", iso: "ISO 12800" },
  { focalLength: "90 mm", aperture: "f/9", shutterSpeed: "1/200 s", iso: "ISO 100" },
  { focalLength: "90 mm", aperture: "f/13", shutterSpeed: "1/200 s", iso: "ISO 640" },
  { focalLength: "90 mm", aperture: "f/13", shutterSpeed: "1/200 s", iso: "ISO 200" },
  { focalLength: "90 mm", aperture: "f/10", shutterSpeed: "1/250 s", iso: "ISO 200" },
  { focalLength: "600 mm", aperture: "f/7,1", shutterSpeed: "1/800 s", iso: "ISO 6400" },
  { focalLength: "90 mm", aperture: "f/13", shutterSpeed: "1/200 s", iso: "ISO 200" },
  { focalLength: "90 mm", aperture: "f/10", shutterSpeed: "1/200 s", iso: "ISO 400" },
  { focalLength: "90 mm", aperture: "f/10", shutterSpeed: "1/200 s", iso: "ISO 100" },
  { focalLength: "600 mm", aperture: "f/6,3", shutterSpeed: "1/400 s", iso: "ISO 25600" },
  { focalLength: "90 mm", aperture: "f/11", shutterSpeed: "1/200 s", iso: "ISO 400" },
  { focalLength: "90 mm", aperture: "f/13", shutterSpeed: "1/200 s", iso: "ISO 100" },
  { focalLength: "318 mm", aperture: "f/6,3", shutterSpeed: "1/640 s", iso: "ISO 8000" },
  { focalLength: "600 mm", aperture: "f/8", shutterSpeed: "1/2000 s", iso: "ISO 2000" },
  { focalLength: "90 mm", aperture: "f/10", shutterSpeed: "1/200 s", iso: "ISO 100" },
  { focalLength: "600 mm", aperture: "f/14", shutterSpeed: "1/640 s", iso: "ISO 25600" },
];

export const petTechnicalData: PhotoTechnicalData[] = [
  { focalLength: "35 mm", aperture: "f/1,4", shutterSpeed: "1/160 s", iso: "ISO 12800" },
];

export const czechNatureTechnicalData: PhotoTechnicalData[] = [
  { focalLength: "338 mm", aperture: "f/10", shutterSpeed: "1/5000 s", iso: "ISO 5000" },
  { focalLength: "600 mm", aperture: "f/10", shutterSpeed: "1/4000 s", iso: "ISO 5000" },
  { focalLength: "600 mm", aperture: "f/8", shutterSpeed: "1/800 s", iso: "ISO 2500" },
];

const yellowstoneTelephotoLens = "Sony FE 200–600 mm f/5,6–6,3 G OSS";
const yellowstoneWideAngleLens = "Sony FE 16–35 mm f/2,8 GM";
const yellowstoneMacroLens = "Sony FE 90 mm f/2,8 Macro G OSS";
const yellowstoneWideAngleImageIndexes = new Set([2, 3, 18, 19, 21]);

export const yellowstoneTechnicalData: PhotoTechnicalData[] = [
  { focalLength: "376 mm", aperture: "f/10", shutterSpeed: "1/2000 s", iso: "ISO 25600" },
  { focalLength: "600 mm", aperture: "f/10", shutterSpeed: "1/2000 s", iso: "ISO 500" },
  { focalLength: "16 mm", aperture: "f/2,8", shutterSpeed: "6 s", iso: "ISO 6400" },
  { focalLength: "25 mm", aperture: "f/16", shutterSpeed: "1/800 s", iso: "ISO 2000" },
  { focalLength: "600 mm", aperture: "f/10", shutterSpeed: "1/1000 s", iso: "ISO 20000" },
  { focalLength: "270 mm", aperture: "f/10", shutterSpeed: "1/1000 s", iso: "ISO 12800" },
  { focalLength: "600 mm", aperture: "f/10", shutterSpeed: "1/1000 s", iso: "ISO 25600" },
  { focalLength: "600 mm", aperture: "f/10", shutterSpeed: "1/1000 s", iso: "ISO 12800" },
  { focalLength: "600 mm", aperture: "f/8", shutterSpeed: "1/1000 s", iso: "ISO 1000" },
  { focalLength: "600 mm", aperture: "f/10", shutterSpeed: "1/2000 s", iso: "ISO 5000" },
  { focalLength: "35 mm", aperture: "f/16", shutterSpeed: "1/500 s", iso: "ISO 10000" },
  { focalLength: "600 mm", aperture: "f/8", shutterSpeed: "1/1600 s", iso: "ISO 2000" },
  { focalLength: "600 mm", aperture: "f/10", shutterSpeed: "1/2500 s", iso: "ISO 5000" },
  { focalLength: "90 mm", aperture: "f/16", shutterSpeed: "1/200 s", iso: "ISO 3200" },
  { focalLength: "200 mm", aperture: "f/16", shutterSpeed: "1/8000 s", iso: "ISO 2500" },
  { focalLength: "600 mm", aperture: "f/10", shutterSpeed: "1/2000 s", iso: "ISO 25600" },
  { focalLength: "205 mm", aperture: "f/10", shutterSpeed: "1/2000 s", iso: "ISO 5000" },
  { focalLength: "600 mm", aperture: "f/14", shutterSpeed: "1/2000 s", iso: "ISO 16000" },
  { focalLength: "33 mm", aperture: "f/16", shutterSpeed: "1/1000 s", iso: "ISO 1250" },
  { focalLength: "19 mm", aperture: "f/16", shutterSpeed: "1/400 s", iso: "ISO 800" },
  { focalLength: "200 mm", aperture: "f/16", shutterSpeed: "1/1000 s", iso: "ISO 500" },
  { focalLength: "16 mm", aperture: "f/8", shutterSpeed: "1/400 s", iso: "ISO 125" },
  { focalLength: "600 mm", aperture: "f/8", shutterSpeed: "1/1000 s", iso: "ISO 500" },
  { focalLength: "600 mm", aperture: "f/8", shutterSpeed: "1/1000 s", iso: "ISO 400" },
  { focalLength: "600 mm", aperture: "f/8", shutterSpeed: "1/1000 s", iso: "ISO 400" },
  { focalLength: "600 mm", aperture: "f/8", shutterSpeed: "1/1000 s", iso: "ISO 320" },
  { focalLength: "600 mm", aperture: "f/8", shutterSpeed: "1/800 s", iso: "ISO 500" },
  { focalLength: "518 mm", aperture: "f/8", shutterSpeed: "1/1250 s", iso: "ISO 800" },
  { focalLength: "200 mm", aperture: "f/10", shutterSpeed: "1/1000 s", iso: "ISO 400" },
  { focalLength: "200 mm", aperture: "f/8", shutterSpeed: "1/640 s", iso: "ISO 640" },
].map((technicalData, index) => ({
  ...technicalData,
  lens:
    index === 13
      ? yellowstoneMacroLens
      : yellowstoneWideAngleImageIndexes.has(index)
        ? yellowstoneWideAngleLens
        : yellowstoneTelephotoLens,
}));

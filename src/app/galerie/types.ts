import { StaticImageData } from "next/image";

export type GalleryImageList = [StaticImageData, ...StaticImageData[]];

export type Money = {
  amount: number;
  currency: "CZK";
};

export type GalleryItemBase = {
  id: string;
  src: StaticImageData;
  title: string;
  price: Money;
  availability: "available" | "unavailable";
};

export type PhotoItem = GalleryItemBase & {
  type: "photo";
  species: string;
  location: string;
  resolution: string;
  camera: string;
  lens: string;
};

export type CanvasItem = GalleryItemBase & {
  type: "canvas";
  images: GalleryImageList;
  canvasSize: string;
  canvasType: string;
  colors: string;
  technique: string;
  year: string;
  description?: string;
  photo?: StaticImageData;
};

export type GalleryItem = PhotoItem | CanvasItem;

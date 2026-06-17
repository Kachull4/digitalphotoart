import { StaticImageData } from "next/image";

export type GalleryItemBase = {
  src: string;
  title: string;
  price: string;
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
  images: string[];
  canvasSize: string;
  canvasType: string;
  colors: string;
  technique: string;
  year: string;
  description: string;
  photo: StaticImageData;
};

export type GalleryItem = PhotoItem | CanvasItem;

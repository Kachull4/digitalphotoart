"use client"

import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/photo-wide";

export default function PhotoW() {
  return (
    <GalleryPage images={images.map((i) => i.src)} title="Fotografie na šířku" slug="photo-wide" />
  );
}

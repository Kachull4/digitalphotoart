"use client"

import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/photo-high";

export default function PhotoH() {
  return (
    <GalleryPage
      images={images.map((i) => i.src)}
      title="Fotografie na výšku"
      slug="photo-high"
    />
  );
}

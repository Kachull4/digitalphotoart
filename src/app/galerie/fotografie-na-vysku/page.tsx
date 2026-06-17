"use client"

import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/photo-high";

export default function PhotoH() {
  return (
    <GalleryPage
      images={images}
      title="Fotografie na výšku"
      slug="fotografie-na-vysku"
    />
  );
}

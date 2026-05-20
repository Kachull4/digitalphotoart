"use client"

import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/canvas-high";

export default function CanvasW() {
  return <GalleryPage images={images} title="Obrazy na výšku" slug="canvas-high" />;
}

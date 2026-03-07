"use client"

import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/canvas-high";

export default function CanvasW() {
  return <GalleryPage images={images.map(i => i.src)} title="Obrazy na výšku" slug="canvas-high" />;
}

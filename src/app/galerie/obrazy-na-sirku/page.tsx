"use client"

import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/canvas-wide";

export default function CanvasH() {
  return <GalleryPage images={images.map(i => i.src)} title="Obrazy na šířku" slug="canvas-wide"/>;
}

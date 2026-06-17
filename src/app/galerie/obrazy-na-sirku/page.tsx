"use client"

import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/canvas-wide";

export default function CanvasH() {
  return <GalleryPage images={images} title="Obrazy na šířku" slug="obrazy-na-sirku"/>;
}

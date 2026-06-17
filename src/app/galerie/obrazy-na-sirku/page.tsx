import { GalleryPage } from "@/app/components/gallery";
import { galleryCategories } from "../gallery-data";

const slug = "obrazy-na-sirku";

export default function CanvasH() {
  return <GalleryPage category={galleryCategories[slug]} slug={slug} />;
}

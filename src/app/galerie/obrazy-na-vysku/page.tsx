import { GalleryPage } from "@/app/components/gallery";
import { galleryCategories } from "../gallery-data";

const slug = "obrazy-na-vysku";

export default function CanvasW() {
  return <GalleryPage category={galleryCategories[slug]} slug={slug} />;
}

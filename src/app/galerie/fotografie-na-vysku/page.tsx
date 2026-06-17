import { GalleryPage } from "@/app/components/gallery";
import { galleryCategories } from "../gallery-data";

const slug = "fotografie-na-vysku";

export default function PhotoH() {
  return <GalleryPage category={galleryCategories[slug]} slug={slug} />;
}

import { GalleryPage } from "@/app/components/gallery";
import { galleryCategories } from "../gallery-data";

const slug = "fotografie-na-sirku";

export default function PhotoW() {
  return <GalleryPage category={galleryCategories[slug]} slug={slug} />;
}

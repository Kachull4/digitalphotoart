import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/cernobile";

export default function Cernobile() {
  return <GalleryPage images={images.map(i => i.src)} title="Černobílé" slug="cernobile"/>;
}

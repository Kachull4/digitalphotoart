import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/cesko";

export default function Cesko() {
  return <GalleryPage images={images.map(i => i.src)} title="Česko" slug="cesko"/>;
}

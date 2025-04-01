import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/cesko";

export default function Cesko() {
  return <GalleryPage images={images} title="Česko" slug="cesko"/>;
}

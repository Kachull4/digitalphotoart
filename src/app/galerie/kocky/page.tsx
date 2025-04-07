import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/kocky";

export default function Kocky() {
  return (
    <GalleryPage images={images.map((i) => i.src)} title="Kočky" slug="kocky" />
  );
}

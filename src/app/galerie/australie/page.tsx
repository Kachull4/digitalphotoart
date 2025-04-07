import { GalleryPage } from "@/app/components/gallery";
import { images } from "../arrays/australie";

export default function Australie() {
  return (
    <GalleryPage
      images={images.map((i) => i.src)}
      title="Austrálie"
      slug="australie"
    />
  );
}

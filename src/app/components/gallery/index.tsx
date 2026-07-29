import type {
  GalleryCategory,
  GalleryCategorySlug,
} from "@/app/galerie/gallery-data";
import { Gallery } from "../../components/gallery/gallery";
import styles from "./gallery.module.css";

type Props = {
  category: GalleryCategory;
  slug: GalleryCategorySlug;
};

export const GalleryPage = ({ category, slug }: Props) => {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.heading}>{category.title}</h1>
        <Gallery images={category.images} slug={slug} />
      </div>
    </main>
  );
};

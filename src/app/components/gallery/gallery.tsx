import type { GalleryItem } from "@/app/galerie/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./gallery.module.css";

type Props = {
  images: GalleryItem[];
  slug: string;
};

export const Gallery = ({ images, slug }: Props) => {
  return (
    <div className={styles.grid}>
      {images.map((image) => (
        <Link
          className={styles.link}
          href={`/detail/${slug}/${image.id}`}
          key={image.id}
          aria-label={`Otevřít detail: ${image.title}`}
        >
          <div className={styles.imageItem}>
            <Image
              className={styles.image}
              src={image.src}
              alt={image.title}
              sizes="(min-width: 1200px) 33vw, (min-width: 640px) 50vw, 100vw"
            />

            {image.availability === "unavailable" && (
              <div className={styles.overlay}>Nedostupné</div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

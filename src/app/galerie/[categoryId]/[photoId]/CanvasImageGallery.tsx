"use client";

import styles from "@/app/detail/[categoryId]/[photoId]/detail.module.css";
import type { GalleryImageList } from "@/app/galerie/types";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type CanvasImageGalleryProps = {
  images: GalleryImageList;
  title: string;
};

export const CanvasImageGallery = ({
  images,
  title,
}: CanvasImageGalleryProps) => {
  const [activeImage, setActiveImage] = useState<StaticImageData>(images[0]);

  return (
    <div>
      <Image
        className={styles.photoImage}
        src={activeImage}
        width="600"
        height="400"
        priority
        alt={title}
      />
      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <button
              className={`${styles.thumbnailButton} ${
                image.src === activeImage.src ? styles.activeThumbnail : ""
              }`}
              key={image.src}
              type="button"
              onClick={() => setActiveImage(image)}
              aria-label={`Zobrazit náhled ${index + 1}: ${title}`}
              aria-pressed={image.src === activeImage.src}
            >
              <Image src={image} alt="" width={80} height={80} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

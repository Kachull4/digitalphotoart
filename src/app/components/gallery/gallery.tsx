"use client";

import type { GalleryItem } from "@/app/galerie/types";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./gallery.module.css";

type Props = {
  images: GalleryItem[];
  slug: string;
};

export const Gallery = ({ images, slug }: Props) => {
  const isPhotoGallery = images.every((image) => image.type === "photo");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((index) => index === null ? null : (index + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, close, showNext, showPrevious]);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, index) =>
          isPhotoGallery ? (
            <button
              className={`${styles.link} ${styles.photoButton}`}
              type="button"
              key={image.id}
              onClick={() => setActiveIndex(index)}
              aria-label={`Zvětšit fotografii: ${image.title}`}
            >
              <GalleryImage image={image} priority={index === 0} />
            </button>
          ) : (
            <Link
              className={styles.link}
              href={`/detail/${slug}/${image.id}`}
              key={image.id}
              aria-label={`Otevřít detail: ${image.title}`}
            >
              <GalleryImage image={image} priority={index === 0} />
            </Link>
          ),
        )}
      </div>

      {activeImage && activeIndex !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={activeImage.title}>
          <button className={styles.backdrop} type="button" onClick={close} aria-label="Zavřít fotografii" />
          <button className={styles.close} type="button" onClick={close} aria-label="Zavřít">×</button>
          <button className={`${styles.arrow} ${styles.previous}`} type="button" onClick={showPrevious} aria-label="Předchozí fotografie">←</button>
          <div className={styles.lightboxContent}>
            <Image
              className={styles.lightboxImage}
              src={activeImage.src}
              alt={activeImage.title}
              sizes="100vw"
              priority
            />
            <div className={styles.lightboxMeta}>
              <div className={styles.lightboxCaption}>
                <div className={styles.lightboxTitleRow}>
                  <h2>{activeImage.title}</h2>
                  <small>{activeIndex + 1} / {images.length}</small>
                </div>
                {activeImage.type === "photo" ? (
                  <>
                    {activeImage.description ? <p>{activeImage.description}</p> : null}
                    <div className={styles.photoDetails}>
                      <span>{activeImage.species}</span>
                      <span>{activeImage.location}</span>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <button className={`${styles.arrow} ${styles.next}`} type="button" onClick={showNext} aria-label="Další fotografie">→</button>
        </div>
      )}
    </>
  );
};

const GalleryImage = ({ image, priority }: { image: GalleryItem; priority: boolean }) => (
  <div className={styles.imageItem}>
    <Image
      className={styles.image}
      src={image.src}
      alt={image.title}
      sizes="(min-width: 1200px) 33vw, (min-width: 640px) 50vw, 100vw"
      priority={priority}
    />
    {image.type === "canvas" ? (
      <div className={styles.canvasLabel}>
        <span>{image.title}</span>
        <small>{image.year} · {image.availability === "available" ? "Dostupné" : "Nedostupné"}</small>
      </div>
    ) : null}
  </div>
);

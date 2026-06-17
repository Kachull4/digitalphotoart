"use client";

import {
  GalleryThumbnailButton,
  GalleryThumbnails,
  PhotoImage,
} from "@/app/detail/[categoryId]/[photoId]/styled";
import { GalleryImageList } from "@/app/galerie/types";
import Image, { StaticImageData } from "next/image";
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
      <PhotoImage
        src={activeImage}
        width="600"
        height="400"
        priority
        alt={title}
      />
      {images.length > 1 && (
        <GalleryThumbnails>
          {images.map((image, index) => (
            <GalleryThumbnailButton
              key={image.src}
              type="button"
              onClick={() => setActiveImage(image)}
              aria-label={`Zobrazit náhled ${index + 1}: ${title}`}
              aria-pressed={image.src === activeImage.src}
              $isActive={image.src === activeImage.src}
            >
              <Image src={image} alt="" width={80} height={80} />
            </GalleryThumbnailButton>
          ))}
        </GalleryThumbnails>
      )}
    </div>
  );
};

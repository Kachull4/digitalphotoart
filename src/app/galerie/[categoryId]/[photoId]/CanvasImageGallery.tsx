import {
  GalleryThumbnailButton,
  GalleryThumbnails,
  PhotoImage,
} from "@/app/detail/[categoryId]/[photoId]/styled";
import { StaticImageData } from "next/image";
import { useState } from "react";

const getImageSrc = (
  image: string | StaticImageData | { default: StaticImageData },
) => {
  if (typeof image === "string") {
    return image;
  }

  if ("src" in image) {
    return image.src;
  }

  return image.default.src;
};

type GalleryImage = string | StaticImageData | { default: StaticImageData };

type CanvasImageGalleryProps = {
  images: GalleryImage[];
  title: string;
};

export const CanvasImageGallery = ({
  images,
  title,
}: CanvasImageGalleryProps) => {
  const [activeImage, setActiveImage] = useState<GalleryImage>(images[0]);

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
          {images.map((image) => {
            const imageSrc = getImageSrc(image);

            return (
              <GalleryThumbnailButton
                key={imageSrc}
                type="button"
                onClick={() => setActiveImage(image)}
              >
                <img src={imageSrc} alt="" width={80} height={80} />
              </GalleryThumbnailButton>
            );
          })}
        </GalleryThumbnails>
      )}
    </div>
  );
};

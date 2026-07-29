import type { GalleryItem } from "@/app/galerie/types";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { GalleryBox, GalleryImageItem, GalleryOverlay } from "./styled";

type Props = {
  images: GalleryItem[];
  slug: string;
};

export const Gallery: FC<Props> = ({ images, slug }) => {
  return (
    <GalleryBox>
      {images.map((image) => (
        <Link
          href={`/detail/${slug}/${image.id}`}
          key={image.id}
          aria-label={`Otevřít detail: ${image.title}`}
        >
          <GalleryImageItem>
            <Image
              src={image.src}
              alt={image.title}
              width={300}
              height={200}
              sizes="(min-width: 768px) 33vw, 100vw"
            />

            {image.availability === "unavailable" && (
              <GalleryOverlay>Nedostupné</GalleryOverlay>
            )}
          </GalleryImageItem>
        </Link>
      ))}
    </GalleryBox>
  );
};

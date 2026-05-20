"use client";

import Image from "next/image";
import { FC } from "react";
import { GalleryBox, GalleryImageItem, GalleryOverlay } from "./styled";
import Link from "next/link";
import { GalleryItem } from "@/app/galerie/types";

type Props = {
  images: GalleryItem[];
  slug: string;
};

export const Gallery: FC<Props> = ({ images, slug }) => {
  return (
    <>
      <GalleryBox>
        {images.map((image, index) => (
          <Link href={`/detail/${slug}/${index}`} key={index}>
            <GalleryImageItem>
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
              />

              {image.availability === "unavailable" && (
                <GalleryOverlay>Nedostupné</GalleryOverlay>
              )}
            </GalleryImageItem>
          </Link>
        ))}
      </GalleryBox>
    </>
  );
};

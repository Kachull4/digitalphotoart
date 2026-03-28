"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC } from "react";
import { GalleryBox } from "./styled";
import Link from "next/link";

type Props = {
  images: StaticImport[];
  slug: string;
};

export const Gallery: FC<Props> = ({ images, slug }) => {
  return (
    <>
      <GalleryBox>
        {images.map((image, index) => (
          <Link href={`/detail/${slug}/${index}`} key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              key={index}
            />
          </Link>
        ))}
      </GalleryBox>
    </>
  );
};

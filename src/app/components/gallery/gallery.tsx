"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useState } from "react";
import { GalleryBox } from "./styled";
import { useMedia } from "react-use";
import { size } from "@/app/breakpoints";
import Link from "next/link";

type Props = {
  images: StaticImport[];
  slug: string;
};

export const Gallery: FC<Props> = ({ images, slug }) => {
  const [activeModalIndex, setActiveModalIndex] = useState(-1);

  const isWide = useMedia(`(min-width: ${size.md})`);

  const handleCloseModal = () => {
    setActiveModalIndex(-1);
  };

  return (
    <>
      <GalleryBox>
        {images.map((image, index) => (
          <Link href={`/detail/${slug}/${index}`} key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={300}
              key={index}
            />
          </Link>
        ))}
      </GalleryBox>
    </>
  );
};

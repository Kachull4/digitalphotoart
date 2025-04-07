"use client";

import { Gallery } from "../../components/gallery/gallery";
import { GalleryContainer, GalleryHeading } from "@/app/components/gallery/styled";
import { FC } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  images: StaticImport[];
  title: string;
  slug: string;
};

export const GalleryPage: FC<Props> = ({ images, title, slug }) => {
  return (
    <>
      <main>
        <GalleryContainer>
          <GalleryHeading>{title}</GalleryHeading>
          <Gallery images={images} slug={slug} />
        </GalleryContainer>
      </main>
    </>
  );
};

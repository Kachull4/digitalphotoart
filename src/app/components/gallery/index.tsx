import {
  GalleryContainer,
  GalleryHeading,
} from "@/app/components/gallery/styled";
import { GalleryCategory, GalleryCategorySlug } from "@/app/galerie/gallery-data";
import { FC } from "react";
import { Gallery } from "../../components/gallery/gallery";

type Props = {
  category: GalleryCategory;
  slug: GalleryCategorySlug;
};

export const GalleryPage: FC<Props> = ({ category, slug }) => {
  return (
    <main>
      <GalleryContainer>
        <GalleryHeading>{category.title}</GalleryHeading>
        <Gallery images={category.images} slug={slug} />
      </GalleryContainer>
    </main>
  );
};

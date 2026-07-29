import { GalleryPage } from "@/app/components/gallery";
import {
  galleryCategories,
  isGalleryCategorySlug,
} from "@/app/galerie/gallery-data";
import { notFound } from "next/navigation";

type GalleryCategoryPageProps = {
  params: Promise<{
    categoryId: string;
  }>;
};

export const generateStaticParams = () =>
  Object.keys(galleryCategories).map((categoryId) => ({ categoryId }));

export default async function GalleryCategoryPage({
  params,
}: GalleryCategoryPageProps) {
  const { categoryId } = await params;

  if (!isGalleryCategorySlug(categoryId)) {
    notFound();
  }

  return (
    <GalleryPage
      category={galleryCategories[categoryId]}
      slug={categoryId}
    />
  );
}

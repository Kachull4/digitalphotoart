import { GalleryPage } from "@/app/components/gallery";
import { SITE_NAME } from "@/app/_lib/site";
import {
  galleryCategories,
  getGalleryCategory,
  isGalleryCategorySlug,
} from "@/app/galerie/gallery-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type GalleryCategoryPageProps = {
  params: Promise<{
    categoryId: string;
  }>;
};

export const generateStaticParams = () =>
  Object.keys(galleryCategories).map((categoryId) => ({ categoryId }));

export async function generateMetadata({
  params,
}: GalleryCategoryPageProps): Promise<Metadata> {
  const { categoryId } = await params;
  const category = getGalleryCategory(categoryId);

  if (!category) {
    notFound();
  }

  const description = `${category.title} v online galerii Kateřiny Hoffman.`;
  const canonicalPath = `/galerie/${categoryId}`;
  const previewImage = category.images[0];

  return {
    title: category.title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: category.title,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      locale: "cs_CZ",
      type: "website",
      images: previewImage
        ? [
            {
              url: previewImage.src.src,
              width: previewImage.src.width,
              height: previewImage.src.height,
              alt: previewImage.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: category.title,
      description,
      images: previewImage ? [previewImage.src.src] : undefined,
    },
  };
}

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

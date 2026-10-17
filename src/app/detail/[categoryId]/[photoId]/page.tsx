import { SITE_NAME } from "@/app/_lib/site";
import { formatCurrency } from "@/app/_lib/formatters";
import { CanvasImageGallery } from "@/app/galerie/[categoryId]/[photoId]/CanvasImageGallery";
import { Breadcrumbs } from "@/app/components/breadcrumbs/breadcrumbs";
import {
  getGalleryCategory,
  getGalleryItem,
  GalleryCategorySlug,
} from "@/app/galerie/gallery-data";
import { CanvasItem } from "@/app/galerie/types";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound, permanentRedirect } from "next/navigation";
import styles from "./detail.module.css";

type DetailPageParams = {
  categoryId: GalleryCategorySlug;
  photoId: string;
};

type DetailPageProps = {
  params: Promise<DetailPageParams>;
};

type MetaItem = {
  label: string;
  value: string;
};

const availabilityLabels: Record<CanvasItem["availability"], string> = {
  available: "Dostupné",
  unavailable: "Nedostupné",
};

const getMetaItems = (item: CanvasItem): MetaItem[] => [
  { label: "Rozměr", value: item.canvasSize },
  { label: "Technika", value: item.technique },
  { label: "Barvy", value: item.colors },
  { label: "Plátno", value: item.canvasType },
  { label: "Rok", value: item.year },
  { label: "Dostupnost", value: availabilityLabels[item.availability] },
];

const DetailMetaList = ({ items }: { items: MetaItem[] }) => (
  <div className={styles.metaList}>
    {items.map(({ label, value }) => (
      <div className={styles.metaItem} key={label}>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    ))}
  </div>
);

const CanvasPurchaseInfo = () => (
  <>
    <h2>Informace k obrazům</h2>
    <p>
      Všechny obrazy jsou originální a ručně malované. Každý obraz vzniká
      klasickou olejomalbou na plátně a jedná se o originál, ne tisk.
    </p>
    <p>
      Pokud máte o obraz zájem, napište mi na
      <a href="mailto:katerina.hoffman4@gmail.com"> email</a>. Možnosti dopravy
      nebo osobního předání domluvíme individuálně.
    </p>
    <p>Díky, že podporujete moji tvorbu.</p>
  </>
);

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { categoryId, photoId } = await params;
  const category = getGalleryCategory(categoryId);
  const item = getGalleryItem(categoryId, photoId);

  if (!category || !item || item.type !== "canvas") {
    notFound();
  }

  const canonicalPath = `/detail/${categoryId}/${item.id}`;
  const description = `${item.title}: originální ${item.technique.toLowerCase()} na plátně o rozměru ${item.canvasSize}.`;

  return {
    title: item.title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: item.title,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      locale: "cs_CZ",
      type: "website",
      images: [
        {
          url: item.src.src,
          width: item.src.width,
          height: item.src.height,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description,
      images: [item.src.src],
    },
  };
}

export default async function Detail({ params }: DetailPageProps) {
  const { categoryId, photoId } = await params;
  const category = getGalleryCategory(categoryId);

  if (!category) {
    notFound();
  }

  const legacyItemIndex = Number(photoId);

  if (Number.isInteger(legacyItemIndex) && legacyItemIndex >= 0) {
    const legacyItem = category.images[legacyItemIndex];

    if (!legacyItem) {
      notFound();
    }

    permanentRedirect(`/detail/${categoryId}/${legacyItem.id}`);
  }

  const item = getGalleryItem(categoryId, photoId);

  if (!item || item.type !== "canvas") {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Galerie" },
          { label: category.title, href: `/galerie/${categoryId}` },
          { label: item.title },
        ]}
      />
      <main>
        <section className={styles.detail}>
        <div className={styles.container}>
          <CanvasImageGallery images={item.images} title={item.title} />
          <div className={styles.description}>
            <h1 className={styles.title}>{item.title}</h1>
            <DetailMetaList items={getMetaItems(item)} />
            <p className={styles.price}>
              {formatCurrency(item.price.amount, item.price.currency)}
            </p>
          </div>
        </div>

        {item.photo && item.description && (
          <div className={styles.container}>
            <div className={styles.referenceCard}>
              <div className={styles.referenceText}>
                <h2>Od fotografie k obrazu</h2>
                <p>{item.description}</p>
                <Image
                  className={styles.referencePhoto}
                  src={item.photo}
                  alt={`Referenční fotografie k obrazu ${item.title}`}
                />
                <Image
                  className={styles.referenceDivider}
                  src="/images/divider.png"
                  alt=""
                  width={1920}
                  height={819}
                />
                <CanvasPurchaseInfo />
              </div>
            </div>
          </div>
        )}

        {(!item.photo || !item.description) && (
          <div className={styles.container}>
            <div className={styles.infoCard}>
              <CanvasPurchaseInfo />
            </div>
          </div>
        )}

        </section>
      </main>
    </>
  );
}

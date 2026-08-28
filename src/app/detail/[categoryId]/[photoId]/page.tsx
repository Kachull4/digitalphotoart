import { SITE_NAME } from "@/app/_lib/site";
import { formatCurrency } from "@/app/_lib/formatters";
import { CanvasImageGallery } from "@/app/galerie/[categoryId]/[photoId]/CanvasImageGallery";
import { Breadcrumbs } from "@/app/components/breadcrumbs/breadcrumbs";
import {
  getGalleryCategory,
  getGalleryItem,
  GalleryCategorySlug,
} from "@/app/galerie/gallery-data";
import { GalleryImageList, GalleryItem } from "@/app/galerie/types";
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

const availabilityLabels: Record<GalleryItem["availability"], string> = {
  available: "Dostupné",
  unavailable: "Nedostupné",
};

const getDetailImages = (item: GalleryItem): GalleryImageList =>
  item.type === "canvas" ? item.images : [item.src];

const getMetaItems = (item: GalleryItem): MetaItem[] =>
  item.type === "photo"
    ? [
        { label: "Druh", value: item.species },
        { label: "Lokace", value: item.location },
        { label: "Rozlišení", value: item.resolution },
        { label: "Fotoaparát", value: item.camera },
        { label: "Objektiv", value: item.lens },
      ]
    : [
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

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { categoryId, photoId } = await params;
  const category = getGalleryCategory(categoryId);
  const item = getGalleryItem(categoryId, photoId);

  if (!category || !item) {
    notFound();
  }

  const canonicalPath = `/detail/${categoryId}/${item.id}`;
  const description =
    item.type === "photo"
      ? `${item.title}: fotografie pořízená v lokalitě ${item.location}. Digitální fotografie ve vysokém rozlišení.`
      : `${item.title}: originální ${item.technique.toLowerCase()} na plátně o rozměru ${item.canvasSize}.`;

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

  if (!item) {
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
          <CanvasImageGallery images={getDetailImages(item)} title={item.title} />
          <div className={styles.description}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.price}>
              {formatCurrency(item.price.amount, item.price.currency)}
            </p>
            <DetailMetaList items={getMetaItems(item)} />
          </div>
        </div>

        {item.type === "canvas" && (
          <div className={styles.container}>
            <div className={styles.referenceCard}>
              <h2>Od fotografie k obrazu</h2>
              <Image
                className={styles.referencePhoto}
                src={item.photo}
                alt={`Referenční fotografie k obrazu ${item.title}`}
              />
              <div className={styles.referenceText}>
                <h2>Od fotografie k obrazu</h2>
                <p>{item.description}</p>
                <Image
                  className={styles.referenceDivider}
                  src="/images/divider.png"
                  alt=""
                  width={1920}
                  height={819}
                />
                <h2>Informace k obrazům</h2>
                <p>
                  Všechny obrazy jsou originální, ručně malované podle vlastní
                  fotografie nebo podle předlohy přímo v terénu tzv. plenér.
                  Každý obraz vzniká klasickou olejomalbou na plátně a jedná se
                  o originál, ne tisk.
                </p>
                <p>
                  Pokud máte o obraz zájem, napište mi na
                  <a href="mailto:katerina.hoffman4@gmail.com"> email</a>.
                  Možnosti dopravy nebo osobního předání domluvíme
                  individuálně.
                </p>
                <p>Díky, že podporujete moji tvorbu.</p>
              </div>
            </div>
          </div>
        )}

        {item.type === "photo" && (
          <div className={styles.container}>
            <div className={styles.infoCard}>
              <h2>Informace k fotografiím</h2>
              <p>
                Získejte okamžitý přístup ke stažení digitální fotografie ve
                vysokém rozlišení. Soubor si můžete vytisknout doma, v místní
                tiskárně nebo online, třeba na fotopapír, plátno, kov, sklo
                nebo jakýkoliv jiný materiál, který vám sedí.
              </p>
              <p>Po zaplacení obdržíte odkaz ke stažení.</p>
              <p>
                Tento nákup je určen výhradně pro osobní použití. Není povoleno
                fotografie dál prodávat, upravovat, nebo používat ke komerčním
                účelům. Autorská práva zůstávají fotografovi. Pokud máte zájem
                o koupi nebo komerční licenci, napište mi na
                <a href="mailto:katerina.hoffman4@gmail.com"> email</a>.
              </p>
              <p>Jedná se o digitální soubor, fyzický produkt nebude zasílán.</p>
              <p>Díky, že podporujete moji tvorbu.</p>
            </div>
          </div>
        )}
        </section>
      </main>
    </>
  );
}

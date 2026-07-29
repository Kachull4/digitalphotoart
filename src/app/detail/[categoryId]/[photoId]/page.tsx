import { Container } from "@/app/(home)/styled";
import { CanvasImageGallery } from "@/app/galerie/[categoryId]/[photoId]/CanvasImageGallery";
import {
  getGalleryCategory,
  GalleryCategorySlug,
} from "@/app/galerie/gallery-data";
import { GalleryImageList, GalleryItem } from "@/app/galerie/types";
import { notFound, permanentRedirect } from "next/navigation";
import {
  PhotoDescription,
  PhotoDetail,
  PhotoInfoCard,
  PhotoMetaItem,
  PhotoMetaList,
  PhotoPrice,
  PhotoTitle,
  ReferencePhoto,
  ReferencePhotoCard,
  ReferencePhotoCardDivider,
  ReferencePhotoText,
} from "./styled";

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
  <PhotoMetaList>
    {items.map(({ label, value }) => (
      <PhotoMetaItem key={label}>
        <span>{label}</span>
        <strong>{value}</strong>
      </PhotoMetaItem>
    ))}
  </PhotoMetaList>
);

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

  const item = category.images.find(({ id }) => id === photoId);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <PhotoDetail>
        <Container className="photo-detail__container">
          <CanvasImageGallery images={getDetailImages(item)} title={item.title} />
          <PhotoDescription>
            <PhotoTitle>{item.title}</PhotoTitle>
            <PhotoPrice>{item.price}</PhotoPrice>
            <DetailMetaList items={getMetaItems(item)} />
          </PhotoDescription>
        </Container>

        {item.type === "canvas" && (
          <Container className="photo-detail__container">
            <ReferencePhotoCard>
              <h2>Od fotografie k obrazu</h2>
              <ReferencePhoto
                src={item.photo}
                alt={`Referenční fotografie k obrazu ${item.title}`}
              />
              <ReferencePhotoText>
                <h2>Od fotografie k obrazu</h2>
                <p>{item.description}</p>
                <ReferencePhotoCardDivider
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
              </ReferencePhotoText>
            </ReferencePhotoCard>
          </Container>
        )}

        {item.type === "photo" && (
          <Container className="photo-detail__container">
            <PhotoInfoCard>
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
            </PhotoInfoCard>
          </Container>
        )}
      </PhotoDetail>
    </main>
  );
}

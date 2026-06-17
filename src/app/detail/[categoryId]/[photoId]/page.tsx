"use client";

import { Container } from "@/app/(home)/styled";
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
import { images as canvasWide } from "@/app/galerie/arrays/canvas-wide";
import { images as canvasHigh } from "@/app/galerie/arrays/canvas-high";
import { images as photoHigh } from "@/app/galerie/arrays/photo-high";
import { images as photoWide } from "@/app/galerie/arrays/photo-wide";
import { useParams } from "next/navigation";
import { GalleryItem } from "@/app/galerie/types";
import { CanvasImageGallery } from "@/app/galerie/[categoryId]/[photoId]/CanvasImageGallery";

const categories = {
  "fotografie-na-sirku": photoWide,
  "fotografie-na-vysku": photoHigh,
  "obrazy-na-sirku": canvasWide,
  "obrazy-na-vysku": canvasHigh,
};

export default function Detail() {
  const { categoryId, photoId } = useParams<{
    categoryId: keyof typeof categories;
    photoId: string;
  }>();
  const id = Number(photoId);
  const item = categories[categoryId]?.[id] as GalleryItem | undefined;
  const availabilityMap = {
    available: "Dostupné",
    unavailable: "Nedostupné",
  } as const;

  if (!item) {
    return null;
  }

  return (
    <>
      <main>
        <PhotoDetail>
          <Container>
            <CanvasImageGallery
              images={item.type === "canvas" ? item.images : [item.src]}
              title={item.title}
            />
            <PhotoDescription>
              <PhotoTitle>{item.title}</PhotoTitle>
              <PhotoPrice>{item.price}</PhotoPrice>
              {item.type === "photo" && (
                <PhotoMetaList>
                  <PhotoMetaItem>
                    <span>Druh</span>
                    <strong>{item.species}</strong>
                  </PhotoMetaItem>
                  <PhotoMetaItem>
                    <span>Lokace</span>
                    <strong>{item.location}</strong>
                  </PhotoMetaItem>
                  <PhotoMetaItem>
                    <span>Rozlišení</span>
                    <strong>{item.resolution}</strong>
                  </PhotoMetaItem>
                  <PhotoMetaItem>
                    <span>Fotoaparát</span>
                    <strong>{item.camera}</strong>
                  </PhotoMetaItem>
                  <PhotoMetaItem>
                    <span>Objektiv</span>
                    <strong>{item.lens}</strong>
                  </PhotoMetaItem>
                </PhotoMetaList>
              )}
              {item.type === "canvas" && (
                <PhotoMetaList>
                  <PhotoMetaItem>
                    <span>Rozměr</span>
                    <strong>{item.canvasSize}</strong>
                  </PhotoMetaItem>
                  <PhotoMetaItem>
                    <span>Technika</span>
                    <strong>{item.technique}</strong>
                  </PhotoMetaItem>
                  <PhotoMetaItem>
                    <span>Barvy</span>
                    <strong>{item.colors}</strong>
                  </PhotoMetaItem>
                  <PhotoMetaItem>
                    <span>Plátno</span>
                    <strong>{item.canvasType}</strong>
                  </PhotoMetaItem>
                  <PhotoMetaItem>
                    <span>Rok</span>
                    <strong>{item.year}</strong>
                  </PhotoMetaItem>
                  <PhotoMetaItem>
                    <span>Dostupnost</span>
                    <strong>{availabilityMap[item.availability]}</strong>
                  </PhotoMetaItem>
                </PhotoMetaList>
              )}
            </PhotoDescription>
          </Container>
          {item.type === "canvas" && (
            <Container>
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
                    alt="divider"
                    width={1920}
                    height={819}
                  />
                  <h2>Informace k obrazům</h2>
                  <p>
                    Všechny obrazy jsou originální, ručně malované podle vlastní
                    fotografie nebo podle předlohy přímo v terénu tzv. plenér.
                    Každý obraz vzniká klasickou olejomalbou na plátně a jedná
                    se o originál, ne tisk.
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
            <Container>
              <PhotoInfoCard>
                <>
                  <h2>Informace k fotografiím</h2>
                  <p>
                    Získejte okamžitý přístup ke stažení digitální fotografie ve
                    vysokém rozlišení. Soubor si můžete vytisknout doma, v
                    místní tiskárně nebo online, třeba na fotopapír, plátno,
                    kov, sklo nebo jakýkoliv jiný materiál, který vám sedí.
                  </p>
                  <p>Po zaplacení obdržíte odkaz ke stažení.</p>
                  <p>
                    Tento nákup je určen výhradně pro osobní použití. Není
                    povoleno fotografie dál prodávat, upravovat, nebo používat
                    ke komerčním účelům. Autorská práva zůstávají fotografovi.
                    Pokud máte zájem o koupi nebo komerční licenci, napište mi
                    na
                    <a href="mailto:katerina.hoffman4@gmail.com">email</a>.
                  </p>
                  <p>
                    Jedná se o digitální soubor, fyzický produkt nebude zasílán.
                  </p>
                  <p>Díky, že podporujete moji tvorbu.</p>
                  <p>Kačka</p>
                </>
              </PhotoInfoCard>
            </Container>
          )}
        </PhotoDetail>
      </main>
    </>
  );
}

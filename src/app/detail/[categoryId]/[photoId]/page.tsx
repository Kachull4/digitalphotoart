"use client";

import { BackButton, Container } from "@/app/(home)/styled";
import {
  PhotoDescription,
  PhotoDetail,
  PhotoInfoCard,
  PhotoMetaItem,
  PhotoMetaList,
  PhotoPrice,
  PhotoTitle,
} from "./styled";
import { images as canvasWide } from "@/app/galerie/arrays/canvas-wide";
import { images as canvasHigh } from "@/app/galerie/arrays/canvas-high";
import { images as photoHigh } from "@/app/galerie/arrays/photo-high";
import { images as photoWide } from "@/app/galerie/arrays/photo-wide";
import { useRef } from "react";
import { useParams } from "next/navigation";
import { GalleryItem } from "@/app/galerie/types";
import { CanvasImageGallery } from "@/app/galerie/[categoryId]/[photoId]/CanvasImageGallery";

const categories = {
  "canvas-wide": canvasWide,
  "canvas-high": canvasHigh,
  "photo-high": photoHigh,
  "photo-wide": photoWide,
};

const categoryRoutes: Record<keyof typeof categories, string> = {
  "photo-wide": "/galerie/fotografie-na-sirku",
  "photo-high": "/galerie/fotografie-na-vysku",
  "canvas-wide": "/galerie/obrazy-na-sirku",
  "canvas-high": "/galerie/obrazy-na-vysku",
};

export default function Detail() {
  const imgRef = useRef<HTMLImageElement>(null);
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
          <Container>
            <PhotoInfoCard>
              {item.type === "photo" && (
                <>
                  <h2>Popis produktu</h2>
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
              )}
              {item.type === "canvas" && (
                <>
                  <h2>Popis obrazu</h2>
                  <p>
                    Originální ručně malovaný obraz podle vlastní fotografie.
                  </p>
                  <p>
                    Každý obraz vzniká klasickou olejomalbou na plátně a jedná
                    se o originál, ne tisk.
                  </p>
                  <p>
                    Pokud máte o obraz zájem, napište mi na
                    <a href="mailto:katerina.hoffman4@gmail.com"> email</a>.
                  </p>
                  <p>
                    Možnosti dopravy nebo osobního předání domluvíme
                    individuálně.
                  </p>
                  <p>Díky, že podporujete moji tvorbu.</p>
                  <p>Kačka</p>
                </>
              )}
            </PhotoInfoCard>
          </Container>
          <Container>
            <BackButton href={categoryRoutes[categoryId]}>
              <svg
                version="1.1"
                width="20px"
                viewBox="0 0 91 91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    color="currentColor"
                    d="M6.1,50.1c6.3,3.6,12.3,7.5,17.6,12.5c4.9,4.6,7.6,10.4,12,15.3c1.6,1.8,5.6,1.1,5.9-1.6 c1.3-9.7-6.1-18.4-14.7-25.3c18.5,0.4,37,1.4,55.4,2.4c8.4,0.4,8.3-12.6,0-13c-18.5-1-37.1-1.8-55.6-1.3c6.6-7,11.8-15.9,14.1-24.1 c1.1-3.7-3.7-5.1-5.8-2.4c-3.9,5.1-7.6,10.5-12,15.1c-5,5.3-10.8,9-16.9,12.9c-2.2,1.4-2.9,3.4-2.6,5.2C3.4,47.5,4.2,49.1,6.1,50.1 z"
                  />
                </g>
              </svg>
              Zpět do galerie
            </BackButton>
          </Container>
        </PhotoDetail>
      </main>
    </>
  );
}

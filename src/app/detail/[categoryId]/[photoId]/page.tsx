"use client";

import { Container } from "@/app/(home)/styled";
import {
  BuyButton,
  PhotoCamera,
  PhotoDescription,
  PhotoDetail,
  PhotoImage,
  PhotoLens,
  PhotoLocation,
  PhotoPrice,
  PhotoSize,
  PhotoSpecies,
  PhotoTitle,
} from "./styled";
import { images as cesko } from "@/app/galerie/arrays/cesko";
import { images as australie } from "@/app/galerie/arrays/australie";
import { images as cernobile } from "@/app/galerie/arrays/cernobile";
import { images as kocky } from "@/app/galerie/arrays/kocky";
import { BackButton } from "@/app/detail/[categoryId]/[photoId]/styled";
import { useEffect, useRef } from "react";
import EXIF from "exif-js";

const categories = {
  cesko,
  australie,
  cernobile,
  kocky,
};

type Props = {
  params: Promise<{ categoryId: keyof typeof categories; photoId: string }>;
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Detail({ params }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const { categoryId, photoId } = await params;
  const id = Number(photoId);

  // useEffect(() => {
  //   if (imgRef?.current) {
  //     console.log(EXIF.getTag(imgRef.current, "Make"));

  //     // EXIF.getData(imgRef.current, function () {
  //     //   var make = EXIF.getTag(this, "Make");
  //     //   var model = EXIF.getTag(this, "Model");
  //     //   var makeAndModel = document.getElementById("makeAndModel");
  //     //   makeAndModel.innerHTML = `${make} ${model}`;
  //     // });
  //   }
  // }, []);

  return (
    <>
      <main>
        <PhotoDetail>
          <Container>
            <PhotoImage
              ref={imgRef}
              src={categories[categoryId]?.[id]?.src}
              width="600"
              height="400"
              alt=""
            />
            <PhotoDescription>
              <PhotoTitle>{categories[categoryId]?.[id]?.title}</PhotoTitle>
              <PhotoPrice>{categories[categoryId]?.[id]?.price}</PhotoPrice>
              <PhotoSpecies>
                Druh:&nbsp;{categories[categoryId]?.[id]?.species}
              </PhotoSpecies>
              <PhotoLocation>
                Lokace:&nbsp;
                {categories[categoryId]?.[id]?.location}
              </PhotoLocation>
              <PhotoSize>Rozlišení: 7008 × 4672</PhotoSize>
              <PhotoCamera>Fotoaparát: Sony Alpha A7 IV</PhotoCamera>
              <PhotoLens>Objektiv: Sony FE 200-600mm f/5,6-6,3 G OSS</PhotoLens>
              <BuyButton href={categories[categoryId]?.[id]?.link}>
                Koupit
              </BuyButton>
            </PhotoDescription>
          </Container>
          <Container>
            <div>
              <h2>Popis produktu</h2>
              <p>
                Získejte okamžitý přístup ke stažení digitální fotografie ve
                vysokém rozlišení. Soubor si můžete vytisknout doma, v místní
                tiskárně nebo online – na fotopapír, plátno, kov, sklo nebo
                jakýkoliv jiný materiál, který vám sedí.
              </p>
              <p>Po zaplacení obdržíte odkaz ke stažení.</p>
              <p>
                Tento nákup je určen výhradně pro osobní použití. Není povoleno
                fotografie dál prodávat, upravovat, nebo používat ke komerčním
                účelům. Autorská práva zůstávají fotografovi. Pokud máte zájem o
                komerční licenci, napište mi na
                <a href="katerina.hoffman4@gmail.com"> email</a>.
              </p>
              <p>
                Jedná se o digitální soubor, fyzický produkt nebude zasílán.
              </p>
              <p>Díky, že podporujete moji tvorbu.</p>
              <p>Kačka</p>
            </div>
          </Container>
          <Container>
            <BackButton href="/galerie/cesko">
              <svg
                version="1.1"
                width="20px"
                viewBox="0 0 91 91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill="#fff"
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

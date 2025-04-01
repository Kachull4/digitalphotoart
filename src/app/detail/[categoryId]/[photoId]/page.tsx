"use client";

import { Container } from "@/app/(home)/styled";
import {
  PhotoCamera,
  PhotoDescription,
  PhotoDetail,
  PhotoImage,
  PhotoLens,
  PhotoLocation,
  PhotoSize,
  PhotoSpecies,
  PhotoTitle,
} from "./styled";
import { ContactBlock } from "@/app/components/contact/contact";

export default function Detail() {
  return (
    <>
      <PhotoDetail>
        <Container>
          {/* <PhotoImage src="" width="600" height="400" alt=""></PhotoImage>
          <PhotoDescription>
            <PhotoTitle>Název fotky</PhotoTitle>
            <PhotoSpecies>Výr velký</PhotoSpecies>
            <PhotoLocation>Praha</PhotoLocation>
            <PhotoSize>7008 × 4672</PhotoSize>
            <PhotoCamera>Sony Alpha A7 IV</PhotoCamera>
            <PhotoLens>Sony FE 200-600mm f/5,6-6,3 G OSS</PhotoLens>
          </PhotoDescription> */}
          IN PROGRESS
        </Container>
      </PhotoDetail>
      <ContactBlock></ContactBlock>
    </>
  );
}

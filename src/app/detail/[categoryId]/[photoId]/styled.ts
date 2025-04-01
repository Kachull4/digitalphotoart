import { Container } from "@/app/(home)/styled";
import { device } from "@/app/breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const PhotoDetail = styled.section`
  color: #fff;
  min-height: 100svh;

  ${Container} {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 2rem;

    ${device.md} {
        flex-direction: row;
    }
  }
`;

export const PhotoImage = styled(Image)`
  background-color: beige;
  border-radius: 10px;
  display: block;
  position: relative;
  height: auto;

  ${device.md} {
    flex-grow: 2;
  }
`;

export const PhotoDescription = styled.section`
  color: #fff;
  flex-grow: 1;
`;

export const PhotoTitle = styled.h1`

`

export const PhotoSpecies = styled.h1``;

export const PhotoLocation = styled.h1``;

export const PhotoSize = styled.h1``;

export const PhotoCamera = styled.h1``;

export const PhotoLens = styled.h1``;
import { Container } from "@/app/(home)/styled";
import { device } from "@/app/breakpoints";
import Image from "next/image";
import Link from "next/link";
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

export const PhotoDescription = styled.div`
  color: #fff;
  flex-grow: 1;
`;

export const PhotoTitle = styled.h1``;

export const PhotoSpecies = styled.h2``;

export const PhotoLocation = styled.h2``;

export const PhotoSize = styled.h2``;

export const PhotoCamera = styled.h2``;

export const PhotoLens = styled.h2``;

export const BackButton = styled(Link)`
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  gap: 1rem;
`;

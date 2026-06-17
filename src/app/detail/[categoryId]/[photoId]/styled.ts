import { Container } from "@/app/(home)/styled";
import { device } from "@/app/breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const PhotoDetail = styled.section`
  color: inherit;
  min-height: 100svh;

  ${Container} {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 0;

    ${device.m} {
      flex-direction: row;
      gap: 3rem;
    }

    ${device.lg} {
      gap: 5rem;
      max-width: 150rem;
    }
  }
`;

export const PhotoImage = styled(Image)`
  border-radius: 10px;
  display: block;
  position: relative;
  width: 100%;
  height: auto;

  ${device.md} {
    height: fit-content;
  }

  ${device.lg} {
    flex-grow: 2;
  }
`;

export const PhotoDescription = styled.div`
  color: inherit;
  max-width: 50%;

  ${device.lg} {
    flex-grow: 1;
  }
`;

export const PhotoTitle = styled.h2`
  font-family: var(--alexandria);
  font-size: 3rem;
  text-transform: uppercase;
  margin-top: 0;

  ${device.lg} {
    font-size: 3.6rem;
  }
`;

export const PhotoPrice = styled.h3`
  font-family: var(--alexandria);
  font-size: 2.6rem;
`;

export const PhotoMetaList = styled.div`
  display: grid;
  gap: 1.6rem;
  margin-top: 3rem;
`;

export const PhotoMetaItem = styled.div`
  display: grid;
  gap: 0.4rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  span {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.65;

    ${device.lg} {
      font-size: 1.6rem;
    }
  }

  strong {
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 500;

    ${device.lg} {
      font-size: 2.2rem;
    }
  }
`;

export const ReferencePhoto = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 10px;

  ${device.md} {
    max-width: 40%;
    order: 2;
  }
`;

export const ReferencePhotoCardDivider = styled(Image)`
  mix-blend-mode: multiply;
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 4;
`;

export const ReferencePhotoText = styled.div`
  ${device.md} {
      order: 1
    }

  > h2 {
    display: none;

    ${device.md} {
      display: inline;
    }
  }
`;

export const ReferencePhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #f1efe9;
  border-radius: 2rem;
  padding: 3rem 2.4rem;
  width: 100%;

  ${device.md} {
    padding: 4rem;
    flex-direction: row;
    gap: 4rem;
    max-width: 120rem;
    margin: 0 auto;
    align-items: flex-start;
  }

  p {
    font-size: 1.6rem;

    ${device.md} {
      font-size: 1.8rem;
    }
  }

  > h2 {
    ${device.md} {
      display: none;
    }
  }
`;

export const PhotoInfoCard = styled.div`
  background: #f1efe9;
  border-radius: 2rem;
  padding: 3rem 2.4rem;
  width: 100%;

  ${device.md} {
    padding: 4rem;
  }
`;

export const GalleryThumbnails = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

export const GalleryThumbnailButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  img {
    object-fit: cover;
    border-radius: 8px;
  }
`;

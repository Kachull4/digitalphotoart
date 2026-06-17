"use client";

import styled from "styled-components";
import { Container, Heading } from "@/app/(home)/styled";

export const GalleryContainer = styled(Container)`
  min-height: 100svh;
  position: relative;
`;

export const GalleryHeading = styled(Heading)`
  text-align: center;
  font-size: 5rem;
  color: inherit;
`;

export const GalleryBox = styled.div`
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(24rem, 100%), 1fr));
  gap: 1rem;
  padding: 0 2rem;

  a {
    display: block;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 25rem;
    object-fit: cover;
    cursor: pointer;
  }

  a:hover img {
    filter: brightness(0.9);
  }
`;

export const GalleryImageItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

export const GalleryOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.45);
  color: white;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  pointer-events: none;
`;

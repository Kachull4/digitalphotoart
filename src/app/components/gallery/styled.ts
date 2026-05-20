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
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 2rem;

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    cursor: pointer;
    height: 25rem;
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

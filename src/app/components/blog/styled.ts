"use client";

import { Container, Heading } from "@/app/(home)/styled";
import { device } from "@/app/breakpoints";
import Link from "next/link";
import styled from "styled-components";

export const Blog = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1px 0 2rem 0;
  margin: 0;
  margin-top: auto;
  scroll-margin-block: 5rem;
  position: relative;
  background-color: #d3d0cb;
`;

export const BlogTileRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${device.md} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 4rem;
  }
`;

export const BlogMainTile = styled.div`
  border-radius: 10px;
`;

export const BlogButton = styled(Link)`
  font-size: 2rem;
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: translateX(0.6rem);
  }

  ${device.md} {
    font-size: 2.4rem;
  }
`;

export const BlogContainer = styled(Container)`
  padding: 0 2rem;
`;

export const BlogGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  margin-bottom: 5rem;
`;

export const BlogHeading = styled.h2`
  text-align: center;
  font-size: 3.6rem;
  font-family: var(--alexandria);
  margin-bottom: 1rem;

  ${device.md} {
    font-size: 4rem;
  }
`;

export const Tile = styled(Link)`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 50rem;
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

   &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.14);
  }

  ${device.md} {
    max-width: 40rem;
  }
`;

export const TileImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 20rem;
  object-fit: cover;

  ${Tile}:hover & {
    filter: brightness(0.95);
  }

  ${device.md} {
   max-height: 30rem;
  }
`;

export const TileContent = styled.div`
  padding: 1em;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const TileTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 0.5em;
`;

export const TileDescription = styled.p`
  font-size: 1.6rem;
  margin: 0 0 1rem;
`;

export const TileDate = styled.div`
  font-size: 1.4rem;
  margin: 0 0 1rem;
  margin-top: auto;
`;

export const Divider = styled.div`
  position: absolute;
  top: -5rem;
  left: 0;
  width: 100%;
  height: 10rem;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    #d3d0cb 30%,
    #d3d0cb 70%,
    transparent 100%
  );
`;
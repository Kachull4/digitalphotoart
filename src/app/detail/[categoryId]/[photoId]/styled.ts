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

    ${device.m} {
      flex-direction: row;
      gap: 3rem;
    }

    ${device.lg} {
      gap: 5rem;
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
  color: #fff;

  ${device.lg} {
    flex-grow: 1;
  }
`;

export const PhotoTitle = styled.h1`
  font-family: var(--alexandria);
  font-size: 4rem;
  text-transform: uppercase;
  margin-top: 0;
`;

export const PhotoPrice = styled.h2`
  font-family: var(--alexandria);
  font-size: 3rem;
`;

export const PhotoSpecies = styled.h2``;

export const PhotoLocation = styled.h2``;

export const PhotoSize = styled.h2``;

export const PhotoCamera = styled.h2``;

export const PhotoLens = styled.h2``;

export const BuyButton = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: var(--alexandria);
  font-size: 2rem;
  text-transform: uppercase;
  border: 1px solid #fff;
  padding: 2rem 4rem;

  &:after {
    content: "";
    position: absolute;
    background: #fff;
    height: 100%;
    left: -50%;
    opacity: 0.2;
    top: -5rem;
    transform: rotate(35deg);
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    width: 5rem;
    height: 15rem;
    z-index: -10;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

export const BackButton = styled(Link)`
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  gap: 1rem;
`;

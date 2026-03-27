"use client";

import Image from "next/image";
import styled from "styled-components";

export const Intro = styled.div`
  position: relative;
  background-color: #000;
`;

export const LogoWhite = styled(Image)`
  position: absolute;
  bottom: 50%;
  left: 15%;
  transform: translateY(50%);
  max-width: 70%;
  height: auto;

  @media (orientation: landscape) {
    bottom: 20%;
    top: auto;
    right: 10%;
    left: auto;
    transform: none;
    max-width: 30%;
  }

  @media (min-aspect-ratio: 16 / 9) {
    bottom: 50%;
    transform: translateY(50%);
  }
`;

export const IntroImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
  max-height: calc(100svh - 10rem);
  margin-inline: auto;
  object-fit: contain;

  @media (orientation: landscape) {
    object-position: 0 100%;
  }
`;

export const Divider = styled.div`
  position: absolute;
  bottom: -5rem;
  left: 0;
  width: 100%;
  height: 10rem;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.4) 25%,
    rgba(0, 0, 0, 0.9) 50%,
    rgba(0, 0, 0, 0.4) 75%,
    transparent 100%
  );
  z-index: 1;
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 18%;
  left: 15%;
  transform: translateY(50%);
  max-width: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (orientation: landscape) {
    bottom: 5%;
    top: auto;
    right: 10%;
    left: auto;
    transform: none;
    max-width: 30%;
  }
`;

export const CaptionText = styled.p`
  color: #fff;
  font-size: 1.8rem;
  opacity: 0.8;
  font-family: var(--alexandria);

   @media (orientation: landscape) {
    font-size: 1.8rem;
  }
`;

export const CaptionButton = styled.a`
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0.8;
  transition: all 0.2s ease;
  align-self: flex-end;
  padding: 0.5rem 0;

  &:hover {
    opacity: 1;
    transform: translateX(0.6rem);
  }
`;
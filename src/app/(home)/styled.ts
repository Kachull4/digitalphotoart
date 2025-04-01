"use client";

import Image from "next/image";
import styled from "styled-components";
import { device } from "../breakpoints";

export const Container = styled.div`
  max-width: 125rem;
  margin: 10rem auto;
`;

export const Title = styled.a`
  flex-shrink: 0;

  h1 {
    font-family: var(--alexandria);
    font-weight: normal;
    font-size: 3.2rem;
    flex-shrink: 0;
    margin: 1rem auto;
  }
`;

export const Logo = styled(Image)`
  width: 20rem;
  height: auto;
  padding-top: 1rem;
`;

export const Heading = styled.h2`
  font-family: var(--alexandria);
  font-weight: normal;
  font-size: 2.5rem;
  text-transform: uppercase;
  text-wrap: balance;
  letter-spacing: 0.1em;
  line-height: 1.5;
  margin-bottom: 2rem;

  ${device.md} {
    text-wrap: balance;
    font-size: 3rem;
  }
`;

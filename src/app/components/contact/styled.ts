"use client";

import { Container, Heading } from "@/app/(home)/styled";
import { device } from "@/app/breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const Avatar = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 50rem;

  ${device.md} {
    max-width: 40%;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const Title = styled.h1`
  font-family: var(--alexandria);
  font-size: 5rem;
  text-transform: uppercase;
  width: 100%;
  margin: 0;
`;

export const Contact = styled.footer`
  position: relative;
  background-color: #d3d0cb;
  padding: 1px 0;
  margin-top: auto;

  ${Container} {
    margin: 2rem auto;
    padding: 0 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${device.md} {
      margin: 5rem auto;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem 5rem;
    }
  }

  ${Heading} {
    text-align: center;
    margin: 0;
    color: #000;

    ${device.md} {
      width: 100%;
    }
  }

  p {
    margin: 0;
    margin-bottom: 5rem;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${device.md} {
    flex: 1;
  }

  ${Heading} {
    text-align: center;
    margin-bottom: 0;

    ${device.md} {
      width: 100%;
    }
  }

  p {
    text-align: justify;
    hyphens: auto;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  ${device.md} {
    width: 50%;
  }

  img {
    width: 5rem;
    height: auto;
  }
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

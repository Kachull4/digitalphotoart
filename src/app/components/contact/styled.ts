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
  font-size: 3rem;
  text-transform: uppercase;
  width: 100%;
  margin: 0;
  margin-bottom: 1rem;

  ${device.md} {
    font-size: 5rem;
  }
`;

export const Contact = styled.footer`
  background-color: #d3d0cb;
  padding: 2rem;

  ${device.md} {
    padding: 6rem 4rem;
    padding-top: 10rem;
  }

  ${Container} {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    ${device.md} {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem 5rem;
    }
  }

  p {
    margin: 0;
    margin-bottom: 5rem;
  }
`;

export const Subheading = styled.h2`
  text-align: center;
  margin: 0;
  color: #000;
  font-size: 1.6rem;
  font-family: var(--alexandria);
  text-transform: uppercase;
  margin-bottom: 2rem;

  ${device.md} {
    width: 100%;
    font-size: 2rem;
  }
`;

export const ContactInner = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  background: #f4f2ee;
  border-radius: 2.4rem;
  padding: 4rem 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);

  ${device.md} {
    padding: 6rem 4rem;
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

export const ContactHeading = styled.h2`
  text-align: center;
  color: #000;
  font-size: 2rem;
  font-family: var(--alexandria);
  text-transform: uppercase;

  ${device.md} {
    font-size: 3rem;
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

  a {
    transition: 0.2s ease;
  }

  a:hover {
    transform: translateY(-4px) scale(1.05);
  }
`;

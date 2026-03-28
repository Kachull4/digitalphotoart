"use client"

import { Container, Heading } from "@/app/(home)/styled";
import styled from "styled-components";

export const BlogContainer = styled(Container)`
  max-width: 90rem;
  padding: 0 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
  border-radius: 10px;
`;

export const Title = styled(Heading)`
  margin-bottom: 1rem;
  color: inherit;
`;

export const Content = styled.div`
  margin-bottom: 5rem;

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.8rem;
    color: inherit;
  }
`;
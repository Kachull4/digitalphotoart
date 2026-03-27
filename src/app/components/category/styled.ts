"use client";

import styled from "styled-components";

export const Category = styled.section`
  position: relative;

  .categoryItem image,
  .categoryItem .categoryLabel {
    transition: 0.2s ease;
  }

  .categoryItem:hover image {
    opacity: 0.9;
  }

  .categoryItem .categoryLabel {
    fill: black;
    transition: 0.2s ease;
  }

  .categoryItem:hover .categoryLabel {
    fill: #2f2a2a;
  }
`;

export const CategoryHeading = styled.h2`
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--alexandria);
  width: 100%;
  text-align: center;

  @media (orientation: landscape) {
    font-size: 4rem;
    top: 0;
    width: auto;
  }
`;

"use client"

import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  height: 100%;
}

body {
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  color: #000;
  background-color: #000;
  margin: 0;
  min-height: 100%;
}

main {
  flex-grow: 1;
  position: relative;
}

a {
  color: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

p {
  margin-bottom: 1rem;
  font-size: 1.6rem;

  ${device.md} {
        font-size: 1.8rem;
    }
}
`
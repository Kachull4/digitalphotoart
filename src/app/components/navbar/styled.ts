"use client";

import { Container } from "@/app/(home)/styled";
import { device } from "@/app/breakpoints";
import Link from "next/link";
import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: #000;
  position: sticky;
  top: -7.5rem;
  z-index: 10;

  ${device.md} {
    padding: 0 1rem;
    top: 0;
  }

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    ${device.md} {
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  font-size: 1rem;
  padding: 1rem;
  margin: 0;
  width: 100%;
  color: #fff;

  ${device.md} {
    font-size: 2rem;
  }
`;

export const MenuItem = styled.li`
  font-family: var(--alexandria);
  text-transform: uppercase;
`;

export const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    path {
      fill: #fff;
    }

    ${device.md} {
      display: none;
    }
  }
`;

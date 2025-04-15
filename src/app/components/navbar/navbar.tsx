"use client";

import { usePathname } from "next/navigation";
import { Container, Logo, Title } from "../../(home)/styled";
import LogoWhite from ".//images/logo_white.png";
import Image from "next/image";
import { Menu, MenuItem, MenuLink, Navbar } from "./styled";

export const NavigationMenu: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Navbar>
      <Container>
        <Title href="https://digitalphotoart.cz/">
          <Logo src={LogoWhite} alt="Logo Katerina Hoffman Photography" />
        </Title>
        <Menu>
          <MenuItem>
            <MenuLink href={isHomePage ? "#uvod" : "/#uvod"}>
              <svg
                width="3em"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <style type="text/css"></style>
                <g id="grid_system" />
                <g id="_icons">
                  <path d="M7,21h10c2.2,0,4-1.8,4-4v-6.5c0-1.3-0.6-2.4-1.6-3.2l-5-3.8C13,2.5,11,2.5,9.6,3.6l-5,3.7C3.6,8.1,3,9.2,3,10.5V17   C3,19.2,4.8,21,7,21z M5,10.5c0-0.6,0.3-1.2,0.8-1.6l5-3.8c0.4-0.3,0.8-0.4,1.2-0.4s0.8,0.1,1.2,0.4l5,3.8c0.5,0.4,0.8,1,0.8,1.6   V17c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V10.5z" />
                </g>
              </svg>
              Úvod
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href={isHomePage ? "#galerie" : "/#galerie"}>
              <svg
                width="3em"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="grid_system" />
                <g id="_icons">
                  <path d="M3,16c0,2.8,2.2,5,5,5h8c2.7,0,4.9-2.2,5-4.9c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1V8c0-2.8-2.2-5-5-5H8C5.2,3,3,5.2,3,8V16z    M16,19H8c-1.7,0-3-1.3-3-3v-0.4L9.5,13c0.9-0.5,2.1-0.5,3,0l6.4,3.6C18.7,17.9,17.5,19,16,19z M8,5h8c1.7,0,3,1.3,3,3v6.3   l-5.5-3.1c-1.5-0.9-3.4-0.8-5,0l-3.5,2V8C5,6.3,6.3,5,8,5z" />
                  <circle cx="15.5" cy="8.5" r="1.5" />
                </g>
              </svg>
              Galerie
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#kontakt">
              <svg
                width="3em"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="grid_system" />
                <g id="_icons">
                  <path d="M18,5H6C5.1,5,4.1,5.3,3.4,5.9c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0C2.5,6.7,2,7.8,2,9v6c0,2.2,1.8,4,4,4h12   c2.2,0,4-1.8,4-4V9c0-1.2-0.5-2.3-1.4-3.1C19.9,5.3,18.9,5,18,5z M18,7L13,10.9c-0.6,0.5-1.5,0.5-2.1,0L6,7H18z M20,15   c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V9c0-0.3,0.1-0.6,0.2-0.9l5.5,4.4c0.7,0.5,1.5,0.8,2.3,0.8s1.6-0.3,2.3-0.8l5.5-4.4   C19.9,8.4,20,8.7,20,9V15z" />
                </g>
              </svg>
              Kontakt
            </MenuLink>
          </MenuItem>
        </Menu>
      </Container>
    </Navbar>
  );
};

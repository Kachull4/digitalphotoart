import styled from "styled-components";
import { device } from "@/app/breakpoints";

export const BreadcrumbsNav = styled.nav`
  font-family: var(--alexandria);
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.4rem;
  color: #666;

  ${device.md} {
    font-size: 1.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }
`;

export const Current = styled.span`
  color: #000;
  font-weight: 600;
`;

export const StaticCrumb = styled.span`
  color: #666;
`;

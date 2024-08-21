"use client";

import { Container } from "@/app/(home)/styled";
import { BlogGrid, BlogHeading } from "./styled";
import { BackButton } from "../gallery/styled";
import { articles } from "@/app/articles";
import { BlogTile } from "./tile";
import { NavigationMenu } from "../navbar";
import { ContactBlock } from "../contact/contact";

export const BlogPage: React.FC = () => {
  return (
    <>
      <NavigationMenu />
      <main>
        <Container>
          <BlogHeading>Blog</BlogHeading>
          <BlogGrid>
            {articles.map((article) => (
              <BlogTile
                {...article}
                key={article.id}
                readMoreLink={`/blog/${article.id}`}
              />
            ))}
          </BlogGrid>
          <BackButton href="/">
            <svg
              version="1.1"
              width="20px"
              viewBox="0 0 91 91"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#ff9999"
                  d="M6.1,50.1c6.3,3.6,12.3,7.5,17.6,12.5c4.9,4.6,7.6,10.4,12,15.3c1.6,1.8,5.6,1.1,5.9-1.6 c1.3-9.7-6.1-18.4-14.7-25.3c18.5,0.4,37,1.4,55.4,2.4c8.4,0.4,8.3-12.6,0-13c-18.5-1-37.1-1.8-55.6-1.3c6.6-7,11.8-15.9,14.1-24.1 c1.1-3.7-3.7-5.1-5.8-2.4c-3.9,5.1-7.6,10.5-12,15.1c-5,5.3-10.8,9-16.9,12.9c-2.2,1.4-2.9,3.4-2.6,5.2C3.4,47.5,4.2,49.1,6.1,50.1 z"
                />
              </g>
            </svg>
            Zpět na hlavní stránku
          </BackButton>
        </Container>
      </main>
      <ContactBlock />
    </>
  );
};

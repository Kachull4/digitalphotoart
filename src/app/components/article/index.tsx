"use client";

import { BlogContainer, Content, Image, Title } from "./styled";
import { FC, ReactNode } from "react";

export const BlogDetailPage: FC<{
  imageUrl: string;
  title: string;
  children: ReactNode;
}> = ({ imageUrl, title, children }) => {
  return (
    <main>
      <BlogContainer>
        <Image src={imageUrl} alt={title} />
        <Title>{title}</Title>
        <Content>{children}</Content>
      </BlogContainer>
    </main>
  );
};

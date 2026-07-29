import { BlogContainer, Content, Image, Title } from "./styled";
import type { FC, ReactNode } from "react";

export const BlogDetailPage: FC<{
  imageUrl: string;
  title: string;
  children: ReactNode;
}> = ({ imageUrl, title, children }) => {
  return (
    <main>
      <BlogContainer>
        <Image
          src={imageUrl}
          alt={title}
          width={1600}
          height={900}
          sizes="(min-width: 940px) 900px, calc(100vw - 4rem)"
          priority
        />
        <Title>{title}</Title>
        <Content>{children}</Content>
      </BlogContainer>
    </main>
  );
};

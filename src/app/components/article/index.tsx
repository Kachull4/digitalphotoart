import { formatDate } from "@/app/_lib/formatters";
import { BlogContainer, Content, Date, Image, Title } from "./styled";
import type { FC, ReactNode } from "react";

export const BlogDetailPage: FC<{
  imageUrl: string;
  title: string;
  date: string;
  children: ReactNode;
}> = ({ imageUrl, title, date, children }) => {
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
        <Date dateTime={date}>{formatDate(date)}</Date>
        <Content>{children}</Content>
      </BlogContainer>
    </main>
  );
};

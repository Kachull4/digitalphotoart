import { formatDate } from "@/app/_lib/formatters";
import Image from "next/image";
import styles from "./article.module.css";
import type { ReactNode } from "react";

type BlogDetailPageProps = {
  imageUrl: string;
  title: string;
  date: string;
  children: ReactNode;
};

export const BlogDetailPage = ({
  imageUrl,
  title,
  date,
  children,
}: BlogDetailPageProps) => {
  return (
    <main>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={imageUrl}
          alt={title}
          width={1600}
          height={900}
          sizes="(min-width: 940px) 900px, calc(100vw - 4rem)"
          priority
        />
        <h1 className={styles.title}>{title}</h1>
        <time className={styles.date} dateTime={date}>
          {formatDate(date)}
        </time>
        <div className={styles.content}>{children}</div>
      </div>
    </main>
  );
};

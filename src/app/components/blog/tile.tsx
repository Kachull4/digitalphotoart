import { Article } from "@/app/articles";
import { formatDate } from "@/app/_lib/formatters";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";

type BlogTileProps = Pick<
  Article,
  "title" | "description" | "date" | "imageUrl" | "altText"
> & {
  readMoreLink: string;
  variant?: "default" | "small";
};

export const BlogTile = ({
  title,
  description,
  date,
  imageUrl,
  altText,
  readMoreLink,
  variant,
}: BlogTileProps) => {
  return (
    <Link
      className={`${styles.tile} ${variant === "small" ? styles.smallTile : ""}`}
      href={readMoreLink}
    >
      <Image
        className={styles.tileImage}
        src={imageUrl}
        alt={altText}
        width={800}
        height={450}
        sizes={
          variant === "small"
            ? "(min-width: 768px) 300px, calc(100vw - 4rem)"
            : "(min-width: 768px) 400px, calc(100vw - 4rem)"
        }
      />
      <div className={styles.tileContent}>
        {variant === "small" ? (
          <h2 className={styles.tileTitle}>{title}</h2>
        ) : (
          <h3 className={styles.tileTitle}>{title}</h3>
        )}
        <p className={styles.tileDescription}>{description}</p>
        <div className={styles.tileDate}>{formatDate(date)}</div>
      </div>
    </Link>
  );
};

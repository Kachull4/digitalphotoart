"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./breadcrumbs.module.css";
import { articles } from "@/app/articles";
import {
  getGalleryCategory,
  getGalleryItem,
} from "@/app/galerie/gallery-data";

const labels: Record<string, string> = {
  galerie: "Galerie",
  blog: "Blog",
  detail: "Detail",
};

const articleLabels = Object.fromEntries(
  articles.map((article) => [article.id, article.title]),
);

export const Breadcrumbs = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const isDetailPage = segments[0] === "detail";

  if (isDetailPage) {
    const categoryId = segments[1];
    const itemId = segments[2];
    const category = getGalleryCategory(categoryId);
    const item = getGalleryItem(categoryId, itemId);

    return (
      <nav className={styles.breadcrumbs} aria-label="Drobečková navigace">
        <span className={styles.staticCrumb}>Galerie</span>
        <span aria-hidden="true">/</span>{" "}
        <Link href={`/galerie/${categoryId}`}>{category?.title}</Link>
        <span aria-hidden="true">/</span>{" "}
        <span className={styles.current}>{item?.title}</span>
      </nav>
    );
  }

  return (
    <nav className={styles.breadcrumbs} aria-label="Drobečková navigace">
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        const label =
          articleLabels[segment] ??
          getGalleryCategory(segment)?.title ??
          labels[segment] ??
          decodeURIComponent(segment);

        return (
          <span key={href}>
            {index > 0 && <span aria-hidden="true">/</span>}{" "}
            {segment === "galerie" ? (
              <span className={styles.staticCrumb}>{label}</span>
            ) : isLast ? (
              <span className={styles.current}>{label}</span>
            ) : (
              <Link href={href}>{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

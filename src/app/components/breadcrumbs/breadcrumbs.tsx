"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BreadcrumbsNav, Current, StaticCrumb } from "./styled";
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
      <BreadcrumbsNav aria-label="Drobečková navigace">
        <StaticCrumb>Galerie</StaticCrumb>
        <span aria-hidden="true">/</span>{" "}
        <Link href={`/galerie/${categoryId}`}>{category?.title}</Link>
        <span aria-hidden="true">/</span> <Current>{item?.title}</Current>
      </BreadcrumbsNav>
    );
  }

  return (
    <BreadcrumbsNav aria-label="Drobečková navigace">
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
              <StaticCrumb>{label}</StaticCrumb>
            ) : isLast ? (
              <Current>{label}</Current>
            ) : (
              <Link href={href}>{label}</Link>
            )}
          </span>
        );
      })}
    </BreadcrumbsNav>
  );
};

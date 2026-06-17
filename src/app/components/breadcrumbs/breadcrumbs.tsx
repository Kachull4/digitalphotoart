"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BreadcrumbsNav, Current, StaticCrumb } from "./styled";
import { images as canvasWide } from "@/app/galerie/arrays/canvas-wide";
import { images as canvasHigh } from "@/app/galerie/arrays/canvas-high";
import { images as photoHigh } from "@/app/galerie/arrays/photo-high";
import { images as photoWide } from "@/app/galerie/arrays/photo-wide";
import { articles } from "@/app/articles";

const labels: Record<string, string> = {
  galerie: "Galerie",
  blog: "Blog",
  detail: "Detail",
  "fotografie-na-sirku": "Fotografie na šířku",
  "fotografie-na-vysku": "Fotografie na výšku",
  "obrazy-na-sirku": "Obrazy na šířku",
  "obrazy-na-vysku": "Obrazy na výšku",
};

const categories = {
  "fotografie-na-sirku": photoWide,
  "fotografie-na-vysku": photoHigh,
  "obrazy-na-sirku": canvasWide,
  "obrazy-na-vysku": canvasHigh,
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
    const categoryId = segments[1] as keyof typeof categories;
    const itemId = Number(segments[2]);
    const item = categories[categoryId]?.[itemId];

    return (
      <BreadcrumbsNav aria-label="Drobečková navigace">
        <StaticCrumb>Galerie</StaticCrumb>
        <span aria-hidden="true">/</span>{" "}
        <Link href={`/galerie/${categoryId}`}>{labels[categoryId]}</Link>
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

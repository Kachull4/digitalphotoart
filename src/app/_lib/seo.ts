import { getArticleById } from "@/app/articles";
import type { Metadata } from "next";
import { SITE_NAME } from "./site";

export const getArticleMetadata = (articleId: string): Metadata => {
  const article = getArticleById(articleId);

  if (!article) {
    return {};
  }

  const canonicalPath = `/blog/${article.id}`;

  return {
    title: article.detailTitle,
    description: article.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      url: canonicalPath,
      siteName: SITE_NAME,
      locale: "cs_CZ",
      title: article.detailTitle,
      description: article.description,
      images: [
        {
          url: article.detailImageUrl,
          alt: article.detailTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.detailTitle,
      description: article.description,
      images: [article.detailImageUrl],
    },
  };
};

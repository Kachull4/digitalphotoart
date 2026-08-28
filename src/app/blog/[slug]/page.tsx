import { getArticleMetadata } from "@/app/_lib/seo";
import { articles, getArticleById } from "@/app/articles";
import { BlogDetailPage } from "@/app/components/article";
import { Breadcrumbs } from "@/app/components/breadcrumbs/breadcrumbs";
import { getArticleContent } from "../_content";
import { notFound } from "next/navigation";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  articles.map(({ id }) => ({ slug: id }));

export const generateMetadata = async ({ params }: ArticlePageProps) => {
  const { slug } = await params;

  if (!getArticleById(slug) || !getArticleContent(slug)) {
    notFound();
  }

  return getArticleMetadata(slug);
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleById(slug);
  const articleContent = getArticleContent(slug);

  if (!article || !articleContent) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: article.title },
        ]}
      />
      <BlogDetailPage
        title={article.detailTitle}
        imageUrl={article.detailImageUrl}
        date={article.date}
      >
        {articleContent}
      </BlogDetailPage>
    </>
  );
}

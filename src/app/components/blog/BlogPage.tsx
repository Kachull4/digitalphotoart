import { getArticlesByNewest } from "@/app/articles";
import { BlogContainer, BlogGrid, BlogHeading } from "./styled";
import { BlogTile } from "./tile";

export const BlogPage = () => {
  return (
    <main>
      <BlogContainer>
        <BlogHeading>Blog</BlogHeading>
        <BlogGrid>
          {getArticlesByNewest().map((article) => (
            <BlogTile
              {...article}
              key={article.id}
              readMoreLink={`/blog/${article.id}`}
              variant="small"
            />
          ))}
        </BlogGrid>
      </BlogContainer>
    </main>
  );
};

import { getArticlesByNewest } from "@/app/articles";
import { BlogTile } from "./tile";
import styles from "./blog.module.css";

export const BlogPage = () => {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.heading}>Blog</h1>
        <div className={styles.grid}>
          {getArticlesByNewest().map((article) => (
            <BlogTile
              {...article}
              key={article.id}
              readMoreLink={`/blog/${article.id}`}
              variant="small"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

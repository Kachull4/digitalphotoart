import { getLatestArticles } from "@/app/articles";
import { BlogTile } from "./tile";
import Link from "next/link";
import styles from "./blog.module.css";

export const BlogBlock = () => {
  return (
    <section className={styles.blog} id="blog">
      <div className={styles.divider} />
      <h2 className={styles.heading}>Příběhy z cest</h2>
      <div className={styles.tileRow}>
        {getLatestArticles(3).map((article) => (
          <BlogTile
            key={article.id}
            title={article.title}
            description={article.description}
            date={article.date}
            imageUrl={article.imageUrl}
            altText={article.altText}
            readMoreLink={`/blog/${article.id}`}
            variant="default"
          />
        ))}
      </div>
      <Link className={styles.button} href="/blog">
        <span>Všechny příběhy</span>
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
};

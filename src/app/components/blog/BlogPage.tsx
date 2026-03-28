"use client";

import { BlogContainer, BlogGrid, BlogHeading } from "./styled";
import { BlogTile } from "./tile";
import { articles } from "@/app/articles";

export const BlogPage = () => {
    return (
        <main>
            <BlogContainer>
                <BlogHeading>Blog</BlogHeading>
                <BlogGrid>
                    {[...articles]
                        .sort((a, b) => {
                            const [dayA, monthA, yearA] = a.date.split(".").map(Number);
                            const [dayB, monthB, yearB] = b.date.split(".").map(Number);

                            return (
                                new Date(yearB, monthB - 1, dayB).getTime() -
                                new Date(yearA, monthA - 1, dayA).getTime()
                            );
                        })
                        .map((article) => (
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

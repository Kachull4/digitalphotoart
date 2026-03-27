"use client";

import { CategoryBlock } from "../components/category/category";
import { IntroBlock } from "../components/intro/intro";
import { BlogBlock } from "../components/blog";

export default function Home() {
  return (
    <>

      <main>
        <IntroBlock></IntroBlock>
        <CategoryBlock></CategoryBlock>
        <BlogBlock></BlogBlock>
      </main>
    </>
  );
}

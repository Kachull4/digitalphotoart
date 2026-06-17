import { BlogBlock } from "../components/blog";
import { CategoryBlock } from "../components/category/category";
import { IntroBlock } from "../components/intro/intro";

export default function Home() {
  return (
    <main>
      <IntroBlock />
      <CategoryBlock />
      <BlogBlock />
    </main>
  );
}

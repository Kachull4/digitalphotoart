"use client";

import { NavigationMenu } from "../components/navbar/navbar";
import { CategoryBlock } from "../components/category/category";
import { IntroBlock } from "../components/intro/intro";

export default function Home() {
  return (
    <>
      
      <main>
        <IntroBlock></IntroBlock>
        <CategoryBlock></CategoryBlock>
      </main>
    </>
  );
}

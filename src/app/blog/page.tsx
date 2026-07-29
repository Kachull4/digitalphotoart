import { BlogPage } from "../components/blog/BlogPage";
import type { Metadata } from "next";

const description =
  "Články Kateřiny Hoffman o fotografování, fotoexpedicích, přírodě a fotografické technice.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description,
    url: "/blog",
    type: "website",
    images: ["/web.avif"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description,
    images: ["/web.avif"],
  },
};

export default function Blog() {
  return <BlogPage />;
}

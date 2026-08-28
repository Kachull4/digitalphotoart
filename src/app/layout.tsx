import type { Metadata } from "next";
import { Alexandria, PT_Serif } from "next/font/google";
import "./globals.css";
import { ContactBlock } from "./components/contact/contact";
import { NavigationMenu } from "./components/navbar/navbar";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./_lib/site";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--alexandria",
});
const pt_serif = PT_Serif({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Digital Photo Art | Kateřina Hoffman",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Photo Art | Kateřina Hoffman",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/web.avif",
        width: 800,
        height: 600,
        alt: "Náhled stránky Digital Photo Art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Photo Art | Kateřina Hoffman",
    description: SITE_DESCRIPTION,
    images: ["/web.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <body className={`${pt_serif.className} ${alexandria.variable}`}>
        <NavigationMenu />
        {children}
        <ContactBlock />
      </body>
    </html>
  );
}

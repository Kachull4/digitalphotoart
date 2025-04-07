

import type { Metadata } from "next";
import { Alexandria, PT_Serif } from "next/font/google";
import { GlobalStyles } from "./globals";
import { ContactBlock } from "./components/contact/contact";
import { NavigationMenu } from "./components/navbar/navbar";

const alexandria = Alexandria ({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--alexandria",
});
const pt_serif = PT_Serif({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Digital Photo Art",
  description: "online galerie příběhů zachycených objektivem",
  openGraph: {
    title: "Digital Photo Art",
    description: "online galerie příběhů zachycených objektivem",
    url: "https://digitalphotoart.cz",
    type: "website",
    images: [
      {
        url: "https://digitalphotoart.cz/web.avif",
        width: 800,
        height: 600,
        alt: "Náhled stránky Digital Photo Art",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <GlobalStyles />
      <body className={`${pt_serif.className} ${alexandria.variable}`}>
        <NavigationMenu />
        {children}
        <ContactBlock />
      </body>
    </html>
  );
}

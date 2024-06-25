import type { Metadata } from "next";
import { Pacifico, Roboto } from "next/font/google";
import { GlobalStyles } from "./globals";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--pacifico",
});
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body className={`${roboto.className} ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  );
}

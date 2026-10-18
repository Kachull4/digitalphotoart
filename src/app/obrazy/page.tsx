import { CollectionLanding } from "@/app/components/collection-landing/collection-landing";
import NatureCover from "@/app/galerie/arrays/canvas-nature/images/autumn-awakening/detail-1.webp";
import AbstractCover from "@/app/galerie/arrays/canvas-abstract/images/oslava-casu/canvas.webp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrazy",
  description: "Originální obrazy přírody a abstraktní tvorba Kateřiny Hoffman.",
};

export default function PaintingsPage() {
  return (
    <CollectionLanding
      eyebrow="Originální tvorba"
      title="Obrazy"
      description="Přírodní motivy vycházející z vlastních fotografií i volná abstraktní tvorba. Každý obraz je ručně malovaný originál."
      collections={[
        {
          title: "Obrazy přírody",
          subtitle: "Od fotografie k obrazu",
          href: "/galerie/obrazy-prirody",
          image: NatureCover,
          alt: "Obraz podzimní krajiny",
        },
        {
          title: "Abstraktní obrazy",
          subtitle: "Barva · rytmus · prostor",
          href: "/galerie/abstraktni-obrazy",
          image: AbstractCover,
          alt: "Barevný abstraktní obraz",
        },
      ]}
    />
  );
}

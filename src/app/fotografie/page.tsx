import { CollectionLanding } from "@/app/components/collection-landing/collection-landing";
import AustraliaCover from "@/app/galerie/arrays/photography/images/image1.jpg";
import CzechNatureCover from "@/app/galerie/arrays/photography/images/image8.jpg";
import PetsCover from "@/app/galerie/arrays/photography/images/image7.jpg";
import YellowstoneCover from "@/app/galerie/arrays/yellowstone/images/image1.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotografie",
  description: "Fotografické příběhy Kateřiny Hoffman z divoké přírody.",
};

export default function PhotographyPage() {
  return (
    <CollectionLanding
      eyebrow="Fotografické příběhy"
      title="Fotografie"
      description="Každá cesta je samostatným příběhem krajiny, světla a setkání se zvířaty v jejich přirozeném prostředí."
      collections={[
        {
          title: "Nespoutaný Yellowstone",
          subtitle: "USA · Wyoming · 2025",
          href: "/galerie/nespoutany-yellowstone",
          image: YellowstoneCover,
          alt: "Jelen wapiti před horami ve Wyomingu",
        },
        {
          title: "Skrytý Queensland",
          subtitle: "Austrálie · Queensland · 2024",
          href: "/galerie/skryty-queensland",
          image: AustraliaCover,
          alt: "Žába v australském deštném lese",
        },
        {
          title: "Divočina za humny",
          subtitle: "Česko",
          href: "/galerie/divocina-za-humny",
          image: CzechNatureCover,
          alt: "Výr velký fotografovaný v Praze",
        },
        {
          title: "Domácí parťáci",
          subtitle: "Zvířata, která patří do rodiny",
          href: "/galerie/domaci-partaci",
          image: PetsCover,
          alt: "Britská modrá kočka z Kounic",
        },
      ]}
    />
  );
}

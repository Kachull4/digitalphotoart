import { CollectionLanding } from "@/app/components/collection-landing/collection-landing";
import AustraliaCover from "@/app/galerie/arrays/photo-wide/images/image1.jpg";
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
          title: "Skrytý Queensland",
          subtitle: "Austrálie · Queensland · 2024",
          href: "/galerie/australie",
          image: AustraliaCover,
          alt: "Žába v australském deštném lese",
        },
      ]}
    />
  );
}

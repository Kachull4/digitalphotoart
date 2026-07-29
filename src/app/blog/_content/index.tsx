import FepAwards2025 from "./fep-awards-2025";
import FotoexpediceAustralie2024 from "./fotoexpedice-australie-2024";
import FotoexpediceKostarika2026 from "./fotoexpedice-kostarika-2026";
import FotoexpediceYellowstone2025 from "./fotoexpedice-yellowstone-2025";
import JakJsemZacalaSFotografovanim from "./jak-jsem-zacala-s-fotografovanim";
import MojeFotkyVisiNaHrade from "./moje-fotky-visi-na-hrade";
import MojeFotografickeVybaveni from "./moje-fotograficke-vybaveni";
import PestrokridlecPodrazcovyNaPalave from "./pestrokridlec-podrazcovy-na-palave";
import RokSeSonyAlphaA7iv from "./rok-se-sony-alpha-a7iv";
import type { ReactNode } from "react";

export const articleContentById = {
  "fep-awards-2025": <FepAwards2025 />,
  "fotoexpedice-australie-2024": <FotoexpediceAustralie2024 />,
  "fotoexpedice-kostarika-2026": <FotoexpediceKostarika2026 />,
  "fotoexpedice-yellowstone-2025": <FotoexpediceYellowstone2025 />,
  "jak-jsem-zacala-s-fotografovanim": <JakJsemZacalaSFotografovanim />,
  "moje-fotky-visi-na-hrade": <MojeFotkyVisiNaHrade />,
  "moje-fotograficke-vybaveni": <MojeFotografickeVybaveni />,
  "pestrokridlec-podrazcovy-na-palave": <PestrokridlecPodrazcovyNaPalave />,
  "rok-se-sony-alpha-a7iv": <RokSeSonyAlphaA7iv />,
} satisfies Record<string, ReactNode>;

export const getArticleContent = (articleId: string) =>
  articleContentById[articleId as keyof typeof articleContentById];

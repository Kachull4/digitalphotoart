export type Article = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  altText: string;
  detailTitle: string;
  detailImageUrl: string;
};

export const articles = [
  {
    id: "jak-jsem-zacala-s-fotografovanim",
    title: "Jak jsem se dostala k focení a proč mě tak baví",
    description:
      "Fotografie mi umožňuje kreativně vyjádřit svůj pohled na svět bez zbytečných slov",
    date: "2024-08-21",
    imageUrl: "/blog/images/zacatky-foceni.jpg",
    altText: "Fotografie článku",
    detailTitle: "Jak jsem se dostala k focení a proč mě tak baví",
    detailImageUrl: "/blog/images/zacatky-foceni-detail.jpg",
  },
  {
    id: "rok-se-sony-alpha-a7iv",
    title: "Rok focení se Sony Alpha A7 IV",
    description: "Výhody, nevýhody a jak obstála oproti mému starému Canonu",
    date: "2024-09-10",
    imageUrl: "/blog/images/rok-se-sony-a7iv.jpg",
    altText: "Fotografie článku",
    detailTitle:
      "Rok focení se Sony Alpha A7 IV: Výhody, nevýhody a jak obstála oproti mému starému Canonu",
    detailImageUrl: "/blog/images/rok-se-sony-a7iv-detail.jpg",
  },
  {
    id: "fotoexpedice-australie-2024",
    title: "Tropická Austrálie objektivem",
    description:
      "Dobrodružství plné divokých zvířat, pralesů, nočních výprav a nezapomenutelných momentů v divočině",
    date: "2024-12-06",
    imageUrl: "/blog/images/fotoexpedice-australie-2024.avif",
    altText: "Fotografie článku",
    detailTitle:
      "Austrálie objektivem: Divoká příroda, pralesní zvířata a noční výpravy",
    detailImageUrl: "/blog/images/fotoexpedice-australie-2024-detail.avif",
  },
  {
    id: "moje-fotograficke-vybaveni",
    title: "Moje fotografické vybavení",
    description:
      "Když kreativita potřebuje prostor (a ten batoh už to nedává!)",
    date: "2025-01-03",
    imageUrl: "/blog/images/moje-fotograficke-vybaveni.avif",
    altText: "Fotografie článku",
    detailTitle:
      "Moje fotografické vybavení: Když kreativita potřebuje prostor (a ten batoh už to nedává!)",
    detailImageUrl: "/blog/images/moje-fotograficke-vybaveni-detail.avif",
  },
  {
    id: "moje-fotky-visi-na-hrade",
    title: "Czech Nature Photo 2025",
    description: "Moje fotky visí na Hradě!",
    date: "2025-04-24",
    imageUrl: "/blog/images/moje-fotky-visi-na-hrade.avif",
    altText: "Fotografie článku",
    detailTitle: "Czech Nature Photo 2025: Moje fotky visí na Hradě!",
    detailImageUrl: "/blog/images/moje-fotky-visi-na-hrade-detail.avif",
  },
  {
    id: "fep-awards-2025",
    title: "FEP Awards 2025",
    description: "9. místo ve Wildlife kategorii",
    date: "2025-04-28",
    imageUrl: "/blog/images/fep-awards-2025.avif",
    altText: "Fotografie článku",
    detailTitle: "FEP Awards 2025: 9. místo ve Wildlife kategorii",
    detailImageUrl: "/blog/images/fep-awards-2025-detail.avif",
  },
  {
    id: "fotoexpedice-yellowstone-2025",
    title: "Yellowstone National Park",
    description: "Kde plán končí a začíná trpělivost",
    date: "2025-11-08",
    imageUrl: "/blog/images/fotoexpedice-yellowstone-2025.avif",
    altText: "Fotografie článku",
    detailTitle: "Yellowstone: kde plán končí a začíná trpělivost",
    detailImageUrl: "/blog/images/fotoexpedice-yellowstone-2025-detail.avif",
  },
  {
    id: "fotoexpedice-kostarika-2026",
    title: "Kostarika bez filtru",
    description: "Déšť, bahno a prales",
    date: "2026-03-29",
    imageUrl: "/blog/images/fotoexpedice-kostarika-2026.webp",
    altText: "Fotografie článku",
    detailTitle: "Kostarika bez filtru: déšť, bahno a prales",
    detailImageUrl: "/blog/images/fotoexpedice-kostarika-2026-detail.webp",
  },
  {
    id: "pestrokridlec-podrazcovy-na-palave",
    title: "Pestrokřídlec podražcový na Pálavě",
    description: "Proč má smysl o těchto druzích mluvit",
    date: "2026-05-22",
    imageUrl: "/blog/images/pestrokridlec-podrazcovy-na-palave.webp",
    altText: "Fotografie článku",
    detailTitle: "Pestrokřídlec podražcový na Pálavě",
    detailImageUrl:
      "/blog/images/pestrokridlec-podrazcovy-na-palave-detail.webp",
  },
] satisfies Article[];

export const getArticlesByNewest = () =>
  [...articles].sort((a, b) => b.date.localeCompare(a.date));

export const getLatestArticles = (count: number) =>
  getArticlesByNewest().slice(0, count);

export const getArticleById = (id: string): Article | undefined =>
  articles.find((article) => article.id === id);

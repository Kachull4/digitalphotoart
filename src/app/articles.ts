export type Article = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  altText: string;
};

export const articles = [
  {
    id: "jak-jsem-zacala-s-fotografovanim",
    title: "Jak jsem se dostala k focení a proč mě tak baví",
    description:
      "Fotografie mi umožňuje kreativně vyjádřit svůj pohled na svět bez zbytečných slov",
    date: "21.8.2024",
    imageUrl: "/blog/images/zacatky-foceni.jpg",
    altText: "Fotografie článku",
  },
  {
    id: "rok-se-sony-alpha-a7iv",
    title: "Rok focení se Sony Alpha A7 IV",
    description: "Výhody, nevýhody a jak obstála oproti mému starému Canonu",
    date: "10.9.2024",
    imageUrl: "/blog/images/rok-se-sony-a7iv.jpg",
    altText: "Fotografie článku",
  },
  {
    id: "fotoexpedice-australie-2024",
    title: "Tropická Austrálie objektivem",
    description:
      "Dobrodružství plné divokých zvířat, pralesů, nočních výprav a nezapomenutelných momentů v divočině",
    date: "6.12.2024",
    imageUrl: "/blog/images/fotoexpedice-australie-2024.avif",
    altText: "Fotografie článku",
  },
  {
    id: "moje-fotograficke-vybaveni",
    title: "Moje fotografické vybavení",
    description:
      "Když kreativita potřebuje prostor (a ten batoh už to nedává!)",
    date: "3.1.2025",
    imageUrl: "/blog/images/moje-fotograficke-vybaveni.avif",
    altText: "Fotografie článku",
  },
  {
    id: "moje-fotky-visi-na-hrade",
    title: "Czech Nature Photo 2025",
    description: "Moje fotky visí na Hradě!",
    date: "24.4.2025",
    imageUrl: "/blog/images/moje-fotky-visi-na-hrade.avif",
    altText: "Fotografie článku",
  },
  {
    id: "fep-awards-2025",
    title: "FEP Awards 2025",
    description: "9. místo ve Wildlife kategorii",
    date: "28.4.2025",
    imageUrl: "/blog/images/fep-awards-2025.avif",
    altText: "Fotografie článku",
  },
  {
    id: "fotoexpedice-yellowstone-2025",
    title: "Yellowstone National Park",
    description: "Kde plán končí a začíná trpělivost",
    date: "8.11.2025",
    imageUrl: "/blog/images/fotoexpedice-yellowstone-2025.avif",
    altText: "Fotografie článku",
  },
  {
    id: "fotoexpedice-kostarika-2026",
    title: "Kostarika bez filtru",
    description: "Déšť, bahno a prales",
    date: "29.3.2026",
    imageUrl: "/blog/images/fotoexpedice-kostarika-2026.webp",
    altText: "Fotografie článku",
  },
  {
    id: "pestrokridlec-podrazcovy-na-palave",
    title: "Pestrokřídlec podražcový na Pálavě",
    description: "Proč má smysl o těchto druzích mluvit",
    date: "22.5.2026",
    imageUrl: "/blog/images/pestrokridlec-podrazcovy-na-palave.webp",
    altText: "Fotografie článku",
  },
] satisfies Article[];

const parseArticleDate = (date: string) => {
  const [day, month, year] = date.split(".").map(Number);

  return new Date(year, month - 1, day).getTime();
};

export const getArticlesByNewest = () =>
  [...articles].sort(
    (a, b) => parseArticleDate(b.date) - parseArticleDate(a.date),
  );

export const getLatestArticles = (count: number) =>
  getArticlesByNewest().slice(0, count);

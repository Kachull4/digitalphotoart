# Digital Photo Art

Webová galerie fotografií, obrazů a blogových článků Kateřiny Hoffman. Hlavní
produkční doména je [katerinahoffman.cz](https://katerinahoffman.cz).

Projekt používá Next.js App Router, TypeScript, React a styled-components.

## Lokální vývoj

Požadavky:

- Node.js 20.19+ nebo novější LTS verze
- npm

Instalace a spuštění:

```bash
npm install
npm run dev
```

Web bude dostupný na [http://localhost:3000](http://localhost:3000).

## Dostupné příkazy

```bash
npm run dev        # vývojový server
npm run build      # produkční build
npm run start      # spuštění produkčního buildu
npm run lint       # ESLint
npm test           # jednorázové spuštění testů
npm run test:watch # testy ve watch režimu
npx tsc --noEmit   # samostatná typová kontrola
```

## Struktura projektu

```text
src/app/
├── (home)/                         domovská stránka
├── _lib/                           sdílené formattery a SEO konfigurace
├── blog/                           seznam a stránky článků
├── components/                     prezentační komponenty
├── detail/[categoryId]/[photoId]/  detail fotografie nebo obrazu
├── galerie/
│   ├── [categoryId]/               dynamická stránka kategorie
│   ├── arrays/                     data a lokální obrázky galerie
│   ├── gallery-data.ts             registr a lookup galerie
│   └── types.ts                    datové typy galerie
├── articles.ts                     registr blogových článků
├── robots.ts                       generovaný robots.txt
└── sitemap.ts                      generovaná sitemap.xml
```

## Přidání fotografie

1. Vložte obrázek do odpovídající složky pod
   `src/app/galerie/arrays/*/images`.
2. Importujte jej v příslušném `index.ts`.
3. Přidejte položku typu `photo`.
4. Zvolte trvalé, unikátní `id` ve formátu URL slugu, například
   `zajic-na-hrane-sveta`.
5. Cenu ukládejte jako strukturovanou hodnotu:

```ts
price: { amount: 500, currency: "CZK" }
```

Veřejná URL detailu vznikne automaticky:

```text
/detail/{categoryId}/{id}
```

Po zveřejnění neměňte `id`, protože slouží jako stabilní veřejná URL.

## Přidání obrazu

Obraz se přidává stejně jako fotografie, ale používá typ `canvas`. Kromě
náhledového obrázku obsahuje seznam detailních obrázků, referenční fotografii,
popis, rozměr, techniku, plátno, barvy a rok.

Všechny položky galerie musí mít unikátní `id`. Testy tuto podmínku automaticky
ověřují.

## Přidání článku

1. Přidejte náhledový a detailní obrázek do `public/blog/images`.
2. Doplňte záznam do `src/app/articles.ts`.
3. Datum ukládejte v ISO formátu `YYYY-MM-DD`.
4. Vytvořte stránku `src/app/blog/{id}/page.tsx` s obsahem článku.
5. Načtěte metadata článku přes `getArticleMetadata(id)` a data přes
   `getArticleById(id)`.
6. Předejte komponentě `BlogDetailPage` titulek, detailní obrázek a datum.

ID článku musí odpovídat názvu adresáře a nemělo by se po zveřejnění měnit.

## Data a formátování

- Částky se ukládají jako čísla a měna, nikoli jako hotový text.
- Data článků se ukládají jako ISO `YYYY-MM-DD`.
- České zobrazení cen a dat zajišťují formattery v
  `src/app/_lib/formatters.ts`.
- Galerie i blog používají centrální registry jako jediný zdroj pravdy.

## SEO

Hlavní doména je nastavena v `src/app/_lib/site.ts`. Z této hodnoty se odvozují:

- canonical URL,
- Open Graph a Twitter metadata,
- `robots.txt`,
- `sitemap.xml`.

Sitemap automaticky obsahuje domovskou stránku, blog, všechny články, kategorie
galerie a všechny stabilní detailní URL.

## Kontrola před commitem

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
```

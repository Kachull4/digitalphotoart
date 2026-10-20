import Image from "next/image";
import Link from "next/link";
import PhotoCover from "@/app/galerie/arrays/photography/images/image1.jpg";
import CanvasCover from "@/app/galerie/arrays/canvas-nature/images/autumn-awakening/detail-1.webp";
import styles from "./category.module.css";

const categories = [
  {
    eyebrow: "Cesty a setkání",
    title: "Fotografie",
    description:
      "Výběr příběhů z divoké přírody, uspořádaný podle míst a cest.",
    href: "/fotografie",
    image: PhotoCover,
    alt: "Žába fotografovaná v australském deštném lese",
  },
  {
    eyebrow: "Originály na plátně",
    title: "Obrazy",
    description:
      "Přírodní motivy i volná abstraktní tvorba malovaná olejem.",
    href: "/obrazy",
    image: CanvasCover,
    alt: "Detail obrazu Probuzení podzimu",
  },
];

export const CategoryBlock = () => (
  <section className={styles.section} id="galerie">
    <div className={styles.intro}>
      <p className={styles.kicker}>Dvě podoby jednoho příběhu</p>
      <h2>Objektivem zachycené. Na plátno přenesené.</h2>
      <p>
        Přírodu nejdřív pozoruji a fotografuji. Některé okamžiky pak nechávám
        pokračovat v obrazech, kde dostávají nový prostor, barvu a čas.
      </p>
    </div>

    <div className={styles.grid}>
      {categories.map((category) => (
        <Link className={styles.card} href={category.href} key={category.title}>
          <Image
            className={styles.image}
            src={category.image}
            alt={category.alt}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <p>{category.eyebrow}</p>
            <h3>{category.title}</h3>
            <span>{category.description}</span>
            <strong>Prohlédnout kolekce <span aria-hidden="true">→</span></strong>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

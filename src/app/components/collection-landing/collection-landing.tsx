import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import styles from "./collection-landing.module.css";

export type CollectionCard = {
  title: string;
  subtitle: string;
  href: string;
  image: StaticImageData;
  alt: string;
};

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  collections: CollectionCard[];
};

export const CollectionLanding = ({ eyebrow, title, description, collections }: Props) => (
  <main className={styles.main}>
    <header className={styles.header}>
      <p>{eyebrow}</p>
      <h1>{title}</h1>
      <span>{description}</span>
    </header>
    <div className={styles.grid}>
      {collections.map((collection, index) => (
        <Link className={styles.card} href={collection.href} key={collection.href}>
          <Image
            className={styles.image}
            src={collection.image}
            alt={collection.alt}
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={index === 0}
          />
          <div className={styles.shade} />
          <div className={styles.label}>
            <span>{collection.subtitle}</span>
            <h2>{collection.title}</h2>
            <strong>Otevřít kolekci <span aria-hidden="true">→</span></strong>
          </div>
        </Link>
      ))}
    </div>
  </main>
);

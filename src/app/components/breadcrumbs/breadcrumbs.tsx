import Link from "next/link";
import styles from "./breadcrumbs.module.css";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav className={styles.breadcrumbs} aria-label="Drobečková navigace">
      {items.map(({ label, href }, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={href ?? label}>
            {index > 0 && <span aria-hidden="true">/</span>}{" "}
            {href && !isLast ? (
              <Link href={href}>{label}</Link>
            ) : isLast ? (
              <span className={styles.current} aria-current="page">
                {label}
              </span>
            ) : (
              <span className={styles.staticCrumb}>{label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

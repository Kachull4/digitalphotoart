"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LogoWhite from "./images/logo_white.png";
import styles from "./navbar.module.css";

export const NavigationMenu = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className={styles.navbar} aria-label="Hlavní navigace">
      <div className={styles.container}>
        <Link className={styles.title} href="/" aria-label="Kateřina Hoffman — úvod">
          <Image className={styles.logo} src={LogoWhite} alt="" priority />
        </Link>
        <div className={styles.menu}>
          <Link href="/fotografie">Fotografie</Link>
          <Link href="/obrazy">Obrazy</Link>
          <Link href={isHomePage ? "#blog" : "/#blog"}>Příběhy</Link>
          <Link href={isHomePage ? "#kontakt" : "/#kontakt"}>O mně</Link>
        </div>
      </div>
    </nav>
  );
};

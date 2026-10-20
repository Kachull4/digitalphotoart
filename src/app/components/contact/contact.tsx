import Link from "next/link";
import Image from "next/image";
import AvatarSrc from "./images/avatar.webp";
import styles from "./contact.module.css";

export const ContactBlock = () => (
  <footer className={styles.contact} id="kontakt">
    <div className={styles.inner}>
      <div className={styles.portraitWrap}>
        <Image className={styles.avatar} src={AvatarSrc} alt="Kateřina Hoffman" sizes="(min-width: 768px) 42vw, 100vw" />
      </div>
      <div className={styles.about}>
        <p className={styles.eyebrow}>O autorce</p>
        <h2>Kateřina Hoffman</h2>
        <p className={styles.lead}>Příběhy z přírody zachycené objektivem a přenesené na plátno.</p>
        <p>
          Každá fotografie i obraz vznikají z pozorování, trpělivosti a respektu
          k přírodě. Hledám okamžiky, ve kterých se potkává detail, atmosféra a
          příběh místa.
        </p>
        <Link className={styles.email} href="mailto:katerina.hoffman4@gmail.com">Napište mi <span aria-hidden="true">→</span></Link>
        <div className={styles.links}>
          <Link href="https://www.instagram.com/kaca_hoffman">Instagram</Link>
          <Link href="https://www.frontendistka.cz">Frontendistka.cz</Link>
        </div>
      </div>
    </div>
    <div className={styles.footnote}>© {new Date().getFullYear()} Kateřina Hoffman</div>
  </footer>
);

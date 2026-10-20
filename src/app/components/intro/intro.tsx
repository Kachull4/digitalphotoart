import Image from "next/image";
import LogoWhiteImg from "./images/logo_white.png";
import IntroImg from "./images/desktop.webp";
import IntroImgMobile from "./images/mobil.webp";
import styles from "./intro.module.css";

export const IntroBlock = () => {
  return (
    <div className={styles.intro} id="uvod">
      <h1 className={styles.visuallyHidden}>
        Fotografie a obrazy Kateřiny Hoffman
      </h1>
      <picture>
        <source srcSet={IntroImgMobile.src} media="(orientation: portrait)" />
        <Image
          className={styles.image}
          src={IntroImg}
          alt="Rosnička na kmeni stromu"
          priority
        />
      </picture>
      <Image
        className={styles.logo}
        src={LogoWhiteImg}
        alt=""
        priority
      />
      <div className={styles.caption}>
        <p className={styles.captionText}>
          Fotím přírodu a její příběhy přenáším na plátno.
        </p>
        <a className={styles.captionButton} href="#galerie">
          Prohlédnout galerii
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className={styles.divider} />
    </div>
  );
};

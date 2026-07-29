import { CategoryMobile } from "./category_mobile";
import { CategoryDesktop } from "./category_desktop";
import styles from "./category.module.css";

export const CategoryBlock = () => (
  <div id="galerie">
    <div className={styles.portrait}>
      <CategoryMobile />
    </div>
    <div className={styles.landscape}>
      <CategoryDesktop />
    </div>
  </div>
);

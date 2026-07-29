import { CategoryMobile } from "./category_mobile";
import { CategoryDesktop } from "./category_desktop";
import { CategoryVariants } from "./styled";

export const CategoryBlock = () => (
  <CategoryVariants id="galerie">
    <div className="category-portrait">
      <CategoryMobile />
    </div>
    <div className="category-landscape">
      <CategoryDesktop />
    </div>
  </CategoryVariants>
);

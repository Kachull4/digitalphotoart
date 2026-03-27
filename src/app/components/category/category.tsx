import { CategoryMobile } from "./category_mobile";
import { CategoryDesktop } from "./category_desktop";
import { useEffect, useState } from "react";

export const CategoryBlock = () => {
  const [orientation, setOrientation] = useState<
    "portrait" | "landscape" | null
  >(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const updateOrientation = () => {
      setOrientation(mediaQuery.matches ? "portrait" : "landscape");
    };

    updateOrientation();

    mediaQuery.addEventListener("change", updateOrientation);
    return () => mediaQuery.removeEventListener("change", updateOrientation);
  }, []);

  return orientation === "portrait" ? <CategoryMobile /> : <CategoryDesktop />;
};

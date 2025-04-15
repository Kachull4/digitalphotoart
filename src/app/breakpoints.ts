interface Size {
  xs: string;
  sm: string;
  md: string;
  m: string;
  lg: string;
  xl: string;
  xxl: string;
}

export const size: Size = {
  xs: "375px", // for small screen mobile
  sm: "480px", // for mobile screen
  md: "768px", // for tablets
  m: "1024px", // for large tablets
  lg: "1280px", // for laptops
  xl: "1440px", // for desktop / monitors
  xxl: "1920px", // for big screens
};

export const device = {
  xs: `@media (min-width: ${size.xs})`,
  sm: `@media (min-width: ${size.sm})`,
  md: `@media (min-width: ${size.md})`,
  m: `@media (min-width: ${size.m})`,
  lg: `@media (min-width: ${size.lg})`,
  xl: `@media (min-width: ${size.xl})`,
  xxl: `@media (min-width: ${size.xxl})`,
};

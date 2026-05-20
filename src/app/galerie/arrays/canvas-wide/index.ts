import { CanvasItem } from "../../types";

export const images = [
  {
    type: "canvas",
    src: require("./images/landscape-with-bisons/IMG_2554-4.webp"),
    images: [
       require("./images/landscape-with-bisons/IMG_2554-2.webp"),
    ],
    title: "Bizoni v krajině",
    price: "12 000 Kč",
    canvasSize: "100 × 50 cm",
    canvasType: "Italské plátno, 100% bavlna, 322g/m², smrkový rám",
    colors: "Olejové barvy Maimeri",
    technique: "Olejomalba",
    year: "2026",
    availability: "available",
  },
] satisfies CanvasItem[];

import { CanvasItem } from "../../types";
import celebrationOfTimeImage from "./images/oslava-casu/canvas.webp";

export const images = [
  {
    id: "oslava-casu",
    type: "canvas",
    src: celebrationOfTimeImage,
    images: [celebrationOfTimeImage],
    title: "Oslava času",
    price: { amount: 7900, currency: "CZK" },
    canvasSize: "40 × 50 cm",
    canvasType: "České plátno Zlatá loď, 100% len, 600 g/m², rám z borovice",
    colors: "Olejové barvy Umton, Maimeri, Old Holland",
    technique: "Olejomalba, špachtle",
    year: "2026",
    availability: "available",
  },
] satisfies CanvasItem[];

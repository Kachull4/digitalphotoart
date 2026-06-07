import { CanvasItem } from "../../types";

export const images = [
  {
    type: "canvas",
    src: require("./images/dog-on-walk/DSC09493.jpg"),
    images: [
      require("./images/dog-on-walk/DSC09492.jpg"),
      require("./images/dog-on-walk/DSC09493.jpg"),
      require("./images/dog-on-walk/DSC09494.jpg"),
      require("./images/dog-on-walk/DSC09495.jpg"),
      require("./images/dog-on-walk/DSC09496.jpg"),
      require("./images/dog-on-walk/DSC09498.jpg"),
    ],
    title: "Na procházce",
    price: "4 500 Kč",
    canvasSize: "40x50cm",
    canvasType: "Italské plátno Corte, 100% bavlna, 322g/m², smrkový rám",
    colors: "Olejové barvy Umton",
    technique: "Olejomalba",
    year: "2026",
    availability: "unavailable",
  },
  {
    type: "canvas",
    src: require("./images/mr-toucan/DSC09828.webp"),
    images: [
      require("./images/mr-toucan/DSC09828.webp"),
      require("./images/mr-toucan/DSC09822.webp"),
      require("./images/mr-toucan/DSC09829.webp"),
      require("./images/mr-toucan/DSC09830.webp"),
      require("./images/mr-toucan/DSC09831.webp"),
    ],
    title: "Pan Tukan",
    price: "6 500 Kč",
    canvasSize: "50x70cm",
    canvasType: "Italské plátno Corte, 100% bavlna, 322g/m², smrkový rám",
    colors: "Olejové barvy Umton, Maimeri, Old Holland",
    technique: "Olejomalba",
    year: "2026",
    availability: "available",
  },
] satisfies CanvasItem[];
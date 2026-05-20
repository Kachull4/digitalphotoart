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
    canvasType: "Italské plátno, 100% bavlna, 322g/m², smrkový rám",
    colors: "Olejové barvy Umton",
    technique: "Olejomalba",
    year: "2026",
    availability: "unavailable",
  },
] satisfies CanvasItem[];
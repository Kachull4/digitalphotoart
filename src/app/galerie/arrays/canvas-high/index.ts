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
    description:
      "Tento obraz vznikl podle fotografie psa, kterého jsem před lety pořídila rodičům. Přestože mu dnes táhne na deset let, stále si zachoval energii a nadšení štěněte. Nejraději tráví čas venku, ať už při procházkách nebo při hledání klacků k aportování. Právě jeho bezstarostná povaha a radost z každého pobytu venku byly inspirací pro tento obraz.",
    photo: require("./images/dog-on-walk/DSC06243.webp"),
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
    description:
      "Tento obraz vznikl podle fotografie, kterou jsem pořídila během cesty do Kostariky. Tukani patří mezi nejvýraznější obyvatele tropických deštných lesů a už při fotografování mě zaujal kontrast jejich pestrého zbarvení s okolní zelení. Právě spojení výrazných barev, tropické atmosféry a klidného výrazu tohoto ptáka bylo hlavní inspirací pro vznik obrazu. Rozostřené pozadí inspirované deštným lesem pomáhá vyniknout jeho charakteristickému zobáku a zároveň navozuje atmosféru tropické přírody.",
    photo: require("./images/mr-toucan/DSC09006.webp"),
  },
] satisfies CanvasItem[];

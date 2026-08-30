import { CanvasItem } from "../../types";
import dogReferencePhoto from "./images/dog-on-walk/DSC06243.webp";
import dogImage1 from "./images/dog-on-walk/DSC09492.jpg";
import dogImage2 from "./images/dog-on-walk/DSC09493.jpg";
import dogImage3 from "./images/dog-on-walk/DSC09494.jpg";
import dogImage4 from "./images/dog-on-walk/DSC09495.jpg";
import dogImage5 from "./images/dog-on-walk/DSC09496.jpg";
import dogImage6 from "./images/dog-on-walk/DSC09498.jpg";
import toucanReferencePhoto from "./images/mr-toucan/DSC09006.webp";
import toucanImage1 from "./images/mr-toucan/DSC09828.webp";
import toucanImage2 from "./images/mr-toucan/DSC09822.webp";
import toucanImage3 from "./images/mr-toucan/DSC09829.webp";
import toucanImage4 from "./images/mr-toucan/DSC09830.webp";
import toucanImage5 from "./images/mr-toucan/DSC09831.webp";
import summerAnchorageImage from "./images/kde-leto-kotvi/canvas.webp";
import summerAnchorageReferencePhoto from "./images/kde-leto-kotvi/reference.webp";
import onTheSurfaceImage from "./images/na-hladine/canvas.webp";
import onTheSurfaceReferencePhoto from "./images/na-hladine/reference.webp";

export const images = [
  {
    id: "na-prochazce",
    type: "canvas",
    src: dogImage2,
    images: [dogImage1, dogImage2, dogImage3, dogImage4, dogImage5, dogImage6],
    title: "Na procházce",
    price: { amount: 4500, currency: "CZK" },
    canvasSize: "40x50cm",
    canvasType: "Italské plátno Corte, 100% bavlna, 322g/m², smrkový rám",
    colors: "Olejové barvy Umton",
    technique: "Olejomalba",
    year: "2026",
    availability: "unavailable",
    description:
      "Tento obraz vznikl podle fotografie psa, kterého jsem před lety pořídila rodičům. Přestože mu dnes táhne na deset let, stále si zachoval energii a nadšení štěněte. Nejraději tráví čas venku, ať už při procházkách nebo při hledání klacků k aportování. Právě jeho bezstarostná povaha a radost z každého pobytu venku byly inspirací pro tento obraz.",
    photo: dogReferencePhoto,
  },
  {
    id: "pan-tukan",
    type: "canvas",
    src: toucanImage1,
    images: [
      toucanImage1,
      toucanImage2,
      toucanImage3,
      toucanImage4,
      toucanImage5,
    ],
    title: "Pan Tukan",
    price: { amount: 6500, currency: "CZK" },
    canvasSize: "50x70cm",
    canvasType: "Italské plátno Corte, 100% bavlna, 322g/m², smrkový rám",
    colors: "Olejové barvy Umton, Maimeri, Old Holland",
    technique: "Olejomalba",
    year: "2026",
    availability: "available",
    description:
      "Tento obraz vznikl podle fotografie, kterou jsem pořídila během cesty do Kostariky. Tukani patří mezi nejvýraznější obyvatele tropických deštných lesů a už při fotografování mě zaujal kontrast jejich pestrého zbarvení s okolní zelení. Právě spojení výrazných barev, tropické atmosféry a klidného výrazu tohoto ptáka bylo hlavní inspirací pro vznik obrazu. Rozostřené pozadí inspirované deštným lesem pomáhá vyniknout jeho charakteristickému zobáku a zároveň navozuje atmosféru tropické přírody.",
    photo: toucanReferencePhoto,
  },
  {
    id: "kde-leto-kotvi",
    type: "canvas",
    src: summerAnchorageImage,
    images: [summerAnchorageImage],
    title: "Kde léto kotví",
    price: { amount: 9900, currency: "CZK" },
    canvasSize: "40 × 60 cm",
    canvasType: "Lněné plátno na borovicovém rámu",
    colors: "Olejové barvy Umton, Maimeri, Old Holland",
    technique: "Olejomalba",
    year: "2026",
    availability: "available",
    description:
      "Obraz vznikl podle fotografie z letní dovolené ve Slovinsku. Při výletu přes hranici do Itálie jsme se zastavili u Lago di Fusine, kde mě zaujala trojice barevných loděk na klidné hladině pod horami. Právě kontrast červené, modré a bílé s tyrkysovou vodou a horskou krajinou jsem chtěla přenést na plátno.",
    photo: summerAnchorageReferencePhoto,
  },
  {
    id: "na-hladine",
    type: "canvas",
    src: onTheSurfaceImage,
    images: [onTheSurfaceImage],
    title: "Na hladině",
    price: { amount: 5500, currency: "CZK" },
    canvasSize: "30 × 50 cm",
    canvasType: "Bavlněné plátno na smrkovém rámu",
    colors: "Olejové barvy Umton",
    technique: "Olejomalba",
    year: "2026",
    availability: "available",
    description:
      "Obraz vznikl podle fotografie leknínu, který mě zaujal svou jemností a odrazem na klidné vodní hladině. Bílý květ vystupující ze zelených listů vytváří tichý, téměř snový okamžik. Právě klid vody, tlumené přírodní barvy a zrcadlení květu jsem chtěla přenést na plátno.",
    photo: onTheSurfaceReferencePhoto,
  },
] satisfies CanvasItem[];

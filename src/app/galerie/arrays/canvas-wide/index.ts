import { CanvasItem } from "../../types";
import referencePhoto from "./images/landscape-with-bisons/DSC09246.webp";
import detailImage from "./images/landscape-with-bisons/IMG_2554-2.webp";
import coverImage from "./images/landscape-with-bisons/IMG_2554-4.webp";

export const images = [
  {
    type: "canvas",
    src: coverImage,
    images: [detailImage],
    title: "Bizoni v krajině",
    price: "12 000 Kč",
    canvasSize: "100 × 50 cm",
    canvasType: "Italské plátno Corte, 100% bavlna, 322g/m², smrkový rám",
    colors: "Olejové barvy Umton, Maimeri",
    technique: "Olejomalba",
    year: "2026",
    availability: "available",
    description:
      "Tento obraz vznikl podle fotografie, kterou jsem pořídila během své cesty do Yellowstonského národního parku. Yellowstone je jedním z mála míst, kde lze pozorovat bizony ve skutečně divoké krajině. Právě spojení těchto ikonických zvířat s podzimními barvami, otevřeným prostorem a horským pozadím mě na této scéně zaujalo natolik, že jsem se rozhodla přenést ji na plátno. Při malování jsem se nesoustředila pouze na samotné bizony, ale také na atmosféru místa. Cílem bylo zachytit pocit klidu a prostoru, který je pro Yellowstone tak typický.",
    photo: referencePhoto,
  },
] satisfies CanvasItem[];

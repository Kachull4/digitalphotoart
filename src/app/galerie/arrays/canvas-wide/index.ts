import { CanvasItem } from "../../types";
import referencePhoto from "./images/landscape-with-bisons/DSC09246.webp";
import detailImage from "./images/landscape-with-bisons/IMG_2554-2.webp";
import coverImage from "./images/landscape-with-bisons/IMG_2554-4.webp";
import autumnAwakeningCover from "./images/autumn-awakening/cover.webp";
import autumnAwakeningDetail1 from "./images/autumn-awakening/detail-1.webp";
import autumnAwakeningDetail2 from "./images/autumn-awakening/detail-2.webp";
import autumnAwakeningDetail3 from "./images/autumn-awakening/detail-3.webp";
import autumnAwakeningDetail4 from "./images/autumn-awakening/detail-4.webp";
import autumnAwakeningReference from "./images/autumn-awakening/reference.webp";

export const images = [
  {
    id: "bizoni-v-krajine",
    type: "canvas",
    src: coverImage,
    images: [detailImage],
    title: "Bizoni v krajině",
    price: { amount: 12000, currency: "CZK" },
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
  {
    id: "probuzeni-podzimu",
    type: "canvas",
    src: autumnAwakeningCover,
    images: [
      autumnAwakeningDetail1,
      autumnAwakeningDetail2,
      autumnAwakeningDetail3,
      autumnAwakeningDetail4,
    ],
    title: "Probuzení podzimu",
    price: { amount: 14000, currency: "CZK" },
    canvasSize: "50 × 100 cm",
    canvasType: "České plátno Zlatá loď, 100% len, 600 g/m², rám z borovice",
    colors: "Umton, Maimeri, Old Holland",
    technique: "Olejomalba",
    year: "2026",
    availability: "available",
    description:
      "Obraz vznikl podle fotografie, kterou jsem pořídila během říjnového rána v Grand Teton. Krátce po šesté hodině se první sluneční paprsky opřely do podzimních stromů a na několik okamžiků proměnily krajinu ve směs teplých barev a odrazů na klidné hladině. Právě tuto pomíjivou atmosféru jsem se snažila zachytit.",
    photo: autumnAwakeningReference,
  },
] satisfies CanvasItem[];

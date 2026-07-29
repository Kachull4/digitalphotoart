import { PhotoItem } from "../../types";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";

export const images = [
  {
    id: "silueta-sidla",
    type: "photo",
    src: image1,
    title: "Silueta šídla",
    species: "Šídlo (Aeshnidae spp.)",
    location: "Granite Gorge Nature Park, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 90mm f/2,8 G ",
    resolution: "7008 × 4672",
    price: "250Kč",
    availability: "available",
  },
  {
    id: "svlecena-cikada",
    type: "photo",
    src: image2,
    title: "Svlečená cikáda",
    species: "Cikáda (Macrotristria intersecta)",
    location: "Granite Gorge Nature Park, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 90mm f/2,8 G ",
    resolution: "7008 × 4672",
    price: "500Kč",
    availability: "available",
  },
  {
    id: "cikada-na-kmeni",
    type: "photo",
    src: image3,
    title: "Cikáda na kmeni",
    species: "Cikáda (Cicada spp.)",
    location: "Granite Gorge Nature Park, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 90mm f/2,8 G ",
    resolution: "7008 × 4672",
    price: "250Kč",
    availability: "available",
  },
  {
    id: "lesni-drak",
    type: "photo",
    src: image4,
    title: "Lesní drak",
    species: "Agama pralesní (Lophosaurus boydii)",
    location: "Crater lakes, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 200-600mm f/5,6-6,3 G OSS",
    resolution: "7008 × 4672",
    price: "500Kč",
    availability: "available",
  },
  {
    id: "pagekon-lupenoocasy",
    type: "photo",
    src: image5,
    title: "Pagekon lupenoocasý",
    species: "Pagekon lupenoocasý (Saltuarius cornutus)",
    location: "Lake Barrine, Queensland, Austrálie",
    lens: "Sony FE 90mm f/2,8 G ",
    camera: "Sony Alpha A7 IV",
    resolution: "7008 × 4672",
    price: "250Kč",
    availability: "available",
  },
] satisfies PhotoItem[];

import { PhotoItem } from "../../types";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";
import image10 from "./images/image10.jpg";

export const images = [
  {
    id: "silueta-sidla",
    type: "photo",
    src: image1,
    title: "Povedená nepovedená",
    description:
      "Na téhle fotografii se pokazilo skoro všechno, co mohlo. Přesto se mi její silueta a atmosféra líbí. Přesný druh šídla navíc dodnes zůstal malou záhadou.",
    species: "Šídlo (Aeshnidae spp.)",
    location: "Granite Gorge, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 90mm f/2,8 G ",
    resolution: "7008 × 4672",
    price: { amount: 250, currency: "CZK" },
    availability: "available",
  },
  {
    id: "svlecena-cikada",
    type: "photo",
    src: image2,
    title: "Ufon z Granite Gorge",
    description:
      "Jestli někde ve vesmíru existují ufoni, musejí vypadat jako čerstvě svlečená cikáda. Každé ráno jich během několika vteřin spustily stovky a večer zase slepě narážely do všeho kolem, občas i do obličeje.",
    species: "Cikáda (Cicadidae spp.)",
    location: "Granite Gorge, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 90mm f/2,8 G ",
    resolution: "7008 × 4672",
    price: { amount: 500, currency: "CZK" },
    availability: "available",
  },
  {
    id: "cikada-na-kmeni",
    type: "photo",
    src: image3,
    title: "Čerstvě po svlečení",
    description:
      "Další z cikád, které v Granite Gorge patřily ke každému ránu i večeru. Přes den zůstávaly na kmenech, zatímco po setmění poletovaly všude kolem a občas člověku přistály až příliš blízko.",
    species: "Cikáda (Cicada spp.)",
    location: "Granite Gorge, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 90mm f/2,8 G ",
    resolution: "7008 × 4672",
    price: { amount: 250, currency: "CZK" },
    availability: "available",
  },
  {
    id: "lesni-drak",
    type: "photo",
    src: image4,
    title: "Drak, který nemrká",
    description:
      "Boydův lesní drak tráví většinu času přitisknutý ke kmeni a čeká na kořist. Při ohrožení vztyčí hřeben na hlavě, ale často raději rychle zmizí. A téměř nikdy nemrká.",
    species: "Agama pralesní (Lophosaurus boydii)",
    location: "Crater lakes, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 200-600mm f/5,6-6,3 G OSS",
    resolution: "7008 × 4672",
    price: { amount: 500, currency: "CZK" },
    availability: "available",
  },
  {
    id: "pagekon-lupenoocasy",
    type: "photo",
    src: image5,
    title: "Fakt tam je gekon",
    description:
      "Na první pohled je to jen prázdný kmen. Tělo pagekona ale vypadá jako kus kůry a ocas připomíná suchý list, takže ho člověk nevidí ani ve chvíli, kdy se dívá přímo na něj. Schovávaná na nejtěžší obtížnost.",
    species: "Pagekon lupenoocasý (Saltuarius cornutus)",
    location: "Lake Barrine, Queensland, Austrálie",
    lens: "Sony FE 90mm f/2,8 G ",
    camera: "Sony Alpha A7 IV",
    resolution: "7008 × 4672",
    price: { amount: 250, currency: "CZK" },
    availability: "available",
  },
  {
    id: "zrozeni-cikady",
    type: "photo",
    src: image6,
    title: "Čerstvě svlečená cikáda",
    description:
      "Pokračování cikádího příběhu z Granite Gorge. Čerstvě svlečená cikáda ještě visí pod prázdnou schránkou a vypadá ze všech nejvíc jako ufon z jiné planety.",
    species: "Cikáda (Cicadidae spp.)",
    location: "Granite Gorge, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 90mm f/2,8 G",
    resolution: "3895 × 5843",
    price: { amount: 250, currency: "CZK" },
    availability: "available",
  },
  {
    id: "klokan-skalni",
    type: "photo",
    src: image7,
    title: "Všude samí klokani!",
    description:
      "V Granite Gorge jsou klokani všudypřítomní. Stačí se podívat z okna nebo otevřít dveře a další už stojí venku. K tomu jejich občas přiblblé výrazy a při troše štěstí i prťata.",
    species: "Klokan skalní (Petrogale mareeba)",
    location: "Granite Gorge, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 200–600mm f/5,6–6,3 G OSS",
    resolution: "4203 × 6304",
    price: { amount: 250, currency: "CZK" },
    availability: "available",
  },
  {
    id: "lednak-obrovsky",
    type: "photo",
    src: image8,
    title: "Smích kookaburry",
    description:
      "Největší ledňák na světě patří mezi ikonické ptáky Austrálie. Jeho křik zní, jako by právě slyšel ten nejlepší vtip na světě.",
    species: "Ledňák obrovský (Dacelo novaeguineae)",
    location: "Granite Gorge, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 200–600mm f/5,6–6,3 G OSS",
    resolution: "4543 × 6814",
    price: { amount: 250, currency: "CZK" },
    availability: "available",
  },
  {
    id: "barevny-belasek",
    type: "photo",
    src: image9,
    title: "Union Jack po setmění",
    description:
      "Jeho zářivé barvy nejsou jen na parádu. Varují predátory, že není žádná pochoutka, protože housenky se živí toxickým jmelím. Většinu času tráví v korunách stromů, takže najít ho v noci takhle spícího bylo velké štěstí.",
    species: "Union Jack (Delias mysis)",
    location: "Crater Lakes, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 90mm f/2,8 G",
    resolution: "4672 × 7008",
    price: { amount: 250, currency: "CZK" },
    availability: "available",
  },
  {
    id: "kasuar-prilbovy",
    type: "photo",
    src: image10,
    title: "Živoucí dinosaurus",
    description:
      "Má přilbu na hlavě, drápy jako velociraptor a běhá rychlostí až padesát kilometrů za hodinu. Když má špatnou náladu, umí pořádně nakopnout. Zároveň je zahradníkem deštného pralesa, skvělým plavcem a tátou roku.",
    species: "Kasuár přílbový (Casuarius casuarius)",
    location: "Etty Bay, Queensland, Austrálie",
    camera: "Sony Alpha A7 IV",
    lens: "Sony FE 200–600mm f/5,6–6,3 G OSS",
    resolution: "4672 × 7008",
    price: { amount: 250, currency: "CZK" },
    availability: "available",
  },
] satisfies PhotoItem[];

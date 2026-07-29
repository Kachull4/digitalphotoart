import { getArticleById } from "@/app/articles";
import { getArticleMetadata } from "@/app/_lib/seo";
import { notFound } from "next/navigation";
import { BlogDetailPage } from "../../components/article";

export const metadata = getArticleMetadata(
  "pestrokridlec-podrazcovy-na-palave",
);

export default function Article() {
  const article = getArticleById("pestrokridlec-podrazcovy-na-palave");

  if (!article) {
    notFound();
  }

  return (
    <BlogDetailPage
      title={article.detailTitle}
      imageUrl={article.detailImageUrl}
    >
      <p>
        Některé fotovýpravy vzniknou dlouhým plánováním. A některé prostě začnou
        tím, že člověk potřebuje na pár dní vypnout od monitoru, otevřít mapu a
        jet tam, kde to žije. Prodloužený víkend na Pálavě byl přesně ten druhý
        případ. Pálava je místo, kam se člověk nevrací jen kvůli krajině. Je to
        jedna z biologicky nejzajímavějších oblastí v Česku. Suché stepní
        stráně, vápencové skály, staré duby, teplé mikroklima a obrovské
        množství druhů, které jinde téměř nepotkáte. A právě sem jsem vyrazila
        hledat jednoho z nejvýraznějších motýlů naší přírody. Pestrokřídlece
        podražcového.
      </p>
      <h2>Motýl, který vypadá skoro nereálně</h2>
      <p>
        Pestrokřídlec podražcový je jeden z nejvýraznějších motýlů, které u nás
        můžete potkat. Na první pohled působí skoro exoticky. Světlá křídla s
        kontrastní kresbou doplňují červené a modré skvrny, které v jarním
        slunci doslova září. Když člověk vidí pestrokřídlece poprvé naživo,
        překvapí ho hlavně to, jak odlišně působí oproti běžným druhům motýlů,
        které člověk vídá během léta. V Česku je jeho výskyt poměrně omezený a
        jižní Morava je jednou z mála oblastí, kde se mu stále daří. Je silně
        vázaný na výskyt podražce křovištního, rostliny, na kterou samičky
        kladou vajíčka a kterou se následně živí housenky. Bez podražce by
        pestrokřídlec jednoduše nemohl existovat. Tahle vazba na konkrétní
        rostlinu z něj dělá velmi zranitelný druh.
      </p>
      <h2>Hledání místo čekání</h2>
      <p>
        Fotografování přírody pro mě většinou není o tom sednout si na jedno
        místo a čekat. Mnohem víc mě baví samotné hledání. Chodit krajinou
        pomalu, všímat si detailů, zastavovat u rostlin, poslouchat hmyz v trávě
        a zkoušet odhadnout, kde by se mohl objevit právě ten jeden konkrétní
        druh. A pestrokřídlec je přesně ten typ motýla, kvůli kterému člověk
        tráví hodiny koukáním do podražce a stepní vegetace. Na Pálavě jsem
        během několika dní procházela různé lokality, často v ostrém slunci a
        větru, které pro fotografování nejsou úplně ideální. Ale právě to je
        součástí reality focení v přírodě. Neexistuje garance, že něco najdete.
        A už vůbec ne, že vám to dovolí přiblížit se s objektivem dostatečně
        blízko. O to větší radost pak přijde ve chvíli, kdy se mezi trávou
        objeví známý pohyb křídel.
      </p>
      <h2>Fotografování v terénu</h2>
      <p>
        Fotit motýly znamená být trpělivý a zároveň pořád připravený. Člověk
        musí být pomalý, opatrný a zároveň připravený reagovat během několika
        sekund. Stačí jeden prudší pohyb a motýl zmizí. Nechci fotit jen
        samotného motýla. Důležité je pro mě i prostředí, ve kterém žije. U
        pestrokřídlece k tomu patří i stepní krajina. Suché trávy, jarní květy a
        teplé světlo Pálavy k němu patří stejně jako jeho výrazná kresba na
        křídlech. Na podobných výpravách mě vždy znovu překvapuje, kolik detailů
        člověk začne vnímat, když se několik hodin pohybuje pomalu jedním
        místem. Věci, které většina lidí přejde bez povšimnutí, najednou začnou
        dávat smysl. Pohyb v trávě, specifický tvar listů podražce nebo krátký
        záblesk barev mezi kameny.
      </p>
      <h2>Proč má smysl o těchto druzích mluvit</h2>
      <p>
        Pestrokřídlec podražcový není jen „hezký motýl“. Je to druh citlivý na
        změny krajiny. Zarůstání stepí, nevhodné zásahy do biotopů nebo úbytek
        hostitelských rostlin mají na jeho populace přímý dopad. Právě kvůli
        tomu mám potřebu podobné druhy fotografovat a ukazovat dál. Mám pocit,
        že spousta lidí vůbec netuší, jak neuvěřitelné druhy u nás žijí. A jak
        snadno o ně můžeme přijít.
      </p>
    </BlogDetailPage>
  );
}

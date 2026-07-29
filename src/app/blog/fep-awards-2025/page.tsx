import { getArticleById } from "@/app/articles";
import { notFound } from "next/navigation";
import { BlogDetailPage } from "../../components/article";

export default function Article() {
  const article = getArticleById("fep-awards-2025");

  if (!article) {
    notFound();
  }

  return (
    <BlogDetailPage
      title={article.detailTitle}
      imageUrl={article.detailImageUrl}
    >
      <p>
        V roce 2025 jsem se rozhodla zkusit štěstí i na evropské scéně a
        přihlásila jsem se do soutěže FEP Awards, prestižního evropského ocenění
        pro profesionální fotografy. A i když jsem neměla žádná velká očekávání,
        nakonec z toho bylo 9. místo v kategorii Wildlife.
      </p>

      <p>
        Do soutěže jsem poslala tři fotografie z Austrálie. Dvě z nich jsou
        stejné jako ty, které momentálně visí na Pražském hradě v rámci výstavy
        Czech Nature Photo, žába maskovaná v listí a čerstvě vylíhlá cikáda s
        prosvícenými křídly. Třetí snímek zachycuje agamu pralesní odpočívající
        na kmeni stromu ve večerním slunci.
      </p>

      <p>
        Letos jsem se poprvé přihlásila do soutěže FEP Awards, prestižního
        evropského ocenění pro profesionální fotografy. A i když jsem neměla
        žádná velká očekávání, nakonec z toho bylo 9. místo v kategorii
        Wildlife.
      </p>

      <p>
        Tohle umístění pro mě znamená hlavně jedno. Že moje práce má smysl a že
        mě může posouvat dál. Děkuju všem, co mě podporují. A přírodě, že mi tak
        štědře pózuje.
      </p>
    </BlogDetailPage>
  );
}

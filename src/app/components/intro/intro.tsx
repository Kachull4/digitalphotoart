import { Divider, Intro, IntroImage, LogoWhite } from "./styled";
import LogoWhiteImg from "./images/logo_white.png";
import IntroImg from "./images/desktop.webp";
import IntroImgMobile from "./images/mobil.webp";

export const IntroBlock = () => {
  return (
    <Intro id="uvod">
      <picture>
        <source srcSet={IntroImgMobile.src} media="(orientation: portrait)" />
        <IntroImage src={IntroImg} alt="Úvodní obrázek" />
      </picture>
      <LogoWhite src={LogoWhiteImg} alt="Logo Katerina Hoffman" />
      <Divider></Divider>
    </Intro>
  );
};

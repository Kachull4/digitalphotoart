import Link from "next/link";
import AvatarSrc from ".//images/avatar.avif";
import { Container, Heading } from "../../(home)/styled";
import { About, Contact, Icons, Avatar, Divider, Title } from "./styled";

export const ContactBlock = () => {
  return (
    <Contact id="kontakt">
      <Divider></Divider>
      <Container>
        <Title>Digital Photo Art</Title>
        <Heading>
          Vítá Vás online galerie příběhů zachycených objektivem
        </Heading>
        <p>
          Každá fotografie vypráví svůj jedinečný příběh. Vzniká pozorováním,
          trpělivostí a respektem k přírodě. Pokud vás některý z těchto příběhů
          osloví, můžete si ho odnést v podobě digitální fotografie.
        </p>
        <Avatar src={AvatarSrc} alt="Avatar" />
        <About id="about">
          <Heading>Kontakt</Heading>
          <Icons>
            <Link href="mailto:katerina.hoffman4@gmail.com" aria-label="E-mail">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/kaca_hoffman"
              aria-label="Instagram"
            >
              <svg
                version="1.1"
                viewBox="0 0 600 600"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(1.01619,0,0,1.01619,44,43.8384)">
                  <path d="M251.921,0.159C183.503,0.159 174.924,0.449 148.054,1.675C121.24,2.899 102.927,7.157 86.902,13.385C70.336,19.823 56.287,28.437 42.282,42.442C28.277,56.447 19.663,70.496 13.225,87.062C6.997,103.086 2.739,121.399 1.515,148.213C0.289,175.083 0,183.662 0,252.08C0,320.497 0.289,329.076 1.515,355.946C2.739,382.76 6.997,401.073 13.225,417.097C19.663,433.663 28.277,447.712 42.282,461.718C56.287,475.723 70.336,484.337 86.902,490.775C102.927,497.002 121.24,501.261 148.054,502.484C174.924,503.71 183.503,504 251.921,504C320.338,504 328.917,503.71 355.787,502.484C382.601,501.261 400.914,497.002 416.938,490.775C433.504,484.337 447.553,475.723 461.559,461.718C475.564,447.712 484.178,433.663 490.616,417.097C496.843,401.073 501.102,382.76 502.325,355.946C503.551,329.076 503.841,320.497 503.841,252.08C503.841,183.662 503.551,175.083 502.325,148.213C501.102,121.399 496.843,103.086 490.616,87.062C484.178,70.496 475.564,56.447 461.559,42.442C447.553,28.437 433.504,19.823 416.938,13.385C400.914,7.157 382.601,2.899 355.787,1.675C328.917,0.449 320.338,0.159 251.921,0.159ZM251.921,45.551C319.186,45.551 327.154,45.807 353.718,47.019C378.28,48.14 391.619,52.244 400.496,55.693C412.255,60.263 420.647,65.723 429.462,74.538C438.278,83.353 443.737,91.746 448.307,103.504C451.757,112.381 455.861,125.72 456.981,150.282C458.193,176.846 458.45,184.814 458.45,252.08C458.45,319.345 458.193,327.313 456.981,353.877C455.861,378.439 451.757,391.778 448.307,400.655C443.737,412.414 438.278,420.806 429.462,429.621C420.647,438.437 412.255,443.896 400.496,448.466C391.619,451.916 378.28,456.02 353.718,457.14C327.158,458.352 319.191,458.609 251.921,458.609C184.65,458.609 176.684,458.352 150.123,457.14C125.561,456.02 112.222,451.916 103.345,448.466C91.586,443.896 83.194,438.437 74.378,429.621C65.563,420.806 60.103,412.414 55.534,400.655C52.084,391.778 47.98,378.439 46.859,353.877C45.647,327.313 45.391,319.345 45.391,252.08C45.391,184.814 45.647,176.846 46.859,150.282C47.98,125.72 52.084,112.381 55.534,103.504C60.103,91.746 65.563,83.353 74.378,74.538C83.194,65.723 91.586,60.263 103.345,55.693C112.222,52.244 125.561,48.14 150.123,47.019C176.687,45.807 184.655,45.551 251.921,45.551Z" />
                  <path d="M251.921,336.053C205.543,336.053 167.947,298.457 167.947,252.08C167.947,205.702 205.543,168.106 251.921,168.106C298.298,168.106 335.894,205.702 335.894,252.08C335.894,298.457 298.298,336.053 251.921,336.053ZM251.921,122.715C180.474,122.715 122.556,180.633 122.556,252.08C122.556,323.526 180.474,381.444 251.921,381.444C323.367,381.444 381.285,323.526 381.285,252.08C381.285,180.633 323.367,122.715 251.921,122.715Z" />
                  <path d="M416.627,117.604C416.627,134.3 403.092,147.834 386.396,147.834C369.701,147.834 356.166,134.3 356.166,117.604C356.166,100.908 369.701,87.374 386.396,87.374C403.092,87.374 416.627,100.908 416.627,117.604Z" />
                </g>
              </svg>
            </Link>
            <Link
              href="https://www.frontendistka.cz"
              aria-label="Osobní stránky frontendistka.cz"
            >
              <svg
                width="2.8em"
                version="1.1"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M64,126c34.2,0,62-27.8,62-62S98.2,2,64,2S2,29.8,2,64S29.8,126,64,126z M16,88.7l25.2-0.2c2.8,10.1,7.5,19.9,13.9,28.7   C38,114.4,23.7,103.5,16,88.7z M47.6,47H79c2.3,11,2.3,22.3,0.2,33.3l-31.6,0.2C45.3,69.4,45.3,58,47.6,47z M63.3,114.9   c-6.3-8.1-10.9-17-13.7-26.4l27.5-0.2C74.2,97.7,69.6,106.7,63.3,114.9z M71.3,117.5c6.6-9,11.3-18.9,14.1-29.3l26.9-0.2   C104.5,103.7,89.3,115,71.3,117.5z M118,64c0,5.6-0.9,11-2.4,16l-28.3,0.2c2-11,1.9-22.2-0.2-33.2h28.1C117,52.3,118,58.1,118,64z    M111.8,39H85.2c-2.9-10-7.5-19.7-13.9-28.5C89,12.9,103.9,23.8,111.8,39z M76.9,39H49.7c2.9-9.2,7.4-17.9,13.6-25.9   C69.5,21.1,74,29.8,76.9,39z M55.1,10.8C48.8,19.5,44.2,29,41.4,39H16.2C23.9,24.3,38.1,13.6,55.1,10.8z M39.5,47   c-2.1,11.1-2.1,22.4-0.1,33.5l-26.7,0.2C10.9,75.4,10,69.8,10,64c0-5.9,1-11.7,2.8-17H39.5z" />
                </g>
              </svg>
            </Link>
            <Link href="https://www.kacafoti.cz">
              <svg
                width="2.8em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Line">
                  <path d="M8,23H6a5,5,0,0,1-5-5V6A5,5,0,0,1,6,1h8a5,5,0,0,1,5,5V8a1,1,0,0,1-2,0V6a3,3,0,0,0-3-3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H8a1,1,0,0,1,0,2Z" />
                  <path d="M12,13H6a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />
                  <path d="M8,17H6a1,1,0,0,1,0-2H8a1,1,0,0,1,0,2Z" />
                  <path d="M14,9H6A1,1,0,0,1,6,7h8a1,1,0,0,1,0,2Z" />
                  <path d="M12,23a1,1,0,0,1-1-1.13l.33-2.56a2.93,2.93,0,0,1,.85-1.74l5.69-5.69a3.08,3.08,0,0,1,4.24,0,3,3,0,0,1,0,4.24l-5.69,5.69a2.93,2.93,0,0,1-1.74.85L12.13,23Zm8-10a1,1,0,0,0-.71.29L13.61,19a1,1,0,0,0-.29.58l-.16,1.28,1.28-.16A1.06,1.06,0,0,0,15,20.4l5.69-5.69a1,1,0,0,0,0-1.42A1,1,0,0,0,20,13Z" />
                </g>
              </svg>
            </Link>
          </Icons>
        </About>
      </Container>
    </Contact>
  );
};

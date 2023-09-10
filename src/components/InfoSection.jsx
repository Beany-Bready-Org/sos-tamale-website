import InfoSectionCard from "./InfoSectionCard";

import "../stylesheets/InfoSection.scss";

import AsiakwaImg from "../assets/images/asiakwa.png";
import KumasiImg from "../assets/images/kumasi.png";
import TemaImg from "../assets/images/tema.png";

export default function InfoSection() {
  return (
    <section class="info">
      <InfoSectionCard
        imgSrc={AsiakwaImg}
        heading="Asiakwa"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum
      ipsum, sunt officiis mollitia dolor velit dolore alias ut atque voluptatum
      ipsa animi, consequatur recusandae."
        direction={"row"}
      />
      <InfoSectionCard
        imgSrc={KumasiImg}
        heading="Kumasi"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum
      ipsum, sunt officiis mollitia dolor velit dolore alias ut atque voluptatum
      ipsa animi, consequatur recusandae."
        direction={"row-reverse"}
      />
      <InfoSectionCard
        imgSrc={TemaImg}
        heading="Tema"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum
      ipsum, sunt officiis mollitia dolor velit dolore alias ut atque voluptatum
      ipsa animi, consequatur recusandae."
        direction={"row"}
      />
    </section>
  );
}

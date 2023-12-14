import React from "react";
import CampusesSectionCard from "./CampusesSectionCard";

import "../stylesheets/CampusesSection.scss";

// import TamaleImg from "../assets/images/tamale.jpg";
// import AsiakwaImg from "../assets/images/asiakwa.jpg";
// import KumasiImg from "../assets/images/kumasi.jpg";
// import TemaImg from "../assets/images/tema.jpg";

import TamaleImg from "../assets/images/tamale.png";
import AsiakwaImg from "../assets/images/asiakwa.png";
import KumasiImg from "../assets/images/kumasi.jpg";
import TemaImg from "../assets/images/tema.png";

export default function CampusesSection() {
  return (
    <section className="campuses-section">
      <h1 className="--header">Our Campuses</h1>
      <p className="--description">
        Explore some of our other prestine campuses.
      </p>
      <div className="campuses-section__items">
        <CampusesSectionCard
          imgSrc={TamaleImg}
          heading="Tamale"
          text="SOS Tamale is an institution of nice things."
          direction={"row-reverse"}
        />
        <CampusesSectionCard
          imgSrc={AsiakwaImg}
          heading="Asiakwa"
          text="SOS Asiakwa is an institution of nice things."
          direction={"row"}
        />
        <CampusesSectionCard
          imgSrc={KumasiImg}
          heading="Kumasi"
          text="SOS Kumasi is an institution of nice things."
          direction={"row-reverse"}
        />
        <CampusesSectionCard
          imgSrc={TemaImg}
          heading="Tema"
          text="SOS Tema is an institution of nice things."
          direction={"row"}
        />
      </div>
    </section>
  );
}

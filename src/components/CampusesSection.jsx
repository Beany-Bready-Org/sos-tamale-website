import React from "react";
import CampusesSectionCard from "./CampusesSectionCard";

import "../stylesheets/CampusesSection.scss";

// import TamaleImg from "../assets/images/tamale.jpg";
// import AsiakwaImg from "../assets/images/asiakwa.jpg";
// import KumasiImg from "../assets/images/kumasi.jpg";
// import TemaImg from "../assets/images/tema.jpg";

import TamaleImg from "../assets/images/bg-img1.jpg";
import AsiakwaImg from "../assets/images/bg-img2.jpg";
import KumasiImg from "../assets/images/bg-img3.jpg";
import TemaImg from "../assets/images/bg-img4.jpg";

export default function CampusesSection() {
  return (
    <section class="campuses-section">
      <h1 className="--header">Our Campuses</h1>
      <p className="--description">Explore Our Other Prestine Campuses.</p>
      <div className="campuses-section__items">
        <CampusesSectionCard
          imgSrc={TamaleImg}
          heading="Tamale"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum
      ipsum, sunt officiis mollitia dolor velit dolore alias ut atque voluptatum
      ipsa animi, consequatur recusandae."
          direction={"row-reverse"}
        />
        <CampusesSectionCard
          imgSrc={AsiakwaImg}
          heading="Asiakwa"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum
      ipsum, sunt officiis mollitia dolor velit dolore alias ut atque voluptatum
      ipsa animi, consequatur recusandae."
					direction={"row"}
				/>
				<CampusesSectionCard
					imgSrc={KumasiImg}
					heading="Kumasi"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum
      ipsum, sunt officiis mollitia dolor velit dolore alias ut atque voluptatum
      ipsa animi, consequatur recusandae."
					direction={"row-reverse"}
				/>
				<CampusesSectionCard
					imgSrc={TemaImg}
					heading="Tema"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum
      ipsum, sunt officiis mollitia dolor velit dolore alias ut atque voluptatum
      ipsa animi, consequatur recusandae."
					direction={"row"}
				/>
			</div>
		</section>
	);
}

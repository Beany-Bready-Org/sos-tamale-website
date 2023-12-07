import React from "react";
import CampusesSectionCard from "./CampusesSectionCard";

import "../stylesheets/CampusesSection.scss";
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
					text="SOS Children's Villages Tamale was established in 2008. Today, the SOS Social Centre here provides a family strengthening programme to the local community ensuring that children have access to essential educational, nutritional and health services."
					direction={"row-reverse"}
				/>
				<CampusesSectionCard
					imgSrc={AsiakwaImg}
					heading="Asiakwa"
					text="SOS Children's Village Asiakwa, located in Southern Ghana, and established in 1992, is appreciated for services including support to vulnerable families, schooling, a kindergarten, loving homes for children without parental care and medical assistance"
					direction={"row"}
				/>
				<CampusesSectionCard
					imgSrc={KumasiImg}
					heading="Kumasi"
					text="SOS Children's Villages began working in Kumasi in 2008. It is located in Asokore Mampong, a little town in the suburbs of Kumasi. For children from the region who are no longer able to live with their parents, twelve SOS families can provide a loving home for up to 120 children."
					direction={"row-reverse"}
				/>
				<CampusesSectionCard
					imgSrc={TemaImg}
					heading="Tema"
					text="For children from the region who are no longer able to live with their parents, 15 SOS families can provide a loving home. In each family, the children live with their brothers and sisters, affectionately cared for by their SOS mother"
					direction={"row"}
				/>
			</div>
		</section>
	);
}

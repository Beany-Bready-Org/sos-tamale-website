import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import GallerySectionImage from "./GallerySectionImage";

import "../stylesheets/GallerySection.scss";

import GalleryImg1 from "../assets/images/gallery-images/gallery-img1.png";
import GalleryImg2 from "../assets/images/gallery-images/gallery-img2.png";
import GalleryImg3 from "../assets/images/gallery-images/gallery-img3.png";
import GalleryImg4 from "../assets/images/gallery-images/gallery-img4.png";
import GalleryImg5 from "../assets/images/gallery-images/gallery-img5.png";
import GalleryImg6 from "../assets/images/gallery-images/gallery-img6.png";
import GalleryImg7 from "../assets/images/gallery-images/gallery-img7.png";
import GalleryImg8 from "../assets/images/gallery-images/gallery-img8.png";
import GalleryImg9 from "../assets/images/gallery-images/gallery-img9.png";
// import GalleryImg10 from "../assets/images/gallery-images/gallery-img10.png";
import GalleryImg11 from "../assets/images/gallery-images/gallery-img11.png";
import GalleryImg12 from "../assets/images/gallery-images/gallery-img12.png";
import GalleryImg13 from "../assets/images/gallery-images/gallery-img13.png";
import GalleryImg14 from "../assets/images/gallery-images/gallery-img14.png";
import GalleryImg15 from "../assets/images/gallery-images/gallery-img15.png";
import GalleryImg16 from "../assets/images/gallery-images/gallery-img16.png";
import GalleryImg17 from "../assets/images/gallery-images/gallery-img17.png";
import GalleryImg18 from "../assets/images/gallery-images/gallery-img18.png";
import GalleryImg19 from "../assets/images/gallery-images/gallery-img19.png";
import GalleryImg20 from "../assets/images/gallery-images/gallery-img20.png";
import GalleryImg21 from "../assets/images/gallery-images/gallery-img21.png";
import GalleryImg22 from "../assets/images/gallery-images/gallery-img22.png";
import GalleryImg23 from "../assets/images/gallery-images/gallery-img23.png";
import GalleryImg24 from "../assets/images/gallery-images/gallery-img24.png";
import GalleryImg25 from "../assets/images/gallery-images/gallery-img25.png";
import GalleryImg26 from "../assets/images/gallery-images/gallery-img26.png";
import GalleryImg27 from "../assets/images/gallery-images/gallery-img27.png";
import GalleryImg28 from "../assets/images/gallery-images/gallery-img28.png";
import GalleryImg29 from "../assets/images/gallery-images/gallery-img29.png";
import GalleryImg30 from "../assets/images/gallery-images/gallery-img30.png";
import GalleryImg31 from "../assets/images/gallery-images/gallery-img31.png";
import GalleryImg32 from "../assets/images/gallery-images/gallery-img32.png";

export default function GallerySection({ size }) { 
	const [galleryImages, setGalleryImages] = useState([]);

	useEffect(() => {
		function handleGalleryImages(size) {
			const images = [
				<GallerySectionImage imgSrc={GalleryImg1} alt={"Image 1"} />,
				<GallerySectionImage imgSrc={GalleryImg2} alt={"Image 2"} />,
				<GallerySectionImage imgSrc={GalleryImg3} alt={"Image 3"} />,
				<GallerySectionImage imgSrc={GalleryImg4} alt={"Image 4"} />,
				<GallerySectionImage imgSrc={GalleryImg5} alt={"Image 5"} />,
				<GallerySectionImage imgSrc={GalleryImg6} alt={"Image 6"} />,
				<GallerySectionImage imgSrc={GalleryImg7} alt={"Image 7"} />,
				<GallerySectionImage imgSrc={GalleryImg8} alt={"Image 8"} />,
				<GallerySectionImage imgSrc={GalleryImg9} alt={"Image 9"} />,
				// <GallerySectionImage imgSrc={GalleryImg10} alt={"Image 10"} />,
				<GallerySectionImage imgSrc={GalleryImg11} alt={"Image 11"} />,
				<GallerySectionImage imgSrc={GalleryImg12} alt={"Image 12"} />,
				<GallerySectionImage imgSrc={GalleryImg13} alt={"Image 13"} />,
				<GallerySectionImage imgSrc={GalleryImg14} alt={"Image 14"} />,
				<GallerySectionImage imgSrc={GalleryImg15} alt={"Image 15"} />,
				<GallerySectionImage imgSrc={GalleryImg16} alt={"Image 16"} />,
				<GallerySectionImage imgSrc={GalleryImg17} alt={"Image 17"} />,
				<GallerySectionImage imgSrc={GalleryImg18} alt={"Image 18"} />,
				<GallerySectionImage imgSrc={GalleryImg19} alt={"Image 19"} />,
				<GallerySectionImage imgSrc={GalleryImg20} alt={"Image 20"} />,
				<GallerySectionImage imgSrc={GalleryImg21} alt={"Image 21"} />,
				<GallerySectionImage imgSrc={GalleryImg22} alt={"Image 22"} />,
				<GallerySectionImage imgSrc={GalleryImg23} alt={"Image 23"} />,
				<GallerySectionImage imgSrc={GalleryImg24} alt={"Image 24"} />,
				<GallerySectionImage imgSrc={GalleryImg25} alt={"Image 25"} />,
				<GallerySectionImage imgSrc={GalleryImg26} alt={"Image 26"} />,
				<GallerySectionImage imgSrc={GalleryImg27} alt={"Image 27"} />,
				<GallerySectionImage imgSrc={GalleryImg28} alt={"Image 28"} />,
				<GallerySectionImage imgSrc={GalleryImg29} alt={"Image 29"} />,
				<GallerySectionImage imgSrc={GalleryImg30} alt={"Image 30"} />,
				<GallerySectionImage imgSrc={GalleryImg31} alt={"Image 31"} />,
				<GallerySectionImage imgSrc={GalleryImg32} alt={"Image 32"} />,
			];

			for (let i = 1; i <= 32 - size; i++) {
				images.pop();
			}
			setGalleryImages(images);
		}

		handleGalleryImages(size);
	}, []);

	return (
		<section className="gallery-section">
			<h2 className="--header" style={{ color: "black" }}>
				SOS Tamale Gallery
			</h2>
			<div className="gallery-section__images">{galleryImages}</div>
			<NavLink to="/gallery" className="--cta" id="see-more-btn">
				See more
			</NavLink>
		</section>
	);
}

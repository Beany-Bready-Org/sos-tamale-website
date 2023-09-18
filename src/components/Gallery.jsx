import GalleryImage from "./GalleryImage";

import "../stylesheets/Gallery.scss";

import Img1 from "../assets/images/gallery-images/gallery-img1.jpeg";
import Img2 from "../assets/images/gallery-images/gallery-img2.png";
import Img3 from "../assets/images/gallery-images/gallery-img3.png";
import Img4 from "../assets/images/gallery-images/gallery-img4.jpeg";
import Img5 from "../assets/images/gallery-images/gallery-img5.jpeg";
import Img6 from "../assets/images/gallery-images/gallery-img6.jpeg";
import Img7 from "../assets/images/gallery-images/gallery-img7.png";
import Img8 from "../assets/images/gallery-images/gallery-img8.png";
import Img9 from "../assets/images/gallery-images/gallery-img9.png";
import Img10 from "../assets/images/gallery-images/gallery-img10.png";
import Img11 from "../assets/images/gallery-images/gallery-img11.png";
import Img12 from "../assets/images/gallery-images/gallery-img12.png";
import Img13 from "../assets/images/gallery-images/gallery-img13.png";
import Img14 from "../assets/images/gallery-images/gallery-img14.png";

let images = [
  <GalleryImage imgSrc={Img1} />,
  <GalleryImage imgSrc={Img2} />,
  <GalleryImage imgSrc={Img3} />,
  <GalleryImage imgSrc={Img4} />,
  <GalleryImage imgSrc={Img5} />,
  <GalleryImage imgSrc={Img6} />,
  <GalleryImage imgSrc={Img7} />,
  <GalleryImage imgSrc={Img8} />,
  <GalleryImage imgSrc={Img9} />,
  <GalleryImage imgSrc={Img10} />,
  <GalleryImage imgSrc={Img11} />,
  <GalleryImage imgSrc={Img12} />,
  <GalleryImage imgSrc={Img13} />,
  <GalleryImage imgSrc={Img14} />,
];

export default function Gallery() {
  return (
    <section className="gallery">
      <h2
        className="--header"
        style={{ marginBottom: "0.75em", color: "black" }}
      >
        SOS HGS Moments
      </h2>
      <div className="gallery__images">{images}</div>
    </section>
  );
}
